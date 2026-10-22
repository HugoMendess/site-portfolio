"use client";
import React, { useState, useEffect, useRef } from "react";
import { GH, LI, EMAIL, R, PROJECTS, STACK, ROLES, JOBS, JobT } from "@/data/portfolio";

function useTyped(words: string[]) {
  const [t, setT] = useState("");
  useEffect(() => {
    let i = 0, j = 0, del = false, id: ReturnType<typeof setTimeout>;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still) { setT(words[0]); return; }
    const tick = () => {
      const w = words[i];
      j += del ? -1 : 1; setT(w.slice(0, j));
      let d = del ? 35 : 70;
      if (!del && j === w.length) { del = true; d = 1600; }
      else if (del && j === 0) { del = false; i = (i + 1) % words.length; d = 350; }
      id = setTimeout(tick, d);
    };
    id = setTimeout(tick, 600);
    return () => clearTimeout(id);
  }, []);
  return t;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) { setOn(true); return; }
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); o.disconnect(); } }, { threshold: .12 });
    o.observe(ref.current!); return () => o.disconnect();
  }, []);
  return <div ref={ref} className={"rv " + (on ? "in " : "") + className}>{children}</div>;
}

function Job({ j }: { j: JobT }) {
  const [all, setAll] = useState(false);
  const shown = all ? j.items : j.items.slice(0, 3);
  return (
    <div className="job">
      <div className="logoj mono">{j.logo}</div>
      <div>
        <div className="dt mono">{j.date}</div>
        <h3>{j.role}</h3><div className="at">{j.at}</div>
        <ul>{shown.map(i => <li key={i}>{i}</li>)}</ul>
        {j.items.length > 3 && <button className="more" onClick={() => setAll(!all)}>{all ? "‹ Mostrar menos" : `› Mostrar mais (${j.items.length - 3})`}</button>}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [copied, setCopied] = useState(false);
  const role = useTyped(ROLES);

  useEffect(() => { try { const t = localStorage.getItem("theme"); if (t) setTheme(t); } catch (e) {} }, []);
  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }, [theme]);
  const toggle = () => {
    const dark = theme ? theme === "dark" : !window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(dark ? "light" : "dark");
  };
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2000); };
    try { navigator.clipboard.writeText(EMAIL).then(done, done); } catch (e) { done(); }
  };
  const nav = [["sobre","Sobre"],["stack","Stack"],["carreira","Carreira"],["projetos","Projetos"],["contato","Contato"]];
  const list = showAll ? PROJECTS : PROJECTS.slice(0, 5);
  const doubled = [...STACK, ...STACK];

  return (<>
    <header><div className="wrap"><nav>
      <a href="#" className="logo mono">HUGO<b>MENDES</b></a>
      <div className={"links" + (menu ? " open" : "")}>
        {nav.map(([id, l]) => <a key={id} href={"#" + id} onClick={() => setMenu(false)}>{l}</a>)}
      </div>
      <div className="tools">
        <button className="ib" onClick={toggle} aria-label="Alternar tema">◐</button>
        <button className="ib burger" onClick={() => setMenu(!menu)} aria-label="Menu">☰</button>
      </div>
    </nav></div></header>

    <main>
      <div className="wrap"><div className="hero">
        <div>
          <div className="prompt mono">hugo@portfolio:~$ whoami<span className="cur"></span></div>
          <h1>Hugo<em>Mendes.</em></h1>
          <div className="role"><b>{role}</b><span className="cur" style={{ background: "var(--muted)" }}></span></div>
          <p className="lead">Engenheiro de Computação focado em sistemas web, dashboards e interfaces modernas. Do banco de dados ao front-end, com PHP, React e Next.js.</p>
          <div className="status mono"><span className="dot"></span> Disponível para novas oportunidades</div>
          <div className="cta">
            <a className="btn p" href="#projetos">Ver projetos →</a>
            <a className="btn" href={LI} target="_blank" rel="noopener">LinkedIn →</a>
            <a className="btn" href={GH} target="_blank" rel="noopener">GitHub →</a>
          </div>
        </div>
        <div className="avwrap"><div className="av">HM</div></div>
        <a href="#sobre" className="scroll mono">SCROLL ↓</a>
      </div></div>

      <section id="sobre"><div className="wrap"><Reveal>
        <div className="lab mono">[ 01 ] SOBRE</div><h2>Um pouco sobre mim</h2>
        <div className="about">
          <div>
            <p>Sou <b>Hugo Mendes</b>, Desenvolvedor Full Stack com experiência em PHP (Laravel), React, Next.js e MySQL, focado em sistemas web e visualização de dados para a gestão pública.</p>
            <p>Atuo desde 2022 na <b>Secretaria de Transparência e Controle do Maranhão (STC-MA)</b>, evoluindo sistemas governamentais, otimizando bancos de dados e criando dashboards, gráficos e mapas de calor interativos com dados dos municípios.</p>
            <p>Sou graduado em <b>Engenharia da Computação (UEMA)</b>, técnico em Redes (IFMA) e autor do <b>BOGI</b>, meu TCC, que gera retratos falados a partir de relatos textuais usando IA generativa (Stable Diffusion).</p>
          </div>
          <div className="facts">
            <div className="fact"><small className="mono">Experiência</small><b className="big">4+ anos</b></div>
            <div className="fact"><small className="mono">Foco</small><b>Sistemas web, dashboards e APIs REST</b></div>
            <div className="fact"><small className="mono">Stack principal</small><b>PHP/Laravel · React/Next.js · MySQL</b></div>
            <div className="fact"><small className="mono">Certificações</small><b>CCNA · B8One Front-End · Modelagem de Dados · HTML Web Developer</b></div>
          </div>
        </div>
      </Reveal></div></section>

      <section id="stack" style={{ paddingInline: 0 }}><div className="wrap"><Reveal>
        <div className="lab mono">[ 02 ] STACK</div><h2>Tecnologias que uso no dia a dia.</h2>
      </Reveal></div>
        <div className="marq"><div className="track">{doubled.map((s, i) => <span className="chip mono" key={i}>{s}</span>)}</div></div>
        <div className="marq rev"><div className="track">{[...doubled].reverse().map((s, i) => <span className="chip mono" key={i}>{s}</span>)}</div></div>
      </section>

      <section id="carreira"><div className="wrap"><Reveal>
        <div className="lab mono">[ 03 ] CARREIRA</div><h2>Experiência profissional.</h2>
        <div className="jobs">{JOBS.map(j => <Job key={j.role} j={j} />)}</div>
      </Reveal></div></section>

      <section id="projetos"><div className="wrap"><Reveal>
        <div className="lab mono">[ 04 ] PROJETOS</div><h2>Projetos que viraram código.</h2>
        <div className="plist">{list.map((p, i) => (
          <article className="pr" key={p.name}>
            <div className="pn mono">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <h3>{p.name}{p.live && <span className="live">ONLINE</span>}</h3>
              <div className="st mono">{p.stack}</div>
              <p>{p.desc}</p>
            </div>
            <div className="pl">
              {p.live && <a href={p.live} target="_blank" rel="noopener">Ver online ↗</a>}
              <a href={p.repo} target="_blank" rel="noopener">Ver no GitHub ↗</a>
            </div>
          </article>))}
        </div>
        <div style={{ textAlign: "center", marginTop: 28 }}>
          {PROJECTS.length > 5 && <button className="btn" onClick={() => setShowAll(!showAll)}>{showAll ? "Mostrar menos" : `Mostrar mais ${PROJECTS.length - 5} projetos`}</button>}
          <a className="btn" style={{ marginLeft: 10 }} href={R("").replace(/\/$/, "") + "?tab=repositories"} target="_blank" rel="noopener">Todos no GitHub →</a>
        </div>
      </Reveal></div></section>

      <section id="contato"><div className="wrap"><Reveal>
        <div className="form">
          <div className="lab mono">[ 05 ] CONTATO</div>
          <h2>Bora construir algo incrível juntos?</h2>
          <p>Aberto a oportunidades como desenvolvedor Front-End, Back-End ou Full Stack. Vamos conversar?</p>
          <div className="cta">
            <button className="btn p mono mail" onClick={copy}>{copied ? "e-mail copiado ✓" : EMAIL}</button>
            <a className="btn" href={"mailto:" + EMAIL}>Enviar e-mail</a>
            <a className="btn" href={LI} target="_blank" rel="noopener">LinkedIn</a>
            <a className="btn" href={GH} target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </Reveal></div></section>
    </main>
    <footer><div className="wrap mono">© {new Date().getFullYear()} Hugo Mendes · São Luís, MA · Todos os direitos reservados</div></footer>
  </>);
}
