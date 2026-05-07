export default function AspireMarionMiniPage() {
  const podFunctions = [
    "Embedded DevQA\nFeature-team QA support inside development cycles",
    "LiveOps Validation\nEvents, feature flags, configs, economy, and release checks",
    "Release Coordination\nCross-functional support around readiness, handoff, and execution",
    "Player Experience Support\nPlayer-facing quality, sentiment, edge cases, and service awareness",
    "Localization Operations\nContent readiness, language rollout support, and launch coordination",
    "Monetization & Economy QA\nOffer logic, progression checks, economy validation, and event alignment",
  ];

  const differentiators = [
    "Integrated into daily team flow\nPresent in standups, planning, and sprint execution. Not a separate QA layer or external queue.",
    "Feature-level QA ownership\nQA embedded per feature or system. Responsible for validation before release readiness.",
    "Continuous validation, not final testing\nTesting happens during development, not compressed into end-of-cycle QA windows.",
    "Automation that supports delivery\nUI, API, and backend test coverage built to reduce regressions and support faster releases.",
    "Pipeline-aware QA support\nAligned with CI/CD workflows and build validation, not just manual passes.",
    "Live config and event validation\nQA extends into LiveOps and validates configs, events, and feature behavior in production.",
    "F2P system awareness\nUnderstands economy balance, progression systems, and monetization impact. Tests beyond functionality.",
    "Real-time collaboration with NA teams\nTimezone alignment supports faster iteration and less delay between dev and QA cycles.",
    "Technical QA capability\nEngine familiarity and ability to read production code supports deeper issue identification and faster resolution.",
    "Accountability-driven model\nQA operates with ownership and integration, not ticket-based execution.",
  ];

  const scopelyFit = [
    {
      title: "Deep integration with development",
      points: [
        "Works inside the dev cycle, not after feature completion",
        "Supports shift-left testing during development",
        "Can embed QA engineers into feature teams and pods",
      ],
      bg: "#7af9ff",
    },
    {
      title: "Technical QA capabilities",
      points: [
        "Supports automation across UI, API, and backend testing",
        "Can align with CI/CD workflows including Jenkins and GitHub Actions",
        "Comfortable with scripting, game engine workflows, and understanding production code",
      ],
      bg: "#54efff",
    },
    {
      title: "Live Ops and production mindset",
      points: [
        "Experience validating A/B testing, feature flags, events, and live configs",
        "Supports economies, data validation, and scale edge cases",
        "Built around player behavior awareness and live service reality",
      ],
      bg: "#2be6ff",
    },
    {
      title: "Gaming-specific domain relevance",
      points: [
        "Supports F2P systems including economy, progression, and monetization",
        "Can align around genre-specific quality needs",
        "Familiar with mobile platform expectations including iOS and Android",
      ],
      bg: "#9bf6ff",
    },
    {
      title: "Collaboration and communication",
      points: [
        "Strong English communication across written and spoken workflows",
        "Comfortable inside Agile ceremonies including standups, planning, and retros",
        "Senior profiles who can own outcomes, flag risk, and contribute directly",
      ],
      bg: "#74f2ff",
    },
    {
      title: "Open market flexibility",
      points: [
        "Comfortable with game teams interviewing DevQA candidates",
        "Clear SLA expectations for sourcing and delivery",
        "Operates well within a competitive open market model",
      ],
      bg: "#4deaff",
    },
  ];

  const pricing = [
    {
      tier: "Single POD",
      price: "$12K – $20K USD / MONTH",
      note: "Best for a focused QA or operational lane tied to a specific title, release stream, or support need.",
    },
    {
      tier: "Growth POD",
      price: "$20K – $45K USD / MONTH",
      note: "Built for teams that need broader cross-functional support across QA, LiveOps, release coordination, or player-facing operations.",
    },
    {
      tier: "Multi POD",
      price: "$45K+ USD / MONTH",
      note: "Designed for larger-scale operational infrastructure across multiple functions, workstreams, or game needs over time.",
    },
  ];

  const sectionWrap = {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "76px 24px",
  } as const;

  const sectionTitle = {
    fontSize: "14px",
    fontWeight: 900,
    textTransform: "uppercase" as const,
    letterSpacing: "0.34em",
    margin: 0,
  };

  const sectionHeading = {
    fontSize: "46px",
    fontWeight: 900,
    textTransform: "uppercase" as const,
    letterSpacing: "-0.03em",
    margin: "14px 0 28px",
    lineHeight: 1.02,
  };

  const primaryCtaStyle = {
    display: "inline-block",
    borderRadius: "18px",
    border: "2px solid rgba(255,255,255,0.18)",
    background: "#ff3ea5",
    padding: "16px 26px",
    fontSize: "14px",
    fontWeight: 900,
    textTransform: "uppercase" as const,
    letterSpacing: "0.18em",
    color: "#ffffff",
    textDecoration: "none",
    boxShadow: "0 0 35px rgba(255,62,165,0.35)",
  };

  const secondaryCtaStyle = {
    display: "inline-block",
    borderRadius: "18px",
    border: "2px solid rgba(255,255,255,0.18)",
    background: "#1ff5ff",
    padding: "16px 26px",
    fontSize: "14px",
    fontWeight: 900,
    textTransform: "uppercase" as const,
    letterSpacing: "0.18em",
    color: "#000000",
    textDecoration: "none",
    boxShadow: "0 0 35px rgba(31,245,255,0.35)",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        overflowX: "hidden",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(90deg, #06111b 0%, #0d1b2d 30%, #111a2c 55%, #101625 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at left center, rgba(154,102,255,0.35), transparent 28%), radial-gradient(circle at top right, rgba(31,245,255,0.15), transparent 26%)",
          }}
        />
        <div style={{ ...sectionWrap, position: "relative" }}>
          <div
            style={{
              display: "grid",
              gap: "42px",
              gridTemplateColumns: "minmax(300px, 360px) minmax(0, 1fr)",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "280px",
                  minHeight: "280px",
                  borderRadius: "2px",
                  background: "#000000",
                  boxShadow:
                    "0 0 60px rgba(154,102,255,0.55), 0 0 120px rgba(31,245,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px",
                }}
              >
                <img
                  src="/aspire-pods-logo.png"
                  alt="Aspire PODS logo"
                  style={{
                    width: "100%",
                    maxWidth: "220px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.36em",
                  color: "#69e8ff",
                  margin: 0,
                }}
              >
                Aspire Agency Global Inc.
              </p>

              <h1
                style={{
                  margin: "16px 0 22px",
                  maxWidth: "900px",
                  fontSize: "62px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 0.95,
                  letterSpacing: "-0.035em",
                }}
              >
                Aspire PODS for Scopely’s North America QA and operational support
              </h1>

              <p
                style={{
                  margin: "0 0 18px",
                  maxWidth: "720px",
                  fontSize: "20px",
                  lineHeight: 1.58,
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                Prepared for Marion, this overview shows how Aspire PODS can support
                embedded QA, LiveOps, and production workflows across North America.
              </p>

              <p
                style={{
                  margin: 0,
                  maxWidth: "720px",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: 1.62,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Built to plug into active development cycles with real operational support.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginTop: "30px",
                }}
              >
                <a
                  href="https://calendly.com/aspiritualwarriorspath/synergy-call-aspire-x-earth-school-x-partnerships"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={primaryCtaStyle}
                >
                  Schedule time with Jess
                </a>

                <a href="#pricing" style={secondaryCtaStyle}>
                  View pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section style={{ background: "#ff3ea5", color: "#ffffff" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "920px", marginBottom: "30px" }}>
            <p style={{ ...sectionTitle, color: "#fff3a2" }}>At a glance</p>
            <h2 style={sectionHeading}>
              The structure, the fit, and the operating model
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: "18px",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            {[
              {
                title: "Scope",
                text: "North America QA, LiveOps, production support, and player-facing operational coverage.",
                bg: "#ff63b9",
              },
              {
                title: "Model",
                text: "Embedded POD structure built to work inside active development and release cycles.",
                bg: "#ff8a3d",
              },
              {
                title: "Operational fit",
                text: "Designed for shift-left QA, DevQA integration, LiveOps validation, and cross-functional alignment.",
                bg: "#7c4dff",
              },
              {
                title: "North America support",
                text: "Timezone-aligned collaboration that supports faster communication, fewer handoff delays, and better operational continuity.",
                bg: "#a353ff",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: item.bg,
                  padding: "18px",
                  boxShadow: "0 0 25px rgba(255,255,255,0.08)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#ffffff",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    margin: "8px 0 0",
                    lineHeight: 1.62,
                    color: "rgba(255,255,255,0.96)",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THIS COULD LOOK LIKE */}
      <section style={{ background: "#1ff5ff", color: "#000000" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "920px", marginBottom: "30px" }}>
            <p style={{ ...sectionTitle, color: "#4d1369" }}>
              What this could look like
            </p>
            <h2 style={sectionHeading}>
              A practical North America POD model for Scopely
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: "860px",
                fontSize: "20px",
                lineHeight: 1.8,
                color: "rgba(0,0,0,0.82)",
              }}
            >
              Aspire PODS can be structured around the way Scopely teams actually work.
              That can mean embedded DevQA support inside feature teams, operational
              coverage across North America, and additional LiveOps validation as release
              and event needs change.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "22px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {[
              {
                title: "Embedded DevQA pod",
                body: "DevQA support embedded inside feature teams and sprint cycles, with coverage across test planning, validation, defect triage, and release readiness.",
                bg: "#7af9ff",
              },
              {
                title: "LiveOps and release support",
                body: "Additional QA coverage for LiveOps events, feature flags, configuration validation, economy checks, and release-related operational support.",
                bg: "#54efff",
              },
              {
                title: "Flexible deployment model",
                body: "PODS can stay focused on a single title, support multiple workstreams, or expand by function as roadmap, release, and LiveOps needs evolve.",
                bg: "#2be6ff",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: "28px",
                  border: "2px solid rgba(0,0,0,0.12)",
                  background: item.bg,
                  padding: "24px",
                  boxShadow: "0 0 24px rgba(0,0,0,0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: "16px",
                    lineHeight: 1.72,
                    color: "rgba(0,0,0,0.84)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELEVANT TO SCOPELY */}
      <section style={{ background: "#7c4dff", color: "#ffffff" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "960px", marginBottom: "30px" }}>
            <p style={{ ...sectionTitle, color: "#ffe44d" }}>Relevant to Scopely</p>
            <h2 style={sectionHeading}>
              Aligned with the embedded DevQA model Scopely teams are asking for
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: "860px",
                fontSize: "20px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.86)",
              }}
            >
              This structure aligns with the kind of embedded DevQA support Scopely teams
              are looking for: integrated into development, technically capable, live-service
              aware, and flexible within an open market model.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {scopelyFit.map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: "24px",
                  border: "2px solid rgba(255,255,255,0.16)",
                  background: item.bg,
                  color: "#000000",
                  padding: "22px",
                  boxShadow: "0 0 24px rgba(255,255,255,0.08)",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "20px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>

                <ul style={{ margin: "14px 0 0", paddingLeft: "20px", lineHeight: 1.8 }}>
                  {item.points.map((point) => (
                    <li key={point} style={{ marginBottom: "4px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FUNCTIONS */}
      <section style={{ background: "#ff8a3d", color: "#000000" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "940px", marginBottom: "30px" }}>
            <p style={{ ...sectionTitle, color: "#5a1b00" }}>Core functions</p>
            <h2 style={sectionHeading}>Operating lanes built for live games</h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            {podFunctions.map((item, index) => {
              const [title, desc] = item.split("\n");
              return (
                <div
                  key={title}
                  style={{
                    borderRadius: "18px",
                    border: "2px solid rgba(0,0,0,0.12)",
                    padding: "20px",
                    boxShadow: "0 0 24px rgba(0,0,0,0.08)",
                    background:
                      index % 3 === 0 ? "#ff9f5f" : index % 3 === 1 ? "#ffb178" : "#ffc18d",
                  }}
                >
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      lineHeight: 1.25,
                      marginBottom: "10px",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.6,
                      color: "rgba(0,0,0,0.82)",
                    }}
                  >
                    {desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW THIS WORKS IN PRACTICE */}
      <section style={{ background: "#ffe44d", color: "#000000" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "980px", marginBottom: "30px" }}>
            <p style={{ ...sectionTitle, color: "#5f4700" }}>How this works in practice</p>
            <h2 style={sectionHeading}>
              Built to operate inside your development cycle
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            }}
          >
            {differentiators.map((item, index) => {
              const [title, desc] = item.split("\n");
              return (
                <div
                  key={title}
                  style={{
                    borderRadius: "24px",
                    border: "2px solid rgba(0,0,0,0.12)",
                    padding: "20px",
                    boxShadow: "0 0 24px rgba(0,0,0,0.08)",
                    background: index % 2 === 0 ? "#fff06f" : "#fff6a0",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      lineHeight: 1.55,
                      letterSpacing: "0.06em",
                      marginBottom: "10px",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "rgba(0,0,0,0.82)",
                    }}
                  >
                    {desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: "#000000", color: "#ffffff" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "960px", marginBottom: "30px" }}>
            <p style={{ ...sectionTitle, color: "#1ff5ff" }}>Pricing</p>
            <h2 style={sectionHeading}>Flexible monthly POD models</h2>
            <p
              style={{
                margin: 0,
                maxWidth: "860px",
                fontSize: "20px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Pricing depends on scope, team shape, and support mix. These ranges are
              designed to show how Aspire PODS can start focused, expand by function, and scale with operational complexity.
            </p>
            <p
              style={{
                margin: "14px 0 0",
                maxWidth: "860px",
                fontSize: "17px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Final structure is shaped around title needs, workflow integration, and the level of embedded support required.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {pricing.map((item, index) => (
              <div
                key={item.tier}
                style={{
                  borderRadius: "30px",
                  border: "2px solid rgba(255,255,255,0.14)",
                  padding: "24px",
                  boxShadow: "0 0 24px rgba(255,255,255,0.08)",
                  background: index === 0 ? "#180816" : index === 1 ? "#07181a" : "#131325",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.24em",
                    color: "#1ff5ff",
                  }}
                >
                  {item.tier}
                </p>
                <p
                  style={{
                    margin: "16px 0",
                    fontSize: "42px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.price}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    lineHeight: 1.72,
                    color: "rgba(255,255,255,0.82)",
                  }}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section
        style={{
          background:
            "linear-gradient(90deg, #031024 0%, #041226 34%, #061628 68%, #051224 100%)",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 12% 50%, rgba(255,62,165,0.10), transparent 26%), radial-gradient(circle at 88% 52%, rgba(31,245,255,0.12), transparent 26%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ ...sectionWrap, position: "relative" }}>
          <div
            style={{
              display: "grid",
              gap: "34px",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {/* LEFT CARD */}
            <div
              style={{
                borderRadius: "32px",
                border: "2px solid rgba(255,62,165,0.68)",
                background:
                  "linear-gradient(180deg, rgba(34,0,22,0.96) 0%, rgba(22,0,14,0.98) 100%)",
                padding: "38px",
                boxShadow: "0 0 44px rgba(255,62,165,0.18)",
              }}
            >
              <p
                style={{
                  ...sectionTitle,
                  color: "#ffe44d",
                  marginBottom: "24px",
                }}
              >
                HOW WE START
              </p>

              <div style={{ display: "grid", gap: "18px" }}>
                <div style={{ fontSize: "20px", lineHeight: 1.6 }}>
                  1. Understand current structure, priorities, and QA goals
                </div>
                <div style={{ fontSize: "20px", lineHeight: 1.6 }}>
                  2. Design the right POD around studio needs
                </div>
                <div style={{ fontSize: "20px", lineHeight: 1.6 }}>
                  3. Integrate into workflow, tools, and communication lines
                </div>
                <div style={{ fontSize: "20px", lineHeight: 1.6 }}>
                  4. Launch, optimize, and scale over time
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div
              style={{
                borderRadius: "32px",
                border: "2px solid rgba(31,245,255,0.72)",
                background:
                  "linear-gradient(180deg, rgba(1,35,34,0.96) 0%, rgba(1,20,21,0.98) 100%)",
                padding: "42px",
                boxShadow: "0 0 46px rgba(31,245,255,0.16)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p style={{ ...sectionTitle, color: "#1ff5ff" }}>
                  NEXT STEP
                </p>

                <h3
                  style={{
                    margin: "14px 0 22px",
                    fontSize: "40px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  HAPPY TO DISCUSS WHAT THIS COULD LOOK LIKE FOR YOUR TEAM
                </h3>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  We can walk through current needs, explore the right North America
                  support structure, and outline how Aspire PODS could operate as a
                  long term partner.
                </p>
              </div>

              <div
                style={{
                  marginTop: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <a
                  href="https://us06web.zoom.us/j/83714913737?pwd=Z6O3McqxGtbAf25pYav3mnRb50JyMi.1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={primaryCtaStyle}
                >
                  SCHEDULE TIME WITH JESS
                </a>
</div>

</div>
</div>
</div>
</section>
</main>
);
}
