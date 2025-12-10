// engine/scenarioEngine.js

export class ScenarioEngine {
    constructor(scenarios = []) {
        this.scenarios = scenarios;
        this.currentScenario = null;
        this.currentStep = null;

        this.stats = {
            communication: 0,
            conflictResolution: 0,
            teamwork: 0,
            stability: 0,
            risk: 0
        };
    }

    // --- High-level helpers ---

    getDepartments() {
        const map = new Map();
        for (const s of this.scenarios) {
            if (!map.has(s.department)) {
                map.set(s.department, { id: s.department, count: 0 });
            }
            map.get(s.department).count++;
        }
        return Array.from(map.values());
    }

    getScenariosByDepartment(departmentId) {
        return this.scenarios.filter(s => s.department === departmentId);
    }

    getScenarioById(id) {
        return this.scenarios.find(s => s.id === id) || null;
    }

    // --- Scenario lifecycle ---

    startScenario(id) {
        const scenario = this.getScenarioById(id);
        if (!scenario) {
            console.warn("Scenario not found:", id);
            return null;
        }
        this.currentScenario = scenario;
        this.stats = { ...scenario.initialStats };
        this.currentStep = this._getFirstStep(scenario);
        return scenario;
    }

    _getFirstStep(scenario) {
        if (!scenario.steps || scenario.steps.length === 0) return null;
        return scenario.steps[0];
    }

    getCurrentScenario() {
        return this.currentScenario;
    }

    getCurrentStep() {
        return this.currentStep;
    }

    getCurrentStats() {
        return { ...this.stats };
    }

    // --- Player choices & progression ---

    applyOption(optionId) {
        if (!this.currentScenario || !this.currentStep) return { done: true, ending: null };

        const step = this.currentStep;
        const option = (step.options || []).find(o => o.id === optionId);
        if (!option) {
            console.warn("Option not found:", optionId);
            return { done: false, ending: null };
        }

        // Apply stat effects
        const eff = option.effects || {};
        this.stats.communication = this._clamp(this.stats.communication + (eff.communication || 0), 0, 100);
        this.stats.conflictResolution = this._clamp(this.stats.conflictResolution + (eff.conflictResolution || 0), 0, 100);
        this.stats.teamwork = this._clamp(this.stats.teamwork + (eff.teamwork || 0), 0, 100);
        this.stats.stability = this._clamp(this.stats.stability + (eff.stability || 0), 0, 100);
        this.stats.risk = this._clamp(this.stats.risk + (eff.risk || 0), 0, 100);

        // Move to next step or finish
        if (option.nextStepId) {
            this.currentStep = this._findStepById(this.currentScenario, option.nextStepId);
            return { done: false, ending: null };
        } else {
            // No nextStepId => scenario ends here
            const ending = this._selectEnding(this.currentScenario, this.stats);
            this.currentStep = null;
            return { done: true, ending };
        }
    }

    _findStepById(scenario, stepId) {
        if (!scenario.steps) return null;
        return scenario.steps.find(s => s.id === stepId) || null;
    }

    // --- Ending selection based on stats ---

    _selectEnding(scenario, stats) {
        if (!scenario.endings || scenario.endings.length === 0) {
            return {
                id: "DEFAULT",
                summaryTitle: "Simulation Complete",
                summaryText: [
                    "This scenario has no detailed debrief configured yet.",
                    "Your decisions still influenced communication, conflict resolution, and teamwork scores."
                ],
                learningPoints: [
                    "Consider how your tone influenced others.",
                    "Reflect on where you could have asked one more question.",
                    "Think about how you might close the loop with the team in real life."
                ]
            };
        }

        const score = this._computeOverallScore(stats);

        // Try to match specific endings
        for (const ending of scenario.endings) {
            const c = ending.condition || {};
            const minScore = c.minScore ?? 0;
            const maxScore = c.maxScore ?? 100;
            const minRisk = c.minRisk ?? 0;
            const maxRisk = c.maxRisk ?? 100;

            const inScoreRange = score >= minScore && score <= maxScore;
            const inRiskRange = stats.risk >= minRisk && stats.risk <= maxRisk;

            if (inScoreRange && inRiskRange) {
                return ending;
            }
        }

        // Fallback to first ending if none matched
        return scenario.endings[0];
    }

    _computeOverallScore(stats) {
        // Weighted blend into a single "soft skills" score
        const c = stats.communication ?? 0;
        const r = stats.conflictResolution ?? 0;
        const t = stats.teamwork ?? 0;

        const raw = 0.4 * c + 0.3 * r + 0.3 * t;
        return Math.round(this._clamp(raw, 0, 100));
    }

    // --- HUD view ---

    getHudSnapshot() {
        const stats = this.getCurrentStats();
        return {
            score: this._computeOverallScore(stats),
            stability: stats.stability,
            risk: stats.risk,
            breakdown: {
                communication: stats.communication,
                conflictResolution: stats.conflictResolution,
                teamwork: stats.teamwork
            }
        };
    }

    _clamp(v, min, max) {
        return Math.max(min, Math.min(max, v));
    }
}
