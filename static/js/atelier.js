/* ============================================================================
   MATHEUS SOUSA PORTFOLIO 2026 — SOVEREIGN OBSIDIAN PRECISION ATELIER ENGINE
   - Precision Horological CAD Orbital Canvas + 3D PBR Sculpture Inertia
   - Live 60fps 3D Golden ThSyr Neural Core (Synced with 5-Layer Pinned Stage)
   - Real TokLang v2.0 Deterministic Compiler Workbench (js/toklang-engine.js)
   - CAD SVG pathLength="1" + Strikethrough Manifesto + Adaptive Header Polarity
   ============================================================================ */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeLayerIdx = 0;
  let setCoreLobeExternal = null;

  /* ===== 1. BILINGUAL DICTIONARY (PT-BR / EN-US) ===== */
  const I18N = {
    pt: {
      nav_home: "Início",
      nav_genesis: "Gênese",
      nav_projects: "Projetos",
      nav_contact: "Contato",
      nav_menu: "Sumário",
      hero_kicker: "AI &amp; SYSTEMS ENGINEER &middot; AGIBANK &middot; UNIMAX '27",
      hero_h1: "Sistemas cognitivos.<br><em>Engenharia&nbsp;sem&nbsp;folga.</em>",
      hero_lead: "Runtimes multiagentes em Python, compiladores determinísticos para LLMs e software com tolerância de usinagem.",
      hero_cta1: "Explorar ThSyr #01",
      hero_cta2: "Testar TokLang v2",
      t_mod: "Módulos ThSyr &middot; 96,6% AST",
      t_tok: "TokLang v2 BPE",
      t_nod: "Nós Grafo Neural",
      story_kicker: "A Gênese Industrial",
      story_h2: "Da tolerância de micrômetro à <em>arquitetura de sistemas</em>.",
      thsyr_tag: "Projeto Principal #01 &middot; Complexidade Máxima",
      btn_full_xray: "Dossiê completo",
      rank_kicker: "02 &mdash; 07 &middot; Autoria Própria",
      rank_h2: "Ranqueados pelo <em>peso real</em> de engenharia.",
      rank_note: "Estritamente repositórios de autoria própria — de compiladores BPE/CAPC e auditores AST a ledgers contábeis ACID e C++ em Unreal Engine 5.",
      wb_kicker: "Prova Interativa &middot; Projeto #02 (TokLang v2.0 + TCC)",
      fin_kicker: "Disponibilidade &middot; 2026 / 2027",
      fin_title: "Rigor de usinagem.<br><em>Escala de software.</em>",
      fin_sub: "Aberto a posições CLT Junior / Pleno em AI &amp; Software Engineering (Campinas/RMC ou Remoto Brasil) e oportunidades Remotas Globais em USD (fuso UTC-3)."
    },
    en: {
      nav_home: "Home",
      nav_genesis: "Genesis",
      nav_projects: "Systems",
      nav_contact: "Contact",
      nav_menu: "Index",
      hero_kicker: "APPLIED AI &amp; SYSTEMS ENGINEER &middot; AGIBANK &middot; UNIMAX '27",
      hero_h1: "Cognitive systems.<br><em>Zero-tolerance&nbsp;engineering.</em>",
      hero_lead: "Multi-agent Python runtimes, deterministic LLM context compilers, and production software built with industrial machining rigor.",
      hero_cta1: "Explore ThSyr #01",
      hero_cta2: "Run TokLang v2",
      t_mod: "ThSyr Modules &middot; 96.6% AST",
      t_tok: "TokLang v2 BPE",
      t_nod: "Neural Graph Nodes",
      story_kicker: "The Industrial Genesis",
      story_h2: "From micron tolerance to <em>systems architecture</em>.",
      thsyr_tag: "Flagship Project #01 &middot; Maximum Complexity",
      btn_full_xray: "Full dossier",
      rank_kicker: "02 &mdash; 07 &middot; Authored Systems",
      rank_h2: "Ranked by <em>real engineering</em> depth.",
      rank_note: "Strictly self-authored repositories — from BPE/CAPC compilers and AST auditors to ACID double-entry ledgers and Unreal Engine 5 C++.",
      wb_kicker: "Interactive Proof &middot; Project #02 (TokLang v2.0 + Thesis)",
      fin_kicker: "Availability &middot; 2026 / 2027",
      fin_title: "Machining rigor.<br><em>Software scale.</em>",
      fin_sub: "Open to full-time AI &amp; Software Engineering roles (Campinas/RMC Hybrid, Brazil Remote, or Global Remote USD in UTC-3)."
    }
  };

  /* ===== 2. AUTHORED SYSTEMS DATA (#01 -> #07 + ARCHIVE, 0% THIRD-PARTY) ===== */
  const THSYR_LAYERS = [
    {
      kicker: "01 · GRAPHRAG & SPREADING ACTIVATION",
      file: "engine/neural_retriever.py · knowledge_graph.json",
      lobe: "all",
      note: "Núcleo Holográfico ThSyr · 5 lobos funcionais · 3.972 nós · 38.126 sinapses · arraste para orbitar em 3D."
    },
    {
      kicker: "02 · INIBIÇÃO PRÉ-FRONTAL & ANTI-BAJULAÇÃO",
      file: "engine/prefrontal_cortex.py · operator_intelligence.py",
      lobe: "frontal",
      note: "Lobo Frontal · Portões determinísticos auditam premissas frágeis e blindam restrições imutáveis."
    },
    {
      kicker: "03 · RIGOR DE ENGENHARIA (206 MÓDULOS · AST 96,6%)",
      file: "engine/cognitive_router.py · tests/ (77 suites)",
      lobe: "parietal",
      note: "Lobo Parietal · 206 módulos Python verificados por análise AST, 77 suítes pytest e zero stubs."
    },
    {
      kicker: "04 · DESKTOP CONTROL CENTER 3D NATIVO",
      file: "desktop/src/features/neural-core/NeuralCore.tsx",
      lobe: "temporal",
      note: "Lobo Temporal · Runtime acoplado a React 18 + TypeScript + Three.js exibindo pulsos reais do grafo."
    },
    {
      kicker: "05 · VISUAL STUDIO QUALITY LOOP (PLAYWRIGHT)",
      file: "engine/visual/validator.py · engine/visual/critic.py",
      lobe: "occipital",
      note: "Lobo Occipital · Gate fechado 1440px/390px, TasteMemory e inspeção multimodal antes de publicar."
    }
  ];

  const COMPLEXITY_SYSTEMS = [
    {
      id: "toklang",
      rank: "02",
      name: "TokLang v2.0",
      subtitle: "Compilador BPE & CAPC para LLMs (Produção + TCC)",
      tierLabel: "COMPLEXIDADE #02 · COMPILADORES & IA",
      bars: 5,
      desc: "Compilador determinístico 100% offline com codec @table/@struct lossless, Polarity Lock, poda BM25 Knapsack e arquitetura CAPC preservando Prompt Caching.",
      stack: "JavaScript · Python · js-tiktoken o200k_base · CAPC · Express · NVIDIA NIM",
      metrics: [
        { val: "-59,9%", lbl: "JSON/MCP BPE" },
        { val: "-71,1%", lbl: "CAPC Anthropic" },
        { val: "100%", lbl: "Polarity Lock" },
        { val: "8,3 ms", lbl: "p95 Offline" }
      ],
      blueprint: [
        ["CODEC ", "@table / @struct lossless bit-a-bit"],
        ["CAPC  ", "Tier 0 SHA-256 + cache_control"],
        ["GUARD ", "countTokens(out) <= countTokens(in)"]
      ],
      links: [
        { label: "Abrir Live", href: "https://toklang-twn.vercel.app", primary: true },
        { label: "GitHub", href: "https://github.com/Taiwansz/TokLang" }
      ]
    },
    {
      id: "atlas",
      rank: "03",
      name: "Atlas Engineering OS",
      subtitle: "Governança Agent-Native & Auditoria AST",
      tierLabel: "COMPLEXIDADE #03 · ANÁLISE ESTÁTICA & SAAS",
      bars: 5,
      desc: "Plataforma SaaS e CLI construída para impedir architectural drift em repositórios modificados por agentes autônomos. Audita árvores AST, contratos Zod e invariantes.",
      stack: "TypeScript · Python · Next.js · AST Static Analysis · Zod · OAuth2 CLI",
      metrics: [
        { val: "100", lbl: "Módulos de código" },
        { val: "AST Gate", lbl: "Bloqueio de drift" },
        { val: "SaaS+CLI", lbl: "Híbrido" },
        { val: "Live", lbl: "Deploy Vercel" }
      ],
      blueprint: [
        ["PARSE ", "AST graph -> cyclic dependency scan"],
        ["ZOD   ", "Runtime route contract enforcement"],
        ["GATE  ", "CI architectural drift blocker"]
      ],
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
      desc: "Sistema operacional epistêmico autônomo em Python para decomposição estrutural de fontes técnicas, mapeamento de dependências conceituais e verificação ativa de domínio.",
      stack: "Python · Arquitetura Epistêmica · Grafo Conceitual · Automação",
      metrics: [
        { val: "47", lbl: "Módulos Python" },
        { val: "Autônomo", lbl: "Ciclo epistêmico" },
        { val: "Zero Slop", lbl: "Rigor conceitual" },
        { val: "Autoral", lbl: "Ecossistema Th" }
      ],
      blueprint: [
        ["INGEST", "Decomposição atômica de fontes"],
        ["GRAPH ", "Dependências conceituais dirigidas"],
        ["AUDIT ", "Checagem ativa de lacunas reais"]
      ],
      links: [
        { label: "GitHub", href: "https://github.com/Taiwansz/ThAthena", primary: true }
      ]
    },
    {
      id: "thallium",
      rank: "05",
      name: "Thallium Core Ledger",
      subtitle: "Core Contábil de Partidas Dobradas (ACID)",
      tierLabel: "COMPLEXIDADE #05 · INTEGRIDADE TRANSACIONAL",
      bars: 4,
      desc: "Engine financeiro digital projetado sobre contabilidade de partidas dobradas em PostgreSQL + Supabase RLS. Nenhum saldo sofre mutação sem lançamento imutável de soma zero.",
      stack: "TypeScript · PostgreSQL · Supabase RLS · ACID · Double-Entry Ledger",
      metrics: [
        { val: "Sum = 0", lbl: "Partidas dobradas" },
        { val: "ACID+RLS", lbl: "Isolamento DB" },
        { val: "Imutável", lbl: "Trilha contábil" },
        { val: "Live", lbl: "Deploy Vercel" }
      ],
      blueprint: [
        ["LEDGER", "debit + credit == 0 (SQL CHECK)"],
        ["RLS   ", "Tenant isolation por auth.uid()"],
        ["AUDIT ", "Append-only immutable journal"]
      ],
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
      desc: "Motor determinístico de folha de pagamento aderente à CLT/RFB/MTE, com barra de prontidão (readiness 98,2%), simulação de encargos, CNAB 240/Pix e holerite ICP-Brasil.",
      stack: "JavaScript · TypeScript · Regras CLT/eSocial · CNAB 240/Pix · PDF Audit",
      metrics: [
        { val: "391 vidas", lbl: "Base CLT + PJ" },
        { val: "98,2%", lbl: "Readiness" },
        { val: "eSocial", lbl: "Compliance BR" },
        { val: "CNAB 240", lbl: "Remessa Pix" }
      ],
      blueprint: [
        ["RULES ", "INSS / IRRF / FGTS faixas oficiais"],
        ["BATCH ", "CNAB 240 + geração de guias Pix"],
        ["PROOF ", "Holerite auditado ICP-Brasil"]
      ],
      links: [
        { label: "GitHub", href: "https://github.com/Taiwansz/ThPay", primary: true }
      ]
    },
    {
      id: "skypiea",
      rank: "07",
      name: "Skypiea (UE5 / C++)",
      subtitle: "Engenharia de Sistemas 3D em Unreal Engine 5",
      tierLabel: "COMPLEXIDADE #07 · C++ & TEMPO REAL 3D",
      bars: 3,
      desc: "Projeto autoral em C++ sobre Unreal Engine 5 explorando gerenciamento explícito de memória, loop de simulação espacial em tempo real e arquitetura orientada a componentes.",
      stack: "C++ · Unreal Engine 5 · Arquitetura 3D · Real-Time Loop",
      metrics: [
        { val: "C++", lbl: "Linguagem core" },
        { val: "UE5", lbl: "Engine 3D" },
        { val: "Low-Level", lbl: "Memória direta" },
        { val: "Autoral", lbl: "Repo público" }
      ],
      blueprint: [
        ["ACTORS", "C++ State Machines & Components"],
        ["TICK  ", "Spatial physics collision loop"],
        ["ENGINE", "Unreal Engine 5 native pipeline"]
      ],
      links: [
        { label: "GitHub", href: "https://github.com/Taiwansz/skypea", primary: true }
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
      links: s.links
    };
  });

  const ARCHIVE_ITEMS = [
    { num: "#01", cat: "core", name: "ThSyr Cognitive OS", desc: "Runtime multiagente Python/TS com grafo neural de 5 lobos, 206 módulos e 77 suítes.", stack: "Python · TS · React · Three.js", link: "https://github.com/Taiwansz/ThSyr", label: "GitHub", dossier: "thsyr" },
    { num: "#02", cat: "core", name: "TokLang v2.0 Compiler", desc: "Compilador determinístico BPE/CAPC com @table lossless (-59,9%) e Polarity Lock 100%.", stack: "JS · Python · o200k_base · CAPC", link: "https://toklang-twn.vercel.app", label: "Vercel", dossier: "toklang" },
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

  /* ===== 3. HERO HOROLOGICAL CAD CANVAS + 3D SCULPTURE INERTIA ===== */
  function initHeroStage() {
    const canvas = document.getElementById("portfolio-hero-canvas");
    const sculpture = document.getElementById("hero-sculpture-stage");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const EMBER_COUNT = isMobile ? 38 : 88;
    const embers = new Float32Array(EMBER_COUNT * 4);
    for (let i = 0; i < EMBER_COUNT; i++) {
      embers[i * 4 + 0] = Math.random() * Math.PI * 2;
      embers[i * 4 + 1] = 0.74 + Math.random() * 0.7;
      embers[i * 4 + 2] = (Math.random() * 0.12 + 0.035) * (i % 2 === 0 ? 1 : -1);
      embers[i * 4 + 3] = 1.0 + Math.random() * 1.4;
    }

    let width = 0, height = 0;
    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = Math.max(300, rect.width);
      height = Math.max(360, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    let targetNx = 0, targetNy = 0, curNx = 0, curNy = 0;
    window.addEventListener("pointermove", (e) => {
      targetNx = (e.clientX / Math.max(1, window.innerWidth)) * 2 - 1;
      targetNy = (e.clientY / Math.max(1, window.innerHeight)) * 2 - 1;
    }, { passive: true });

    function render(ts) {
      const t = ts * 0.001;
      const scrollRatio = Math.min(1, Math.max(0, window.scrollY / Math.max(1, window.innerHeight * 0.9)));
      curNx += (targetNx - curNx) * 0.06;
      curNy += (targetNy - curNy) * 0.06;

      if (sculpture && !reduceMotion) {
        const floatY = Math.sin(t * 1.1) * 5.5;
        const rotY = curNx * 10;
        const rotX = -curNy * 7;
        const tx = curNx * 11;
        const ty = curNy * 7 + floatY - scrollRatio * 26;
        const sc = 1 - scrollRatio * 0.06;
        sculpture.style.transform = `translate(-50%, -50%) translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0) perspective(1100px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
      }

      ctx.clearRect(0, 0, width, height);
      const cx = width * 0.5;
      const cy = height * (isMobile ? 0.315 : 0.43);
      const baseR = Math.min(width, height) * (isMobile ? 0.32 : 0.31);

      // 1. Precision Outer Degree Meridian Ring (Machining Micrometer Gauge)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.04 + curNx * 0.07);
      ctx.strokeStyle = "rgba(212, 175, 106, 0.2)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, baseR * 1.12, 0, Math.PI * 2);
      ctx.stroke();

      const ticks = 72;
      for (let i = 0; i < ticks; i++) {
        const a = (i / ticks) * Math.PI * 2;
        const major = i % 6 === 0;
        const r0 = baseR * (major ? 1.07 : 1.1);
        const r1 = baseR * 1.14;
        ctx.strokeStyle = major ? "rgba(212, 175, 106, 0.62)" : "rgba(240, 237, 230, 0.16)";
        ctx.lineWidth = major ? 1.2 : 0.8;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * r0, Math.sin(a) * r0);
        ctx.lineTo(Math.cos(a) * r1, Math.sin(a) * r1);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Counter-rotating Verdigris Dashed Precision Arc
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t * 0.08);
      ctx.setLineDash([28, 18, 6, 18]);
      ctx.strokeStyle = "rgba(59, 142, 165, 0.36)";
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.arc(0, 0, baseR * 0.93, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 3. Orbiting Fine Champagne / Verdigris Embers
      for (let i = 0; i < EMBER_COUNT; i++) {
        const a = embers[i * 4 + 0] + t * embers[i * 4 + 2];
        const rf = embers[i * 4 + 1];
        const sz = embers[i * 4 + 3];
        const ex = cx + Math.cos(a) * baseR * rf * 1.26;
        const ey = cy + Math.sin(a) * baseR * rf * 0.92;
        const alpha = 0.15 + 0.32 * (0.5 + 0.5 * Math.sin(t * 1.4 + i));
        ctx.fillStyle = i % 3 === 0 ? `rgba(212, 175, 106, ${alpha})` : `rgba(59, 142, 165, ${alpha * 0.78})`;
        ctx.fillRect(ex, ey, sz, sz);
      }

      // 4. Peripheral Technical Callouts (Desktop Only, Outside Center Safe-Zone)
      if (!isMobile && width >= 1024) {
        const callouts = [
          { angle: -0.56, text: "THSYR · 5 LOBES", color: "#D4AF6A" },
          { angle: 0.56, text: "TOKLANG v2 · -59.9%", color: "#3B8EA5" },
          { angle: Math.PI - 0.56, text: "AST 96.6% · 77 SUITES", color: "#4CA771" }
        ];
        ctx.font = '600 10px "JetBrains Mono", monospace';
        ctx.textBaseline = "middle";
        for (const c of callouts) {
          const px = cx + Math.cos(c.angle) * baseR * 1.14;
          const py = cy + Math.sin(c.angle) * baseR * 1.14;
          const dir = px >= cx ? 1 : -1;
          const lx = px + dir * 32;
          ctx.strokeStyle = "rgba(240, 237, 230, 0.24)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(lx, py);
          ctx.stroke();

          ctx.fillStyle = c.color;
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.textAlign = dir > 0 ? "left" : "right";
          ctx.fillStyle = "rgba(240, 237, 230, 0.68)";
          ctx.fillText(c.text, lx + dir * 7, py);
        }
      }

      if (!reduceMotion) requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  /* ===== 4. LIVE 60FPS 3D GOLDEN THSYR NEURAL CORE (ACT 05 CONSOLE) ===== */
  const LOBE_INFO = {
    all: "Núcleo Holográfico ThSyr · 5 lobos ativos · arraste para orbitar em 3D",
    frontal: "Lobo Frontal · Inibição Pré-Frontal, leis e veto lógico (prefrontal_cortex.py)",
    parietal: "Lobo Parietal · Análise AST 96,6%, Python, SQL e CodeGraph (code_graph.py)",
    temporal: "Lobo Temporal · Memória episódica & busca híbrida RRF (neural_retriever.py)",
    occipital: "Lobo Occipital · Visual Studio Quality Loop, Playwright QA & TasteMemory",
    limbico: "Sistema Límbico · Identidade, restrições imutáveis e Operator Intelligence"
  };

  function initLiveNeuralCore() {
    const canvas = document.getElementById("thsyrLiveCore");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let activeLobe = "all";
    let rotY = 0.28;
    let rotX = 0.22;
    let velY = 0.0036;
    let dragging = false;
    let lastX = 0, lastY = 0;

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

    const sprCrown = makeCrispDot("rgba(255, 226, 134, 1)", "rgba(212, 175, 106, 0.72)", "rgba(212, 175, 106, 0)");
    const sprHero = makeCrispDot("rgba(255, 238, 178, 0.98)", "rgba(212, 175, 106, 0.58)", "rgba(180, 140, 60, 0)");
    const sprTeal = makeCrispDot("rgba(128, 212, 235, 0.95)", "rgba(59, 142, 165, 0.55)", "rgba(59, 142, 165, 0)");
    const sprDim = makeCrispDot("rgba(182, 142, 66, 0.36)", "rgba(130, 96, 36, 0.14)", "rgba(120, 82, 24, 0)");

    const PHI1 = 1.22074408460575947536;
    const A1 = 1 / PHI1, A2 = 1 / (PHI1 * PHI1), A3 = 1 / (PHI1 * PHI1 * PHI1);
    const lobeList = ["frontal", "parietal", "temporal", "occipital", "limbico"];
    const nodes = [];

    for (let i = 0; i < 420; i++) {
      const u = (0.5 + (i + 1) * A1) % 1;
      const v = (0.5 + (i + 1) * A2) % 1;
      const theta = u * Math.PI * 2;
      const phi = Math.acos(1 - v * 0.44);
      const rr = 0.55 * (0.91 + (i % 4) * 0.032);
      const yCap = -0.34 - Math.max(0, (Math.cos(phi) - Math.cos(0.96)) * 0.65);
      const xzR = rr * Math.sin(phi) * 1.04;
      nodes.push({
        x: xzR * Math.cos(theta),
        y: yCap,
        z: xzR * Math.sin(theta),
        size: phi < 0.42 ? 2.1 : 1.45,
        lobe: i % 3 === 0 ? "limbico" : "frontal",
        kind: "crown",
        phase: u * Math.PI * 2
      });
    }

    for (let i = 0; i < 900; i++) {
      const u = (0.5 + (i + 37) * A1) % 1;
      const v = (0.5 + (i + 37) * A2) % 1;
      const w = (0.5 + (i + 37) * A3) % 1;
      const theta = u * Math.PI * 2;
      const lat = Math.asin(Math.pow(v, 0.84));
      const outer = i >= 460;
      const rLat = (outer ? 1.14 : 0.78) * Math.cos(lat) * (0.93 + w * 0.12);
      const y = (outer ? -0.42 : -0.3) + (outer ? 1.24 : 0.9) * Math.sin(lat) + (w - 0.5) * 0.07;
      const sector = Math.floor(((theta + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2 / 5)) % 5;
      nodes.push({
        x: rLat * Math.cos(theta),
        y,
        z: rLat * Math.sin(theta),
        size: i % 13 === 0 ? 2.3 : 1.15,
        lobe: lobeList[sector],
        kind: i % 17 === 0 ? "teal" : "hero",
        phase: v * Math.PI * 2
      });
    }

    const edges = [];
    for (let i = 0; i < nodes.length; i += 9) {
      const j = (i + 47) % nodes.length;
      edges.push([i, j]);
    }

    function setLobe(lobe, customText) {
      activeLobe = lobe || "all";
      document.querySelectorAll(".core-lobe-btn").forEach((b) => {
        b.classList.toggle("is-active", b.dataset.coreLobe === activeLobe);
      });
      const readout = document.getElementById("coreLobeReadout");
      if (readout) readout.textContent = customText || LOBE_INFO[activeLobe] || LOBE_INFO.all;
    }
    setCoreLobeExternal = setLobe;

    document.querySelectorAll(".core-lobe-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLobe(btn.dataset.coreLobe));
    });

    canvas.addEventListener("pointerdown", (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    });
    window.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      rotY += dx * 0.008;
      rotX = Math.max(-0.85, Math.min(0.85, rotX + dy * 0.006));
      velY = dx * 0.0014;
    });
    window.addEventListener("pointerup", () => { dragging = false; });

    const proj = new Array(nodes.length);
    let t = 0;
    function frame() {
      t += 0.016;
      if (!dragging) {
        rotY += velY;
        velY += (0.0034 - velY) * 0.03;
      }

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const scale = Math.min(w, h) * 0.36;
      const cx = w * 0.5;
      const cy = h * 0.5;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const x1 = n.x * cosY - n.z * sinY;
        const z1 = n.x * sinY + n.z * cosY;
        const y2 = n.y * cosX - z1 * sinX;
        const z2 = n.y * sinX + z1 * cosX;
        const p = 3.2 / (3.2 + z2);
        proj[i] = {
          sx: cx + x1 * scale * p,
          sy: cy + y2 * scale * p,
          z: z2,
          p,
          n
        };
      }

      ctx.strokeStyle = "rgba(212, 175, 106, 0.09)";
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      for (const [a, b] of edges) {
        const pa = proj[a], pb = proj[b];
        if (activeLobe !== "all" && pa.n.lobe !== activeLobe && pb.n.lobe !== activeLobe) continue;
        ctx.moveTo(pa.sx, pa.sy);
        ctx.lineTo(pb.sx, pb.sy);
      }
      ctx.stroke();

      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < proj.length; i++) {
        const item = proj[i];
        const matched = activeLobe === "all" || item.n.lobe === activeLobe;
        const pulse = 0.85 + 0.15 * Math.sin(t * 2.1 + item.n.phase);
        const r = item.n.size * item.p * (matched ? 2.4 * pulse : 1.3);
        const spr = !matched ? sprDim : item.n.kind === "crown" ? sprCrown : item.n.kind === "teal" ? sprTeal : sprHero;
        ctx.globalAlpha = matched ? Math.max(0.24, Math.min(0.98, (1.4 - item.z) * 0.55)) : 0.14;
        ctx.drawImage(spr, item.sx - r, item.sy - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      if (!reduceMotion) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ===== 5. ACT 05 THSYR DISCRETE 5-LAYER SELECTOR ===== */
  function selectThSyrLayer(idx) {
    const data = THSYR_LAYERS[idx];
    if (!data) return;
    activeLayerIdx = idx;

    document.querySelectorAll(".thsyr-row").forEach((row, i) => {
      row.classList.toggle("active", i === idx);
    });
    document.querySelectorAll(".step-dash").forEach((d, i) => {
      d.classList.toggle("active", i === idx);
    });
    const counter = document.getElementById("thsyrStepCounter");
    const kicker = document.getElementById("thsyrStageKicker");
    const file = document.getElementById("thsyrStageFile");
    if (counter) counter.textContent = `0${idx + 1} / 05`;
    if (kicker) kicker.textContent = data.kicker;
    if (file) file.textContent = data.file;
    if (setCoreLobeExternal) setCoreLobeExternal(data.lobe, data.note);
  }

  /* ===== 6. RENDER AUTHORED SYSTEMS MATRIX (#02 -> #07) & ARCHIVE ===== */
  function mountSystemsGrid() {
    const mount = document.getElementById("systemsGridMount");
    if (!mount) return;
    mount.innerHTML = COMPLEXITY_SYSTEMS.map((sys) => {
      const bars = Array.from({ length: 5 }, (_, i) => `<i class="${i < sys.bars ? "on" : ""}"></i>`).join("");
      const bp = sys.blueprint.map(([k, v]) => `<div class="sys-bp-line"><b>${k}</b> ${v}</div>`).join("");
      const kpis = sys.metrics.slice(0, 2).map((m) => `<div class="sys-kpi"><strong>${m.val}</strong><span>${m.lbl}</span></div>`).join("");
      const links = sys.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener noreferrer" class="sys-btn ${l.primary ? "is-primary" : ""}">${l.label}</a>`).join("");
      return `
        <div class="sys-card-outer">
          <article class="sys-card" data-sys-card="${sys.id}">
            <div class="sys-top">
              <span class="sys-rank">COMPLEXIDADE #${sys.rank}</span>
              <span class="sys-bars" aria-hidden="true">${bars}</span>
            </div>
            <h3>${sys.name}</h3>
            <div class="sys-sub">${sys.subtitle}</div>
            <div class="sys-blueprint">${bp}</div>
            <p class="sys-desc">${sys.desc}</p>
            <div class="sys-kpis">${kpis}</div>
            <div class="sys-actions">
              ${links}
              <button type="button" class="sys-btn" data-open-dossier="${sys.id}">Dossiê</button>
            </div>
          </article>
        </div>
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
    const filtersEl = document.getElementById("archiveFilters");
    const rowsEl = document.getElementById("archiveRows");
    if (!filtersEl || !rowsEl) return;

    filtersEl.innerHTML = ARCHIVE_CATS.map((c) => {
      const cnt = c.id === "all" ? ARCHIVE_ITEMS.length : ARCHIVE_ITEMS.filter((x) => x.cat === c.id).length;
      return `<button type="button" class="idx-filter ${activeArchiveCat === c.id ? "is-active" : ""}" data-acat="${c.id}">${c.label} (${cnt})</button>`;
    }).join("");

    filtersEl.querySelectorAll(".idx-filter").forEach((b) => {
      b.addEventListener("click", () => {
        activeArchiveCat = b.dataset.acat;
        renderArchive();
      });
    });

    const rows = activeArchiveCat === "all" ? ARCHIVE_ITEMS : ARCHIVE_ITEMS.filter((x) => x.cat === activeArchiveCat);
    rowsEl.innerHTML = rows.map((r) => {
      const ext = r.link.startsWith("http");
      return `
        <div class="idx-row">
          <span class="idx-r-num tabular">${r.num}</span>
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
  }

  /* ===== 7. REAL TOKLANG v2.0 COMPILER WORKBENCH ===== */
  const TOKLANG_PRESETS = {
    dev: {
      title: "01 · Prompt Dev + Polarity Lock",
      mode: "balanced",
      query: "",
      maxTokens: null,
      text: "Bom dia! Por favor, você poderia criar uma API REST em Node.js com Express com o objetivo de gerenciar pedidos de clientes sem usar ORM? É importante ressaltar que você não deve expor credenciais nos logs e nunca permita exclusão física no banco de dados. Muito obrigado desde já!"
    },
    json: {
      title: "02 · JSON / MCP Tool Output (Lossless @table)",
      mode: "lossless",
      query: "",
      maxTokens: null,
      text: JSON.stringify({
        orders: [
          { id: "ORD-101", customer: "Ana Silva", plan: "pro", amount_brl: 35, paid: true },
          { id: "ORD-102", customer: "Bruno Costa", plan: "team", amount_brl: 80, paid: true },
          { id: "ORD-103", customer: "Carla Dias", plan: "starter", amount_brl: 10, paid: false },
          { id: "ORD-104", customer: "Diego Lima", plan: "pro", amount_brl: 35, paid: true },
          { id: "ORD-105", customer: "Elena Souza", plan: "team", amount_brl: 80, paid: true },
          { id: "ORD-106", customer: "Felipe Rocha", plan: "pro", amount_brl: 35, paid: true }
        ]
      }, null, 2)
    },
    rag: {
      title: "03 · Contexto RAG + Query BM25 (teto 60 tokens)",
      mode: "balanced",
      query: "quórum Raft split-brain líder",
      maxTokens: 60,
      text: [
        "Seção 1 — Rotinas administrativas: o calendário mensal de reservas das salas de reunião do segundo andar é fechado toda sexta-feira às 17h pela recepção corporativa.",
        "Seção 2 — Suprimentos e infraestrutura predial: a manutenção preventiva do ar-condicionado dos blocos operacionais ocorre no primeiro sábado de cada mês sem impacto nos sistemas.",
        "Seção 3 — Especificação de Consenso Raft: o quórum mínimo exige floor(N/2)+1 nós ativos para eleição de líder; nunca permita escrita sem líder confirmado no termo corrente para evitar split-brain.",
        "Seção 4 — Comunicação interna: comunicados de eventos institucionais e refeitório são publicados semanalmente na intranet de operações."
      ].join("\n\n")
    },
    logs: {
      title: "04 · Logs Repetitivos de Produção (16 linhas -> [x14])",
      mode: "lossless",
      query: "",
      maxTokens: null,
      text: [
        "2026-11-26T14:00:01Z INFO api-gateway listening on 0.0.0.0:8080",
        ...Array.from({ length: 14 }, () => "2026-11-26T14:00:02Z WARN redis_pool timeout retrying replica-02 (1200ms)"),
        "2026-11-26T14:00:06Z ERROR circuit_breaker opened for billing_service after 14 retries"
      ].join("\n")
    }
  };

  function initTokLangWorkbench() {
    const tokInput = document.getElementById("tokInput");
    const tokOutput = document.getElementById("tokOutput");
    if (!tokInput || !tokOutput || typeof TokLangEngine === "undefined") return;

    let currentKey = "dev";

    function compileNow() {
      const preset = TOKLANG_PRESETS[currentKey] || TOKLANG_PRESETS.dev;
      const raw = tokInput.value;
      if (!raw.trim()) {
        tokOutput.textContent = "";
        return;
      }
      const report = TokLangEngine.compile(raw, {
        mode: preset.mode,
        query: preset.query || "",
        maxTokens: preset.maxTokens || undefined,
        encoding: "o200k_base"
      });

      tokOutput.textContent = report.text;
      const stages = (report.stagesApplied && report.stagesApplied.length) ? report.stagesApplied.join(" + ") : "monotonic_noop";
      document.getElementById("wbStageTitle").textContent = preset.title;
      document.getElementById("wbStageStages").textContent = `${preset.mode} · ${stages}`;
      document.getElementById("tokInputCount").textContent = `${report.tokensBefore} tokens`;
      document.getElementById("tokOutputCount").textContent = `${report.tokensAfter} tokens (-${report.savingsPct.toFixed(1)}%)`;
      document.getElementById("tokReductionPct").textContent = `-${report.savingsPct.toFixed(1)}%`;
      document.getElementById("tokFlopsPct").textContent = `-${report.attentionFlopsReductionPct.toFixed(1)}%`;
      const pol = report.audit && typeof report.audit.negationsPreservedRatio === "number"
        ? Math.round(report.audit.negationsPreservedRatio * 100)
        : 100;
      document.getElementById("tokPolarityAudit").textContent = `${pol}%`;
    }

    document.querySelectorAll(".wb-preset").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentKey = btn.dataset.preset;
        document.querySelectorAll(".wb-preset").forEach((b) => b.classList.toggle("is-active", b === btn));
        tokInput.value = TOKLANG_PRESETS[currentKey].text;
        compileNow();
      });
    });

    tokInput.addEventListener("input", compileNow);
    tokInput.value = TOKLANG_PRESETS.dev.text;
    compileNow();

    document.getElementById("tokCopyBtn").addEventListener("click", () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(tokOutput.textContent).catch(() => {});
      }
      showToast("Saída TokLang v2 copiada");
    });
  }

  /* ===== 8. DOSSIER DRAWER, TOAST, I18N & COPY EMAIL ===== */
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
      <div class="dossier-section"><h4>Stack</h4><p style="font-family:var(--mono);font-size:12px;color:var(--gold)">${d.stack}</p></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px">
        ${d.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${l.label}</a>`).join("")}
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

  /* ===== 9. MOTION, LENIS, HEADER POLARITY & SCROLLTRIGGER CHOREOGRAPHY ===== */
  function initMotionAndChrome() {
    const hasGsap = typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined";
    let lenis = null;

    if (hasGsap) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });
    }

    if (!reduceMotion && typeof Lenis !== "undefined" && hasGsap) {
      lenis = new Lenis({ lerp: 0.088, smoothWheel: true });
      lenis.on("scroll", () => {
        ScrollTrigger.update();
        syncChrome();
      });
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    const hdr = document.querySelector("[data-hdr]");
    const progressEl = document.getElementById("topProgressBar");
    const sideName = document.getElementById("sideChapterName");
    let rafQueued = false;
    let menuOpen = false;
    let prevTheme = "dark";

    function syncChrome() {
      if (rafQueued) return;
      rafQueued = true;
      requestAnimationFrame(() => {
        rafQueued = false;
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const prog = Math.max(0, Math.min(1, window.scrollY / maxScroll));
        if (progressEl) progressEl.style.transform = `scaleX(${prog.toFixed(4)})`;

        if (!menuOpen && hdr && document.elementsFromPoint) {
          const probeY = Math.min(window.innerHeight - 10, hdr.getBoundingClientRect().bottom + 4);
          const hits = document.elementsFromPoint(window.innerWidth * 0.5, probeY);
          const match = hits.find((el) => !el.closest("[data-hdr], #sumario") && el.closest("[data-theme]"));
          document.body.dataset.hdrTheme = (match && match.closest("[data-theme]").dataset.theme) || "dark";
        }

        if (document.elementsFromPoint) {
          const midHits = document.elementsFromPoint(window.innerWidth * 0.5, window.innerHeight * 0.45);
          const sec = midHits.find((el) => el.closest && el.closest("section[data-chapter]"));
          if (sec) {
            const chapSec = sec.closest("section[data-chapter]");
            const ch = chapSec.dataset.chapter;
            if (sideName) sideName.textContent = chapSec.dataset.chapterTitle || "Abertura";
            document.querySelectorAll(".rail-item").forEach((item) => {
              item.classList.toggle("active", item.dataset.chapter === ch);
            });
            const navTarget = chapSec.id === "contato" ? "contato" : ch;
            document.querySelectorAll(".nav-link").forEach((lnk) => {
              lnk.classList.toggle("active", lnk.dataset.nav === navTarget);
            });
          }
        }
      });
    }

    window.addEventListener("scroll", syncChrome, { passive: true });
    window.addEventListener("resize", syncChrome, { passive: true });
    syncChrome();

    // Fullscreen Sumário Overlay
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
        gsap.to(menuEl, { clipPath: "inset(0 0 0% 0)", duration: 0.65, ease: "expo.inOut" });
        gsap.fromTo(menuEl.querySelectorAll("li"), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.03, delay: 0.16, ease: "expo.out" });
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
          duration: 0.48,
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
      if (e.key === "Escape") { closeMenu(); closeDossier(); }
    });

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        closeMenu();
        if (lenis) lenis.scrollTo(target, { duration: 1.15 });
        else target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      });
    });

    // Click / Hover on ThSyr 5-layer selector
    document.querySelectorAll(".thsyr-row").forEach((row) => {
      const idx = parseInt(row.dataset.layer, 10);
      row.addEventListener("click", () => selectThSyrLayer(idx));
      row.addEventListener("mouseenter", () => selectThSyrLayer(idx));
    });

    // Magnetic CTAs
    if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
      document.querySelectorAll("[data-magnetic]").forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
          const r = btn.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) * 0.16;
          const dy = (e.clientY - (r.top + r.height / 2)) * 0.22;
          btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
        });
        btn.addEventListener("mouseleave", () => {
          btn.style.transform = "translate3d(0, 0, 0)";
        });
      });
    }

    const strikeItems = Array.from(document.querySelectorAll(".strike-line"));
    if (reduceMotion || !hasGsap) {
      strikeItems.forEach((el) => el.classList.add("struck"));
      return;
    }

    // Act 02: Animated Gold Strikethrough Manifesto
    if (strikeItems.length) {
      ScrollTrigger.create({
        trigger: ".manifesto-act",
        start: "top 74%",
        once: true,
        onEnter: () => {
          strikeItems.forEach((el, i) => {
            gsap.to(el, {
              "--strike": 1,
              duration: 0.55,
              delay: i * 0.13,
              ease: "expo.out",
              onStart: () => el.classList.add("struck")
            });
          });
        }
      });
    }

    // Act 03: Precision Signature Draw
    const sigPaths = document.querySelectorAll("#precision-sig-svg .sig-path");
    if (sigPaths.length) {
      gsap.set(sigPaths, { strokeDashoffset: 1 });
      ScrollTrigger.create({
        trigger: ".genesis-signoff",
        start: "top 86%",
        once: true,
        onEnter: () => gsap.to(sigPaths, { strokeDashoffset: 0, duration: 1.0, stagger: 0.18, ease: "power2.out" })
      });
    }

    // Act 04: CAD SVG Blueprint pathLength="1" Structural Draw
    const cadBoxes = document.querySelectorAll("#thsyr-cad-svg .cad-box");
    const cadLinks = document.querySelectorAll("#thsyr-cad-svg .cad-link");
    if (cadBoxes.length) {
      gsap.set([...cadBoxes, ...cadLinks], { strokeDashoffset: 1 });
      ScrollTrigger.create({
        trigger: ".cad-act",
        start: "top 76%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
          tl.to(cadBoxes, { strokeDashoffset: 0, duration: 0.42, stagger: 0.045 })
            .to(cadLinks, { strokeDashoffset: 0, duration: 0.28, stagger: 0.02 }, "-=0.35");
        }
      });
    }

    // Act 05: Desktop Pinned Discrete 5-State Machine for ThSyr #01
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1025px) and (prefers-reduced-motion: no-preference)", () => {
      const thsyrAct = document.querySelector(".thsyr-act");
      if (!thsyrAct) return;
      let lastStep = -1;
      ScrollTrigger.create({
        trigger: thsyrAct,
        start: "top top",
        end: "+=155%",
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const step = Math.min(4, Math.floor(self.progress * 5));
          if (step !== lastStep) {
            lastStep = step;
            selectThSyrLayer(step);
          }
        }
      });
    });

    // Act 07: Monumental Big Number Count-Up (-59,9%)
    const bigNum = document.getElementById("bigNumCounter");
    if (bigNum) {
      const obj = { v: 0 };
      ScrollTrigger.create({
        trigger: bigNum,
        start: "top 84%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            v: 59.9,
            duration: 1.4,
            ease: "power3.out",
            onUpdate: () => {
              bigNum.textContent = `-${obj.v.toFixed(1).replace(".", ",")}%`;
            }
          });
        }
      });
    }

    // Velocity-boosted Marquee
    const mqTrack = document.getElementById("marqueeTrack");
    if (mqTrack) {
      let mqX = 0, mqBoost = 0;
      ScrollTrigger.create({
        trigger: ".marquee",
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          mqBoost = Math.min(5, Math.abs(self.getVelocity()) / 360);
        }
      });
      gsap.ticker.add(() => {
        const half = mqTrack.scrollWidth * 0.5;
        if (half < 10) return;
        mqX -= 0.7 + mqBoost;
        mqBoost *= 0.94;
        if (mqX <= -half) mqX += half;
        mqTrack.style.transform = `translate3d(${mqX.toFixed(1)}px, 0, 0)`;
      });
    }
  }

  /* ===== BOOT ===== */
  mountSystemsGrid();
  renderArchive();
  initTokLangWorkbench();
  initHeroStage();
  initLiveNeuralCore();
  selectThSyrLayer(activeLayerIdx);
  initMotionAndChrome();
})();
