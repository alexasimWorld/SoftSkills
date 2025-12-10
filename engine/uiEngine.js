// engine/uiEngine.js

export class UIEngine {
    constructor(rootId = "app-root") {
        this.root = document.getElementById(rootId);
        if (!this.root) {
            throw new Error(`UIEngine root element #${rootId} not found`);
        }

        this.handlers = {
            onDepartmentSelect: null,
            onScenarioSelect: null,
            onBeginScenario: null,
            onOptionSelect: null,
            onBackToMain: null,
            onBackToDept: null
        };
    }

    setHandlers(handlers = {}) {
        this.handlers = { ...this.handlers, ...handlers };
    }

    // Render shell (frame)
    _renderShell(contentHtml, sideHtml) {
        this.root.innerHTML = `
        <div class="sim-shell">

            <!-- Floating particles inside shell -->
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>

            <div class="sim-header">
                <div class="sim-title-block">
                    <div class="sim-title">CROSSWORLD :: SOFT SKILLS TRAINING SUITE (S.S.T.C)</div>
                    <div class="sim-subtitle">Soft Skills Simulation</div>

                    <!-- Inspirational line -->
                    <div class="sim-inspire">
                        Because safety begins with how we speak, listen, and work together.
                    </div>
                </div>

                <div class="sim-badge">Crew Development</div>
            </div>

            <div class="sim-body">
                <div class="panel-main">
                    ${contentHtml}
                </div>

                <div class="panel-side">
                    ${sideHtml || ""}
                </div>
            </div>

        </div>
    `;
    }



    // =====================
    // MAIN MENU
    // =====================
    renderMainMenu(departments = []) {
        const content = `
            <div class="panel-heading">Department Selection</div>
            <div class="card-grid">
                ${departments
                .map(
                    d => `
                        <div class="card" data-dept="${d.id}">
                            <div class="card-label">Department</div>
                            <div class="card-title">${this._formatDepartmentName(d.id)}</div>
                            <div class="card-sub">${d.count} Scenarios</div>
                        </div>`
                )
                .join("")}
            </div>
        `;

        const side = `
            <div class="hud-title">Info</div>
            <div class="text-block">
                Select a department to train soft-skills in realistic onboard scenarios.
            </div>
        `;

        this._renderShell(content, side);

        this.root.querySelectorAll("[data-dept]").forEach(card => {
            card.addEventListener("click", () => {
                this.handlers.onDepartmentSelect(card.getAttribute("data-dept"));
            });
        });
    }

    // =====================
    // DEPARTMENT MENU
    // =====================
    renderDepartmentMenu(departmentId, scenarios) {
        const content = `
            <div class="panel-header-row">
                <div class="panel-heading">${this._formatDepartmentName(departmentId)} Scenarios</div>
                <button class="btn btn-ghost" data-back-main>&larr; Main Menu</button>
            </div>

            <div class="card-grid">
                ${scenarios
                .map(
                    s => `
                        <div class="card" data-scenario="${s.id}">
                            <div class="card-label">${this._formatDepartmentName(departmentId)}</div>
                            <div class="card-title">${s.title}</div>
                        </div>`
                )
                .join("")}
            </div>
        `;

        const side = `
            <div class="hud-title">Scenarios</div>
            <div class="text-block">
                Select a scenario to begin.
            </div>
        `;

        this._renderShell(content, side);

        this.root.querySelector("[data-back-main]").onclick = () =>
            this.handlers.onBackToMain();

        this.root.querySelectorAll("[data-scenario]").forEach(c => {
            c.onclick = () => this.handlers.onScenarioSelect(c.dataset.scenario);
        });
    }

    // =====================
    // MISSION BRIEF
    // =====================
    renderMissionBrief(scenario, hud) {
        const b = scenario.missionBrief;

        const content = `
            <div class="panel-header-row">
                <div class="panel-heading">Mission Brief</div>
                <button class="btn btn-ghost" data-back-dept>&larr; ${this._formatDepartmentName(scenario.department)}</button>
            </div>

            <div class="text-block">
                <strong>${b.introTitle}</strong>
            </div>

            ${(b.introText || []).map(p => `<div class="text-block">${p}</div>`).join("")}

            <div class="text-block"><strong>Objectives:</strong></div>
            <ul class="list">
                ${b.keyObjectives.map(o => `<li>${o}</li>`).join("")}
            </ul>

            <div class="btn-row">
                <button class="btn btn-ghost" data-back-dept>Back</button>
                <button class="btn" data-begin>Begin Simulation</button>
            </div>
        `;

        const side = this._renderHud(hud);

        this._renderShell(content, side);

        this.root.querySelectorAll("[data-back-dept]").forEach(btn => {
            btn.onclick = () => this.handlers.onBackToDept(scenario.department);
        });

        this.root.querySelector("[data-begin]").onclick = () =>
            this.handlers.onBeginScenario(scenario.id);
    }

    // =====================
    // SIMULATION STEP
    // =====================
    renderSimulationStep(scenario, step, hud) {
        const npcLines = (step.npcDialogue || [])
            .map(l => `<p><strong>${this._actorName(scenario, l.actorId)}:</strong> ${l.line}</p>`)
            .join("");

        const content = `
            <div class="panel-header-row">
                <div class="panel-heading">${scenario.title}</div>
                <button class="btn btn-ghost" data-back-dept>&larr; ${this._formatDepartmentName(scenario.department)}</button>
            </div>

            <div class="text-block">${step.text}</div>
            <div class="text-block">${npcLines}</div>
            <div class="text-block"><strong>${step.playerPrompt}</strong></div>

            <div class="choice-list">
                ${step.options
                .map(
                    o => `
                <button class="choice-btn" data-opt="${o.id}">
                    ${o.text}
                </button>`
                )
                .join("")}
            </div>
        `;

        const side = this._renderHud(hud);
        this._renderShell(content, side);

        this.root.querySelector("[data-back-dept]").onclick = () =>
            this.handlers.onBackToDept(scenario.department);

        this.root.querySelectorAll("[data-opt]").forEach(btn => {
            btn.onclick = () => this.handlers.onOptionSelect(btn.dataset.opt);
        });
    }

    // =====================
    // DEBRIEF
    // =====================
    renderDebrief(scenario, ending, hud) {
        const content = `
            <div class="panel-header-row">
                <div class="panel-heading">Debrief</div>
                <button class="btn btn-ghost" data-back-main>&larr; Main Menu</button>
            </div>

            <div class="text-block"><strong>${ending.summaryTitle}</strong></div>
            ${(ending.summaryText || []).map(p => `<div class="text-block">${p}</div>`).join("")}

            <div class="text-block"><strong>Key Learning Points:</strong></div>
            <ul class="list">
                ${ending.learningPoints.map(p => `<li>${p}</li>`).join("")}
            </ul>
        `;

        const side = this._renderHud(hud);
        this._renderShell(content, side);

        this.root.querySelector("[data-back-main]").onclick = () =>
            this.handlers.onBackToMain();
    }

    // =====================
    // HUD
    // =====================
    _renderHud(hud) {
        return `
            <div class="hud-title">Soft Skills HUD</div>
            <div class="hud-item">
                <div class="hud-label">Score</div>
                <div class="hud-number">${hud.score}</div>
            </div>
            <div class="hud-item">
                <div class="hud-label">Stability</div>
                <div class="hud-number">${hud.stability}</div>
            </div>
            <div class="hud-item">
                <div class="hud-label">Risk</div>
                <div class="hud-number">${hud.risk}</div>
            </div>
        `;
    }

    // =====================
    // Helpers
    // =====================
    _actorName(scenario, actorId) {
        if (actorId === "YOU") return "You";
        const found = scenario.actors?.find(a => a.id === actorId);
        return found ? found.role : actorId;
    }

    _formatDepartmentName(d) {
        if (d === "DECK") return "Deck";
        if (d === "ENGINE" || d === "ENG") return "Engine";
        if (d === "GALLEY") return "Galley";
        return d;
    }
}
