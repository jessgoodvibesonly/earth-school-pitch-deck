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
  "THE LAWS OF THE UNIVERSE AS GAMEPLAY",
  "THE DIVINE SPARK SYSTEM",
  "EVOLVING ARCHETYPES",
  "A PERSONALIZED FILTER SYSTEM",
  "AI-DRIVEN SOUL CONNECTIONS",
  "MEDITATION AS ACTIVATION",
  "NEUROSCIENCE MEETS SPIRITUALITY",
  "ATTENTION AS CURRENCY",
  "THE MIRROR SYSTEM",
  "TAROT, ASTROLOGY AND NUMEROLOGY KEYS",
  "A LIVING 1980s TIME-LOOP MYSTERY",
  "A PRIVATE SANCTUARY VEHICLE",
  "COOPERATIVE REMEMBERING",
  "A HOPEFUL WORLD DESIGNED AROUND MEANING",
];

const opportunity = [
  "PREMIUM AAA GAME",
  "EXPANSION ISLANDS & NEW REGIONS",
  "DOWNLOADABLE STORY CHAPTERS (DLC)",
  "COSMETICS & CHARACTER CUSTOMIZATION",
  "SANCTUARY VEHICLE UPGRADES",
  "COLLECTIBLE OUTFITS & RETRO ITEMS",
  "SEASONAL COMMUNITY EVENTS",
  "EARTH SCHOOL RADIO & ORIGINAL SOUNDTRACK",
  "BOOKS, ART BOOKS & MERCHANDISE",
  "DIGITAL COLLECTIBLES & COSMETICS",
  "FILM, TELEVISION & TRANSMEDIA",
  "LONG-TERM FRANCHISE POTENTIAL",
];

const roadmap = [
  ["WORLD & VISUAL IDENTITY", "ESTABLISHED"],
  ["STORY FOUNDATION", "ESTABLISHED"],
  ["CORE GAMEPLAY SYSTEMS", "DEFINED"],
  ["ECHO POINT ISLAND LOCATIONS", "IN DEVELOPMENT"],
  ["GAME DESIGN DOCUMENT", "IN ACTIVE DEVELOPMENT"],
  ["INTERACTIVE VERTICAL SLICE", "PRE-PRODUCTION"],
  ["CINEMATIC TRAILER", "IN DEVELOPMENT"],
  ["FULL PRODUCTION", "FUTURE PHASE"],
];

function QuoteDivider({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="quoteDivider" aria-label={alt}>
      <img src={src} alt={alt} />
    </div>
  );
}

function Section({ id, eyebrow, title, children, tone = "dark" }: { id?: string; eyebrow?: string; title?: ReactNode; children: ReactNode; tone?: "dark" | "amber" | "rose" }) {
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
            <p className="kicker">A TEMPORARY HUMAN EXPERIENCE</p>
            <h1>THE NEXT EVOLUTION<br />OF GAMING IS<br />HUMAN GROWTH.</h1>
            <p className="lead">A cinematic cooperative adventure set on a mysterious 1980s East Coast island where consciousness, perception and reality become gameplay.<br />Explore a world trapped inside an endless time loop, uncover forgotten truths, awaken through meaningful choices and remember why you came.</p>
          </div>
        </div>
      </section>

      <Section id="vision" eyebrow="A NEW KIND OF GAME" title="ONE WHERE THE AVATAR EVOLVES... AND SO DO YOU." tone="amber">
        <p className="large">EARTH SCHOOL transforms awareness, curiosity, relationships, choice and personal growth into meaningful gameplay.</p>
        <p className="statement">THE MOST IMPORTANT UPGRADE IS NOT YOUR CHARACTER. IT IS YOUR PERSPECTIVE.</p>
      </Section>

      <Section id="echo-point" eyebrow="ECHO POINT ISLAND" title="WELCOME TO ECHO POINT ISLAND.">
        <p className="large">A beautiful East Coast island suspended inside an endless 1980s time loop.</p>
        <p>Explore charming coastal towns, diners, motels, beaches, forests, lighthouses, arcades, hidden caves and forgotten places inspired by real East Coast locations.</p>
        <div className="splitStatements"><strong>THE ISLAND REPEATS.<br />THE PLAYER REMEMBERS.</strong><strong>THE ANSWERS WERE NEVER HIDDEN.<br />THEY WERE WAITING TO BE NOTICED.</strong></div>
      </Section>

      <QuoteDivider src="/cornerstorequote.png" alt="Corner Store quote" />

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
        <div className="sanctuaryFeature">
          <div className="sanctuaryImageFrame">
            <img src="/sanctuaryquote.png" alt="Interior concept art for the Sanctuary Vehicle, the player’s private mobile headquarters" />
          </div>
          <div className="sanctuaryCopy">
            <p className="eyebrow">SIGNATURE GAMEPLAY HUB</p>
            <h3>THE SANCTUARY VEHICLE</h3>
            <p className="sanctuaryLead">The player’s private mobile headquarters—and one of EARTH SCHOOL’s defining gameplay systems.</p>
            <p>After exploring Echo Point Island, players return here to connect clues, review discoveries, access the evolving map, journal their experiences and prepare for the next loop.</p>
            <p>Inside, the player can:</p>
            <ul className="functionList">
              <li>Activate meditation and consciousness experiences</li>
              <li>Access Earth School Radio</li>
              <li>Explore neuroscience, archetypes and the laws of the universe</li>
              <li>Speak privately with interactive AI mentors</li>
              <li>Review choices, patterns, relationships and unlocked memories</li>
              <li>Receive guidance from a future version of their own avatar</li>
            </ul>
            <div className="mentorPanel">
              <h4>MENTOR CATEGORIES</h4>
              <ul>
                <li>A philosopher</li>
                <li>A neuroscientist</li>
                <li>A psychologist</li>
                <li>A spiritual teacher</li>
                <li>A future version of the player</li>
              </ul>
            </div>
            <p className="sanctuaryStatement">NOT SIMPLY TRANSPORTATION.<br />THE PLAYER’S PRIVATE SPACE FOR TRANSFORMATION.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="THE RULES OF EARTH SCHOOL" title="Universal principles become discoverable rules of play.">
        <div className="ruleList">{rules.map((rule) => <strong key={rule}>{rule}</strong>)}</div>
        <p>Players experience these principles through story, exploration and relationships.</p>
        <p className="statement">THE PLAYER DOES NOT STUDY THE LESSON. THE PLAYER LIVES IT.</p>
      </Section>

      <QuoteDivider src="/fishingquote.png" alt="Fishing quote" />

      <Section eyebrow="GAMEPLAY LOOP" title="A PLAYABLE JOURNEY OF REMEMBERING" tone="rose">
        <div className="loop">EXPLORE <span>→</span> HELP NPCs <span>→</span> DISCOVER CLUES <span>→</span> RETURN TO THE SANCTUARY <span>→</span> REFLECT AND ACTIVATE <span>→</span> UNLOCK NEW PATHS <span>→</span> CHANGE THE EXPERIENCE</div>
        <p>Cooperative light-MMO structure.</p><p>Approximately ten players can share an island experience while each maintains a personal journey, unique filters and a private Sanctuary Vehicle.</p>
      </Section>

      <QuoteDivider src="/dreamstatedinerquote.png" alt="Dream State Diner quote" />

      <Section eyebrow="WHY IT STANDS OUT" title="BUILT AROUND IDEAS PLAYERS HAVE NEVER EXPERIENCED THIS WAY.">
        <div className="featureGrid">{standouts.map((item) => <article key={item}>{item}</article>)}</div>
        <p className="statement">EARTH SCHOOL TURNS SPIRITUAL GROWTH, SELF-DISCOVERY AND THE MYSTERIES OF CONSCIOUSNESS INTO A CINEMATIC PLAYABLE EXPERIENCE.</p>
      </Section>

      <Section eyebrow="THE OPPORTUNITY" title="A NEW ERA HAS BEGUN. HOLLYWOOD IS EMBRACING THE POWER OF VIDEO GAMES." tone="amber">
        <p>EARTH SCHOOL is designed as a long-term entertainment platform where meaningful gameplay, community and expanding content create ongoing opportunities for players and sustainable growth for the business.</p>
        <div className="pillGrid">{opportunity.map((item) => <span key={item}>{item}</span>)}</div>
      </Section>

      <Section eyebrow="DEVELOPMENT VISION" title="FROM VISION TO PLAYABLE EXPERIENCE">
        <div className="roadmap">{roadmap.map(([title, status]) => <div key={title}><strong>{title}</strong><span>{status}</span></div>)}</div>
        <p className="large">Current Focus: Building an Unreal Engine 5 vertical slice that showcases the core gameplay loop, AI-driven NPC interactions, the Sanctuary Vehicle, the Filter System and the first playable mystery of Echo Point Island.</p>
        <p className="large">In parallel, the investor edition of the Game Design Document is being expanded to support production planning, publisher discussions and future team growth.</p>
      </Section>

      <QuoteDivider src="/workshopquote.png" alt="Workshop quote" />

      <Section eyebrow="COMMUNITY" title="BUILT WITH COMMUNITY" tone="rose">
        <p>Discord serves as the project’s community headquarters for feedback, world-building, playtesting, collaboration and long-term connection.</p>
        <p className="statement">PLAYERS ARE INVITED INTO THE JOURNEY BEFORE THE ISLAND OFFICIALLY OPENS.</p>
        <a className="primary" href="https://discord.gg/8Th6Tfvut" target="_blank" rel="noopener noreferrer">JOIN THE EARTH SCHOOL DISCORD</a>
      </Section>

      <Section eyebrow="CREATOR" title={<>CREATED BY<br />REV. DR. JESSICA SIMMONDS</>}>
        <p>Rev. Dr. Jessica Simmonds is an entrepreneur, author, ordained Spiritual-Interfaith Minister, certified clinical hypnotherapist and educator with more than 25 years of experience building businesses, communities and transformational experiences.</p>
        <p>She holds doctoral degrees in the philosophy of metaphysics and spiritual counseling, and has spent decades studying consciousness, neuroscience, archetypes, meditation, psychology, symbolism and the deeper patterns that shape human experience.</p>
        <p>Jessica is also the founder of multiple purpose-driven ventures, a published author, speaker and creative director whose work bridges spirituality, technology, storytelling and interactive entertainment.</p>
        <p>EARTH SCHOOL is the culmination of that life's work—bringing consciousness, meaningful choice and human transformation into a cinematic interactive world unlike anything that exists today.</p>
      </Section>

      <section className="finale">
        <div className="wrap">
          <p className="eyebrow">EARTH SCHOOL</p><p className="kicker">A TEMPORARY HUMAN EXPERIENCE</p>
          <h2>THE MOST IMPORTANT UPGRADE<br />IS NOT YOUR CHARACTER.</h2>
          <p className="statement">IT IS YOUR PERSPECTIVE.</p><p className="large">REMEMBER WHY YOU CAME.</p>
          <div className="actions"><a className="primary" href="https://discord.gg/8Th6Tfvut" target="_blank" rel="noopener noreferrer">ENTER THE EARTH SCHOOL COMMUNITY</a><a className="secondary" href="https://calendly.com/aspiritualwarriorspath/synergy-call-aspire-x-earth-school-x-partnerships" target="_blank" rel="noopener noreferrer">BOOK A CALL WITH JESS</a></div>
          <footer><a href="https://www.instagram.com/jessgoodvibesonly/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.linkedin.com/in/jessica-simmonds-aspire4/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="mailto:jessgoodvibesonly@gmail.com">Email</a></footer>
        </div>
      </section>
    </main>
  );
}
