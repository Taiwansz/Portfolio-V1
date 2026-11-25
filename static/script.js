/* ==========================================================================
   MATHEUS SOUSA PORTFOLIO 2026 — EDITORIAL MACRO-SCROLLYTELLING ENGINE
   Lenis + GSAP ScrollTrigger + Live 3D Golden ThSyr Core + 2D Particle Waves
   + CAD Blueprint Tour + 5-Step Discrete EVP + Horizontal Gallery + Strikethrough
   ========================================================================== */
(function () {
  "use strict";

  const STATIC_BASE = window.PORTFOLIO_STATIC_BASE || "/static/";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isDesktop = () => window.matchMedia("(min-width: 881px)").matches;

  document.documentElement.classList.add("js");
  if (!reduceMotion) document.documentElement.classList.add("motion");

  /* ------------------------------------------------------------------------
     BILINGUAL DICTIONARY (PT-BR / EN-US)
     ------------------------------------------------------------------------ */
  const I18N = {
    pt: {
      nav_menu: "Sumário",
      rail_in: "Você está em",
      hero_kicker: "AI & SYSTEMS ENGINEER · INDAIATUBA / CAMPINAS",
      hero_l1: "Sistemas cognitivos.",
      hero_l2: "Engenharia sem folga.",
      hero_lead: "HR Data Analyst I no Agibank e graduando em Ciência da Computação (UniMAX '27). Projeto runtimes multiagentes em Python, compiladores determinísticos para LLMs e software com tolerância de usinagem.",
      hero_cta1: "Explorar ThSyr #01 &rarr;",
      hero_cta2: "Testar TokLang ao vivo",
      t_mod: "módulos no engine ThSyr",
      t_ast: "tipagem estrita AST",
      t_tok: "tokens no TokLang",
      t_nod: "nós no grafo neural",
      story_kicker: "A GÊNESE INDUSTRIAL",
      story_h2: "Da tolerância de micrômetro à arquitetura de sistemas.",
      thsyr_tag: "PROJETO PRINCIPAL · COMPLEXIDADE MÁXIMA",
      thsyr_lead: "Sistema operacional cognitivo multiagente projetado do zero em Python e TypeScript.",
      btn_full_xray: "Dossiê completo",
      rank_kicker: "02 &mdash; 07 · AUTORIA PRÓPRIA",
      rank_h2: "Cada sistema ranqueado pelo peso real de engenharia.",
      rank_note: "Estritamente repositórios de autoria própria — de compiladores determinísticos e auditores AST a ledgers contábeis ACID e C++ em Unreal Engine 5.",
      wb_kicker: "PROVA INTERATIVA · PROJETO #02 (TCC)",
      wb_h2: "Compilador TokLang ao vivo.",
      fin_kicker: "DISPONIBILIDADE · 2026 / 2027",
      fin_l1: "Rigor de usinagem.",
      fin_l2: "Escala de software.",
      fin_sub: "Aberto a posições CLT Junior / Pleno em AI & Software Engineering (Campinas/RMC ou Remoto Brasil) e oportunidades Remotas Globais em USD (fuso UTC-3)."
    },
    en: {
      nav_menu: "Index",
      rail_in: "You are in",
      hero_kicker: "APPLIED AI & SYSTEMS ENGINEER · BRAZIL (UTC-3)",
      hero_l1: "Cognitive systems.",
      hero_l2: "Zero-tolerance engineering.",
      hero_lead: "HR Data Analyst I at Agibank and CS Senior (UniMAX '27). I architect multi-agent Python runtimes, deterministic LLM context compilers, and production software with industrial machining precision.",
      hero_cta1: "Explore ThSyr #01 &rarr;",
      hero_cta2: "Run TokLang live",
      t_mod: "Python engine modules",
      t_ast: "strict AST type coverage",
      t_tok: "TokLang token reduction",
      t_nod: "synaptic graph nodes",
      story_kicker: "THE INDUSTRIAL GENESIS",
      story_h2: "From micron tolerance to systems architecture.",
      thsyr_tag: "FLAGSHIP PROJECT · MAXIMUM COMPLEXITY",
      thsyr_lead: "Multi-agent cognitive operating system built from scratch in Python and TypeScript.",
      btn_full_xray: "Full architecture dossier",
      rank_kicker: "02 &mdash; 07 · AUTHORED SYSTEMS",
      rank_h2: "Every system ranked by real engineering depth.",
      rank_note: "Strictly original self-authored repositories — from deterministic compilers and AST auditors to ACID ledgers and C++ in Unreal Engine 5.",
      wb_kicker: "LIVE PROOF · PROJECT #02 (B.S. THESIS)",
      wb_h2: "TokLang compiler running live.",
      fin_kicker: "AVAILABILITY · 2026 / 2027",
      fin_l1: "Machining rigor.",
      fin_l2: "Software scale.",
      fin_sub: "Open to full-time AI & Software Engineering roles (Campinas/RMC Hybrid, Brazil Remote, or Global Remote USD in UTC-3)."
    }
  };

  /* ------------------------------------------------------------------------
     DATA: AUTHORED SYSTEMS (#01 -> #07) + COMPLETE ARCHIVE (0% THIRD-PARTY)
     ------------------------------------------------------------------------ */
  const COMPLEXITY_SYSTEMS = [
    {
      id: "toklang",
      rank: "02",
      name: "TokLang",
      subtitle: "Compilador Determinístico LL(1) para LLMs (TCC)",
      tierLabel: "COMPLEXIDADE #02 · COMPILADORES & IA",
      bars: 5,
      desc: "Middleware formal (Lexer -> Parser LL(1) -> AST -> poda por Entropia de Shannon) para comprimir janelas de RAG e prompts com fidelidade semântica. Validado sobre NVIDIA NIM em A100 SXM4.",
      stack: "Python · Teoria de Compiladores · AST · Entropia de Shannon · NVIDIA NIM",
      metrics: [
        { val: "-56,2%", lbl: "Tokens faturados" },
        { val: "-80,7%", lbl: "FLOPs O(n²)" },
        { val: "574 ms", lbl: "TTFT medido" },
        { val: "100%", lbl: "Reversível" }
      ],
      diagram: [
        "01 :: Lexer & Proteção de Entidades",
        "02 :: Parser LL(1) -> AST Canônica",
        "03 :: Poda por Entropia de Shannon",
        "BM :: NVIDIA NIM A100 (-56,2% · 574ms)"
      ],
      links: [
        { label: "Testar abaixo", href: "#toklang-lab", primary: true, internal: true },
        { label: "GitHub TCC", href: "https://github.com/Taiwansz/TCC-CIENCIAS-DA-COMPUTACAO-2026" }
      ]
    },
    {
      id: "atlas",
      rank: "03",
      name: "Atlas Engineering OS",
      subtitle: "Governança Agent-Native & Auditoria AST",
      tierLabel: "COMPLEXIDADE #03 · ANÁLISE ESTÁTICA & SAAS",
      bars: 5,
      desc: "Plataforma SaaS e CLI construída para impedir architectural drift em repositórios alterados por agentes autônomos. Audita Árvores Sintáticas Abstratas (AST), contratos Zod e invariantes.",
      stack: "TypeScript · Python · Next.js · AST Static Analysis · Zod · OAuth2 CLI",
      metrics: [
        { val: "100", lbl: "Módulos de código" },
        { val: "SaaS + CLI", lbl: "Arquitetura híbrida" },
        { val: "AST Gate", lbl: "Bloqueio de drift" },
        { val: "Live", lbl: "Deploy Vercel" }
      ],
      img: STATIC_BASE + "images/v2/atlas_tablet.jpg",
      links: [
        { label: "Abrir Vercel", href: "https://atlas-landing-page.vercel.app", primary: true },
        { label: "GitHub", href: "https://github.com/Taiwansz/Atlas" }
      ]
    },
    {
      id: "thathena",
      rank: "04",
      name: "ThAthena",
      subtitle: "Sistema Operacional Epistêmico Autônomo",
      tierLabel: "COMPLEXIDADE #04 · SISTEMAS EPISTÊMICOS",
      bars: 4,
      desc: "Sistema operacional epistêmico autônomo em Python desenhado para aprendizado profundo estruturado, decomposição conceitual e verificação rigorosa de domínio sem consumo passivo.",
      stack: "Python · Arquitetura Epistêmica · Grafo Conceitual · Automação",
      metrics: [
        { val: "47", lbl: "Módulos Python/Web" },
        { val: "Autônomo", lbl: "Ciclo epistêmico" },
        { val: "Zero Slop", lbl: "Rigor conceitual" },
        { val: "Autoral", lbl: "Ecossistema Th" }
      ],
      diagram: [
        "INGEST :: Decomposição de fontes técnicas",
        "SYNTH  :: Grafo de dependências conceituais",
        "VERIFY :: Checagem ativa de lacunas",
        "OUTPUT :: Dossiês técnicos auditáveis"
      ],
      links: [
        { label: "Repositório GitHub", href: "https://github.com/Taiwansz/ThAthena", primary: true }
      ]
    },
    {
      id: "thallium",
      rank: "05",
      name: "Thallium Core Ledger",
      subtitle: "Core Contábil de Partidas Dobradas (Double-Entry)",
      tierLabel: "COMPLEXIDADE #05 · INTEGRIDADE TRANSACIONAL",
      bars: 4,
      desc: "Engine financeiro digital projetado sobre contabilidade de partidas dobradas em PostgreSQL + Supabase RLS. Nenhum saldo é editado diretamente sem lançamento imutável de soma zero.",
      stack: "TypeScript · PostgreSQL · Supabase RLS · ACID · Double-Entry Ledger",
      metrics: [
        { val: "Double-Entry", lbl: "Invariante contábil" },
        { val: "ACID + RLS", lbl: "Isolamento no banco" },
        { val: "Imutável", lbl: "Trilha contábil" },
        { val: "Live", lbl: "Deploy Vercel" }
      ],
      img: STATIC_BASE + "images/v2/thallium_tablet.jpg",
      links: [
        { label: "Abrir Vercel", href: "https://thallium-chi.vercel.app", primary: true },
        { label: "GitHub", href: "https://github.com/Taiwansz/Thallium" }
      ]
    },
    {
      id: "thpay",
      rank: "06",
      name: "ThPay",
      subtitle: "Motor Determinístico de Folha & Compliance eSocial",
      tierLabel: "COMPLEXIDADE #06 · MOTOR TRABALHISTA BR",
      bars: 3,
      desc: "Motor determinístico de folha de pagamento contínua aderente à CLT/RFB/MTE, com barra de prontidão (readiness 98,2%), simulação de encargos, remessa CNAB 240/Pix e holerite ICP-Brasil.",
      stack: "JavaScript · TypeScript · Regras CLT/eSocial · CNAB 240/Pix · PDF Audit",
      metrics: [
        { val: "391 vidas", lbl: "Base CLT + PJ" },
        { val: "98,2%", lbl: "Readiness" },
        { val: "eSocial", lbl: "Compliance BR" },
        { val: "ICP-BR", lbl: "Holerite auditado" }
      ],
      img: STATIC_BASE + "images/v2/thpay_ui.jpg",
      links: [
        { label: "Repositório GitHub", href: "https://github.com/Taiwansz/ThPay", primary: true }
      ]
    },
    {
      id: "skypiea",
      rank: "07",
      name: "Skypiea (UE5 / C++)",
      subtitle: "Engenharia de Sistemas 3D em Unreal Engine 5",
      tierLabel: "COMPLEXIDADE #07 · C++ & TEMPO REAL 3D",
      bars: 3,
      desc: "Projeto autoral desenvolvido em C++ sobre Unreal Engine 5, explorando gerenciamento de memória de baixo nível, loop de simulação espacial em tempo real e arquitetura orientada a componentes.",
      stack: "C++ · Unreal Engine 5 · Arquitetura 3D · Real-Time Loop",
      metrics: [
        { val: "C++", lbl: "Linguagem core" },
        { val: "UE5", lbl: "Engine real-time" },
        { val: "Low-Level", lbl: "Controle de memória" },
        { val: "Autoral", lbl: "Repositório público" }
      ],
      diagram: [
        "CORE    :: C++ Actors & State Machines",
        "ENGINE  :: Unreal Engine 5 Pipeline",
        "PHYSICS :: Spatial Collision Loop",
        "REPO    :: github.com/Taiwansz/skypea"
      ],
      links: [
        { label: "Repositório GitHub", href: "https://github.com/Taiwansz/skypea", primary: true }
      ]
    }
  ];

  const DOSSIERS = {
    thsyr: {
      tier: "COMPLEXIDADE #01 · NÍVEL S · PROJETO PRINCIPAL",
      title: "ThSyr — Multi-Agent Cognitive OS",
      problem: "Agentes de IA sofrem de amnésia entre sessões, bajulação (sycophancy) e alucinação arquitetural. O ThSyr resolve isso no nível de engenharia com memória persistente em 5 lobos e travas determinísticas em código.",
      complexity: "206 módulos no motor Python (96,6% de cobertura de tipagem auditada via AST), 77 suítes de testes automatizados, grafo neural com 3.972+ nós e 38.126+ sinapses, recuperação híbrida RRF + Spreading Activation, Operator Intelligence e Desktop Control Center nativo em React 18 + TypeScript + Three.js.",
      stack: "Python 3.14 · TypeScript · React 18 · Three.js · SQLite · AST · GraphRAG · Playwright",
      links: [{ label: "Abrir no GitHub", href: "https://github.com/Taiwansz/ThSyr" }]
    }
  };
  COMPLEXITY_SYSTEMS.forEach((s) => {
    DOSSIERS[s.id] = {
      tier: s.tierLabel,
      title: s.name,
      problem: s.subtitle,
      complexity: s.desc,
      stack: s.stack,
      links: s.links.filter((l) => !l.internal)
    };
  });

  const ARCHIVE_ITEMS = [
    { num: "#01", cat: "core", name: "ThSyr Cognitive OS", desc: "Runtime multiagente Python/TS com grafo neural de 5 lobos, 206 módulos e 77 suítes.", stack: "Python · TS · React · Three.js", link: "https://github.com/Taiwansz/ThSyr", label: "GitHub", dossier: "thsyr" },
    { num: "#02", cat: "core", name: "TokLang Compiler", desc: "Compilador determinístico LL(1)/AST para compressão de contexto em LLMs (-56,2% tokens).", stack: "Python · Compiladores · NIM", link: "https://github.com/Taiwansz/TCC-CIENCIAS-DA-COMPUTACAO-2026", label: "GitHub", dossier: "toklang" },
    { num: "#03", cat: "core", name: "Atlas Engineering OS", desc: "SaaS e CLI agent-native de auditoria AST contra deriva arquitetural.", stack: "TypeScript · Next.js · AST · Zod", link: "https://atlas-landing-page.vercel.app", label: "Vercel", dossier: "atlas" },
    { num: "#04", cat: "core", name: "ThAthena", desc: "Sistema operacional epistêmico autônomo para aprendizado profundo estruturado.", stack: "Python · Sistemas Epistêmicos", link: "https://github.com/Taiwansz/ThAthena", label: "GitHub", dossier: "thathena" },
    { num: "#05", cat: "core", name: "Thallium Core Ledger", desc: "Core contábil de partidas dobradas em PostgreSQL + Supabase RLS.", stack: "TypeScript · PostgreSQL · RLS", link: "https://thallium-chi.vercel.app", label: "Vercel", dossier: "thallium" },
    { num: "#06", cat: "core", name: "ThPay", desc: "Motor determinístico de folha contínua e compliance trabalhista eSocial/CLT.", stack: "JavaScript · Payroll · eSocial", link: "https://github.com/Taiwansz/ThPay", label: "GitHub", dossier: "thpay" },
    { num: "#07", cat: "core", name: "Skypiea", desc: "Projeto autoral de engenharia 3D em C++ sobre Unreal Engine 5.", stack: "C++ · Unreal Engine 5", link: "https://github.com/Taiwansz/skypea", label: "GitHub", dossier: "skypiea" },
    { num: "WEB", cat: "web", name: "Vitrine Comércios BR", desc: "Vitrine de 12 landing pages especializadas por nicho comercial brasileiro.", stack: "HTML · CSS · Design Systems", link: "https://github.com/Taiwansz/vitrine-comercios-br", label: "GitHub" },
    { num: "WEB", cat: "web", name: "Jornada Excursões", desc: "Plataforma de gestão de excursões e reservas em TypeScript.", stack: "TypeScript · Vercel", link: "https://jornada-gestao-excursoes.vercel.app", label: "Vercel" },
    { num: "WEB", cat: "web", name: "FeriadosBR", desc: "Mapeamento inteligente de feriados nacionais, estaduais e municipais.", stack: "JavaScript · APIs · Vercel", link: "https://feriados-brasil-dun.vercel.app", label: "Vercel" },
    { num: "APP", cat: "live", name: "TaskFlow Studio", desc: "Gestão de tarefas full-stack com SQLite rodando neste servidor Flask.", stack: "Python · Flask · SQLAlchemy", link: "/projetos/taskflow/app", label: "Abrir App" },
    { num: "APP", cat: "live", name: "CryptoVision", desc: "Monitor analítico de ativos digitais com feed estruturado ao vivo.", stack: "Python · Flask · APIs", link: "/projetos/cryptovision/app", label: "Abrir App" },
    { num: "APP", cat: "live", name: "AuraWeather", desc: "Interface meteorológica minimalista via API climática em Flask.", stack: "Python · Flask · Weather API", link: "/projetos/auraweather/app", label: "Abrir App" },
    { num: "APP", cat: "live", name: "OmniFlow & SonicWeave", desc: "Workspace modular e laboratório Web Audio integrados via blueprints Flask.", stack: "Python · Flask · Web Audio", link: "/projetos/sonicweave/app", label: "Abrir App" }
  ];

  /* ------------------------------------------------------------------------
     HELPER: ZERO-LICENSE RECURSIVE WORD SPLITTER (O JEITO AGI go() PATTERN)
     ------------------------------------------------------------------------ */
  function splitWords(el, wrapMask) {
    if (!el || el.dataset.splitDone) return el ? Array.from(el.querySelectorAll(".w")) : [];
    el.dataset.splitDone = "1";
    const fullText = (el.textContent || "").trim().replace(/\s+/g, " ");
    if (fullText) el.setAttribute("aria-label", fullText);

    function walk(node) {
      if (node.nodeType === 3) {
        const parts = node.nodeValue.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) {
            frag.appendChild(document.createTextNode(p));
          } else {
            const w = document.createElement("span");
            w.className = "w";
            w.textContent = p;
            w.setAttribute("aria-hidden", "true");
            if (wrapMask) {
              const m = document.createElement("span");
              m.className = "wm";
              m.appendChild(w);
              frag.appendChild(m);
            } else {
              frag.appendChild(w);
            }
          }
        });
        node.parentNode.replaceChild(frag, node);
      } else if (node.nodeType === 1 && node.tagName !== "BR") {
        Array.from(node.childNodes).forEach(walk);
      }
    }

    Array.from(el.childNodes).forEach(walk);
    return Array.from(el.querySelectorAll(".w"));
  }

  /* ------------------------------------------------------------------------
     1. LIVE ANIMATED 3D GOLDEN THSYR NEURAL CORE (60FPS CANVAS)
     ------------------------------------------------------------------------ */
  const LOBE_INFO = {
    all: "Núcleo Holográfico ThSyr · arraste para orbitar em 3D",
    frontal: "Lobo Frontal · Inibição Pré-Frontal, leis e veto lógico (prefrontal_cortex.py)",
    parietal: "Lobo Parietal · Análise AST, Python, SQL e CodeGraph (code_graph.py)",
    temporal: "Lobo Temporal · Memória episódica & busca híbrida RRF (neural_retriever.py)",
    occipital: "Lobo Occipital · Visual Studio Loop, Playwright QA & design systems",
    limbico: "Sistema Límbico · Identidade, restrições imutáveis e Operator Intelligence"
  };

  function initLiveNeuralCore() {
    const canvas = document.getElementById("thsyrLiveCore");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let activeLobe = "all";
    let rotY = 0.28;
    let rotX = 0.22;
    let velY = 0.0034;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;

    function makeCrispDot(core, mid, glow) {
      const s = document.createElement("canvas");
      s.width = 32;
      s.height = 32;
      const gctx = s.getContext("2d");
      const g = gctx.createRadialGradient(16, 16, 0.5, 16, 16, 15.5);
      g.addColorStop(0.0, core);
      g.addColorStop(0.36, core);
      g.addColorStop(0.56, mid);
      g.addColorStop(1.0, glow);
      gctx.fillStyle = g;
      gctx.fillRect(0, 0, 32, 32);
      return s;
    }

    const sprCrownApex = makeCrispDot("rgba(255, 224, 118, 1)", "rgba(246, 178, 42, 0.72)", "rgba(240, 145, 18, 0)");
    const sprCrownRich = makeCrispDot("rgba(245, 170, 34, 0.96)", "rgba(222, 132, 18, 0.55)", "rgba(200, 110, 12, 0)");
    const sprBowlBright = makeCrispDot("rgba(255, 226, 134, 0.98)", "rgba(235, 176, 56, 0.62)", "rgba(212, 150, 30, 0)");
    const sprBowlFine = makeCrispDot("rgba(224, 166, 52, 0.88)", "rgba(186, 126, 28, 0.34)", "rgba(170, 110, 20, 0)");
    const sprDim = makeCrispDot("rgba(182, 132, 46, 0.45)", "rgba(130, 92, 30, 0.16)", "rgba(120, 82, 24, 0)");
    const sprPulse = makeCrispDot("rgba(255, 248, 214, 1)", "rgba(255, 205, 84, 0.88)", "rgba(255, 170, 38, 0)");

    const PHI1 = 1.22074408460575947536;
    const A1 = 1 / PHI1, A2 = 1 / (PHI1 * PHI1), A3 = 1 / (PHI1 * PHI1 * PHI1);
    const lobeList = ["frontal", "parietal", "temporal", "occipital", "limbico"];
    const nodes = [];

    const CROWN_N = 560;
    const CROWN_R = 0.56;
    const CROWN_BASE_Y = -0.34;
    for (let i = 0; i < CROWN_N; i++) {
      const u = (0.5 + (i + 1) * A1) % 1;
      const v = (0.5 + (i + 1) * A2) % 1;
      const theta = u * Math.PI * 2;
      const phi = Math.acos(1 - v * 0.44);
      const layer = 0.91 + (i % 4) * 0.032;
      const rr = CROWN_R * layer;
      const yCap = CROWN_BASE_Y - Math.max(0, (Math.cos(phi) - Math.cos(0.96)) * CROWN_R * 1.18);
      const xzR = rr * Math.sin(phi) * 1.04;
      const isApex = phi < 0.42;
      nodes.push({
        x: xzR * Math.cos(theta),
        y: yCap,
        z: xzR * Math.sin(theta),
        size: isApex ? (1.9 + (i % 3) * 0.45) : (1.35 + (i % 4) * 0.34),
        lobe: i % 3 === 0 ? "limbico" : "frontal",
        kind: isApex ? "apex" : "crown",
        phase: u * Math.PI * 2
      });
    }

    const INNER_N = 620;
    for (let i = 0; i < INNER_N; i++) {
      const u = (0.5 + (i + 37) * A1) % 1;
      const v = (0.5 + (i + 37) * A2) % 1;
      const w = (0.5 + (i + 37) * A3) % 1;
      const theta = u * Math.PI * 2;
      const lat = Math.asin(Math.pow(v, 0.86));
      const rLat = 0.78 * Math.cos(lat) * (0.94 + w * 0.1);
      const y = -0.32 + 0.92 * Math.sin(lat) + (w - 0.5) * 0.07;
      const sector = Math.floor(((theta + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2 / 5)) % 5;
      const isHero = i % 11 === 0;
      nodes.push({
        x: rLat * Math.cos(theta),
        y,
        z: rLat * Math.sin(theta),
        size: isHero ? (2.6 + (i % 3) * 0.55) : (1.15 + (i % 4) * 0.25),
        lobe: lobeList[sector],
        kind: isHero ? "hero" : "fine",
        phase: v * Math.PI * 2
      });
    }

    const OUTER_N = 640;
    for (let i = 0; i < OUTER_N; i++) {
      const u = (0.5 + (i + 113) * A1) % 1;
      const v = (0.5 + (i + 113) * A2) % 1;
      const w = (0.5 + (i + 113) * A3) % 1;
      const theta = u * Math.PI * 2;
      const lat = Math.asin(Math.pow(v, 0.82));
      const rimWave = (1 - Math.sin(lat)) * 0.14 * Math.sin(theta * 2 + 0.5);
      const rLat = 1.18 * Math.cos(lat) * (0.92 + w * 0.14);
      const y = -0.44 + 1.32 * Math.sin(lat) + rimWave + (w - 0.5) * 0.08;
      const sector = Math.floor(((theta + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2 / 5)) % 5;
      const isHero = i % 19 === 0;
      nodes.push({
        x: rLat * Math.cos(theta),
        y,
        z: rLat * Math.sin(theta),
        size: isHero ? 2.2 : (0.95 + (i % 3) * 0.22),
        lobe: lobeList[sector],
        kind: isHero ? "hero" : "fine",
        phase: w * Math.PI * 2
      });
    }

    const edges = [];
    for (let i = 0; i < 42; i++) {
      const a = nodes[(i * 13) % CROWN_N];
      const b = nodes[CROWN_N + ((i * 23 + 9) % (INNER_N + OUTER_N))];
      edges.push({ a, b, lobe: b.lobe });
    }

    const pulses = Array.from({ length: 22 }, (_, i) => ({
      edgeIdx: (i * 2) % edges.length,
      t: (i * 0.19) % 1,
      speed: 0.008 + (i % 5) * 0.0025
    }));

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement.getBoundingClientRect();
      if (rect.width < 10) return;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const wrap = canvas.parentElement;
    wrap.addEventListener("pointerdown", (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    });
    window.addEventListener("pointermove", (e) => {
      if (dragging) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        rotY += dx * 0.0075;
        rotX = Math.max(-0.5, Math.min(0.68, rotX + dy * 0.005));
        velY = dx * 0.0008;
        lastX = e.clientX;
        lastY = e.clientY;
      } else {
        const rect = wrap.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
          targetTiltX = ((e.clientY - rect.top) / rect.height - 0.5) * 0.14;
          targetTiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 0.2;
        }
      }
    });
    window.addEventListener("pointerup", () => { dragging = false; });

    const readout = document.getElementById("coreLobeReadout");
    document.querySelectorAll("[data-core-lobe]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeLobe = btn.dataset.coreLobe;
        document.querySelectorAll("[data-core-lobe]").forEach((b) => b.classList.toggle("is-active", b === btn));
        if (readout) readout.textContent = LOBE_INFO[activeLobe] || LOBE_INFO.all;
        velY = 0.022;
      });
    });

    let time = 0;
    const projected = new Array(nodes.length);

    function render() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w > 0 && h > 0) {
        ctx.clearRect(0, 0, w, h);

        if (!dragging && !reduceMotion) {
          rotY += velY;
          velY += (0.0034 - velY) * 0.04;
        }
        time += reduceMotion ? 0 : 0.022;

        const cx = w * 0.5;
        const cy = h * 0.45;
        const scale = Math.min(w, h) * 0.36;
        const cosY = Math.cos(rotY + targetTiltY);
        const sinY = Math.sin(rotY + targetTiltY);
        const cosX = Math.cos(rotX + targetTiltX);
        const sinX = Math.sin(rotX + targetTiltX);

        const aura = ctx.createRadialGradient(cx, cy - scale * 0.2, scale * 0.05, cx, cy + scale * 0.1, scale * 1.15);
        aura.addColorStop(0, "rgba(235, 168, 42, 0.12)");
        aura.addColorStop(0.55, "rgba(190, 128, 28, 0.04)");
        aura.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(cx, cy + scale * 0.08, scale * 1.18, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.lineWidth = 0.85;
        for (let ring = 0; ring < 2; ring++) {
          const rRing = ring === 0 ? 0.82 : 1.06;
          const yRing = -0.34 + ring * 0.04;
          ctx.strokeStyle = ring === 0 ? "rgba(240, 180, 62, 0.16)" : "rgba(220, 160, 48, 0.09)";
          ctx.beginPath();
          for (let s = 0; s <= 48; s++) {
            const ang = (s / 48) * Math.PI * 2;
            const x0 = Math.cos(ang) * rRing;
            const z0 = Math.sin(ang) * rRing;
            const y0 = yRing + Math.sin(ang * 2 + time * 0.7) * 0.03;
            const rx = x0 * cosY - z0 * sinY;
            const rz1 = x0 * sinY + z0 * cosY;
            const ry = y0 * cosX - rz1 * sinX;
            const rz = y0 * sinX + rz1 * cosX;
            const p = 3.8 / (3.8 + rz);
            const sx = cx + rx * scale * p;
            const sy = cy + ry * scale * p;
            if (s === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.stroke();
        }
        ctx.restore();

        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const breathe = 1 + Math.sin(time + n.phase) * 0.015;
          const x0 = n.x * breathe;
          const y0 = n.y * breathe;
          const z0 = n.z * breathe;
          const rx = x0 * cosY - z0 * sinY;
          const rz1 = x0 * sinY + z0 * cosY;
          const ry = y0 * cosX - rz1 * sinX;
          const rz = y0 * sinX + rz1 * cosX;
          const perspective = 3.8 / (3.8 + rz);
          projected[i] = { sx: cx + rx * scale * perspective, sy: cy + ry * scale * perspective, z: rz, p: perspective, node: n };
        }

        ctx.lineWidth = 0.65;
        for (let i = 0; i < edges.length; i++) {
          const e = edges[i];
          const match = activeLobe === "all" || e.lobe === activeLobe;
          const a = e.a, b = e.b;
          const ax1 = a.x * cosY - a.z * sinY, az1 = a.x * sinY + a.z * cosY;
          const ay2 = a.y * cosX - az1 * sinX, az2 = a.y * sinX + az1 * cosX;
          const ap = 3.8 / (3.8 + az2);
          const bx1 = b.x * cosY - b.z * sinY, bz1 = b.x * sinY + b.z * cosY;
          const by2 = b.y * cosX - bz1 * sinX, bz2 = b.y * sinX + bz1 * cosX;
          const bp = 3.8 / (3.8 + bz2);
          ctx.strokeStyle = match ? "rgba(235, 178, 62, 0.11)" : "rgba(200, 148, 46, 0.025)";
          ctx.beginPath();
          ctx.moveTo(cx + ax1 * scale * ap, cy + ay2 * scale * ap);
          ctx.lineTo(cx + bx1 * scale * bp, cy + by2 * scale * bp);
          ctx.stroke();
        }

        projected.sort((a, b) => b.z - a.z);
        ctx.globalCompositeOperation = "source-over";
        for (let i = 0; i < projected.length; i++) {
          const item = projected[i];
          const n = item.node;
          const isMatch = activeLobe === "all" || n.lobe === activeLobe || ((n.kind === "apex" || n.kind === "crown") && activeLobe === "frontal");
          const twinkle = 0.82 + 0.18 * Math.sin(time * 1.45 + n.phase);
          const depthFactor = Math.max(0.28, Math.min(1, 1.35 - item.z * 0.42));
          const r = n.size * item.p * (isMatch ? 1.72 : 1.25);

          ctx.globalAlpha = isMatch ? depthFactor * twinkle : depthFactor * 0.24;
          let spr = sprBowlFine;
          if (!isMatch) spr = sprDim;
          else if (n.kind === "apex") spr = sprCrownApex;
          else if (n.kind === "crown") spr = sprCrownRich;
          else if (n.kind === "hero") spr = sprBowlBright;
          ctx.drawImage(spr, item.sx - r, item.sy - r, r * 2, r * 2);
        }

        if (!reduceMotion) {
          ctx.globalCompositeOperation = "lighter";
          for (let i = 0; i < pulses.length; i++) {
            const pl = pulses[i];
            pl.t += pl.speed;
            if (pl.t > 1) {
              pl.t = 0;
              pl.edgeIdx = (pl.edgeIdx + 5) % edges.length;
            }
            const e = edges[pl.edgeIdx];
            if (activeLobe !== "all" && e.lobe !== activeLobe) continue;
            const px = e.a.x + (e.b.x - e.a.x) * pl.t;
            const py = e.a.y + (e.b.y - e.a.y) * pl.t;
            const pz = e.a.z + (e.b.z - e.a.z) * pl.t;
            const rx = px * cosY - pz * sinY;
            const rz1 = px * sinY + pz * cosY;
            const ry = py * cosX - rz1 * sinX;
            const rz = py * sinX + rz1 * cosX;
            const pr = 3.8 / (3.8 + rz);
            const sx = cx + rx * scale * pr;
            const sy = cy + ry * scale * pr;
            const sz = 4.6 * pr;
            ctx.globalAlpha = 0.88;
            ctx.drawImage(sprPulse, sx - sz, sy - sz, sz * 2, sz * 2);
          }
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
      }
      if (!reduceMotion) requestAnimationFrame(render);
    }
    render();
  }

  /* ------------------------------------------------------------------------
     2. 2D CANVAS 3D-PROJECTED PARTICLE WAVES (O JEITO AGI Lu() ENGINE)
     ------------------------------------------------------------------------ */
  function initParticleWaves() {
    const canvases = document.querySelectorAll("[data-particles]");
    if (!canvases.length) return;

    function makeDot(rgbaCore, rgbaMid) {
      const c = document.createElement("canvas");
      c.width = 48;
      c.height = 48;
      const gctx = c.getContext("2d");
      const g = gctx.createRadialGradient(24, 24, 1, 24, 24, 22);
      g.addColorStop(0, rgbaCore);
      g.addColorStop(0.4, rgbaMid);
      g.addColorStop(1, "rgba(0,0,0,0)");
      gctx.fillStyle = g;
      gctx.fillRect(0, 0, 48, 48);
      return c;
    }

    const whiteDot = makeDot("rgba(244,242,236,0.9)", "rgba(244,242,236,0.22)");
    const goldDot = makeDot("rgba(240,206,116,1)", "rgba(212,175,79,0.34)");

    canvases.forEach((canvas) => {
      const ctx = canvas.getContext("2d");
      const isSoft = canvas.dataset.particles === "soft";
      const cols = window.innerWidth >= 700 ? 96 : 52;
      const rows = window.innerWidth >= 700 ? 28 : 18;
      const accentFlags = new Uint8Array(cols * rows);
      for (let i = 0; i < accentFlags.length; i++) {
        accentFlags[i] = (i * 37 + 13) % 29 === 0 ? 1 : 0;
      }

      let w = 0, h = 0, visible = false, rafId = 0, t = 0;
      let mx = 0, my = 0, smx = 0, smy = 0;

      function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
        w = canvas.clientWidth;
        h = canvas.clientHeight;
        if (w < 10 || h < 10) return;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      resize();
      window.addEventListener("resize", resize);

      const host = canvas.closest("section");
      if (host) {
        host.addEventListener("pointermove", (e) => {
          const r = host.getBoundingClientRect();
          mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
          my = ((e.clientY - r.top) / r.height - 0.5) * 2;
        });
      }

      function drawFrame() {
        if (w < 10 || h < 10) return;
        ctx.clearRect(0, 0, w, h);
        smx += (mx - smx) * 0.04;
        smy += (my - smy) * 0.04;
        t += reduceMotion ? 0 : 0.015;

        const alphaScale = isSoft ? 0.5 : 0.85;
        const fov = 420;
        const cx = w * 0.5 + smx * 46;
        const cy = h * 0.64 + smy * 24;

        ctx.globalCompositeOperation = "lighter";
        for (let r = 0; r < rows; r++) {
          const nz = r / (rows - 1);
          const z = 140 + nz * 740;
          const p = fov / z;
          const drawLine = r % 2 === 0;
          if (drawLine) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(63, 149, 172, ${(1 - nz) * 0.22 * alphaScale})`;
            ctx.lineWidth = 0.8;
          }

          for (let c = 0; c < cols; c++) {
            const nx = (c / (cols - 1) - 0.5) * 2;
            const wx = nx * w * 1.15;
            const wave =
              Math.sin(nx * 4.4 + t * 1.2 + nz * 3.1) * 34 +
              Math.cos(nz * 6.2 - t * 0.9 + nx * 2.1) * 24 +
              Math.sin((nx + nz) * 5.0 + t) * 14;
            const wy = 95 + wave;
            const sx = cx + wx * p;
            const sy = cy + wy * p;

            if (drawLine) {
              if (c === 0) ctx.moveTo(sx, sy);
              else ctx.lineTo(sx, sy);
            }

            const idx = r * cols + c;
            const isGold = accentFlags[idx] === 1;
            const sz = (isGold ? 4.4 : 2.3) * p;
            ctx.globalAlpha = Math.max(0.06, (1 - nz * 0.86) * alphaScale);
            ctx.drawImage(isGold ? goldDot : whiteDot, sx - sz, sy - sz, sz * 2, sz * 2);
          }

          if (drawLine) {
            ctx.globalAlpha = 1;
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
      }

      function loop() {
        drawFrame();
        if (visible && !reduceMotion) rafId = requestAnimationFrame(loop);
      }

      if (reduceMotion) {
        drawFrame();
        return;
      }

      const io = new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        if (visible) {
          cancelAnimationFrame(rafId);
          loop();
        } else {
          cancelAnimationFrame(rafId);
        }
      }, { rootMargin: "120px" });
      io.observe(canvas);
    });
  }

  /* ------------------------------------------------------------------------
     3. RENDER HORIZONTAL COMPLEXITY CARDS (#02 -> #07) & FILTERABLE INDEX
     ------------------------------------------------------------------------ */
  function mountComplexityGallery() {
    const mount = document.getElementById("olharCardsMount");
    if (!mount) return;
    mount.innerHTML = COMPLEXITY_SYSTEMS.map((sys) => {
      const bars = Array.from({ length: 5 }, (_, idx) => `<i class="${idx < sys.bars ? "on" : ""}"></i>`).join("");
      const visual = sys.img
        ? `<img src="${sys.img}" alt="${sys.name}">`
        : `<div class="oc-diagram">${sys.diagram.map((d) => `<div class="oc-diag-line">${d}</div>`).join("")}</div>`;
      return `
        <article class="olhar-card" data-cx-card="${sys.id}">
          <div class="oc-visual">${visual}</div>
          <div class="oc-body">
            <div class="oc-top">
              <span class="oc-rank">COMPLEXIDADE #${sys.rank}</span>
              <span class="oc-bars" aria-hidden="true">${bars}</span>
            </div>
            <h3>${sys.name}</h3>
            <div class="oc-sub">${sys.subtitle}</div>
            <p class="oc-desc">${sys.desc}</p>
            <div class="oc-metrics">
              ${sys.metrics.map((m) => `<div><strong>${m.val}</strong><span>${m.lbl}</span></div>`).join("")}
            </div>
            <div class="oc-actions">
              ${sys.links.map((l) => `<a href="${l.href}" ${l.internal ? "" : 'target="_blank" rel="noopener noreferrer"'} class="${l.primary ? "btn-solid-ink" : "btn-line-ink"}">${l.label}</a>`).join("")}
              <button type="button" class="btn-line-ink" data-open-dossier="${sys.id}">Dossiê</button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  const ARCHIVE_CATS = [
    { id: "all", label: "Todos" },
    { id: "core", label: "Core #01–#07" },
    { id: "web", label: "Produtos Web" },
    { id: "live", label: "Apps Flask ao Vivo" }
  ];
  let activeArchiveCat = "all";

  function renderArchive() {
    const archiveFilters = document.getElementById("archiveFilters");
    const archiveRows = document.getElementById("archiveRows");
    if (!archiveFilters || !archiveRows) return;

    archiveFilters.innerHTML = ARCHIVE_CATS.map((c) => {
      const cnt = c.id === "all" ? ARCHIVE_ITEMS.length : ARCHIVE_ITEMS.filter((x) => x.cat === c.id).length;
      return `<button type="button" class="idx-filter ${activeArchiveCat === c.id ? "is-active" : ""}" data-acat="${c.id}">${c.label} (${cnt})</button>`;
    }).join("");

    archiveFilters.querySelectorAll(".idx-filter").forEach((b) => {
      b.addEventListener("click", () => {
        activeArchiveCat = b.dataset.acat;
        renderArchive();
      });
    });

    const rows = activeArchiveCat === "all" ? ARCHIVE_ITEMS : ARCHIVE_ITEMS.filter((x) => x.cat === activeArchiveCat);
    archiveRows.innerHTML = rows.map((r) => {
      const ext = r.link.startsWith("http");
      return `
        <div class="idx-row">
          <span class="idx-r-num">${r.num}</span>
          <span class="idx-r-name">${r.name}</span>
          <span class="idx-r-desc">${r.desc}</span>
          <span class="idx-r-stack">${r.stack}</span>
          <div class="idx-r-actions">
            ${r.dossier ? `<button type="button" class="idx-action-link is-ghost" data-open-dossier="${r.dossier}">Dossiê</button>` : ""}
            <a href="${r.link}" ${ext ? 'target="_blank" rel="noopener noreferrer"' : ""} class="idx-action-link">${r.label}</a>
          </div>
        </div>
      `;
    }).join("");

    archiveRows.querySelectorAll("[data-open-dossier]").forEach((btn) => {
      btn.addEventListener("click", () => openDossier(btn.dataset.openDossier));
    });
  }

  /* ------------------------------------------------------------------------
     4. LIVE TOKLANG 3-STAGE COMPILER WORKBENCH
     ------------------------------------------------------------------------ */
  const TOKLANG_PRESETS = {
    rag: "Por favor, analise cuidadosamente todo o contexto corporativo abaixo referente aos indicadores operacionais de People Service e HR Data no Agibank, remova qualquer redundância administrativa desnecessária, preserve rigorosamente todas as métricas de SLA, consultas SQL de auditoria e regras de integridade entre sistemas internos, e retorne apenas o diagnóstico estruturado para a liderança executiva.",
    api: "Gostaria que você revisasse detalhadamente a especificação da API transacional em TypeScript com PostgreSQL e Supabase Row Level Security, verificando absolutamente todas as políticas de isolamento multi-tenant, garantindo invariantes estritas de contabilidade de partidas dobradas (double-entry ledger) e evitando qualquer condição de corrida em lançamentos concorrentes.",
    agent: "Você deve atuar como arquiteto de software especialista em análise estática AST e governança de código gerado por agentes de IA. Antes de aprovar qualquer alteração no repositório, execute a verificação completa de tipos, confira se nenhuma dependência cíclica foi introduzida, valide o contrato Zod das rotas e bloqueie imediatamente qualquer deriva arquitetural silenciosa."
  };

  const STOPWORDS = new Set([
    "por", "favor", "cuidadosamente", "todo", "toda", "todos", "todas", "abaixo", "referente",
    "aos", "das", "dos", "que", "uma", "uns", "umas", "para", "com", "sem", "pelo", "pela",
    "qualquer", "desnecessaria", "desnecessário", "desnecessária", "apenas", "gostaria", "voce",
    "você", "detalhadamente", "absolutamente", "durante", "deve", "atuar", "como", "antes",
    "sobre", "entre", "muito", "mais", "tambem", "também", "nesse", "nesta", "deste", "desta"
  ]);

  const DOMAIN_MAP = [
    [/people service/gi, "$PS"],
    [/hr data/gi, "$HRD"],
    [/agibank/gi, "@AGI"],
    [/postgresql/gi, "$PG"],
    [/supabase/gi, "$SUPA"],
    [/row level security/gi, "$RLS"],
    [/typescript/gi, "$TS"],
    [/double-entry ledger/gi, "$DBL_LEDGER"],
    [/partidas dobradas/gi, "$DBL_LEDGER"],
    [/análise estática ast/gi, "$AST_AUDIT"],
    [/agentes de ia/gi, "$AI_AGENTS"],
    [/deriva arquitetural/gi, "$ARCH_DRIFT"],
    [/integridade/gi, "#INTG"],
    [/auditoria/gi, "#AUDIT"],
    [/contrato[s]? zod/gi, "$ZOD"],
    [/métricas de sla/gi, "$SLA_KPI"],
    [/consultas sql/gi, "$SQL_Q"]
  ];

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function initTokLangWorkbench() {
    const tokInput = document.getElementById("tokInput");
    const tokDiff = document.getElementById("tokTokenDiff");
    const tokOutput = document.getElementById("tokOutput");
    if (!tokInput || !tokDiff || !tokOutput) return;

    function run() {
      const raw = tokInput.value.trim();
      if (!raw) {
        tokDiff.innerHTML = "";
        tokOutput.textContent = "";
        return;
      }
      const rawWords = raw.split(/\s+/);
      const inTok = Math.max(1, Math.round(rawWords.length * 1.32));
      let mapped = raw;
      const symbols = [];
      DOMAIN_MAP.forEach(([rx, sym]) => {
        if (rx.test(mapped)) {
          mapped = mapped.replace(rx, sym);
          symbols.push(sym);
        }
      });

      const tokens = mapped.replace(/[.,;:()]/g, " ").split(/\s+/).filter(Boolean);
      const seen = new Set();
      const diffHtml = [];
      const kept = [];

      tokens.forEach((tok) => {
        const low = tok.toLowerCase();
        const isSym = tok.startsWith("$") || tok.startsWith("@") || tok.startsWith("#");
        const pruned = !isSym && (low.length <= 2 || STOPWORDS.has(low) || seen.has(low));
        if (pruned) {
          diffHtml.push(`<span class="tok-pruned">${escapeHtml(tok)}</span>`);
        } else {
          seen.add(low);
          kept.push(tok);
          diffHtml.push(`<span class="${isSym ? "tok-sym" : "tok-kept"}">${escapeHtml(tok)}</span>`);
        }
      });

      const compiled = `@TOKLANG/1.0 [LL1:REV]\nSYM{${symbols.length ? symbols.slice(0, 6).join(",") : "AUTO"}}\nAST[ ${kept.join(" | ")} ]`;
      const outTok = Math.max(1, Math.round(kept.length * 0.92 + 5));
      const red = Math.max(0, Math.min(78, ((inTok - outTok) / Math.max(1, inTok)) * 100));
      const ratio = outTok / Math.max(1, inTok);
      const flops = Math.max(0, (1 - ratio * ratio) * 100);

      tokDiff.innerHTML = diffHtml.join(" ");
      tokOutput.textContent = compiled;
      document.getElementById("tokInputCount").textContent = `${inTok} tokens`;
      document.getElementById("tokKeptCount").textContent = `${kept.length} preservados`;
      document.getElementById("tokOutputCount").textContent = `${outTok} tokens`;
      document.getElementById("tokReductionPct").textContent = `-${red.toFixed(1)}%`;
      document.getElementById("tokFlopsPct").textContent = `-${flops.toFixed(1)}%`;
    }

    document.querySelectorAll(".wb-preset").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".wb-preset").forEach((b) => b.classList.toggle("is-active", b === btn));
        tokInput.value = TOKLANG_PRESETS[btn.dataset.preset] || "";
        run();
      });
    });

    tokInput.addEventListener("input", run);
    tokInput.value = TOKLANG_PRESETS.rag;
    run();

    document.getElementById("tokCopyBtn").addEventListener("click", () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(tokOutput.textContent).catch(() => {});
      }
      showToast("AST TokLang copiado");
    });
  }

  /* ------------------------------------------------------------------------
     5. DOSSIER DRAWER, TOAST, LANGUAGE & COPY EMAIL
     ------------------------------------------------------------------------ */
  const toastEl = document.getElementById("toast");
  let toastTimer = null;
  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 2400);
  }

  const dossierBackdrop = document.getElementById("dossierBackdrop");
  const dossierDrawer = document.getElementById("dossierDrawer");
  function openDossier(id) {
    const d = DOSSIERS[id];
    if (!d) return;
    document.getElementById("dossierTier").textContent = d.tier;
    document.getElementById("dossierTitle").textContent = d.title;
    document.getElementById("dossierBody").innerHTML = `
      <div class="dossier-section"><h4>Escopo</h4><p>${d.problem}</p></div>
      <div class="dossier-section"><h4>Arquitetura &amp; Complexidade</h4><p>${d.complexity}</p></div>
      <div class="dossier-section"><h4>Stack</h4><p style="font-family:var(--font-mono);font-size:12.5px">${d.stack}</p></div>
      <div style="display:flex;gap:10px;margin-top:8px">
        ${d.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener noreferrer" class="btn-solid-ink">${l.label}</a>`).join("")}
      </div>
    `;
    dossierBackdrop.hidden = false;
    dossierDrawer.classList.add("is-open");
    dossierDrawer.setAttribute("aria-hidden", "false");
  }

  function closeDossier() {
    dossierDrawer.classList.remove("is-open");
    dossierDrawer.setAttribute("aria-hidden", "true");
    dossierBackdrop.hidden = true;
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open-dossier]");
    if (btn) openDossier(btn.dataset.openDossier);
  });
  document.getElementById("closeDossierBtn").addEventListener("click", closeDossier);
  dossierBackdrop.addEventListener("click", closeDossier);

  let lang = "pt";
  const langBtn = document.getElementById("langToggleBtn");
  langBtn.addEventListener("click", () => {
    lang = lang === "pt" ? "en" : "pt";
    const dict = I18N[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    langBtn.textContent = lang === "pt" ? "EN" : "PT";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.dataset.i18n;
      if (dict[k]) el.innerHTML = dict[k];
    });
    showToast(lang === "en" ? "Switched to English" : "Idioma alterado para Português");
  });

  document.getElementById("copyEmailBtn").addEventListener("click", () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText("std.matheus@gmail.com").catch(() => {});
    }
    showToast("std.matheus@gmail.com copiado");
  });

  /* ------------------------------------------------------------------------
     6. O JEITO AGI MOTION ENGINE (LENIS + GSAP SCROLLTRIGGER + CHROME SYNC)
     ------------------------------------------------------------------------ */
  function initMotionAndChrome() {
    const hasGsap = typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined";
    let lenis = null;

    if (hasGsap) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });
    }

    if (!reduceMotion && typeof Lenis !== "undefined" && hasGsap) {
      lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    // --- Populate Vertical Left Chapter Rail (01..08) ---
    const chapterEls = Array.from(document.querySelectorAll("[data-chapter-title]"));
    const railChapters = Array.from(document.querySelectorAll("[data-chapter]")).filter((el) => el.dataset.chapter !== "00");
    const guideList = document.getElementById("sideGuideList");
    const sideName = document.getElementById("sideChapterName");

    if (guideList) {
      guideList.innerHTML = railChapters
        .map((ch) => `<li><a href="#${ch.id}" aria-label="${ch.dataset.chapterTitle}"></a></li>`)
        .join("");
    }

    // --- Pixel-Accurate elementsFromPoint() Header Theme Probe + Deterministic Brand Visibility ---
    const hdr = document.querySelector("[data-hdr]");
    const progressEl = document.getElementById("topProgressBar");
    const contatoEl = document.getElementById("contato");
    let themeRaf = false;
    let menuOpen = false;
    let prevTheme = "dark";

    function syncThemeAndChapter() {
      if (themeRaf) return;
      themeRaf = true;
      requestAnimationFrame(() => {
        themeRaf = false;

        // Top reading progress bar
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const prog = Math.max(0, Math.min(1, window.scrollY / maxScroll));
        if (progressEl) progressEl.style.transform = `scaleX(${prog.toFixed(4)})`;

        // Single-logo discipline: show floating brand pill strictly between hero exit and contact finale
        const contatoTop = contatoEl ? contatoEl.getBoundingClientRect().top : 9999;
        const pastHero = window.scrollY > window.innerHeight * 0.9;
        const inFinale = contatoTop < window.innerHeight * 0.55;
        document.body.classList.toggle("show-brand", pastHero && !inFinale);

        // Pixel-accurate header theme probe
        if (!menuOpen && hdr) {
          const hits = document.elementsFromPoint(window.innerWidth * 0.5, hdr.offsetHeight * 0.5);
          const themed = hits.find((el) => !el.closest("[data-hdr],[data-menu]") && el.closest("[data-theme]"));
          const t = themed ? themed.closest("[data-theme]").dataset.theme : "dark";
          document.body.dataset.hdrTheme = t;
        }

        // Active chapter in side guide rail (matches both chapter roots & continuation acts)
        const mid = window.innerHeight * 0.48;
        let activeIdx = -1;
        let activeTitle = "Abertura";
        chapterEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top <= mid && r.bottom >= mid) {
            activeTitle = el.dataset.chapterTitle || activeTitle;
            const byTitleIdx = railChapters.findIndex((rc) => rc.dataset.chapterTitle === activeTitle);
            if (byTitleIdx >= 0) activeIdx = byTitleIdx;
          }
        });
        if (sideName) sideName.textContent = activeTitle;
        if (guideList) {
          Array.from(guideList.children).forEach((li, i) => {
            li.classList.toggle("is-on", i === activeIdx);
            li.classList.toggle("is-done", activeIdx >= 0 && i < activeIdx);
          });
        }
      });
    }

    window.addEventListener("scroll", syncThemeAndChapter, { passive: true });
    window.addEventListener("resize", syncThemeAndChapter, { passive: true });
    syncThemeAndChapter();

    // --- Fullscreen Clip-Path Sumário Menu ---
    const menuBtn = document.getElementById("menuToggleBtn");
    const menuEl = document.getElementById("sumario");

    function openMenu() {
      menuOpen = true;
      prevTheme = document.body.dataset.hdrTheme || "dark";
      document.body.dataset.hdrTheme = "dark";
      menuBtn.setAttribute("aria-expanded", "true");
      menuEl.hidden = false;
      if (lenis) lenis.stop();
      if (hasGsap && !reduceMotion) {
        gsap.to(menuEl, { clipPath: "inset(0 0 0% 0)", duration: 0.72, ease: "expo.inOut" });
        gsap.fromTo(
          menuEl.querySelectorAll("li"),
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.035, delay: 0.2, ease: "expo.out" }
        );
      } else {
        menuEl.style.clipPath = "inset(0 0 0% 0)";
      }
    }

    function closeMenu() {
      if (!menuOpen) return;
      menuOpen = false;
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.dataset.hdrTheme = prevTheme;
      if (lenis) lenis.start();
      if (hasGsap && !reduceMotion) {
        gsap.to(menuEl, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.55,
          ease: "expo.inOut",
          onComplete: () => { menuEl.hidden = true; }
        });
      } else {
        menuEl.style.clipPath = "inset(0 0 100% 0)";
        menuEl.hidden = true;
      }
    }

    menuBtn.addEventListener("click", () => (menuOpen ? closeMenu() : openMenu()));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMenu();
        closeDossier();
      }
    });

    // Smooth anchor jump via Lenis
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        closeMenu();
        if (lenis) {
          lenis.scrollTo(target, { duration: 1.35 });
        } else {
          target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
        }
      });
    });

    // --- Reduced Motion / Fallback: populate final numbers & reveal all ---
    if (reduceMotion || !hasGsap) {
      document.body.classList.add("show-brand");
      return;
    }

    // Single-logo discipline is handled deterministically in syncThemeAndChapter()

    // --- ACT 00: Hero Entrance + Desktop Optical Portal Transition ---
    gsap.fromTo(
      ".reveal-hero",
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, stagger: 0.08, ease: "expo.out", clearProps: "transform" }
    );

    if (isDesktop()) {
      const openTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#topo",
          start: "top top",
          end: "+=140%",
          scrub: 0.9,
          pin: "#topo .pin",
          invalidateOnRefresh: true
        }
      });
      openTl
        .to("#topo .open-copy", { y: -70, opacity: 0, duration: 0.45, ease: "power2.in" }, 0.1)
        .to("#topo .open-cue", { opacity: 0, duration: 0.2 }, 0)
        .to("#topo .core-stage", { scale: 1.08, duration: 0.5, ease: "power2.inOut" }, 0.12)
        .to("#openPortal", { opacity: 1, scale: 42, duration: 0.55, ease: "power3.in" }, 0.48);
    }

    // --- ACT 01: Industrial Genesis Syllable Stack + Precision SVG Signature ---
    gsap.from(".pref-giant span", {
      xPercent: -45,
      opacity: 0,
      stagger: 0.12,
      duration: 1.25,
      ease: "expo.out",
      scrollTrigger: { trigger: ".s-pref", start: "top 72%", once: true }
    });

    document.querySelectorAll(".precision-sig path").forEach((p, idx) => {
      const len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(p, {
        strokeDashoffset: 0,
        duration: 1.25,
        delay: idx * 0.25,
        ease: "power2.inOut",
        scrollTrigger: { trigger: ".pref-signoff", start: "top 86%", once: true }
      });
    });

    // --- ACT 02: Zig-Zag Manifesto Word Scrub + Lateral Drift ---
    document.querySelectorAll(".apres > p").forEach((p, idx) => {
      gsap.fromTo(
        p,
        { x: idx % 2 === 0 ? -48 : 48 },
        {
          x: 0,
          ease: "none",
          scrollTrigger: { trigger: p, start: "top 92%", end: "top 48%", scrub: true }
        }
      );
    });

    // Global standalone [data-scrub-words]
    document.querySelectorAll("[data-scrub-words]").forEach((el) => {
      const words = splitWords(el, false);
      gsap.set(words, { opacity: 0.14 });
      gsap.to(words, {
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 86%", end: "bottom 48%", scrub: true }
      });
    });

    // Global [data-reveal] batch
    ScrollTrigger.batch("[data-reveal]", {
      start: "top 88%",
      once: true,
      onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.95, ease: "expo.out", stagger: 0.08, clearProps: "transform" })
    });

    // --- ACT 03: Live SVG CAD Blueprint Tour (Desktop Pinned) ---
    if (isDesktop()) {
      const cadItems = Array.from(document.querySelectorAll("[data-casa-step]"));
      const setLeg = (key) => cadItems.forEach((it) => it.classList.toggle("is-on", it.dataset.casaStep === key));

      const cadTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#arquitetura",
          start: "top top",
          end: "+=310%",
          scrub: 0.85,
          pin: "#arquitetura .pin",
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.35) setLeg("base");
            else if (p < 0.7) setLeg("lobes");
            else setLeg("gate");
          }
        }
      });

      cadTl
        .to(".tec-axis, .tec-cota", { opacity: 0.55, duration: 0.3 }, 0)
        .to('[data-cad-part="base"] .cad-ol', { strokeDashoffset: 0, duration: 0.55, ease: "none" }, 0.08)
        .to('[data-cad-part="lobes"] .cad-ol', { strokeDashoffset: 0, stagger: 0.08, duration: 0.6, ease: "none" }, 0.35)
        .to('[data-cad-part="gate"] .cad-ol', { strokeDashoffset: 0, duration: 0.55, ease: "none" }, 0.78)
        .to(".cad-fill", { fillOpacity: 1, stagger: 0.04, duration: 0.45 }, 1.25)
        .to(".cad-p-txt, .cad-label-txt", { opacity: 1, stagger: 0.03, duration: 0.35 }, 1.38)
        .to(".casa-copy", { x: -44, opacity: 0, duration: 0.45, ease: "power2.in" }, 2.15)
        .to("#casaSvgWrap", { scale: 2.35, opacity: 0.12, duration: 0.65, ease: "power3.in" }, 2.2);
    }

    // --- ACT 04: 5-Step Discrete EVP State Machine for #01 ThSyr ---
    const evpSteps = Array.from(document.querySelectorAll("[data-evp]"));
    const evpDots = Array.from(document.querySelectorAll(".evp-progress li"));
    evpSteps.forEach((st) => splitWords(st.querySelector(".evp-t"), true));

    let curEvp = 0;
    let evpAnim = null;

    function activateEvp(nextIdx, animate) {
      if (nextIdx === curEvp && animate) return;
      const dir = nextIdx >= curEvp ? 1 : -1;
      const prevEl = evpSteps[curEvp];
      const nextEl = evpSteps[nextIdx];
      curEvp = nextIdx;

      evpDots.forEach((li, i) => li.classList.toggle("is-on", i === nextIdx));
      if (!isDesktop()) return;

      if (evpAnim) evpAnim.kill();
      if (!animate) {
        evpSteps.forEach((el, i) => {
          el.classList.toggle("is-active", i === nextIdx);
          gsap.set(el, { opacity: i === nextIdx ? 1 : 0, y: 0 });
          const em = el.querySelector("em");
          if (em) gsap.set(em, { backgroundSize: i === nextIdx ? "100% 0.08em" : "0% 0.08em" });
        });
        return;
      }

      evpAnim = gsap.timeline();
      if (prevEl && prevEl !== nextEl) {
        evpAnim.to(prevEl, {
          opacity: 0,
          y: -26 * dir,
          duration: 0.28,
          ease: "power2.in",
          onComplete: () => prevEl.classList.remove("is-active")
        }, 0);
      }

      nextEl.classList.add("is-active");
      const words = nextEl.querySelectorAll(".w");
      const em = nextEl.querySelector("em");
      gsap.set(nextEl, { opacity: 1, y: 0 });
      gsap.set(words, { yPercent: 112 * dir });
      if (em) gsap.set(em, { backgroundSize: "0% 0.08em" });

      evpAnim.to(words, {
        yPercent: 0,
        duration: 0.68,
        stagger: 0.028,
        ease: "expo.out"
      }, 0.14);
      if (em) {
        evpAnim.to(em, { backgroundSize: "100% 0.08em", duration: 0.5, ease: "power2.inOut" }, 0.36);
      }
    }

    activateEvp(0, false);

    evpDots.forEach((li, idx) => {
      li.querySelector("button").addEventListener("click", () => activateEvp(idx, true));
    });

    if (isDesktop()) {
      ScrollTrigger.create({
        trigger: "#thsyr",
        start: "top top",
        end: "+=300%",
        pin: "#thsyr .pin",
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const step = Math.min(evpSteps.length - 1, Math.floor(self.progress * evpSteps.length));
          activateEvp(step, true);
        }
      });
    }

    // --- Velocity-Boosted Kinetic Marquee ---
    const mqTrack = document.getElementById("marqueeTrack");
    if (mqTrack) {
      let mqX = 0;
      let mqBoost = 0;
      ScrollTrigger.create({
        trigger: ".marquee",
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          mqBoost = Math.min(6, Math.abs(self.getVelocity()) / 320);
        }
      });
      gsap.ticker.add(() => {
        const half = mqTrack.scrollWidth * 0.5;
        if (half < 10) return;
        mqX -= 0.75 + mqBoost;
        mqBoost *= 0.94;
        if (mqX <= -half) mqX += half;
        mqTrack.style.transform = `translate3d(${mqX.toFixed(1)}px, 0, 0)`;
      });
    }

    // --- ACT 05: Horizontal Staggered Complexity Gallery (#02 -> #07) ---
    if (isDesktop()) {
      const track = document.getElementById("olharTrack");
      if (track) {
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth + 48),
          ease: "none",
          scrollTrigger: {
            trigger: "#complexidade",
            start: "top top",
            end: () => "+=" + Math.max(900, track.scrollWidth - window.innerWidth + 160),
            scrub: 0.9,
            pin: "#complexidade .pin",
            invalidateOnRefresh: true
          }
        });
      }
    }

    // --- ACT 06: Monumental Counter + Hollow Text-Stroke Fill ---
    document.querySelectorAll("[data-count]").forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.decimals || "0", 10);
      const obj = { v: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            v: target,
            duration: 1.7,
            ease: "power3.out",
            onUpdate: () => {
              el.textContent = obj.v.toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec });
            }
          });
        }
      });
    });

    gsap.to("#strokeFillQuote em", {
      color: "rgba(29, 94, 111, 1)",
      stagger: 0.25,
      ease: "none",
      scrollTrigger: { trigger: "#strokeFillQuote", start: "top 82%", end: "bottom 50%", scrub: true }
    });

    // --- ACT 07: Pinned Strikethrough Manifesto (.s-resp) ---
    if (isDesktop()) {
      const lines = Array.from(document.querySelectorAll(".resp-line"));
      const respTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#principios",
          start: "top top",
          end: "+=320%",
          scrub: 0.85,
          pin: "#principios .pin",
          invalidateOnRefresh: true
        }
      });

      lines.forEach((line, idx) => {
        const t0 = 0.08 + idx * 0.62;
        const sEl = line.querySelector("s");
        respTl
          .fromTo(line, { opacity: 0, yPercent: 55, scale: 0.94 }, { opacity: 1, yPercent: 0, scale: 1, duration: 0.18, ease: "power3.out" }, t0)
          .to(sEl, { "--strike": 1, duration: 0.2, ease: "power2.inOut" }, t0 + 0.2)
          .to(line, { opacity: 0, yPercent: -55, scale: 0.96, duration: 0.14, ease: "power2.in" }, t0 + 0.46);
      });

      const endT = 0.08 + lines.length * 0.62;
      respTl
        .to(".resp-lead", { opacity: 0, y: -20, duration: 0.2 }, endT)
        .to(".resp-close", { opacity: 1, duration: 0.22 }, endT + 0.06)
        .from(".resp-close b", { scale: 0.65, opacity: 0, duration: 0.32, ease: "back.out(2)" }, endT + 0.1)
        .to({}, { duration: 0.35 });
    }

    // --- ACT 08: Magnetic CTA Pull (Desktop Hover) ---
    if (window.matchMedia("(hover: hover)").matches) {
      document.querySelectorAll("[data-magnetic]").forEach((btn) => {
        const qx = gsap.quickTo(btn, "x", { duration: 0.55, ease: "elastic.out(1, 0.4)" });
        const qy = gsap.quickTo(btn, "y", { duration: 0.55, ease: "elastic.out(1, 0.4)" });
        btn.addEventListener("pointermove", (e) => {
          const r = btn.getBoundingClientRect();
          qx((e.clientX - (r.left + r.width / 2)) * 0.3);
          qy((e.clientY - (r.top + r.height / 2)) * 0.4);
        });
        btn.addEventListener("pointerleave", () => { qx(0); qy(0); });
      });
    }

    // Refresh ScrollTrigger cleanly after fonts settle
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
        syncThemeAndChapter();
      });
    }
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
      syncThemeAndChapter();
    });
  }

  /* Boot */
  mountComplexityGallery();
  renderArchive();
  initTokLangWorkbench();
  initLiveNeuralCore();
  initParticleWaves();
  initMotionAndChrome();
})();
