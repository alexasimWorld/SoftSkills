// data/scenarios.js

export const SCENARIOS = [
    // ==========================
    // DECK DEPARTMENT (5)
    // ==========================
    {
        id: "DECK-01",
        department: "DECK",
        title: "Miscommunication During Cargo Operation",
        difficulty: "MEDIUM",
        learningFocus: ["Communication", "Conflict Resolution", "Teamwork"],
        initialStats: {
            communication: 50,
            conflictResolution: 50,
            teamwork: 50,
            stability: 70,
            risk: 30
        },
        missionBrief: {
            introTitle: "Port X :: Loading Operation on a Tight Schedule",
            introText: [
                "You are the Officer of the Watch (OOW) on deck during a time-critical cargo loading operation.",
                "The Cargo Control Room (CCR) calls: tank levels are rising faster than expected.",
                "You suspect a junior officer has misunderstood your previous instruction about loading rate."
            ],
            keyObjectives: [
                "Clarify instructions clearly and calmly.",
                "Correct the mistake without blame, preserving trust.",
                "Maintain safe loading and clear communication with CCR."
            ]
        },
        actors: [
            { id: "YOU", role: "OOW / Chief Officer" },
            { id: "JO", role: "Junior Officer on Deck" },
            { id: "AB1", role: "AB at Manifold" },
            { id: "CCR", role: "Cargo Control Room" }
        ],
        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "CCR reports that tank 3P is rapidly approaching the planned stop level. The loading rate seems higher than agreed. The junior officer avoids eye contact.",
                npcDialogue: [
                    { actorId: "CCR", line: "Deck, CCR here. Confirm last rate request. Tank 3P is rising faster than your plan." }
                ],
                playerPrompt: "How do you respond, and how do you address the possible misunderstanding?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Calmly ask CCR to reduce the rate, then inform them you will verify instructions with the team.",
                        effects: { communication: 8, conflictResolution: 6, teamwork: 4, stability: 5, risk: -6 },
                        nextStepId: "STEP2A",
                        tag: "BestPractice"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Sharply tell CCR to reduce rate and publicly blame the junior officer over the radio.",
                        effects: { communication: -10, conflictResolution: -8, teamwork: -10, stability: -8, risk: 10 },
                        nextStepId: "STEP2B",
                        tag: "Blame"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Delay reacting, hoping the rate will stabilise, and avoid confronting the junior officer.",
                        effects: { communication: -6, conflictResolution: -4, teamwork: -3, stability: -10, risk: 8 },
                        nextStepId: "STEP2C",
                        tag: "Avoidance"
                    }
                ]
            },
            {
                id: "STEP2A",
                narrator: "System",
                text: "CCR confirms rate reduced. The junior officer looks worried.",
                npcDialogue: [
                    { actorId: "JO", line: "Sorry Chief, I thought you said 'increase 800', not 'reduce 800'. I got mixed up." }

                ],
                playerPrompt: "How do you correct the mistake and support the junior officer?",
                options: [
                    {
                        id: "STEP2A_OPT_1",
                        text: "Reassure them: mistakes happen, then emphasise repeating back orders in future.",
                        effects: { communication: 7, conflictResolution: 6, teamwork: 6, stability: 5, risk: -3 },
                        nextStepId: "STEP3_CLOSE",
                        tag: "Supportive"
                    },
                    {
                        id: "STEP2A_OPT_2",
                        text: "Tell them firmly this is basic and such errors are not acceptable.",
                        effects: { communication: -4, conflictResolution: -3, teamwork: -6, stability: -4, risk: 3 },
                        nextStepId: "STEP3_CLOSE",
                        tag: "Harsh"
                    },
                    {
                        id: "STEP2A_OPT_3",
                        text: "Encourage them to ask you whenever unsure and refocus on safe operation.",
                        effects: { communication: 5, conflictResolution: 4, teamwork: 5, stability: 4, risk: -2 },
                        nextStepId: "STEP3_CLOSE",
                        tag: "Coaching"
                    }
                ]
            },
            {
                id: "STEP2B",
                narrator: "System",
                text: "Your harsh tone creates tension on deck. The junior officer answers quietly, avoiding eye contact. The ABs are silent.",
                npcDialogue: [
                    { actorId: "JO", line: "Understood Chief. Rate reduced. Sorry, won’t happen again." }
                ],
                playerPrompt: "How do you follow up after your public criticism?",
                options: [
                    {
                        id: "STEP2B_OPT_1",
                        text: "Acknowledge your tone and say you will discuss calmly later, thanking them for quick reaction.",
                        effects: { communication: 6, conflictResolution: 7, teamwork: 6, stability: 5, risk: -4 },
                        nextStepId: "STEP3_CLOSE",
                        tag: "Repair"
                    },
                    {
                        id: "STEP2B_OPT_2",
                        text: "Say nothing more and stay focused purely on figures and levels.",
                        effects: { communication: -2, conflictResolution: -3, teamwork: -4, stability: -3, risk: 2 },
                        nextStepId: "STEP3_CLOSE",
                        tag: "Cold"
                    },
                    {
                        id: "STEP2B_OPT_3",
                        text: "Continue criticising the junior officer in front of everyone.",
                        effects: { communication: -8, conflictResolution: -8, teamwork: -10, stability: -8, risk: 6 },
                        nextStepId: "STEP3_CLOSE",
                        tag: "Escalation"
                    }
                ]
            },
            {
                id: "STEP2C",
                narrator: "System",
                text: "CCR calls again, more urgent this time. The level is very close to stop point.",
                npcDialogue: [
                    { actorId: "CCR", line: "Deck, CCR. We are almost at stop level. Confirm immediate action, please." }
                ],
                playerPrompt: "You delayed earlier. What do you do now?",
                options: [
                    {
                        id: "STEP2C_OPT_1",
                        text: "Immediately order rate reduction and inform CCR you will review the plan and communication.",
                        effects: { communication: 4, conflictResolution: 3, teamwork: 3, stability: 2, risk: -4 },
                        nextStepId: "STEP3_CLOSE",
                        tag: "LateRecovery"
                    },
                    {
                        id: "STEP2C_OPT_2",
                        text: "Ask CCR to hold for a moment longer to 'see what happens'.",
                        effects: { communication: -6, conflictResolution: -4, teamwork: -2, stability: -8, risk: 10 },
                        nextStepId: "STEP3_CLOSE",
                        tag: "Risky"
                    }
                ]
            },
            {
                id: "STEP3_CLOSE",
                narrator: "System",
                text: "The operation is stabilised. You now decide how to close this learning moment with the junior officer and the team.",
                npcDialogue: [
                    { actorId: "YOU", line: "We will log this and make sure we tighten our communication during rate changes." }
                ],
                playerPrompt: "How do you summarise the event to your team?",
                options: [
                    {
                        id: "STEP3_OPT_1",
                        text: "Treat it as a near-miss, discuss it openly, and agree on a repeat-back protocol for all rate changes.",
                        effects: { communication: 8, conflictResolution: 6, teamwork: 7, stability: 6, risk: -4 },
                        nextStepId: null,
                        tag: "LearningCulture"
                    },
                    {
                        id: "STEP3_OPT_2",
                        text: "Just move on without any discussion; everyone should 'already know' what to do.",
                        effects: { communication: -5, conflictResolution: -4, teamwork: -5, stability: -3, risk: 3 },
                        nextStepId: null,
                        tag: "MissedLearning"
                    }
                ]
            }
        ],
        endings: [
            {
                id: "GOOD",
                condition: { minScore: 75, maxRisk: 40 },
                summaryTitle: "Calm Control and Clear Communication",
                summaryText: [
                    "You corrected the misunderstanding early and kept the operation safe.",
                    "The junior officer understood the error without feeling humiliated.",
                    "The whole team gained a clearer protocol for rate changes."
                ],
                learningPoints: [
                    "Private and calm correction builds trust.",
                    "Near-misses are opportunities to strengthen procedures.",
                    "Structured communication (repeat-back) reduces risk."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxRisk: 60 },
                summaryTitle: "Operation Safe, but Confidence Affected",
                summaryText: [
                    "The cargo plan was ultimately followed, but your communication style created some tension.",
                    "The junior officer is less likely to speak up early next time."
                ],
                learningPoints: [
                    "The way feedback is given shapes future reporting.",
                    "Safety outcomes and human outcomes are linked."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54, minRisk: 61 },
                summaryTitle: "High Stress and Reduced Openness",
                summaryText: [
                    "The misunderstanding escalated into stress and defensiveness.",
                    "Crew are now more cautious about admitting confusion or mistakes."
                ],
                learningPoints: [
                    "Blame and avoidance reduce early warning signals.",
                    "Soft skills are directly connected to cargo operation safety."
                ]
            }
        ]
    },

    {
        id: "DECK-02",
        department: "DECK",
        title: "Miscommunication During Mooring Preparations",
        difficulty: "MEDIUM",
        learningFocus: ["Communication", "Teamwork", "Conflict Resolution"],

        initialStats: {
            communication: 50,
            conflictResolution: 45,
            teamwork: 50,
            stability: 60,
            risk: 25
        },

        missionBrief: {
            introTitle: "Pilot Arrival :: Foredeck Team Misalignment",
            introText: [
                "The vessel is preparing for pilot boarding. The Chief Officer issued instructions for mooring line arrangement, but the Bosun interpreted them differently.",
                "Two ABs are following conflicting directions. Tension rises as time pressure increases.",
                "Your role is to realign the preparation team, clarify instructions, and maintain safe communication."
            ],
            keyObjectives: [
                "Restore clarity of instructions.",
                "Resolve misunderstanding calmly.",
                "Rebuild teamwork under time pressure."
            ]
        },

        actors: [
            { id: "YOU", role: "Officer on Watch" },
            { id: "BOSUN", role: "Bosun" },
            { id: "AB1", role: "Able Seaman" },
            { id: "AB2", role: "Able Seaman" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "The Bosun prepares the wrong forward line configuration after mishearing the Chief Officer. AB1 and AB2 are confused whom to follow.",
                npcDialogue: [
                    { actorId: "AB1", line: "I thought the Chief said 'spring first', but Bosun said 'head line first'…" }
                ],
                playerPrompt: "How do you intervene?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Approach calmly, restate the Chief Officer’s original instructions, and ensure all heard the same message.",
                        tag: "Clarify",
                        effects: { communication: +8, teamwork: +6, conflictResolution: +4, risk: -4 },
                        nextStepId: "STEP2A"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Publicly blame the Bosun for the mistake.",
                        tag: "Blame",
                        effects: { communication: -8, teamwork: -6, conflictResolution: -5, risk: +6 },
                        nextStepId: "STEP2A"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Avoid addressing the confusion and continue preparing silently.",
                        tag: "Avoidance",
                        effects: { communication: -6, teamwork: -5, stability: -4, risk: +4 },
                        nextStepId: "STEP2A"
                    }
                ]
            },

            {
                id: "STEP2A",
                narrator: "System",
                text: "The Bosun looks embarrassed; the ABs remain tense. The incorrect alignment caused delay.",
                npcDialogue: [
                    { actorId: "BOSUN", line: "Sorry, I must have heard wrong. It's been loud on deck." }
                ],
                playerPrompt: "How do you address the rising frustration?",
                options: [
                    {
                        id: "STEP2A_OPT_1",
                        text: "Acknowledge the noise and misunderstandings, then validate each person's concerns.",
                        tag: "Empathy",
                        effects: { communication: +6, conflictResolution: +6, teamwork: +5, stability: +5 },
                        nextStepId: "STEP3_CLOSE"
                    },
                    {
                        id: "STEP2A_OPT_2",
                        text: "Tell everyone to stop talking and just follow instructions without questions.",
                        tag: "CommandOnly",
                        effects: { communication: -4, conflictResolution: -4, teamwork: -5, risk: +4 },
                        nextStepId: "STEP3_CLOSE"
                    },
                    {
                        id: "STEP2A_OPT_3",
                        text: "Ask each person to repeat back their understanding of the plan.",
                        tag: "RepeatBack",
                        effects: { communication: +7, teamwork: +7, conflictResolution: +4 },
                        nextStepId: "STEP3_CLOSE"
                    }
                ]
            },

            {
                id: "STEP3_CLOSE",
                narrator: "System",
                text: "The team is ready to finalize mooring prep. They wait for your closing direction.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let's finalize roles clearly before we proceed." }
                ],
                playerPrompt: "How do you ensure alignment?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Confirm each person's role and visually verify the arrangement together.",
                        tag: "TeamAlign",
                        effects: { communication: +6, teamwork: +8, stability: +6, risk: -3 },
                        nextStepId: null
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Let the Bosun handle the rest without further clarification.",
                        tag: "HandsOff",
                        effects: { communication: -3, teamwork: -4, stability: -3 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 75, maxRisk: 40 },
                summaryTitle: "Team Realigned and Ready",
                summaryText: [
                    "You restored clarity and communication quickly, allowing safe and coordinated mooring preparation.",
                    "The team regained confidence and focus."
                ],
                learningPoints: [
                    "Clarifying misunderstandings early prevents operational delays.",
                    "A calm approach supports morale.",
                    "Repeat-back improves accuracy in noisy environments."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 74 },
                summaryTitle: "Adequate Outcome but Tension Lingers",
                summaryText: [
                    "The team completed the task, but miscommunication left some frustration unaddressed."
                ],
                learningPoints: [
                    "Emotional tone matters as much as factual correction.",
                    "Addressing concerns prevents future friction."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Misalignment and Tension Remained",
                summaryText: [
                    "Unresolved tension reduced teamwork and increased operational risk."
                ],
                learningPoints: [
                    "Avoidance or blame leads to unsafe working environments.",
                    "Soft skills directly affect mooring safety."
                ]
            }
        ]
    },
    {
        id: "DECK-03",
        department: "DECK",
        title: "Conflict Between Two Able Seamen",
        difficulty: "HIGH",
        learningFocus: ["Conflict Resolution", "Communication", "Teamwork"],

        initialStats: {
            communication: 45,
            conflictResolution: 40,
            teamwork: 42,
            stability: 55,
            risk: 30
        },

        missionBrief: {
            introTitle: "Tension on Deck :: AB vs AB Dispute",
            introText: [
                "Two Able Seamen begin arguing during a maintenance task regarding who should handle a time-critical job.",
                "Their disagreement escalates quickly, distracting the crew and creating risk.",
                "Your role is to de-escalate, gather perspectives, and guide both toward a constructive resolution."
            ],
            keyObjectives: [
                "Calm the disagreement before it escalates further.",
                "Understand both ABs’ frustrations.",
                "Guide a shared solution that restores teamwork."
            ]
        },

        actors: [
            { id: "AB1", role: "Able Seaman" },
            { id: "AB2", role: "Able Seaman" },
            { id: "YOU", role: "You" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "AB1 and AB2 are arguing loudly over who is responsible for the chipping and painting sequence.",
                npcDialogue: [
                    { actorId: "AB1", line: "You always skip the harder jobs!" },
                    { actorId: "AB2", line: "That's not true, you're just being unfair!" }
                ],
                playerPrompt: "How do you intervene?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Step between them and calmly request a pause to reset the situation.",
                        tag: "CalmIntervention",
                        effects: { communication: +6, conflictResolution: +8, teamwork: +5, risk: -4 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Raise your voice and demand they stop immediately.",
                        tag: "AuthorityOnly",
                        effects: { communication: -4, conflictResolution: -5, stability: -4, risk: +5 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Ignore the dispute and continue supervising work.",
                        tag: "Avoidance",
                        effects: { communication: -6, teamwork: -7, risk: +7 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "The tension reduces slightly. You now need to understand the cause.",
                npcDialogue: [
                    { actorId: "AB1", line: "He never listens and always leaves extra work for me." }
                ],
                playerPrompt: "How do you gather information?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Listen separately to each AB to avoid bias.",
                        tag: "SeparateListening",
                        effects: { communication: +7, conflictResolution: +6 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Tell AB1 to calm down and AB2 to simply follow orders.",
                        tag: "Directive",
                        effects: { communication: -3, teamwork: -4 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_C",
                        text: "Dismiss the issue as trivial and push them back to work.",
                        tag: "Dismissive",
                        effects: { communication: -5, conflictResolution: -6, risk: +4 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "You collect both perspectives. Both ABs feel disrespected and unheard.",
                npcDialogue: [
                    { actorId: "AB2", line: "He always interrupts me — I can't even explain my side." }
                ],
                playerPrompt: "How do you promote understanding?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Facilitate a structured conversation where each AB talks without interruption.",
                        tag: "Mediation",
                        effects: { communication: +8, conflictResolution: +8, teamwork: +6 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Tell them both they are overreacting.",
                        tag: "Minimize",
                        effects: { communication: -4, teamwork: -4 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_C",
                        text: "Decide the task assignment yourself without discussion.",
                        tag: "TopDown",
                        effects: { teamwork: -3, conflictResolution: -5 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "Both ABs start to soften once they feel heard, but a final alignment is needed.",
                npcDialogue: [
                    { actorId: "AB1", line: "Okay… maybe I misunderstood earlier." }
                ],
                playerPrompt: "How do you bring closure?",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Guide them to agree on shared expectations for future teamwork.",
                        tag: "SharedAgreement",
                        effects: { communication: +6, teamwork: +7, stability: +5 },
                        nextStepId: "STEP5"
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Assign tasks independently with no joint discussion.",
                        tag: "Isolate",
                        effects: { teamwork: -4 },
                        nextStepId: "STEP5"
                    }
                ]
            },

            {
                id: "STEP5",
                narrator: "System",
                text: "The crew looks to you for the final decision.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s agree on a way forward so this doesn’t repeat." }
                ],
                playerPrompt: "Finalize your action:",
                options: [
                    {
                        id: "STEP5_OPT_A",
                        text: "Summarize the agreement clearly and thank both for resolving the issue.",
                        tag: "Closure",
                        effects: { communication: +6, teamwork: +8, conflictResolution: +6 },
                        nextStepId: null
                    },
                    {
                        id: "STEP5_OPT_B",
                        text: "Tell them to just move on and work quietly.",
                        tag: "ShutDown",
                        effects: { communication: -4, teamwork: -5 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 75, maxRisk: 40 },
                summaryTitle: "Effective Mediation and Restored Teamwork",
                summaryText: [
                    "Both ABs felt heard, respected, and supported. Cooperation improved noticeably.",
                    "The deck team returned to work with strengthened mutual understanding."
                ],
                learningPoints: [
                    "Listening to both sides prevents escalation.",
                    "Structured mediation builds trust.",
                    "Clear closure avoids lingering resentment."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 74 },
                summaryTitle: "Dispute Settled, but Tension Remains",
                summaryText: [
                    "The conflict was contained, but underlying emotions were only partially addressed."
                ],
                learningPoints: [
                    "Sometimes a second follow-up conversation is needed.",
                    "Not all conflicts resolve immediately; consistency matters."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Teamwork Disrupted",
                summaryText: [
                    "The conflict remained unresolved and reduced work quality and safety."
                ],
                learningPoints: [
                    "Avoidance or dismissal worsens conflict.",
                    "Soft-skills leadership prevents operational disruption."
                ]
            }
        ]
    },
    {
        id: "DECK-04",
        department: "DECK",
        title: "Pilot Boarding Delay",
        difficulty: "MEDIUM",
        learningFocus: ["Communication", "Leadership", "Team Coordination"],

        initialStats: {
            communication: 48,
            conflictResolution: 45,
            teamwork: 50,
            stability: 55,
            risk: 25
        },

        missionBrief: {
            introTitle: "Pilot Boarding :: Preparation Delay",
            introText: [
                "The vessel is approaching the pilot boarding area. The pilot ladder should already be rigged, but the deck team is behind schedule.",
                "The Chief Officer is frustrated, and the Bosun is defensive about staffing and timing.",
                "Your role is to mediate, identify the cause, and restore coordination under time pressure."
            ],
            keyObjectives: [
                "Address frustration without escalating conflict.",
                "Clarify expectations quickly.",
                "Restore smooth pilot boarding preparations."
            ]
        },

        actors: [
            { id: "YOU", role: "Officer on Watch" },
            { id: "BOSUN", role: "Bosun" },
            { id: "CO", role: "Chief Officer" },
            { id: "AB1", role: "Able Seaman" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "The Chief Officer arrives on deck visibly upset. The pilot ladder is not yet rigged.",
                npcDialogue: [
                    { actorId: "CO", line: "We should've finished this five minutes ago. Why isn’t it ready?" },
                    { actorId: "BOSUN", line: "We started late because AB1 was still collecting equipment!" }
                ],
                playerPrompt: "How do you intervene?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Acknowledge the urgency and ask both sides for a quick timeline update.",
                        tag: "ClarifyStatus",
                        effects: { communication: +6, teamwork: +5, conflictResolution: +4, risk: -3 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Side with the Chief Officer and blame the Bosun.",
                        tag: "Blame",
                        effects: { communication: -6, teamwork: -6, conflictResolution: -5, risk: +5 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Tell everyone to stop arguing and just get it done.",
                        tag: "SuppressConflict",
                        effects: { communication: -4, teamwork: -4 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "Tension decreases slightly, but the root cause remains unclear.",
                npcDialogue: [
                    { actorId: "AB1", line: "I thought the ladder rigging was after we checked the lights…" }
                ],
                playerPrompt: "How do you seek clarity?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Ask each person what instructions they understood to identify the misunderstanding.",
                        tag: "FactFinding",
                        effects: { communication: +7, teamwork: +6, conflictResolution: +5 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Ignore the misunderstanding to save time.",
                        tag: "IgnoreIssue",
                        effects: { communication: -3, teamwork: -3, risk: +4 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "The team expresses confusion about the sequence and manpower assignment.",
                npcDialogue: [
                    { actorId: "BOSUN", line: "If AB1 was here earlier we could've followed the original plan…" }
                ],
                playerPrompt: "How do you restore direction?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Restate roles and steps clearly and confirm everyone agrees.",
                        tag: "Rebrief",
                        effects: { communication: +8, teamwork: +8, stability: +6, risk: -2 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Tell the Bosun to handle it without further discussion.",
                        tag: "HandOff",
                        effects: { teamwork: -4, communication: -3 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "The pilot boat is already approaching. The team looks to you for final direction.",
                npcDialogue: [
                    { actorId: "CO", line: "Let’s get this sorted—pilot is nearly alongside." }
                ],
                playerPrompt: "Finalize your action:",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Stay engaged and verify the rigging sequence step-by-step.",
                        tag: "ActiveLeadership",
                        effects: { teamwork: +7, communication: +6, stability: +5 },
                        nextStepId: null
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Leave the deck and let them complete the job alone.",
                        tag: "Withdraw",
                        effects: { teamwork: -5, stability: -4 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 75, maxRisk: 35 },
                summaryTitle: "Pilot Boarding Completed Smoothly",
                summaryText: [
                    "You restored clarity, reduced tension, and aligned the deck team efficiently.",
                    "The pilot boarding operation proceeded safely with minimal delay."
                ],
                learningPoints: [
                    "Clear restating of expectations reduces errors.",
                    "Emotional tone influences operational speed and quality.",
                    "Leadership is especially crucial under time pressure."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 74 },
                summaryTitle: "Boarding Achieved, but Improvement Needed",
                summaryText: [
                    "The team completed the task, but efficiency and morale were affected by earlier tension."
                ],
                learningPoints: [
                    "Address operational friction early.",
                    "Prevent misunderstandings before they cascade."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Confusion Led to Risky Delay",
                summaryText: [
                    "Lack of clear direction led to unnecessary delay and increased operational risk."
                ],
                learningPoints: [
                    "Avoid suppressing conflict—clarity is essential.",
                    "Team alignment directly affects safety-critical operations."
                ]
            }
        ]
    },
    {
        id: "DECK-05",
        department: "DECK",
        title: "Safety Observation Rejected",
        difficulty: "HIGH",
        learningFocus: ["Safety Culture", "Communication", "Assertiveness", "Team Morale"],

        initialStats: {
            communication: 50,
            conflictResolution: 40,
            teamwork: 48,
            stability: 55,
            risk: 30
        },

        missionBrief: {
            introTitle: "Safety Culture Challenge",
            introText: [
                "A junior deckhand reports a potential tripping hazard on the main deck, but a senior crew member dismisses the concern.",
                "The junior member now feels discouraged and unlikely to speak up again.",
                "Your role is to reinforce safety culture and repair communication between team members."
            ],
            keyObjectives: [
                "Encourage reporting and openness.",
                "Coach senior crew on communication expectations.",
                "Rebuild psychological safety within the deck team."
            ]
        },

        actors: [
            { id: "JR", role: "Junior Deckhand" },
            { id: "SN", role: "Senior Deckhand" },
            { id: "YOU", role: "You" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "The junior deckhand appears frustrated after reporting a hazard. The senior deckhand waved it off.",
                npcDialogue: [
                    { actorId: "JR", line: "Why bother reporting anything if he just ignores it…" }
                ],
                playerPrompt: "What do you do first?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Listen to the junior deckhand and validate their concern.",
                        tag: "Support",
                        effects: { communication: +6, teamwork: +5, conflictResolution: +4 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Tell them not to take it personally and move on.",
                        tag: "Dismiss",
                        effects: { communication: -4, teamwork: -4 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Immediately confront the senior deckhand aggressively.",
                        tag: "Confrontation",
                        effects: { conflictResolution: -5, teamwork: -6, risk: +5 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "The senior deckhand defends himself, saying the issue was minor and not worth attention.",
                npcDialogue: [
                    { actorId: "SN", line: "It was nothing serious. We have real work to do." }
                ],
                playerPrompt: "How do you respond?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Explain calmly why all hazards matter and reinforce the reporting culture.",
                        tag: "Educate",
                        effects: { communication: +7, teamwork: +5, conflictResolution: +6 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Take the senior’s side and tell the junior to toughen up.",
                        tag: "Bias",
                        effects: { communication: -6, teamwork: -7, risk: +6 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "The atmosphere is tense. Both crew members look unsure how to proceed.",
                npcDialogue: [
                    { actorId: "JR", line: "I just wanted to help…" }
                ],
                playerPrompt: "How do you rebuild trust?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Facilitate open dialogue where both express their intentions.",
                        tag: "Dialogue",
                        effects: { communication: +8, teamwork: +7, conflictResolution: +7 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Tell them to forget it and get back to work.",
                        tag: "Shutdown",
                        effects: { teamwork: -4, communication: -5 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "Both crew members begin understanding each other’s viewpoints.",
                npcDialogue: [
                    { actorId: "SN", line: "I didn’t mean to ignore you… It’s been a long morning." }
                ],
                playerPrompt: "How do you solidify improvement?",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Agree on a simple hazard-reporting process and mutual respect expectations.",
                        tag: "Process",
                        effects: { teamwork: +8, communication: +7, stability: +5 },
                        nextStepId: "STEP5"
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Move on without formalizing any expectations.",
                        tag: "Unstructured",
                        effects: { teamwork: -3, stability: -2 },
                        nextStepId: "STEP5"
                    }
                ]
            },

            {
                id: "STEP5",
                narrator: "System",
                text: "The team looks to you for final guidance.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s ensure we support each other and keep safety our priority." }
                ],
                playerPrompt: "Choose your final action:",
                options: [
                    {
                        id: "STEP5_OPT_A",
                        text: "Thank both for correcting the misunderstanding and highlight the importance of speaking up.",
                        tag: "PositiveReinforcement",
                        effects: { communication: +6, teamwork: +6, conflictResolution: +6 },
                        nextStepId: null
                    },
                    {
                        id: "STEP5_OPT_B",
                        text: "Say nothing further.",
                        tag: "Silence",
                        effects: { communication: -4 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 75, maxRisk: 40 },
                summaryTitle: "Safety Culture Strengthened",
                summaryText: [
                    "Both junior and senior crew members developed healthier communication patterns.",
                    "Your leadership reinforced psychological safety on deck."
                ],
                learningPoints: [
                    "Never minimize safety concerns.",
                    "Psychological safety increases hazard reporting.",
                    "Positive reinforcement encourages proactive behaviour."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 74 },
                summaryTitle: "Issue Resolved, but Culture Unchanged",
                summaryText: [
                    "The hazard was addressed, but deeper communication issues remain."
                ],
                learningPoints: [
                    "Consistency is key in shaping safety culture.",
                    "A follow-up discussion may still be needed."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Safety Culture Damaged",
                summaryText: [
                    "The junior member feels discouraged, reducing future reporting.",
                    "Risk of unreported hazards increases."
                ],
                learningPoints: [
                    "Dismissive responses silence safety voices.",
                    "Leaders must model respectful communication."
                ]
            }
        ]
    },
    {
        id: "ENGINE-01",
        department: "ENGINE",
        title: "Miscommunication During Fuel Transfer",
        difficulty: "HIGH",
        learningFocus: ["Communication", "Teamwork", "Situational Awareness"],

        initialStats: {
            communication: 50,
            conflictResolution: 45,
            teamwork: 50,
            stability: 55,
            risk: 35
        },

        missionBrief: {
            introTitle: "Fuel Transfer :: Miscommunication Between Crew Members",
            introText: [
                "During an internal fuel transfer operation, the Oiler misunderstands the Duty Engineer's instruction regarding valve alignment.",
                "The Duty Engineer becomes frustrated and the mood in the engine room becomes tense.",
                "Your task is to re-establish clarity, ensure safe valve configuration, and maintain a positive working environment."
            ],
            keyObjectives: [
                "Clarify instructions under pressure.",
                "Support the Duty Engineer while empowering the Oiler.",
                "Reduce risk by improving teamwork and communication."
            ]
        },

        actors: [
            { id: "YOU", role: "Second Engineer (You)" },
            { id: "DE", role: "Duty Engineer" },
            { id: "OILER", role: "Oiler" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "The Oiler aligned the wrong valve after hearing only half of the instruction.",
                npcDialogue: [
                    { actorId: "DE", line: "No, not THAT line! Did you even listen?" },
                    { actorId: "OILER", line: "I thought you said the return line… I wasn’t sure!" }
                ],
                playerPrompt: "How do you intervene?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Calm both down and restate the correct valve sequence clearly.",
                        tag: "Clarify",
                        effects: { communication: +8, teamwork: +6, conflictResolution: +5, risk: -4 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Tell the Oiler he should have known better.",
                        tag: "Blame",
                        effects: { communication: -6, teamwork: -7, conflictResolution: -6, risk: +5 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Tell everyone to stop arguing and continue the operation.",
                        tag: "Rush",
                        effects: { communication: -4, risk: +6 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "The Duty Engineer feels pressured and the Oiler is hesitant.",
                npcDialogue: [
                    { actorId: "OILER", line: "I really wasn’t sure… should’ve asked." }
                ],
                playerPrompt: "How do you address the hesitation?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Encourage the Oiler to ask questions when unsure.",
                        tag: "Empower",
                        effects: { communication: +7, teamwork: +5 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Tell him that mistakes like this can’t happen.",
                        tag: "Pressure",
                        effects: { communication: -4, conflictResolution: -3 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "Fuel transfer must continue, but alignment must be verified.",
                npcDialogue: [
                    { actorId: "DE", line: "We’re running out of time—what now?" }
                ],
                playerPrompt: "What do you do?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Perform a step-by-step verification with both present.",
                        tag: "TeamCheck",
                        effects: { teamwork: +7, communication: +6, stability: +5, risk: -3 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Let the Duty Engineer handle the rest alone.",
                        tag: "HandsOff",
                        effects: { teamwork: -5, communication: -4 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "The operation proceeds, but team morale is fragile.",
                npcDialogue: [
                    { actorId: "DE", line: "Okay, alignment is correct now, continuing…" }
                ],
                playerPrompt: "Before concluding the task, you…",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Highlight the importance of speaking up and confirm everyone understood the plan.",
                        tag: "Rebrief",
                        effects: { communication: +6, teamwork: +6 },
                        nextStepId: "STEP5"
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Say nothing; the job is already almost done.",
                        tag: "Avoid",
                        effects: { communication: -3 },
                        nextStepId: "STEP5"
                    }
                ]
            },

            {
                id: "STEP5",
                narrator: "System",
                text: "The transfer finishes and the team looks to you for closing remarks.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s ensure we avoid misunderstandings next time." }
                ],
                playerPrompt: "Choose your final action:",
                options: [
                    {
                        id: "STEP5_OPT_A",
                        text: "Thank both and reinforce safe communication habits.",
                        tag: "Reinforce",
                        effects: { communication: +6, teamwork: +6, conflictResolution: +5 },
                        nextStepId: null
                    },
                    {
                        id: "STEP5_OPT_B",
                        text: "End the shift silently.",
                        tag: "Silence",
                        effects: { communication: -3 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 75, maxRisk: 40 },
                summaryTitle: "Safe Operation and Stronger Teamwork",
                summaryText: [
                    "You resolved the miscommunication effectively and restored confidence among the engine crew.",
                    "Everyone learned to verify instructions before acting."
                ],
                learningPoints: [
                    "Clarity before action reduces risk.",
                    "Empowering juniors strengthens safety culture.",
                    "Encouragement leads to better communication."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 74 },
                summaryTitle: "Operation Safe but Morale Impacted",
                summaryText: [
                    "Fuel transfer was completed safely, but tension remained among the team."
                ],
                learningPoints: [
                    "Technical safety is not enough—emotional safety matters.",
                    "A follow-up talk may still be required."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Communication Breakdown",
                summaryText: [
                    "The miscommunication was never fully resolved, reducing trust and increasing future risk."
                ],
                learningPoints: [
                    "Blame erodes teamwork.",
                    "Misunderstandings must be addressed early."
                ]
            }
        ]
    },
    {
        id: "ENGINE-02",
        department: "ENGINE",
        title: "Emotional Outburst in the Workshop",
        difficulty: "MEDIUM",
        learningFocus: ["Conflict Resolution", "Communication", "Emotional Awareness"],

        initialStats: {
            communication: 48,
            conflictResolution: 42,
            teamwork: 50,
            stability: 55,
            risk: 20
        },

        missionBrief: {
            introTitle: "Workshop Tension :: Oiler Overwhelmed",
            introText: [
                "During a maintenance task, an Oiler becomes overwhelmed and snaps at a Motorman.",
                "Tools are scattered, and morale drops instantly.",
                "Your role is to de-escalate, understand the cause, and restore composure."
            ],
            keyObjectives: [
                "De-escalate emotional tension.",
                "Create psychological safety.",
                "Restore working rhythm."
            ]
        },

        actors: [
            { id: "YOU", role: "Second Engineer (You)" },
            { id: "OILER", role: "Oiler" },
            { id: "MM", role: "Motorman" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "The Oiler shouts at the Motorman: 'Stop telling me how to do my job!'",
                npcDialogue: [
                    { actorId: "MM", line: "Whoa, relax! I was only trying to help." }
                ],
                playerPrompt: "How do you respond?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Ask both to pause and take a breath before continuing.",
                        tag: "Pause",
                        effects: { communication: +7, conflictResolution: +6, teamwork: +5 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Tell them to stop fighting and focus on the task.",
                        tag: "Suppress",
                        effects: { communication: -4, teamwork: -4 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Tell the Oiler that his behaviour is unacceptable.",
                        tag: "Confront",
                        effects: { conflictResolution: -3, teamwork: -4 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "The Oiler seems stressed and apologizes partially.",
                npcDialogue: [
                    { actorId: "OILER", line: "Sorry… just a rough morning." }
                ],
                playerPrompt: "How do you address this?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Acknowledge his stress and ask what triggered the reaction.",
                        tag: "Empathy",
                        effects: { communication: +6, conflictResolution: +5 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Tell him to hide emotions and just work.",
                        tag: "Dismiss",
                        effects: { communication: -4 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "The Motorman explains he only wanted to help.",
                npcDialogue: [
                    { actorId: "MM", line: "I didn’t mean to annoy you. Just trying to speed things up." }
                ],
                playerPrompt: "How do you facilitate understanding?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Help them express expectations clearly and respectfully.",
                        tag: "Dialogue",
                        effects: { teamwork: +7, communication: +6, conflictResolution: +6 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Tell them both to keep quiet and finish the job.",
                        tag: "Silence",
                        effects: { teamwork: -4 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "The atmosphere cools, but closure is needed.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s agree on how we communicate during tight schedules." }
                ],
                playerPrompt: "Choose your final step:",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Summarize the misunderstanding and agree on a better approach.",
                        tag: "Closure",
                        effects: { communication: +6, teamwork: +6 },
                        nextStepId: null
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Move on without summarizing.",
                        tag: "Skip",
                        effects: { communication: -3 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 72, maxRisk: 40 },
                summaryTitle: "Emotional Reset Achieved",
                summaryText: [
                    "The tension eased and both crew members regained mutual respect.",
                    "The workshop returned to stable workflow."
                ],
                learningPoints: [
                    "Emotional acknowledgment prevents escalation.",
                    "Brief pauses improve safety and professionalism.",
                    "Constructive dialogue strengthens teams."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 71 },
                summaryTitle: "Issue Managed but Not Fully Resolved",
                summaryText: [
                    "The crew continued work, but the emotional impact lingered."
                ],
                learningPoints: [
                    "Some issues require follow-up later.",
                    "Emotions ignored tend to return stronger."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Tension Unresolved",
                summaryText: [
                    "The moment passed, but communication and teamwork deteriorated."
                ],
                learningPoints: [
                    "Dismissal weakens crew confidence.",
                    "Leaders must model emotional stability."
                ]
            }
        ]
    },
    {
        id: "ENGINE-03",
        department: "ENGINE",
        title: "Misunderstanding During Purifier Troubleshooting",
        difficulty: "HIGH",
        learningFocus: ["Communication", "Teamwork", "Coaching"],

        initialStats: {
            communication: 48,
            conflictResolution: 45,
            teamwork: 50,
            stability: 55,
            risk: 35
        },

        missionBrief: {
            introTitle: "Fuel Purifier :: Troubleshooting Confusion",
            introText: [
                "The purifier trips during operation. The Junior Engineer tries to restart it but misinterprets the Senior Engineer's instructions.",
                "The Senior Engineer becomes irritated and raises his voice.",
                "Your task is to calm the situation, rebuild trust, and ensure the troubleshooting is done correctly."
            ],
            keyObjectives: [
                "Guide both engineers toward a constructive exchange.",
                "Reinforce calm troubleshooting under pressure.",
                "Promote clarity and verification of instructions."
            ]
        },

        actors: [
            { id: "YOU", role: "Second Engineer (You)" },
            { id: "SNR", role: "Senior Engineer" },
            { id: "JR", role: "Junior Engineer" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "The purifier alarm sounds. The Senior Engineer shouts, 'I said CHECK the inlet pressure first!'",
                npcDialogue: [
                    { actorId: "JR", line: "I thought you meant restart sequence…" }
                ],
                playerPrompt: "How do you intervene?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Ask both to pause and refocus on the troubleshooting sequence calmly.",
                        tag: "Reset",
                        effects: { communication: +7, teamwork: +6, conflictResolution: +5, risk: -4 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Back up the Senior Engineer’s scolding.",
                        tag: "SideWithSenior",
                        effects: { communication: -5, teamwork: -6 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Tell them to stop arguing and deal with the purifier quickly.",
                        tag: "Suppress",
                        effects: { communication: -4, risk: +5 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "Tension lowers slightly. The Junior Engineer seems embarrassed.",
                npcDialogue: [
                    { actorId: "JR", line: "I wasn’t confident so I guessed… sorry." }
                ],
                playerPrompt: "Your response?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Encourage him to ask when uncertain instead of guessing.",
                        tag: "Coaching",
                        effects: { communication: +6, teamwork: +5 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Remind him sternly that guessing is unacceptable.",
                        tag: "Strict",
                        effects: { communication: -3, conflictResolution: -3 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "The Senior Engineer mutters, 'We don't have time to babysit…'",
                npcDialogue: [
                    { actorId: "SNR", line: "Just follow the steps properly next time." }
                ],
                playerPrompt: "How do you address the tone?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Gently guide the Senior Engineer to express expectations without belittling.",
                        tag: "ToneAdjustment",
                        effects: { communication: +7, conflictResolution: +6, teamwork: +6 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Ignore the tone; keep moving.",
                        tag: "Ignore",
                        effects: { teamwork: -3 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "Troubleshooting continues. The purifier shows signs of stabilizing.",
                npcDialogue: [
                    { actorId: "SNR", line: "Okay, inlet pressure stable now." }
                ],
                playerPrompt: "Next action?",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Assign each person a clear next step and verify understanding.",
                        tag: "TaskClarity",
                        effects: { communication: +8, teamwork: +7, stability: +6 },
                        nextStepId: "STEP5"
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Let the Senior Engineer handle everything from here.",
                        tag: "HandsOff",
                        effects: { teamwork: -4 },
                        nextStepId: "STEP5"
                    }
                ]
            },

            {
                id: "STEP5",
                narrator: "System",
                text: "The purifier restarts successfully. Both engineers look to you for closure.",
                npcDialogue: [
                    { actorId: "YOU", line: "Good work—let’s keep communication clear next time." }
                ],
                playerPrompt: "Your final action?",
                options: [
                    {
                        id: "STEP5_OPT_A",
                        text: "Reinforce lessons and thank them for stabilizing the purifier.",
                        tag: "Closure",
                        effects: { communication: +6, teamwork: +5 },
                        nextStepId: null
                    },
                    {
                        id: "STEP5_OPT_B",
                        text: "Say nothing further.",
                        tag: "Silent",
                        effects: { communication: -3 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 75, maxRisk: 40 },
                summaryTitle: "Strong Technical and Team Recovery",
                summaryText: [
                    "Troubleshooting was completed safely and professionally.",
                    "Both engineers improved their communication and teamwork."
                ],
                learningPoints: [
                    "Clarity prevents errors during high-pressure troubleshooting.",
                    "Senior crew must model supportive communication.",
                    "Coaching encourages junior initiative."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 74 },
                summaryTitle: "System Restored, Teamwork Impacted",
                summaryText: [
                    "The purifier was restarted, but friction remained between engineers."
                ],
                learningPoints: [
                    "Technical success does not equal teamwork success.",
                    "Emotionally sensitive follow-up may be needed."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Unresolved Miscommunication",
                summaryText: [
                    "Troubleshooting completed, but communication and trust deteriorated."
                ],
                learningPoints: [
                    "Ignoring tone damages junior confidence.",
                    "Soft skills affect operational reliability."
                ]
            }
        ]
    },
    {
        id: "ENGINE-04",
        department: "ENGINE",
        title: "Noise-Induced Miscommunication During Watch",
        difficulty: "MEDIUM",
        learningFocus: ["Communication Clarity", "Assertiveness", "Team Awareness"],

        initialStats: {
            communication: 50,
            conflictResolution: 45,
            teamwork: 48,
            stability: 55,
            risk: 20
        },

        missionBrief: {
            introTitle: "Watchkeeping :: Misheard Instruction",
            introText: [
                "In the noisy engine room, a Motorman mishears your instruction for monitoring generator parameters.",
                "He records incorrect data, and the Duty Engineer grows frustrated.",
                "Your role is to restore clarity, encourage verification, and reduce frustration."
            ],
            keyObjectives: [
                "Promote repeat-back communication.",
                "Address mistakes without blame.",
                "Improve situational awareness under noisy conditions."
            ]
        },

        actors: [
            { id: "YOU", role: "Duty Engineer (You)" },
            { id: "MM", role: "Motorman" },
            { id: "OILER", role: "Oiler" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "Generator parameters were logged incorrectly due to noise.",
                npcDialogue: [
                    { actorId: "MM", line: "I thought you said 3.2 bar, not 2.3 bar!" }
                ],
                playerPrompt: "Your response?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Calmly explain the miscommunication and encourage repeat-back.",
                        tag: "Clarify",
                        effects: { communication: +7, teamwork: +6, conflictResolution: +5 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Scold the Motorman for not listening properly.",
                        tag: "Blame",
                        effects: { communication: -5, teamwork: -6 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "The Motorman nods, still nervous.",
                npcDialogue: [
                    { actorId: "MM", line: "Sorry… hard to hear anything down here." }
                ],
                playerPrompt: "How do you proceed?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Acknowledge the noise and ask him to double-check verbally next time.",
                        tag: "Support",
                        effects: { communication: +7, teamwork: +5 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Tell him to pay more attention.",
                        tag: "Pressure",
                        effects: { communication: -3 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "Data logging resumes, but teamwork still feels shaky.",
                npcDialogue: [
                    { actorId: "OILER", line: "Noise is crazy today. Maybe we need clearer signals." }
                ],
                playerPrompt: "Your action?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Propose a hand signal or written note method for key instructions.",
                        tag: "Innovation",
                        effects: { communication: +8, teamwork: +7, stability: +5 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Tell them the current system is fine as it is.",
                        tag: "Dismiss",
                        effects: { communication: -3 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "The watch nears completion.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s maintain clear communication despite the noise." }
                ],
                playerPrompt: "Final step?",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Summarize lessons learned and suggest improvements.",
                        tag: "Closure",
                        effects: { communication: +6, teamwork: +6 },
                        nextStepId: null
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Say nothing further.",
                        tag: "Silent",
                        effects: { communication: -3 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 72, maxRisk: 40 },
                summaryTitle: "Communication Strengthened Despite Noise",
                summaryText: [
                    "The team adapted effectively, using clearer channels and improving data accuracy."
                ],
                learningPoints: [
                    "Noise requires special communication strategies.",
                    "Repeat-back prevents errors.",
                    "Psychological safety improves reporting."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 71 },
                summaryTitle: "Adequate Outcome",
                summaryText: [
                    "The task was completed, though issues may resurface."
                ],
                learningPoints: [
                    "Small improvements can prevent recurring issues.",
                    "Consistency matters."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Communication Weakness Persists",
                summaryText: [
                    "Team confidence decreased and risk of future error increased."
                ],
                learningPoints: [
                    "Ignoring communication problems is unsafe.",
                    "Leadership requires active clarity."
                ]
            }
        ]
    },
    {
        id: "ENGINE-05",
        department: "ENGINE",
        title: "Conflicting Priorities During Bilge System Checks",
        difficulty: "HIGH",
        learningFocus: ["Conflict Resolution", "Prioritization", "Team Leadership"],

        initialStats: {
            communication: 46,
            conflictResolution: 44,
            teamwork: 48,
            stability: 55,
            risk: 30
        },

        missionBrief: {
            introTitle: "Bilge System :: Priority Conflict",
            introText: [
                "During routine bilge system checks, the Motorman wants to finish the job quickly, while the Oiler insists on performing a more detailed inspection.",
                "The two begin arguing loudly, delaying completion.",
                "Your role is to resolve the priority conflict and maintain team productivity."
            ],
            keyObjectives: [
                "Understand both viewpoints.",
                "Set clear priorities.",
                "Restore cooperation."
            ]
        },

        actors: [
            { id: "YOU", role: "Second Engineer (You)" },
            { id: "MM", role: "Motorman" },
            { id: "OILER", role: "Oiler" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "The Motorman says the detailed check is unnecessary, while the Oiler insists it's required.",
                npcDialogue: [
                    { actorId: "MM", line: "We don’t have time—let’s get this over with!" },
                    { actorId: "OILER", line: "Skipping steps is risky!" }
                ],
                playerPrompt: "How do you intervene?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Ask both to explain their reasoning to understand the core issue.",
                        tag: "Inquiry",
                        effects: { communication: +7, conflictResolution: +6 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Side with the Motorman to save time.",
                        tag: "BiasFast",
                        effects: { communication: -4, teamwork: -5 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Tell them both to stop arguing and continue the job.",
                        tag: "Suppress",
                        effects: { communication: -4, teamwork: -4 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "Both present valid concerns: time pressure vs. thoroughness.",
                npcDialogue: [
                    { actorId: "OILER", line: "We should check the strainer properly. It’s been clogged before." }
                ],
                playerPrompt: "Your next step?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Acknowledge both viewpoints and propose a balanced approach.",
                        tag: "Balance",
                        effects: { communication: +7, teamwork: +6, conflictResolution: +5 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Tell them to follow your decision without further discussion.",
                        tag: "TopDown",
                        effects: { teamwork: -3 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "The atmosphere stabilizes but both await your decision.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s choose the best approach for safety and time." }
                ],
                playerPrompt: "How do you decide?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Split tasks: one checks the strainer, one prepares the next step.",
                        tag: "DivideWork",
                        effects: { teamwork: +8, communication: +7, stability: +5 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Choose the faster method without compromise.",
                        tag: "Fast",
                        effects: { communication: -4, teamwork: -5 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "The bilge check progresses, but lingering tension remains.",
                npcDialogue: [
                    { actorId: "MM", line: "Alright… I’ll handle the prep." }
                ],
                playerPrompt: "How do you reinforce teamwork?",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Confirm each person’s contribution and highlight the teamwork success.",
                        tag: "Reinforce",
                        effects: { teamwork: +7, communication: +6 },
                        nextStepId: "STEP5"
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Say nothing and continue.",
                        tag: "Silent",
                        effects: { communication: -3 },
                        nextStepId: "STEP5"
                    }
                ]
            },

            {
                id: "STEP5",
                narrator: "System",
                text: "The job is complete. They wait for your closing feedback.",
                npcDialogue: [
                    { actorId: "YOU", line: "Good job — let’s keep the communication open next time." }
                ],
                playerPrompt: "Final action?",
                options: [
                    {
                        id: "STEP5_OPT_A",
                        text: "Thank both and summarize the compromise reached.",
                        tag: "Closure",
                        effects: { communication: +6, teamwork: +6, conflictResolution: +5 },
                        nextStepId: null
                    },
                    {
                        id: "STEP5_OPT_B",
                        text: "End without comments.",
                        tag: "SilentEnd",
                        effects: { communication: -4 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 75, maxRisk: 40 },
                summaryTitle: "Balanced Priorities, Stronger Team",
                summaryText: [
                    "You balanced safety and efficiency successfully.",
                    "Both crew members gained respect for each other’s perspective."
                ],
                learningPoints: [
                    "Balanced decisions support morale.",
                    "Conflicts require understanding both sides.",
                    "Spoken reinforcement strengthens teamwork."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 74 },
                summaryTitle: "Outcome Acceptable, Tension Remains",
                summaryText: [
                    "The job was completed, but the disagreement was not fully resolved."
                ],
                learningPoints: [
                    "Follow-up conversations help complete resolution.",
                    "Team alignment requires continued effort."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Poor Resolution & Weak Cooperation",
                summaryText: [
                    "The conflict was not resolved, lowering morale and increasing future risk."
                ],
                learningPoints: [
                    "Avoiding conflict worsens teamwork.",
                    "Leaders must address conflicting priorities clearly."
                ]
            }
        ]
    },
    {
        id: "GALLEY-01",
        department: "GALLEY",
        title: "Misunderstanding During Meal Preparation",
        difficulty: "MEDIUM",
        learningFocus: ["Communication", "Teamwork", "Stress Management"],

        initialStats: {
            communication: 50,
            conflictResolution: 45,
            teamwork: 50,
            stability: 55,
            risk: 20
        },

        missionBrief: {
            introTitle: "Pre-Lunch Rush :: Confusion in the Galley",
            introText: [
                "Lunch service is approaching, and the Cook delegates tasks to the Galley Rating.",
                "The Rating misinterprets the instructions and prepares the wrong ingredients, delaying the meal.",
                "The Cook becomes visibly frustrated and raises his voice.",
                "Your role is to restore order, reduce tension, and keep service on schedule."
            ],
            keyObjectives: [
                "Clarify instructions under time pressure.",
                "Promote calm communication.",
                "Maintain teamwork in a busy environment."
            ]
        },

        actors: [
            { id: "YOU", role: "Chief Cook Assistant (You)" },
            { id: "COOK", role: "Cook" },
            { id: "GR", role: "Galley Rating" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "The Cook shouts: 'I said cut VEGETABLES for stew! Why are you defrosting fish?'",
                npcDialogue: [
                    { actorId: "GR", line: "I thought today's meal was fish stew… sorry!" }
                ],
                playerPrompt: "How do you intervene?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Calmly halt the shouting and restate the instructions to both.",
                        tag: "Clarify",
                        effects: { communication: +7, teamwork: +6, conflictResolution: +5 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Scold the Rating for not paying attention.",
                        tag: "BlameJunior",
                        effects: { communication: -5, teamwork: -5 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Tell everyone to stop arguing and just continue cooking.",
                        tag: "Suppress",
                        effects: { communication: -4, stability: -3 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "The Cook is still irritated, and the Rating is now anxious.",
                npcDialogue: [
                    { actorId: "COOK", line: "We have deadlines. We can't waste time!" }
                ],
                playerPrompt: "Your response?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Acknowledge the time pressure and encourage respectful tone.",
                        tag: "EmpathyLeader",
                        effects: { communication: +6, teamwork: +6, conflictResolution: +5 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Tell the Cook to calm down forcefully.",
                        tag: "ConfrontSenior",
                        effects: { conflictResolution: -3, teamwork: -4 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_C",
                        text: "Ignore the emotional atmosphere.",
                        tag: "AvoidEmotions",
                        effects: { teamwork: -4 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "Tasks are half-complete and the Rating awaits direction.",
                npcDialogue: [
                    { actorId: "GR", line: "What should I focus on first…?" }
                ],
                playerPrompt: "How do you restore structure?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Break down the tasks: vegetables first, fish later.",
                        tag: "TaskClarity",
                        effects: { communication: +7, teamwork: +6, stability: +5 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Tell the Rating to figure it out alone.",
                        tag: "SinkOrSwim",
                        effects: { teamwork: -5, communication: -4 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "Food preparation resumes. Team looks to you for closing tone.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s keep communication clear so we stay on schedule." }
                ],
                playerPrompt: "Final action?",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Thank both and reinforce respectful communication.",
                        tag: "Closure",
                        effects: { communication: +6, teamwork: +6 },
                        nextStepId: null
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Say nothing further.",
                        tag: "Silent",
                        effects: { communication: -3 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 75, maxRisk: 35 },
                summaryTitle: "Smooth Recovery",
                summaryText: [
                    "Meal preparation resumed efficiently, and the emotional tension subsided.",
                    "The team felt supported and motivated."
                ],
                learningPoints: [
                    "Time pressure magnifies communication issues.",
                    "Clarity and tone control are critical.",
                    "Supportive communication improves productivity."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 74 },
                summaryTitle: "Meal Completed, but Unease Lingers",
                summaryText: [
                    "The galley functioned, but underlying tension remained unsolved."
                ],
                learningPoints: [
                    "Follow-up conversations can strengthen team relationships.",
                    "Stress management requires consistency."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Tense Atmosphere, Weak Collaboration",
                summaryText: [
                    "Meal was prepared, but communication reduced morale and increased future risk."
                ],
                learningPoints: [
                    "Blame erodes teamwork.",
                    "Ignoring emotional cues damages interpersonal trust."
                ]
            }
        ]
    },
    {
        id: "GALLEY-02",
        department: "GALLEY",
        title: "Cultural Misunderstanding Over Food Portions",
        difficulty: "HIGH",
        learningFocus: ["Cultural Awareness", "Communication", "Conflict Resolution"],

        initialStats: {
            communication: 45,
            conflictResolution: 45,
            teamwork: 48,
            stability: 55,
            risk: 20
        },

        missionBrief: {
            introTitle: "Dinner Service :: Portion Size Disagreement",
            introText: [
                "During dinner service, a crew member complains loudly about receiving a smaller portion compared to others.",
                "Another crew member from a different nationality argues back that portion sizes should reflect personal dietary needs.",
                "The argument disrupts the calm of the mess room.",
                "Your assignment is to mediate respectfully and improve cultural understanding."
            ],
            keyObjectives: [
                "Navigate cultural expectations sensitively.",
                "Restore respect in the mess room.",
                "Promote fairness and understanding."
            ]
        },

        actors: [
            { id: "YOU", role: "Cook Assistant (You)" },
            { id: "CR1", role: "Crew Member A" },
            { id: "CR2", role: "Crew Member B" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "CR1 shouts: 'Why is MY portion smaller? This isn’t fair!'",
                npcDialogue: [
                    { actorId: "CR2", line: "Different diets need different portions. Stop complaining!" }
                ],
                playerPrompt: "How do you intervene?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Calmly ask both to lower their voices and move aside for discussion.",
                        tag: "Deescalate",
                        effects: { communication: +7, conflictResolution: +6 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Tell CR1 he should accept what he gets.",
                        tag: "Dismiss",
                        effects: { communication: -5, teamwork: -4 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Tell CR2 he is being disrespectful.",
                        tag: "SingleOut",
                        effects: { conflictResolution: -3 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "The tension reduces slightly once separated.",
                npcDialogue: [
                    { actorId: "CR1", line: "Where I come from, equal portions mean respect." },
                    { actorId: "CR2", line: "In my culture, portions depend on how much you need, not equal size." }
                ],
                playerPrompt: "How do you address the cultural difference?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Acknowledge both cultural perspectives and highlight fairness intentions.",
                        tag: "CulturalBridge",
                        effects: { communication: +7, teamwork: +6 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Tell them culture doesn't matter; the galley decides the portions.",
                        tag: "TopDown",
                        effects: { communication: -4 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "Both listen, but still look unconvinced.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s understand each other before we continue." }
                ],
                playerPrompt: "How do you mediate?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Ask each one to state what 'fairness' means to them.",
                        tag: "DefineFairness",
                        effects: { communication: +7, conflictResolution: +6 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Tell them to stop debating and move on.",
                        tag: "ShutDown",
                        effects: { communication: -3 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "Both describe their cultural expectations.",
                npcDialogue: [
                    { actorId: "CR2", line: "Okay, maybe I misunderstood your reaction." }
                ],
                playerPrompt: "How do you close the conflict?",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Offer an equitable compromise and explain portioning guidelines transparently.",
                        tag: "Compromise",
                        effects: { communication: +7, teamwork: +6, stability: +5 },
                        nextStepId: "STEP5"
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Tell them to accept the system as is.",
                        tag: "Rigid",
                        effects: { communication: -4 },
                        nextStepId: "STEP5"
                    }
                ]
            },

            {
                id: "STEP5",
                narrator: "System",
                text: "They await your final message.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s respect each other’s backgrounds and communicate openly." }
                ],
                playerPrompt: "Final action?",
                options: [
                    {
                        id: "STEP5_OPT_A",
                        text: "Reinforce mutual respect and thank them for discussing openly.",
                        tag: "Respect",
                        effects: { communication: +6, teamwork: +6 },
                        nextStepId: null
                    },
                    {
                        id: "STEP5_OPT_B",
                        text: "Walk away without comment.",
                        tag: "Silent",
                        effects: { communication: -3 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 75, maxRisk: 35 },
                summaryTitle: "Cultural Harmony Achieved",
                summaryText: [
                    "Both crew members understood each other’s perspectives and left feeling respected."
                ],
                learningPoints: [
                    "Cultural context shapes expectations.",
                    "Fairness must be communicated transparently.",
                    "Active mediation prevents unnecessary conflict."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 74 },
                summaryTitle: "Issue Resolved, but Mild Tension Remains",
                summaryText: [
                    "Both accepted the explanation, though some discomfort lingered."
                ],
                learningPoints: [
                    "Cultural issues often require additional follow-up.",
                    "Patience and proactive discussion help long-term harmony."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Cultural Misunderstanding Unresolved",
                summaryText: [
                    "Both left feeling unheard, which may affect future cooperation."
                ],
                learningPoints: [
                    "Dismissing cultural factors damages morale.",
                    "Leadership requires curiosity about differences."
                ]
            }
        ]
    },
    {
        id: "GALLEY-03",
        department: "GALLEY",
        title: "Conflict Between Chief Cook and Galley Rating",
        difficulty: "HIGH",
        learningFocus: ["Assertiveness", "Respectful Communication", "Conflict Resolution"],

        initialStats: {
            communication: 48,
            conflictResolution: 45,
            teamwork: 48,
            stability: 55,
            risk: 25
        },

        missionBrief: {
            introTitle: "Hierarchy Conflict :: Feedback Gone Wrong",
            introText: [
                "The Chief Cook criticizes the Galley Rating harshly about cleaning standards.",
                "The Rating feels humiliated and becomes defensive.",
                "Your role is to intervene respectfully between different ranks and restore professionalism."
            ],
            keyObjectives: [
                "Address disrespect without undermining authority.",
                "Coach junior crew constructively.",
                "Preserve dignity for both sides."
            ]
        },

        actors: [
            { id: "YOU", role: "Cook Assistant (You)" },
            { id: "CC", role: "Chief Cook" },
            { id: "GR", role: "Galley Rating" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "The Chief Cook slams a pot: “This is dirty again! How many times must I repeat myself?”",
                npcDialogue: [
                    { actorId: "GR", line: "I DID clean it… just maybe not good enough for you." }
                ],
                playerPrompt: "How do you intervene?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Politely ask both to pause so the issue can be addressed calmly.",
                        tag: "Pause",
                        effects: { communication: +7, conflictResolution: +6 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Tell the Rating to accept the criticism quietly.",
                        tag: "TopDown",
                        effects: { communication: -5, teamwork: -6 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_C",
                        text: "Tell the Chief Cook he is being unreasonable.",
                        tag: "Confront",
                        effects: { conflictResolution: -4 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "The environment cools slightly. Both look frustrated.",
                npcDialogue: [
                    { actorId: "CC", line: "I’m just tired of repeating simple tasks…" }
                ],
                playerPrompt: "Your approach?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Acknowledge the Chief Cook’s frustration and restate expectations constructively.",
                        tag: "Reframe",
                        effects: { communication: +7, teamwork: +6 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Tell him he must stop complaining.",
                        tag: "ShutDown",
                        effects: { communication: -4 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "The Rating appears discouraged.",
                npcDialogue: [
                    { actorId: "GR", line: "I’m trying my best, but nothing is ever enough." }
                ],
                playerPrompt: "What do you do?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Coach the Rating privately on how to meet cleaning expectations.",
                        tag: "Coaching",
                        effects: { teamwork: +6, communication: +6 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Tell him to stop taking feedback personally.",
                        tag: "Dismiss",
                        effects: { communication: -3 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "Both now seem calmer but disconnected.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s bring this to a good closure." }
                ],
                playerPrompt: "Next step?",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Facilitate a respectful exchange about expectations.",
                        tag: "Dialogue",
                        effects: { communication: +7, conflictResolution: +7, teamwork: +6 },
                        nextStepId: "STEP5"
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Keep them apart and avoid further discussion.",
                        tag: "AvoidConflict",
                        effects: { teamwork: -4 },
                        nextStepId: "STEP5"
                    }
                ]
            },

            {
                id: "STEP5",
                narrator: "System",
                text: "Time to conclude.",
                npcDialogue: [
                    { actorId: "YOU", line: "Thank you both—let’s keep communication constructive moving forward." }
                ],
                playerPrompt: "Final action?",
                options: [
                    {
                        id: "STEP5_OPT_A",
                        text: "Summarize expectations and reinforce mutual respect.",
                        tag: "Respect",
                        effects: { communication: +6, teamwork: +6 },
                        nextStepId: null
                    },
                    {
                        id: "STEP5_OPT_B",
                        text: "Leave without summary.",
                        tag: "Silent",
                        effects: { communication: -3 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 75, maxRisk: 35 },
                summaryTitle: "Respectful Leadership Restored",
                summaryText: [
                    "The Chief Cook delivered feedback more professionally, and the Rating felt supported.",
                    "Galley morale increased significantly."
                ],
                learningPoints: [
                    "Tone matters as much as accuracy.",
                    "Constructive coaching prevents defensive reactions.",
                    "Leaders must balance authority with respect."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 74 },
                summaryTitle: "Issue Managed, but Feelings Mixed",
                summaryText: [
                    "The conflict ended, but some emotional discomfort remained."
                ],
                learningPoints: [
                    "Follow-up improves long-term morale.",
                    "Not all situations resolve instantly."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Conflict Unresolved",
                summaryText: [
                    "The Rating felt unsupported and the Cook felt undermined, damaging cooperation."
                ],
                learningPoints: [
                    "Avoiding closure weakens teamwork.",
                    "Respectful mediation is essential in hierarchical settings."
                ]
            }
        ]
    },
    {
        id: "GALLEY-04",
        department: "GALLEY",
        title: "Conflict Over Dietary Restrictions",
        difficulty: "MEDIUM",
        learningFocus: ["Empathy", "Communication", "Conflict Resolution"],

        initialStats: {
            communication: 48,
            conflictResolution: 44,
            teamwork: 50,
            stability: 55,
            risk: 20
        },

        missionBrief: {
            introTitle: "Dietary Misunderstanding :: Health Needs Ignored",
            introText: [
                "One crew member with medical dietary restrictions becomes upset after receiving food that does not match their needs.",
                "Another crew member mocks the restrictions as unnecessary.",
                "Your job is to de-escalate and uphold dignity and safety."
            ],
            keyObjectives: [
                "Maintain respect for medical needs.",
                "Correct insensitive comments.",
                "Restore psychological safety in the mess room."
            ]
        },

        actors: [
            { id: "YOU", role: "Cook Assistant (You)" },
            { id: "CR1", role: "Crew Member with dietary restriction" },
            { id: "CR2", role: "Insensitive crew member" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "CR1 says: “I can’t eat this, it will make me sick!” CR2 laughs.",
                npcDialogue: [
                    { actorId: "CR2", line: "You’re too picky. Just eat it." }
                ],
                playerPrompt: "Your move?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Ask CR2 to stop mocking and address CR1 respectfully.",
                        tag: "Protect",
                        effects: { communication: +7, conflictResolution: +6 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Tell CR1 to simply avoid the food quietly.",
                        tag: "Dismiss",
                        effects: { communication: -5 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "CR2 stops laughing but looks annoyed.",
                npcDialogue: [
                    { actorId: "CR1", line: "I’m not making it up… I have a doctor’s note." }
                ],
                playerPrompt: "How do you address this?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Explain that dietary needs are mandatory for safety, not optional.",
                        tag: "Educate",
                        effects: { communication: +7, teamwork: +5 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Tell them both to stop talking about it.",
                        tag: "ShutDown",
                        effects: { communication: -4 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "The mess room quiets. Both look to you.",
                npcDialogue: [
                    { actorId: "CR2", line: "Fine… I didn’t know it was serious." }
                ],
                playerPrompt: "Next step?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Promote empathy: ask each to express their viewpoint calmly.",
                        tag: "Dialogue",
                        effects: { communication: +7, conflictResolution: +7 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Move on without further talk.",
                        tag: "AvoidResolution",
                        effects: { communication: -4 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "Time to close the discussion.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s respect each other’s health and choices on board." }
                ],
                playerPrompt: "Final action?",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Summarize understanding and reinforce respect.",
                        tag: "Closure",
                        effects: { communication: +6, teamwork: +6 },
                        nextStepId: null
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Finish without closing comments.",
                        tag: "Silent",
                        effects: { communication: -3 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 72, maxRisk: 30 },
                summaryTitle: "Respect Restored",
                summaryText: [
                    "Both crew members left with increased understanding and empathy."
                ],
                learningPoints: [
                    "Health-related needs must never be ignored.",
                    "Mocking or minimizing others harms team cohesion.",
                    "Galley personnel play a key role in crew wellbeing."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 71 },
                summaryTitle: "Issue Managed with Some Tension",
                summaryText: [
                    "The conflict ended, but emotional discomfort remained."
                ],
                learningPoints: [
                    "Follow-up ensures lasting respect.",
                    "Empathy takes time to build."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Unresolved Dietary Conflict",
                summaryText: [
                    "CR1 felt unsupported, and CR2 felt irritated, damaging group morale."
                ],
                learningPoints: [
                    "Ignoring sensitive issues harms psychological safety.",
                    "Respect must be modeled consistently."
                ]
            }
        ]
    },
    {
        id: "GALLEY-05",
        department: "GALLEY",
        title: "Hygiene Standards Dispute",
        difficulty: "HIGH",
        learningFocus: ["Safety Culture", "Communication", "Coaching"],

        initialStats: {
            communication: 46,
            conflictResolution: 44,
            teamwork: 48,
            stability: 55,
            risk: 25
        },

        missionBrief: {
            introTitle: "Galley Hygiene :: Standards Not Followed",
            introText: [
                "During an inspection, you notice that a junior galley crew member skipped part of the sanitizing routine.",
                "The Cook openly scolds him loudly in front of others.",
                "Your role is to address the issue constructively and prevent humiliation."
            ],
            keyObjectives: [
                "Promote safety culture without shame.",
                "Coach proper hygiene standards.",
                "Restore professionalism."
            ]
        },

        actors: [
            { id: "YOU", role: "Cook Assistant (You)" },
            { id: "COOK", role: "Cook" },
            { id: "JR", role: "Junior Galley Crew" }
        ],

        steps: [
            {
                id: "STEP1",
                narrator: "System",
                text: "The Cook shouts: “You call this CLEAN? Look at the counters!”",
                npcDialogue: [
                    { actorId: "JR", line: "I DID wipe them… I must have missed a spot." }
                ],
                playerPrompt: "First action?",
                options: [
                    {
                        id: "STEP1_OPT_A",
                        text: "Ask the Cook to lower his voice and discuss calmly.",
                        tag: "Deescalate",
                        effects: { communication: +7, conflictResolution: +6 },
                        nextStepId: "STEP2"
                    },
                    {
                        id: "STEP1_OPT_B",
                        text: "Tell the JR he must accept criticism silently.",
                        tag: "Authority",
                        effects: { communication: -4, teamwork: -5 },
                        nextStepId: "STEP2"
                    }
                ]
            },

            {
                id: "STEP2",
                narrator: "System",
                text: "Tension lowers, but the JR looks ashamed.",
                npcDialogue: [
                    { actorId: "JR", line: "I didn’t mean to skip the disinfection step…" }
                ],
                playerPrompt: "How do you handle this?",
                options: [
                    {
                        id: "STEP2_OPT_A",
                        text: "Explain the importance of hygiene calmly and clearly without blame.",
                        tag: "Educate",
                        effects: { communication: +7, teamwork: +6 },
                        nextStepId: "STEP3"
                    },
                    {
                        id: "STEP2_OPT_B",
                        text: "Tell him mistakes like this are unacceptable.",
                        tag: "Scold",
                        effects: { communication: -3 },
                        nextStepId: "STEP3"
                    }
                ]
            },

            {
                id: "STEP3",
                narrator: "System",
                text: "The Cook still looks irritated.",
                npcDialogue: [
                    { actorId: "COOK", line: "We can't afford hygiene failures—ever." }
                ],
                playerPrompt: "How do you address his frustration?",
                options: [
                    {
                        id: "STEP3_OPT_A",
                        text: "Acknowledge his concerns and suggest a supportive coaching approach.",
                        tag: "CoachLeader",
                        effects: { communication: +7, conflictResolution: +6, teamwork: +5 },
                        nextStepId: "STEP4"
                    },
                    {
                        id: "STEP3_OPT_B",
                        text: "Tell him to handle it however he wants.",
                        tag: "HandsOff",
                        effects: { teamwork: -4 },
                        nextStepId: "STEP4"
                    }
                ]
            },

            {
                id: "STEP4",
                narrator: "System",
                text: "Training opportunity emerges.",
                npcDialogue: [
                    { actorId: "YOU", line: "Let’s walk through the sanitation process step-by-step." }
                ],
                playerPrompt: "Next step?",
                options: [
                    {
                        id: "STEP4_OPT_A",
                        text: "Coach the JR through the sanitation checklist.",
                        tag: "Training",
                        effects: { communication: +7, teamwork: +6, stability: +5 },
                        nextStepId: "STEP5"
                    },
                    {
                        id: "STEP4_OPT_B",
                        text: "Have him repeat the task alone without guidance.",
                        tag: "SinkOrSwim",
                        effects: { communication: -3 },
                        nextStepId: "STEP5"
                    }
                ]
            },

            {
                id: "STEP5",
                narrator: "System",
                text: "Time to conclude.",
                npcDialogue: [
                    { actorId: "YOU", line: "Good teamwork—let’s keep hygiene above standard." }
                ],
                playerPrompt: "Final action?",
                options: [
                    {
                        id: "STEP5_OPT_A",
                        text: "Reinforce safety culture and express appreciation.",
                        tag: "Praise",
                        effects: { communication: +6, teamwork: +6 },
                        nextStepId: null
                    },
                    {
                        id: "STEP5_OPT_B",
                        text: "End without comments.",
                        tag: "Silent",
                        effects: { communication: -3 },
                        nextStepId: null
                    }
                ]
            }
        ],

        endings: [
            {
                id: "GOOD",
                condition: { minScore: 74, maxRisk: 35 },
                summaryTitle: "Professional Standard Restored",
                summaryText: [
                    "Hygiene improved and both Cook and JR felt respected and motivated."
                ],
                learningPoints: [
                    "Feedback should correct, not humiliate.",
                    "Coaching builds long-term competence.",
                    "Safety culture grows through positive reinforcement."
                ]
            },
            {
                id: "MIXED",
                condition: { minScore: 55, maxScore: 73 },
                summaryTitle: "Issue Resolved with Mixed Feelings",
                summaryText: [
                    "Hygiene improved, but emotional tension remained."
                ],
                learningPoints: [
                    "Follow-up enhances confidence.",
                    "Emotional needs matter in training."
                ]
            },
            {
                id: "POOR",
                condition: { maxScore: 54 },
                summaryTitle: "Morale and Standards Affected",
                summaryText: [
                    "The JR felt unsupported and the Cook felt isolated.",
                    "Future hygiene compliance may suffer."
                ],
                learningPoints: [
                    "Supportive communication is essential for safety tasks.",
                    "Avoiding coaching harms long-term performance."
                ]
            }
        ]
    },

];
