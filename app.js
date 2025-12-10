// app.js

import { ScenarioEngine } from "./engine/scenarioEngine.js";
import { UIEngine } from "./engine/uiEngine.js";
import { SCENARIOS } from "./data/scenarios.js";

window.addEventListener("DOMContentLoaded", () => {
    const UI = new UIEngine("app-root");
    const SIM = new ScenarioEngine(SCENARIOS);

    let currentDepartment = null;
    let currentScenario = null;

    function showMainMenu() {
        currentDepartment = null;
        currentScenario = null;
        const departments = SIM.getDepartments();
        UI.renderMainMenu(departments);
    }

    function showDepartment(deptId) {
        currentDepartment = deptId;
        currentScenario = null;
        const scenarios = SIM.getScenariosByDepartment(deptId);
        UI.renderDepartmentMenu(deptId, scenarios);
    }

    function showMissionBrief(scenarioId) {
        const scenario = SIM.getScenarioById(scenarioId);
        if (!scenario) return;
        currentScenario = scenario;

        // Initialise stats for HUD preview (before simulation start)
        SIM.startScenario(scenarioId);
        const hud = SIM.getHudSnapshot();
        UI.renderMissionBrief(scenario, hud);
    }

    function beginSimulation(scenarioId) {
        const scenario = SIM.startScenario(scenarioId);
        if (!scenario) return;
        currentScenario = scenario;
        const step = SIM.getCurrentStep();
        const hud = SIM.getHudSnapshot();
        UI.renderSimulationStep(scenario, step, hud);
    }

    function handleOptionSelect(optionId) {
        const result = SIM.applyOption(optionId);
        const scenario = SIM.getCurrentScenario() || currentScenario; // after final step, currentStep is null
        const hud = SIM.getHudSnapshot();

        if (result.done) {
            UI.renderDebrief(scenario, result.ending, hud);
        } else {
            const step = SIM.getCurrentStep();
            UI.renderSimulationStep(scenario, step, hud);
        }
    }

    // Register callbacks into UIEngine
    UI.setHandlers({
        onDepartmentSelect: deptId => {
            showDepartment(deptId);
        },
        onScenarioSelect: scenarioId => {
            showMissionBrief(scenarioId);
        },
        onBeginScenario: scenarioId => {
            beginSimulation(scenarioId);
        },
        onOptionSelect: optionId => {
            handleOptionSelect(optionId);
        },
        onBackToMain: () => {
            showMainMenu();
        },
        onBackToDept: deptId => {
            const targetDept = deptId || currentDepartment;
            if (targetDept) {
                showDepartment(targetDept);
            } else {
                showMainMenu();
            }
        }
    });

    // Expose for debugging (optional)
    window.SIM_ENGINE = SIM;
    window.UI_ENGINE = UI;

    // Initial screen
    showMainMenu();
});
