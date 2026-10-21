const places = [
  ["01 / ARRIVAL", "THE HARBOR", "Your story begins where the sea meets an island out of time."],
  ["02 / ENCOUNTER", "DREAM STATE DINER", "Every conversation holds a clue. Every stranger has a story."],
  ["03 / REMEMBER", "THE SANCTUARY", "Return to your private sanctuary and listen for the next transmission."],
];
const steps = [
  ["I", "DISCOVER", "Explore Echo Point Island and find the details others overlook."],
  ["II", "CONNECT", "Meet its residents, collaborators and fellow curious travelers."],
  ["III", "REMEMBER", "Follow clues, hear transmissions and see the world differently."],
];
export default function Page() {
  return (
    <main className="es-page">
      <style>{`
        .es-page{background:#070915;color:#f7efdf;font-family:Arial,Helvetica,sans-serif;line-height:1.6;overflow:hidden}
        .es-page *{box-sizing:border-box}.es-page a{color:inherit;text-decoration:none}
        .es-page .wrap{width:min(1150px,calc(100% - 44px));margin:auto}
        .es-page .nav{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:22px 0;position:relative;z-index:3}
        .es-page .brand{font-size:18px;font-weight:900;letter-spacing:.18em}.es-page .navlinks{display:flex;flex-wrap:wrap;gap:23px;font-size:12px;letter-spacing:.1em;text-transform:uppercase}
        .es-page .hero{min-height:87vh;display:flex;align-items:center;position:relative;border-bottom:1px solid #ffffff2b;background:radial-gradient(ellipse at 82% 82%,#d85e3b88 0%,transparent 38%),radial-gradient(ellipse at 70% 55%,#515eab91 0%,transparent 45%),linear-gradient(160deg,#070a1b 9%,#1b133a 53%,#0a253a 100%)}
        .es-page .hero:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:27%;background:linear-gradient(180deg,transparent,#06141e)}
        .es-page .scene{position:absolute;right:9%;bottom:18%;width:38%;height:27%;transform:skew(-8deg);background:linear-gradient(180deg,#23182b,#080d19);border-top:7px solid #ff6e99;box-shadow:0 -17px 55px #ee6ba548,0 40px 90px #09bcd450}
        .es-page .scene:before{content:"DREAM STATE DINER";font-weight:900;letter-spacing:.17em;color:#ff7eaa;position:absolute;top:16%;left:5%;font-size:clamp(10px,1.5vw,21px);text-shadow:0 0 12px #fd589b}
        .es-page .scene:after{content:"";position:absolute;inset:45% 8% 11%;background:repeating-linear-gradient(90deg,#54d8d956 0 20%,#120f20 20% 24%);border:2px solid #64e7f0}
        .es-page .hero-copy{max-width:750px;position:relative;z-index:2;padding:80px 0 125px}
        .es-page .overline{font-size:12px;font-weight:800;letter-spacing:.27em;color:#f4a7be;text-transform:uppercase}
        .es-page h1{font-size:clamp(60px,11vw,152px);line-height:.86;letter-spacing:-.065em;margin:27px 0 18px;font-weight:900;text-shadow:0 4px 35px #0007}
        .es-page .tagline{font-family:Georgia,serif;font-style:italic;color:#f8ced8;font-size:clamp(18px,2.3vw,29px);margin:18px 0 40px}
        .es-page .hero-claim{font-size:clamp(19px,2.3vw,26px);max-width:620px;margin-bottom:37px}
        .es-page .actions{display:flex;gap:14px;flex-wrap:wrap}.es-page .btn{display:inline-block;padding:15px 25px;letter-spacing:.13em;font-size:12px;font-weight:900;border:1px solid #f2d3df;border-radius:2px;text-transform:uppercase}
        .es-page .primary{background:#ffb7d5;color:#101222;border-color:#ffb7d5}.es-page .btn:hover{background:#fff;color:#101222}
        .es-page .section{padding:110px 0;border-bottom:1px solid #ffffff1c}.es-page .section:nth-of-type(even){background:#0c1020}
        .es-page h2{font-size:clamp(37px,6vw,72px);letter-spacing:-.055em;line-height:1.05;margin:17px 0 26px}
        .es-page .lead{font-size:clamp(18px,2.1vw,24px);max-width:820px;color:#e0dbea}
        .es-page .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:45px}
        .es-page .card{border:1px solid #ffffff38;min-height:300px;padding:27px;background:linear-gradient(155deg,#403457,#10172d 72%);display:flex;flex-direction:column;justify-content:flex-end}
        .es-page .card:nth-child(2){background:linear-gradient(155deg,#623950,#111a31 72%)}.es-page .card:nth-child(3){background:linear-gradient(155deg,#265562,#111a31 72%)}
        .es-page .card small{letter-spacing:.2em;color:#ffbfd1}.es-page .card h3{font-size:25px;line-height:1.15;margin:12px 0 8px}.es-page .card p{margin:0;color:#ddd7e4}
        .es-page .statement{font-family:Georgia,serif;font-style:italic;font-size:clamp(28px,4vw,49px);color:#ffbed3;max-width:850px;margin:35px 0}
        .es-page .split{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}
        .es-page .number{font-size:clamp(95px,15vw,210px);font-weight:900;line-height:1;letter-spacing:-.1em;color:#ffbad53d}
        .es-page .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:42px}
        .es-page .steps strong{display:block;color:#ffb7d5;font-size:45px}.es-page .steps h3{letter-spacing:.1em;font-size:16px}
        .es-page .join{background:radial-gradient(circle at 70% 25%,#86385e 0%,transparent 52%),#111029}
        .es-page footer{padding:40px 0;color:#c7bfd2;font-size:13px;letter-spacing:.04em}
        @media(max-width:780px){.es-page .navlinks{display:none}.es-page .hero{min-height:690px}.es-page .hero-copy{padding:65px 0 160px}.es-page .scene{width:70%;height:19%;right:-4%;bottom:6%}.es-page .cards,.es-page .steps,.es-page .split{grid-template-columns:1fr}.es-page .section{padding:75px 0}.es-page .card{min-height:230px}.es-page .split{gap:12px}}
      `}</style>
      <div className="hero" id="top">
        <div className="scene" aria-hidden="true" />
        <div className="wrap">
          <nav className="nav"><a className="brand" href="#top">EARTH SCHOOL</a><div className="navlinks"><a href="#world">The World</a><a href="#experience">The Experience</a><a href="#transmissions">Transmissions</a><a href="#collaborate">Collaborate</a></div></nav>
          <div className="hero-copy">
            <p className="overline">A NEW GENRE IN GAMING</p>
            <h1>EARTH<br/>SCHOOL</h1>
            <p className="tagline">• a temporary human experience •</p>
            <p className="hero-claim">Being human is the game. Remembering who you are is how to play.</p>
            <div className="actions"><a className="btn primary" href="#world">Explore the world</a><a className="btn" href="#join">Join the movement</a></div>
          </div>
        </div>
      </div>
      <section className="section" id="world"><div className="wrap">
        <p className="overline">Somewhere between memory and mystery</p><h2>WELCOME TO<br/>ECHO POINT ISLAND.</h2>
        <p className="lead">An unforgettable coastal world suspended in the 1980s. Salt air. Neon nights. Strange coincidences. And the feeling that you've been here before.</p>
        <div className="cards">{places.map(([n,t,d])=><article className="card" key={t}><small>{n}</small><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div></section>
      <section className="section" id="experience"><div className="wrap">
        <p className="overline">This isn't another game</p><h2>THE WORLD CHANGES<br/>WHEN YOU DO.</h2>
        <p className="lead">A story-driven, community-minded adventure in development, blending consciousness, human behavior, neuroscience, ancient wisdom and the intriguing idea that reality may be more mysterious than it seems.</p>
        <p className="statement">Notice the pattern. Question the story. Choose what happens next.</p>
        <div className="steps">{steps.map(([n,t,d])=><div key={t}><strong>{n}</strong><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div></section>
      <section className="section" id="transmissions"><div className="wrap split"><div><p className="overline">The Transmission Network</p><h2>EVERY MESSAGE<br/>OPENS A DOOR.</h2><p className="lead">Discover voices, perspectives and ideas woven into the island itself. Guest transmissions are envisioned as five unlockable chapters, each leaving a clue that leads the player further into the mystery.</p><p>Contributing voices and experiences will be announced as partnerships are confirmed.</p></div><div className="number" aria-label="Five chapters">05</div></div></section>
      <section className="section" id="collaborate"><div className="wrap">
        <p className="overline">An invitation to co-create</p><h2>YOUR VOICE<br/>BELONGS IN THE STORY.</h2>
        <p className="lead">Visionaries. Artists. Musicians. Educators. Game makers. Consciousness explorers. EARTH SCHOOL is building a world where creative contributions can become places, stories, transmissions and discoveries.</p>
        <p className="statement">Don't just watch a new universe emerge. Help shape it.</p><a className="btn primary" href="#join">Explore collaboration</a>
      </div></section>
      <section className="section join" id="join"><div className="wrap">
        <p className="overline">The invitation is open</p><h2>THERE'S MORE<br/>TO DISCOVER.</h2>
        <p className="lead">EARTH SCHOOL is in development. The community, the story and the possibilities are only beginning. Come curious.</p>
        <div className="actions"><a className="btn primary" href="https://jessgoodvibesonly.vercel.app/" target="_blank" rel="noopener noreferrer">Meet the creator</a><a className="btn" href="#top">Back to the beginning</a></div>
      </div></section>
      <footer><div className="wrap"><strong>EARTH SCHOOL</strong> · • a temporary human experience •<br/>Created by Rev Dr Jess Simmonds · Explore More. Create Synergy.<br/><small>Early creative preview — game and community features in development.</small></div></footer>
    </main>
  );
}
