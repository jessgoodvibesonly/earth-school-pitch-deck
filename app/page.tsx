import type { ReactNode } from "react";

const systems = [
  ["AWARENESS SYSTEM", "Observation reveals clues, paths and possibilities."],
  ["ATTENTION SYSTEM", "What the player focuses on influences what becomes available."],
  ["CHOICE SYSTEM", "Decisions shape relationships, discoveries and future experiences."],
  ["ARCHETYPE SYSTEM", "Personality influences dialogue, strengths, blind spots and growth."],
  ["MIRROR SYSTEM", "NPC relationships reflect meaningful parts of the player’s journey."],
  ["LOOP SYSTEM", "Each repeating cycle reveals deeper layers of the island."],
  ["CREATOR SYSTEM", "Perception, action and intention shape the player’s experience."],
  ["SANCTUARY SYSTEM", "Reflection becomes part of progression."],
];

const filterEffects = [
  "Which clues are noticed",
  "Which dialogue becomes available",
  "How NPCs respond",
  "Which paths appear",
  "Which opportunities emerge",
  "How identical events are interpreted",
];

const rules = [
  "ATTENTION DIRECTS EXPERIENCE.",
  "CHOICES CREATE CONSEQUENCES.",
  "PATTERNS REPEAT UNTIL THEY ARE UNDERSTOOD.",
  "RELATIONSHIPS BECOME MIRRORS.",
  "BELIEFS SHAPE PERCEPTION.",
  "COHERENCE OPENS NEW POSSIBILITIES.",
  "WHAT YOU PRACTICE BECOMES EASIER TO SEE.",
];

const standouts = [
  "CONSCIOUSNESS AS PROGRESSION",
  "A PERSONALIZED FILTER SYSTEM",
  "AI-DRIVEN RELATIONSHIPS",
  "A LIVING 1980s TIME-LOOP MYSTERY",
  "A PRIVATE SANCTUARY VEHICLE",
  "REAL PRINCE EDWARD ISLAND INSPIRATION",
  "COOPERATIVE DISCOVERY",
  "ATTENTION AS CURRENCY",
  "EVOLVING ARCHETYPES",
  "A HOPEFUL WORLD DESIGNED AROUND MEANING",
];

const opportunity = [
  "Premium core game",
  "Future island expansions",
  "New stories and time loops",
  "Additional archetypes and consciousness systems",
  "Music and Earth School Radio",
  "Community events",
  "Merchandise",
  "Film, television and transmedia opportunities",
];

const roadmap = [
  ["WORLD AND VISUAL IDENTITY", "Established"],
  ["STORY FOUNDATION", "Established"],
  ["CORE GAMEPLAY SYSTEMS", "Defined"],
  ["ECHO POINT ISLAND LOCATIONS", "In development"],
  ["GAME DESIGN DOCUMENT", "Current priority"],
  ["INTERACTIVE VERTICAL SLICE", "Next milestone"],
  ["CINEMATIC TRAILER", "Next milestone"],
  ["FULL PRODUCTION", "Future phase"],
];

function Section({ id, eyebrow, title, children, tone = "dark" }: { id?: string; eyebrow?: string; title?: string; children: ReactNode; tone?: "dark" | "amber" | "rose" }) {
  return (
    <section id={id} className={`section ${tone}`}>
      <div className="wrap">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 className="sectionTitle">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export default function EarthSchoolPitchDeck() {
  return (
    <main>
      <section className="hero" id="hero">
        <div className="heroShade" />
        <div className="wrap heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">EARTH SCHOOL</p>
            <div className="mapFrame">
              <img src="/echopointmap.png" alt="Illustrated map of Echo Point Island" />
            </div>
            <p className="kicker">A TEMPORARY HUMAN EXPERIENCE</p>
            <h1>THE NEXT EVOLUTION OF GAMING IS HUMAN GROWTH.</h1>
            <p className="lead">A cinematic cooperative adventure set on a mysterious 1980s retro East Coast Canadian island inspired by the real landscapes of Prince Edward Island.</p>
          </div>
        </div>
      </section>

      <Section id="vision" eyebrow="A NEW KIND OF GAME" title="ONE WHERE THE AVATAR EVOLVES... AND SO DO YOU." tone="amber">
        <p className="large">EARTH SCHOOL transforms awareness, curiosity, relationships, choice and personal growth into meaningful gameplay.</p>
        <p className="statement">THE MOST IMPORTANT UPGRADE IS NOT YOUR CHARACTER. IT IS YOUR PERSPECTIVE.</p>
      </Section>

      <Section id="echo-point" eyebrow="ECHO POINT ISLAND" title="WELCOME TO ECHO POINT ISLAND.">
        <p className="large">A beautiful East Coast Canadian island suspended inside an endless 1980s time loop.</p>
        <p>Players explore coastal communities, diners, motels, beaches, forests, lighthouses, arcades, hidden caves and forgotten places inspired by real Prince Edward Island locations.</p>
        <div className="splitStatements"><strong>THE ISLAND REPEATS.<br />THE PLAYER REMEMBERS.</strong><strong>THE ANSWERS WERE NEVER HIDDEN.<br />THEY WERE WAITING TO BE NOTICED.</strong></div>
      </Section>

      <Section eyebrow="THE CONSCIOUSNESS ENGINE" title="A connected collection of original gameplay systems designed to make the human experience playable." tone="rose">
        <div className="cardGrid">{systems.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </Section>

      <Section eyebrow="THE FILTER SYSTEM" title="NO TWO PLAYERS EXPERIENCE THE SAME ISLAND IN THE SAME WAY.">
        <p>The player’s attention, beliefs, habits, archetype, relationships and previous choices form a personal lens.</p>
        <div className="pillGrid">{filterEffects.map((item) => <span key={item}>{item}</span>)}</div>
        <p className="statement">PERSPECTIVE IS GAMEPLAY.</p>
      </Section>

      <Section eyebrow="AI-DRIVEN NPCs" title="Residents with evolving memories, routines, personalities, relationships and conversations." tone="amber">
        <p>They recognize meaningful player choices, respond to changing circumstances and create relationships that feel personal rather than scripted.</p>
        <div className="twoCol"><div><h3>THE SANCTUARY VEHICLE</h3><p>A private mobile headquarters where the avatar can review clues, journal discoveries, meditate, access the map, listen to Earth School Radio, explore neuroscience, archetypes and consciousness, and speak with interactive mentor-style AI guides.</p></div><div><h3>MENTOR CATEGORIES</h3><ul><li>A philosopher</li><li>A neuroscientist</li><li>A psychologist</li><li>A spiritual teacher</li><li>A future version of the player</li></ul></div></div>
        <p className="statement">NOT SIMPLY TRANSPORTATION. TRANSFORMATION.</p>
      </Section>

      <Section eyebrow="THE RULES OF EARTH SCHOOL" title="Universal principles become discoverable rules of play.">
        <div className="ruleList">{rules.map((rule) => <strong key={rule}>{rule}</strong>)}</div>
        <p>Players experience these principles through story, exploration and relationships.</p>
        <p className="statement">THE PLAYER DOES NOT STUDY THE LESSON. THE PLAYER LIVES IT.</p>
      </Section>

      <Section eyebrow="GAMEPLAY LOOP" title="A PLAYABLE JOURNEY OF REMEMBERING" tone="rose">
        <div className="loop">EXPLORE <span>→</span> HELP NPCs <span>→</span> DISCOVER CLUES <span>→</span> RETURN TO THE SANCTUARY <span>→</span> REFLECT AND ACTIVATE <span>→</span> UNLOCK NEW PATHS <span>→</span> CHANGE THE EXPERIENCE</div>
        <p>Cooperative light-MMO structure.</p><p>Approximately ten players can share an island experience while each maintains a personal journey, unique filters and a private Sanctuary Vehicle.</p>
      </Section>

      <Section eyebrow="WHY IT STANDS OUT" title="BUILT AROUND IDEAS PLAYERS HAVE NEVER EXPERIENCED THIS WAY.">
        <div className="featureGrid">{standouts.map((item) => <article key={item}>{item}</article>)}</div>
        <p className="statement">EARTH SCHOOL IS A CINEMATIC HUMAN EXPERIENCE PLAYERS HELP CREATE.</p>
      </Section>

      <Section eyebrow="THE OPPORTUNITY" title="A NEW ERA HAS BEGUN. HOLLYWOOD IS EMBRACING THE POWER OF VIDEO GAMES." tone="amber">
        <p>Interactive entertainment brings cinematic storytelling, player agency, community and emotional connection together inside one evolving medium.</p>
        <div className="pillGrid">{opportunity.map((item) => <span key={item}>{item}</span>)}</div>
      </Section>

      <Section eyebrow="DEVELOPMENT VISION" title="FROM VISION TO PLAYABLE EXPERIENCE">
        <div className="roadmap">{roadmap.map(([title, status]) => <div key={title}><strong>{title}</strong><span>{status}</span></div>)}</div>
        <p className="large">Immediate objective: Create a focused Unreal Engine 5 vertical slice demonstrating the world, the first clue, an AI-driven NPC interaction and the Sanctuary Vehicle.</p>
      </Section>

      <Section eyebrow="COMMUNITY" title="BUILT WITH COMMUNITY" tone="rose">
        <p>Discord serves as the project’s community headquarters for feedback, world-building, playtesting, collaboration and long-term connection.</p>
        <p className="statement">PLAYERS ARE INVITED INTO THE JOURNEY BEFORE THE ISLAND OFFICIALLY OPENS.</p>
        <a className="primary" href="https://discord.gg/n9bfD93mXS" target="_blank" rel="noopener noreferrer">JOIN THE EARTH SCHOOL DISCORD</a>
      </Section>

      <Section eyebrow="CREATOR" title="CREATED BY JESSICA SIMMONDS">
        <p>Jessica Simmonds is an entrepreneur, artist, author, educator and spiritual-interfaith minister with more than 25 years of experience creating, teaching and building communities.</p>
        <p>Her work explores consciousness, neuroscience, metaphysics, archetypes, personal transformation and the nature of human experience.</p>
        <p className="large">EARTH SCHOOL brings those ideas into an original interactive world.</p>
      </Section>

      <section className="finale">
        <div className="wrap">
          <p className="eyebrow">EARTH SCHOOL</p><p className="kicker">A TEMPORARY HUMAN EXPERIENCE</p>
          <h2>THE MOST IMPORTANT UPGRADE<br />IS NOT YOUR CHARACTER.</h2>
          <p className="statement">IT IS YOUR PERSPECTIVE.</p><p className="large">REMEMBER WHY YOU CAME.</p>
          <div className="actions"><a className="primary" href="https://discord.gg/n9bfD93mXS" target="_blank" rel="noopener noreferrer">JOIN THE COMMUNITY</a><a className="secondary" href="https://youtu.be/MLG2-Nu9YAQ" target="_blank" rel="noopener noreferrer">WATCH THE TRAILER</a><a className="secondary" href="mailto:jessgoodvibesonly@gmail.com">CONTACT JESSICA</a></div>
          <footer><a href="https://www.instagram.com/jessgoodvibesonly/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.linkedin.com/in/jessica-simmonds-aspire4/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="mailto:jessgoodvibesonly@gmail.com">Email</a></footer>
        </div>
      </section>
    </main>
  );
}
