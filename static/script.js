/* ==========================================================================
   MATHEUS SOUSA PORTFOLIO 2026 — INTERACTIVE ENGINE, TOKLANG & ORBITAL CANVAS
   ========================================================================== */
(function () {
  "use strict";

  const STATIC_BASE = window.PORTFOLIO_STATIC_BASE || "/static/";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------------
     BILINGUAL DICTIONARY (PT-BR / EN-US FOR BRAZIL CLT & GLOBAL USD)
     ------------------------------------------------------------------------ */
  const I18N = {
    pt: {
      nav_projects: "Projetos",
      nav_architecture: "Laboratório",
      nav_scope: "Brief",
      nav_story: "Trajetória",
      nav_archive: "Índice",
      nav_contact: "Contato",
      hero_eyebrow: "INDAIATUBA · CAMPINAS · AI & SYSTEMS ENGINEER",
      hero_line1: "Sistemas cognitivos.",
      hero_line2: "Engenharia sem folga.",
      hero_sub: "HR Data Analyst I no Agibank e graduando em Ciência da Computação (UniMAX '27). Projeto runtimes multiagentes, compiladores de contexto para LLMs e software com rigor de usinagem.",
      hero_cta1: "Explorar ThSyr #01",
      hero_cta2: "Abrir laboratório vivo",
      m_modules: "módulos no core ThSyr",
      m_typed: "cobertura de tipagem AST",
      m_tokens: "menos tokens no TokLang",
      m_nodes: "nós no grafo sináptico",
      rank_eyebrow: "RANKING POR COMPLEXIDADE ARQUITETURAL",
      rank_title: "Do núcleo cognitivo<br>à interface de precisão.",
      rank_link: "Ver índice completo (12 obras) &rarr;",
      tier_s: "PROJETO PRINCIPAL · COMPLEXIDADE MÁXIMA",
      thsyr_desc: "Sistema operacional cognitivo multiagente em Python e TypeScript. Combina um grafo neural de 5 lobos com busca híbrida RRF, ativação por espalhamento, córtex pré-frontal anti-alucinação, 77 suítes de testes e Desktop Control Center nativo em React 18 + Three.js.",
      open_xray: "Abrir Raio-X &rarr;",
      toklang_short: "Compilador determinístico LL(1) que corta 56,2% dos tokens e 80,7% dos FLOPs de atenção em cluster NVIDIA A100.",
      try_compiler: "Testar compilador &rarr;",
      godseye_short: "Rastreamento planetário ao vivo: voos ADS-B, navios AIS, satélites SGP4 e sismologia USGS.",
      open_globe: "Abrir globo 3D &rarr;",
      inspect: "Inspecionar &rarr;",
      bosch_desc: "Assistente 3D estilo EVA esculpido em 6 ciclos via Blender MCP (empacotado standalone gzip + base64), simuladores executivos ao vivo e vitrines web com GSAP ScrollTrigger e cutouts de estúdio.",
      lab_eyebrow: "LABORATÓRIO INTERATIVO · PROVA REAL",
      lab_title: "Não acredite em resumo.<br>Inspecione o motor rodando.",
      brief_eyebrow: "CONTRATAÇÃO & DESAFIO TÉCNICO",
      brief_title: "Monte o stack que seu time precisa",
      brief_lead: "Recrutador ou Engineering Manager? Selecione <strong>4 frentes de engenharia</strong> abaixo. Ao completar os 4 compartimentos, o chassi lacra com o resumo técnico pronto para enviar ou agendar entrevista.",
      story_eyebrow: "A GÊNESE INDUSTRIAL",
      story_title: "Da tolerância de micrômetro<br>à engenharia de sistemas.",
      story_lead: "Antes de escrever runtimes multiagentes e compiladores, operei máquinas operatrizes de usinagem pesada na Fupresa formado pelo SENAI. No chão de fábrica, um milímetro de folga condena a peça. Carrego exatamente essa disciplina metrológica para cada pipeline SQL, árvore AST e arquitetura em produção no Agibank.",
      fin_line1: "Rigor de usinagem.",
      fin_line2: "Escala de software.",
      fin_sub: "Disponível para posições CLT Junior / Pleno em AI & Software Engineering (Campinas/RMC ou Remoto) e oportunidades Remotas Globais em USD."
    },
    en: {
      nav_projects: "Projects",
      nav_architecture: "Live Lab",
      nav_scope: "Brief",
      nav_story: "Story",
      nav_archive: "Archive",
      nav_contact: "Contact",
      hero_eyebrow: "BRAZIL (UTC-3) · APPLIED AI & SYSTEMS ENGINEER",
      hero_line1: "Cognitive systems.",
      hero_line2: "Zero-tolerance engineering.",
      hero_sub: "HR Data Analyst I at Agibank and CS Senior (UniMAX '27). I architect multi-agent runtimes, deterministic LLM context compilers, and production software with machining precision.",
      hero_cta1: "Explore ThSyr #01",
      hero_cta2: "Launch live lab",
      m_modules: "Python engine modules",
      m_typed: "strict AST type coverage",
      m_tokens: "TokLang token reduction",
      m_nodes: "synaptic graph nodes",
      rank_eyebrow: "RANKED BY ARCHITECTURAL COMPLEXITY",
      rank_title: "From cognitive core<br>to precision interface.",
      rank_link: "Browse full index (12 works) &rarr;",
      tier_s: "FLAGSHIP PROJECT · MAXIMUM COMPLEXITY",
      thsyr_desc: "Modular multi-agent cognitive runtime in Python & TypeScript. Unites a 5-lobe knowledge graph with hybrid RRF retrieval, spreading activation, deterministic prefrontal guardrails, 77 test suites, and a React 18 + Three.js Desktop Control Center.",
      open_xray: "Open Architecture X-Ray &rarr;",
      toklang_short: "Deterministic LL(1) context compiler cutting 56.2% billed tokens and 80.7% attention FLOPs on NVIDIA A100 clusters.",
      try_compiler: "Run live compiler &rarr;",
      godseye_short: "Real-time planetary telemetry: ADS-B flights, AIS maritime, SGP4 orbital mechanics, and USGS seismology.",
      open_globe: "Open orbital canvas &rarr;",
      inspect: "Inspect system &rarr;",
      bosch_desc: "EVA-inspired 3D assistant crafted in 6 iterative Blender MCP cycles (standalone gzip+base64 bundle), live enterprise simulators, and GSAP ScrollTrigger studio web craft.",
      lab_eyebrow: "INTERACTIVE LAB · EMPIRICAL PROOF",
      lab_title: "Skip static claims.<br>Inspect the engines live.",
      brief_eyebrow: "HIRING & TECHNICAL INTERVIEW",
      brief_title: "Assemble the stack your team needs",
      brief_lead: "Engineering Manager or Recruiter? Pick <strong>4 engineering modules</strong> below. Once all 4 bays lock in, the chassis seals with a tailored technical brief ready to copy or email.",
      story_eyebrow: "THE INDUSTRIAL GENESIS",
      story_title: "From micron tolerance<br>to software architecture.",
      story_lead: "Before building multi-agent runtimes and LLM compilers, I ran heavy CNC/machining equipment at Fupresa after SENAI training. On the factory floor, one millimeter of play scraps the part. I enforce that exact metrological rigor across every SQL pipeline, AST analyzer, and production codebase at Agibank.",
      fin_line1: "Machining rigor.",
      fin_line2: "Software scale.",
      fin_sub: "Open to full-time AI & Software Engineering roles (Campinas/RMC Hybrid, Brazil Remote, or Global Remote USD in UTC-3)."
    }
  };

  /* ------------------------------------------------------------------------
     PROJECT DOSSIERS (STRICTLY ORDERED BY COMPLEXITY #01 -> #07)
     ------------------------------------------------------------------------ */
  const DOSSIERS = {
    thsyr: {
      tier: "COMPLEXIDADE #01 · NÍVEL S · PROJETO PRINCIPAL",
      title: "ThSyr — Cognitive OS & Multi-Agent Runtime",
      problem: "Agentes de IA comuns sofrem de amnésia entre sessões, bajulação (sycophancy) e alucinação arquitetural. O ThSyr foi desenhado como um sistema operacional cognitivo soberano com memória persistente auditável em 5 lobos cerebrais e travas determinísticas em software.",
      complexity: "Runtime Python modular (206 módulos no motor, 96,6% de cobertura de tipagem auditada via AST e 77 suítes pytest), grafo de conhecimento com 3.972+ nós e 38.126+ sinapses, recuperação híbrida RRF + Spreading Activation, Motor de Operator Intelligence, Personalization Flywheel e Desktop Control Center em React 18 + TypeScript + Three.js.",
      stack: "Python 3.14 · TypeScript · React 18 · Three.js · SQLite · AST · GraphRAG · Playwright · WebView2",
      metrics: [
        { val: "206", lbl: "Módulos no engine/" },
        { val: "96,6%", lbl: "Tipagem estrita AST" },
        { val: "3.972+", lbl: "Nós no Knowledge Graph" },
        { val: "77", lbl: "Suítes automatizadas" }
      ],
      links: [
        { label: "Repositório GitHub", href: "https://github.com/Taiwansz/ThSyr", primary: true }
      ]
    },
    toklang: {
      tier: "COMPLEXIDADE #02 · COMPILADORES & EFICIÊNCIA DE LLMs",
      title: "TokLang — Compilador Determinístico de Contexto (TCC)",
      problem: "Janelas extensas de RAG e prompts de sistema inflam custo linearmente em tokens faturados e quadraticamente em atenção O(n²), gerando latência alta e degradação de foco.",
      complexity: "Construção de um compilador formal determinístico e reversível (Lexer -> Parser LL(1) -> AST -> poda lexical por Entropia de Shannon com proteção rígida de entidades de domínio), validado empiricamente via suíte reproduzível sobre NVIDIA NIM (cluster A100 SXM4).",
      stack: "Python · Teoria de Compiladores (LL1/AST) · Entropia de Shannon · NVIDIA NIM · Benchmark Suite",
      metrics: [
        { val: "56,2%", lbl: "Redução de tokens faturados" },
        { val: "80,7%", lbl: "Redução em FLOPs de atenção" },
        { val: "574 ms", lbl: "Latência inicial (TTFT)" },
        { val: "100%", lbl: "Determinístico e reversível" }
      ],
      links: [
        { label: "Monografia & Benchmark", href: "https://github.com/Taiwansz/TCC-CIENCIAS-DA-COMPUTACAO-2026", primary: true },
        { label: "Repositório TokLang", href: "https://github.com/Taiwansz/TokLang", primary: false }
      ]
    },
    godseye: {
      tier: "COMPLEXIDADE #03 · TELEMETRIA PLANETÁRIA 3D & ORBITAL",
      title: "God's Eye View — Aparato Sensorial Geoespacial",
      problem: "Correlacionar múltiplas fontes de telemetria física em tempo real (aérea, marítima, orbital e sísmica) sobre uma visualização 3D interativa sem colapsar a taxa de quadros.",
      complexity: "Arquitetura de ingestão concorrente e visualização 3D/GLSL integrando transponders ADS-B (OpenSky/FlightRadar), sinais marítimos AIS, propagação orbital SGP4 de satélites e eventos sísmicos USGS — operando como extensão sensorial dos lobos Occipital e Parietal do ThSyr.",
      stack: "TypeScript · Three.js · GLSL Shaders · SGP4 Orbital Mechanics · ADS-B · AIS · USGS API",
      metrics: [
        { val: "4", lbl: "Camadas físicas globais" },
        { val: "SGP4", lbl: "Propagação orbital real" },
        { val: "60 FPS", lbl: "Pipeline GPU/GLSL" },
        { val: "466+", lbl: "Commits no laboratório" }
      ],
      links: [
        { label: "Ecossistema ThSyr", href: "https://github.com/Taiwansz/ThSyr", primary: true }
      ]
    },
    atlas: {
      tier: "COMPLEXIDADE #04 · ANÁLISE ESTÁTICA AST & SAAS",
      title: "Atlas Engineering OS",
      problem: "Equipes usando agentes de código sofrem com deriva silenciosa (code drift): padrões quebrados, contratos violados e acoplamento invisível acumulados em velocidade de máquina.",
      complexity: "Plataforma SaaS + CLI agent-native em TypeScript/Next.js com auditoria estática de Árvores Sintáticas Abstratas (AST), contratos Zod e governança arquitetural contínua.",
      stack: "TypeScript · Next.js · Node.js CLI · AST Static Analysis · Zod · OAuth2 Device Flow",
      metrics: [
        { val: "100", lbl: "Módulos & regras AST" },
        { val: "SaaS + CLI", lbl: "Runtime híbrido" },
        { val: "Zero Drift", lbl: "Gate contínuo de CI" },
        { val: "Live", lbl: "Deploy em produção Vercel" }
      ],
      links: [
        { label: "Abrir na Vercel", href: "https://atlas-landing-page.vercel.app", primary: true },
        { label: "GitHub", href: "https://github.com/Taiwansz/atlas", primary: false }
      ]
    },
    thallium: {
      tier: "COMPLEXIDADE #05 · CORE CONTÁBIL & INTEGRIDADE",
      title: "Thallium Core Ledger",
      problem: "Sistemas financeiros simplistas tratam saldo como coluna mutável, abrindo margem para inconsistência concorrente e impossibilidade de auditoria retroativa.",
      complexity: "Engine transacional baseado em contabilidade de partidas dobradas (double-entry ledger) em PostgreSQL + Supabase RLS, garantindo imutabilidade de lançamentos e integridade matemática de ponta a ponta.",
      stack: "TypeScript · PostgreSQL · Supabase RLS · SQL Transacional · Double-Entry Accounting",
      metrics: [
        { val: "Double-Entry", lbl: "Invariante contábil" },
        { val: "RLS", lbl: "Isolamento em banco" },
        { val: "ACID", lbl: "Consistência transacional" },
        { val: "Auditável", lbl: "Trilha imutável" }
      ],
      links: [
        { label: "Repositório GitHub", href: "https://github.com/Taiwansz/Thallium", primary: true }
      ]
    },
    thpay: {
      tier: "COMPLEXIDADE #06 · FOLHA CONTÍNUA & AUDITORIA",
      title: "ThPay — Continuous Payroll Engine",
      problem: "Fechamento de folha de pagamento corporativa depende de planilhas frágeis, validações tardias e alto risco trabalhista/tributário.",
      complexity: "Motor de folha contínua com barra de prontidão (readiness), cálculo de encargos (INSS, IRRF, FGTS), simulação de dissídio, remessa CNAB 240/Pix e visão de documento oficial com leitor arquivístico ICP-Brasil.",
      stack: "TypeScript · HTML5/CSS3 · Motores Tributários BR · CNAB 240/Pix · PDF Arquivístico",
      metrics: [
        { val: "391", lbl: "Vidas simuladas (CLT+PJ)" },
        { val: "98,2%", lbl: "Readiness automatizada" },
        { val: "CNAB/Pix", lbl: "Fluxo de remessa" },
        { val: "ICP-BR", lbl: "Visão documental" }
      ],
      links: [
        { label: "Repositório GitHub", href: "https://github.com/Taiwansz/ThPay", primary: true }
      ]
    },
    bosch3d: {
      tier: "COMPLEXIDADE #07 · 3D PROCEDURAL & INTERFACE CINÉTICA",
      title: "Bosch EVA 3D & Studio Web Craft",
      problem: "Interfaces corporativas e apresentações técnicas raramente atingem acabamento de estúdio em 3D e movimento sem depender de arquivos pesados ou templates genéricos.",
      complexity: "Modelagem procedural de personagem 3D estilo EVA em 6 ciclos iterativos via Blender MCP (empacotado standalone em HTML único gzip+base64 com 6 animações) aliada a vitrines cinéticas com GSAP ScrollTrigger e auditoria visual Playwright.",
      stack: "Blender Python MCP · Three.js · GLB/Gzip Standalone · GSAP ScrollTrigger · Playwright QA",
      metrics: [
        { val: "6 ciclos", lbl: "Refino anatômico 3D" },
        { val: "60 FPS", lbl: "GSAP GPU Composite" },
        { val: "100/100", lbl: "Visual Craft Audit" },
        { val: "0px", lbl: "Overflow 1440 & 390px" }
      ],
      links: [
        { label: "Perfil GitHub", href: "https://github.com/Taiwansz", primary: true }
      ]
    }
  };

  /* ------------------------------------------------------------------------
     ARCHIVE CATALOG (7 RANKED SYSTEMS + 5 LIVE FLASK SUB-APPS)
     ------------------------------------------------------------------------ */
  const ARCHIVE_ITEMS = [
    { rank: "#01", cat: "ai", tier: "Nível S · Principal", name: "ThSyr Cognitive OS", desc: "Runtime multiagente Python/TS com grafo neural de 5 lobos (3.972 nós), 206 módulos, 77 testes e Desktop Control Center.", stack: "Python · TypeScript · React 18 · Three.js · GraphRAG", dossier: "thsyr", link: "https://github.com/Taiwansz/ThSyr", linkLabel: "GitHub" },
    { rank: "#02", cat: "ai", tier: "Complexidade Alta", name: "TokLang Compiler", desc: "Compilador LL(1)/AST para compressão determinística de contexto em LLMs (-56,2% tokens, -80,7% FLOPs em A100).", stack: "Python · Compiladores · Entropia · NVIDIA NIM", dossier: "toklang", link: "https://github.com/Taiwansz/TCC-CIENCIAS-DA-COMPUTACAO-2026", linkLabel: "GitHub" },
    { rank: "#03", cat: "systems", tier: "Complexidade Alta", name: "God's Eye View", desc: "Telemetria planetária 3D em tempo real unindo ADS-B, AIS, propagação orbital SGP4 e sismologia USGS.", stack: "TypeScript · Three.js · GLSL · SGP4 · ADS-B", dossier: "godseye", link: "https://github.com/Taiwansz/ThSyr", linkLabel: "Arquitetura" },
    { rank: "#04", cat: "systems", tier: "Média-Alta", name: "Atlas Engineering OS", desc: "SaaS e CLI agent-native de auditoria AST e prevenção de architectural drift em repositórios TypeScript.", stack: "TypeScript · Next.js · AST · Zod · CLI", dossier: "atlas", link: "https://atlas-landing-page.vercel.app", linkLabel: "Live Vercel" },
    { rank: "#05", cat: "systems", tier: "Média-Alta", name: "Thallium Core Ledger", desc: "Core bancário digital baseado em partidas dobradas (double-entry) com integridade transacional PostgreSQL/RLS.", stack: "TypeScript · PostgreSQL · Supabase RLS", dossier: "thallium", link: "https://github.com/Taiwansz/Thallium", linkLabel: "GitHub" },
    { rank: "#06", cat: "systems", tier: "Complexidade Média", name: "ThPay Continuous Payroll", desc: "Motor de folha contínua com readiness bar, encargos trabalhistas, CNAB/Pix e leitor documental ICP-Brasil.", stack: "TypeScript · Payroll Engine · PDF Audit", dossier: "thpay", link: "https://github.com/Taiwansz/ThPay", linkLabel: "GitHub" },
    { rank: "#07", cat: "craft", tier: "Complexidade Média", name: "Bosch EVA 3D & Craft", desc: "Assistente 3D Blender MCP standalone e vitrines web cinéticas auditadas em Playwright multi-viewport.", stack: "Blender MCP · Three.js · GSAP · Playwright", dossier: "bosch3d", link: "https://github.com/Taiwansz", linkLabel: "GitHub" },
    { rank: "APP", cat: "live", tier: "Demo ao Vivo", name: "TaskFlow Studio", desc: "Aplicação full-stack de gestão de tarefas com persistência SQLite e API REST rodando neste servidor.", stack: "Python · Flask · SQLAlchemy · REST API", link: "/projetos/taskflow/app", linkLabel: "Abrir App" },
    { rank: "APP", cat: "live", tier: "Demo ao Vivo", name: "CryptoVision", desc: "Painel analítico de ativos digitais com feed estruturado e visualização de variação em tempo real.", stack: "Python · Flask · APIs Financeiras · Charts", link: "/projetos/cryptovision/app", linkLabel: "Abrir App" },
    { rank: "APP", cat: "live", tier: "Demo ao Vivo", name: "AuraWeather", desc: "Interface meteorológica minimalista com consumo de API climática e telemetria responsiva.", stack: "Python · Flask · Weather API · CSS", link: "/projetos/auraweather/app", linkLabel: "Abrir App" },
    { rank: "APP", cat: "live", tier: "Demo ao Vivo", name: "OmniFlow", desc: "Workspace modular de produtividade e galeria visual integrada via blueprint Flask dedicada.", stack: "Python · Flask · Blueprints · JS", link: "/projetos/omniflow/app", linkLabel: "Abrir App" },
    { rank: "APP", cat: "live", tier: "Demo ao Vivo", name: "SonicWeave", desc: "Laboratório interativo de síntese e manipulação sonora rodando diretamente no navegador.", stack: "Web Audio API · JavaScript · Flask", link: "/projetos/sonicweave/app", linkLabel: "Abrir App" }
  ];

  const ARCHIVE_CATS = [
    { id: "all", label: "Todos" },
    { id: "ai", label: "IA & Compiladores" },
    { id: "systems", label: "Sistemas & Dados" },
    { id: "craft", label: "3D & Interface" },
    { id: "live", label: "Apps ao Vivo" }
  ];

  /* ------------------------------------------------------------------------
     INTERACTIVE LAB DATA (THSYR LOBES & TOKLANG PRESETS)
     ------------------------------------------------------------------------ */
  const LOBES = {
    frontal: {
      title: "Lobo Frontal — Inibição Pré-Frontal",
      desc: "Portão determinístico anti-sicofancia e proteção de invariantes reais. Bloqueia premissas frágeis, alucinações e violações de arquitetura antes de qualquer execução em disco.",
      modules: "prefrontal_cortex.py · epistemic_rigor.py",
      role: "Veto lógico & validação de restrições"
    },
    parietal: {
      title: "Lobo Parietal — Engenharia & Telemetria",
      desc: "Orquestra análise estática AST, pipelines Python/SQL, cobertura de testes, roteamento de modelos e ingestão de telemetria técnica de alta precisão.",
      modules: "code_graph.py · cognitive_router.py",
      role: "Computação, AST & pipelines"
    },
    temporal: {
      title: "Lobo Temporal — Memória Episódica & RRF",
      desc: "Consolida sessões históricas, decisões de arquitetura e recuperações híbridas combinando busca lexical, centralidade no grafo (3.972 nós) e frescor temporal.",
      modules: "neural_retriever.py · session_state.py",
      role: "GraphRAG & continuidade histórica"
    },
    occipital: {
      title: "Lobo Occipital — Craft Visual & 3D",
      desc: "Governa o Visual Studio Quality Loop, validação multi-viewport via Playwright, shaders GLSL, Blender MCP e memória de gosto estético (TasteMemory).",
      modules: "engine/visual/ · gods-eye-view",
      role: "Auditoria de pixels & render 3D"
    },
    limbico: {
      title: "Sistema Límbico — Invariantes & Operador",
      desc: "Preserva identidade, restrições físicas imutáveis, preferências escopadas por projeto e modelagem comportamental contínua sem vazar contexto entre domínios.",
      modules: "operator_intelligence.py · preference_graph.py",
      role: "Personalização escopada & identidade"
    }
  };

  const TOKLANG_PRESETS = {
    rag: "Por favor, analise cuidadosamente todo o contexto corporativo abaixo referente aos indicadores operacionais de People Service e HR Data no Agibank, remova qualquer redundância administrativa ou frase introdutória desnecessária, preserve rigorosamente todas as métricas de SLA, consultas SQL de auditoria e regras de integridade entre sistemas internos, e retorne apenas o diagnóstico estruturado para a liderança executiva.",
    api: "Gostaria que você revisasse detalhadamente a especificação da API transacional em TypeScript com PostgreSQL e Supabase Row Level Security, verificando absolutamente todas as políticas de isolamento multi-tenant, garantindo invariantes estritas de contabilidade de partidas dobradas (double-entry ledger) e evitando qualquer condição de corrida durante lançamentos concorrentes.",
    agent: "Você deve atuar como um arquiteto de software especialista em análise estática AST e governança de código gerado por agentes de IA. Antes de aprovar qualquer alteração no repositório, execute a verificação completa de tipos, confira se nenhuma dependência cíclica foi introduzida, valide o contrato Zod das rotas e bloqueie imediatamente qualquer deriva arquitetural silenciosa."
  };

  /* ------------------------------------------------------------------------
     CAPABILITY CHASSIS DATA (SIGNATURE TOY #2)
     ------------------------------------------------------------------------ */
  const CAPABILITIES = [
    { id: "cap-agents", code: "AI-01", name: "Runtimes Multiagentes", proof: "ThSyr (206 módulos Python, GraphRAG, guardrails)", tag: "Python · LLMs" },
    { id: "cap-compilers", code: "LLM-02", name: "Compressão & RAG", proof: "TokLang (-56,2% tokens, LL(1)/AST, evals)", tag: "Compilers · Eval" },
    { id: "cap-data", code: "DAT-03", name: "Pipelines SQL & Python", proof: "Agibank HR Data Analyst I (automações reais)", tag: "Python · SQL" },
    { id: "cap-ast", code: "ENG-04", name: "AST & TypeScript Full-Stack", proof: "Atlas OS (Next.js, Zod, auditoria estática)", tag: "TS · Next.js" },
    { id: "cap-db", code: "COR-05", name: "PostgreSQL & Ledgers", proof: "Thallium & ThPay (double-entry, RLS, ACID)", tag: "Postgres · RLS" },
    { id: "cap-craft", code: "UI-06", name: "Frontend Cinético & 3D", proof: "React 18, GSAP, Three.js, Playwright QA", tag: "GSAP · WebGL" }
  ];

  /* ------------------------------------------------------------------------
     STATE
     ------------------------------------------------------------------------ */
  const state = {
    lang: "pt",
    activeLab: "thsyr",
    activeArchiveCat: "all",
    briefSlots: [null, null, null, null],
    globeLayers: { sgp4: true, adsb: true, ais: true, usgs: true }
  };

  /* ------------------------------------------------------------------------
     TOAST UTILITY
     ------------------------------------------------------------------------ */
  const toastEl = document.getElementById("toast");
  let toastTimer = null;
  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 2600);
  }

  /* ------------------------------------------------------------------------
     BILINGUAL SWITCHER (PT / EN)
     ------------------------------------------------------------------------ */
  const langBtn = document.getElementById("langToggleBtn");
  function applyLang(lang) {
    state.lang = lang;
    const dict = I18N[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    langBtn.textContent = lang === "pt" ? "EN" : "PT";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.innerHTML = dict[key];
    });
  }

  langBtn.addEventListener("click", () => {
    applyLang(state.lang === "pt" ? "en" : "pt");
    showToast(state.lang === "en" ? "Switched to English (Global Remote)" : "Idioma alterado para Português");
  });

  /* ------------------------------------------------------------------------
     ACT 0: PRELOADER + HERO ENTRANCE
     ------------------------------------------------------------------------ */
  function runPreloader() {
    const preloader = document.getElementById("preloader");
    const bar = document.getElementById("preloaderBar");
    const pct = document.getElementById("preloaderPct");
    const curtain = document.getElementById("preloaderCurtain");

    if (reducedMotion || typeof gsap === "undefined") {
      preloader.classList.add("is-done");
      return;
    }

    const counter = { val: 0 };
    gsap.timeline({
      onComplete: () => {
        preloader.classList.add("is-done");
        gsap.fromTo(".reveal-hero", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out", clearProps: "transform" });
        gsap.fromTo(".hero-artifact", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.0, stagger: 0.12, ease: "power3.out" });
      }
    })
      .to(counter, {
        val: 100,
        duration: 0.68,
        ease: "power2.inOut",
        onUpdate: () => {
          const p = Math.round(counter.val);
          pct.textContent = p + "%";
          bar.style.transform = `scaleX(${p / 100})`;
        }
      })
      .to(curtain, { y: "0%", duration: 0.4, ease: "power3.inOut" }, "-=0.06")
      .to(preloader, { yPercent: -100, duration: 0.54, ease: "power4.inOut" }, "+=0.04");
  }

  /* ------------------------------------------------------------------------
     HERO SYNAPTIC CANVAS (CIRCULAR SOFT PARTICLES — ZERO SQUARE NOISE)
     ------------------------------------------------------------------------ */
  function initHeroCanvas() {
    const canvas = document.getElementById("heroSynapseCanvas");
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0;
    const nodes = [];
    const COUNT = 42;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 1.4 + Math.random() * 1.8,
        gold: i % 3 === 0
      });
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 145) {
            ctx.strokeStyle = `rgba(200, 181, 96, ${(1 - d / 145) * 0.14})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = a.gold ? "rgba(217, 197, 130, 0.55)" : "rgba(92, 184, 201, 0.36)";
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------------------
     ACT 3: CHAMELEON ARCHITECTURE LAB (4 LIVE INTERACTIVE ENGINES)
     ------------------------------------------------------------------------ */
  const labStage = document.getElementById("arquitetura");
  const labAura = document.getElementById("labAura");

  const LAB_THEMES = {
    thsyr: { bg: "#090B0F", theme: "dark", aura: "radial-gradient(circle, rgba(200, 181, 96, 0.24) 0%, rgba(200, 181, 96, 0) 68%)" },
    toklang: { bg: "#E7EFF1", theme: "light", aura: "radial-gradient(circle, rgba(30, 93, 110, 0.22) 0%, rgba(30, 93, 110, 0) 68%)" },
    godseye: { bg: "#0B1116", theme: "dark", aura: "radial-gradient(circle, rgba(76, 166, 184, 0.24) 0%, rgba(76, 166, 184, 0) 68%)" },
    atlas: { bg: "#EFEAE1", theme: "light", aura: "radial-gradient(circle, rgba(168, 138, 86, 0.25) 0%, rgba(168, 138, 86, 0) 68%)" }
  };

  function syncNavForLab() {
    const navEl = document.getElementById("siteNav");
    const rect = labStage.getBoundingClientRect();
    if (navEl && rect.top <= 72 && rect.bottom >= 72) {
      navEl.classList.toggle("is-light", labStage.getAttribute("data-theme") === "light");
    }
  }

  function switchLab(id) {
    if (!LAB_THEMES[id]) return;
    state.activeLab = id;
    const cfg = LAB_THEMES[id];
    labStage.style.backgroundColor = cfg.bg;
    labStage.setAttribute("data-theme", cfg.theme);
    labAura.style.background = cfg.aura;

    document.querySelectorAll(".lab-tab").forEach((t) => {
      const on = t.dataset.lab === id;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", String(on));
    });
    document.querySelectorAll(".lab-panel").forEach((p) => {
      p.classList.toggle("is-active", p.dataset.labPanel === id);
    });
    syncNavForLab();
  }

  document.querySelectorAll(".lab-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchLab(tab.dataset.lab));
  });

  document.querySelectorAll("[data-scroll-lab]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      switchLab(btn.dataset.scrollLab);
      labStage.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* Lab Panel 1: 5-Lobe Selector */
  document.querySelectorAll(".lobe-btn[data-lobe]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const data = LOBES[btn.dataset.lobe];
      if (!data) return;
      document.querySelectorAll(".lobe-btn[data-lobe]").forEach((b) => b.classList.toggle("is-active", b === btn));
      document.getElementById("lobeTitle").textContent = data.title;
      document.getElementById("lobeDesc").textContent = data.desc;
      document.getElementById("lobeModules").textContent = data.modules;
      document.getElementById("lobeRole").textContent = data.role;
      const img = document.getElementById("thsyrCoreImg");
      if (img && !reducedMotion && typeof gsap !== "undefined") {
        gsap.fromTo(img, { scale: 0.94, rotation: -4 }, { scale: 1, rotation: 0, duration: 0.45, ease: "power3.out" });
      }
    });
  });

  /* Lab Panel 2: LIVE Deterministic TokLang Compressor */
  const STOPWORDS = new Set([
    "por", "favor", "cuidadosamente", "todo", "toda", "todos", "todas", "abaixo", "referente",
    "aos", "das", "dos", "que", "uma", "uns", "umas", "para", "com", "sem", "pelo", "pela",
    "qualquer", "desnecessaria", "desnecessário", "desnecessária", "apenas", "gostaria", "voce",
    "você", "detalhadamente", "absolutamente", "durante", "deve", "atuar", "como", "antes",
    "sobre", "entre", "muito", "mais", "tambem", "também", "nesse", "nesta", "deste", "desta",
    "the", "please", "carefully", "that", "with", "from", "into", "about", "should", "very"
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
    [/árvore[s]? sintática[s]?/gi, "$AST"],
    [/agentes de ia/gi, "$AI_AGENTS"],
    [/deriva arquitetural/gi, "$ARCH_DRIFT"],
    [/integridade/gi, "#INTG"],
    [/auditoria/gi, "#AUDIT"],
    [/contrato[s]? zod/gi, "$ZOD"],
    [/métricas de sla/gi, "$SLA_KPI"],
    [/consultas sql/gi, "$SQL_Q"]
  ];

  function countApproxTokens(text) {
    const cleaned = text.trim();
    if (!cleaned) return 0;
    return Math.max(1, Math.round(cleaned.split(/\s+/).length * 1.32));
  }

  function compileTokLang(raw) {
    let text = raw.trim();
    if (!text) return { out: "", inTok: 0, outTok: 0, red: 0, flops: 0 };

    const inTok = countApproxTokens(text);
    const usedSymbols = [];
    DOMAIN_MAP.forEach(([regex, sym]) => {
      if (regex.test(text)) {
        text = text.replace(regex, sym);
        usedSymbols.push(sym);
      }
    });

    const words = text
      .replace(/[.,;:()]/g, " ")
      .split(/\s+/)
      .filter((w) => {
        const low = w.toLowerCase();
        if (!low) return false;
        if (w.startsWith("$") || w.startsWith("@") || w.startsWith("#")) return true;
        if (low.length <= 2) return false;
        return !STOPWORDS.has(low);
      });

    // Deduplicate preserving first-seen semantic order
    const seen = new Set();
    const compact = [];
    words.forEach((w) => {
      const k = w.toLowerCase();
      if (!seen.has(k)) {
        seen.add(k);
        compact.push(w);
      }
    });

    const header = `@TOKLANG/1.0 [LL1:REV]`;
    const dictLine = usedSymbols.length ? `SYM{${usedSymbols.slice(0, 6).join(",")}}` : "SYM{AUTO}";
    const body = `AST[ ${compact.join(" | ")} ]`;
    const compiled = `${header}\n${dictLine}\n${body}`;
    const outTok = Math.max(1, Math.round(compact.length * 0.92 + 5));
    const red = Math.max(0, Math.min(78, ((inTok - outTok) / Math.max(1, inTok)) * 100));
    const ratio = outTok / Math.max(1, inTok);
    const flops = Math.max(0, (1 - ratio * ratio) * 100);
    return { out: compiled, inTok, outTok, red, flops };
  }

  const tokInput = document.getElementById("tokInput");
  const tokOutput = document.getElementById("tokOutput");
  const tokInputCount = document.getElementById("tokInputCount");
  const tokOutputCount = document.getElementById("tokOutputCount");
  const tokReductionPct = document.getElementById("tokReductionPct");
  const tokFlopsPct = document.getElementById("tokFlopsPct");

  function runTokLangUI() {
    const r = compileTokLang(tokInput.value);
    tokOutput.textContent = r.out;
    tokInputCount.textContent = `${r.inTok} tokens`;
    tokOutputCount.textContent = `${r.outTok} tokens`;
    tokReductionPct.textContent = `-${r.red.toFixed(1)}%`;
    tokFlopsPct.textContent = `-${r.flops.toFixed(1)}%`;
  }

  document.querySelectorAll(".preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".preset-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
      tokInput.value = TOKLANG_PRESETS[btn.dataset.preset] || "";
      runTokLangUI();
    });
  });

  document.getElementById("tokCompileBtn").addEventListener("click", () => {
    runTokLangUI();
    showToast("Compilação TokLang AST concluída");
  });
  tokInput.addEventListener("input", runTokLangUI);
  tokInput.value = TOKLANG_PRESETS.rag;
  runTokLangUI();

  /* Lab Panel 3: LIVE 60FPS Geodetic Orbital Globe Canvas */
  function initOrbitalGlobe() {
    const canvas = document.getElementById("orbitalCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2, R = 148;
    let angle = 0;

    // Deterministic spherical coordinates for telemetry points
    const sats = Array.from({ length: 14 }, (_, i) => ({
      inc: (i * 0.42) - 1.1,
      phase: i * 0.78,
      alt: R + 20 + (i % 3) * 14,
      speed: 0.008 + (i % 4) * 0.003
    }));

    const flights = Array.from({ length: 18 }, (_, i) => ({
      lat: ((i * 37) % 120 - 60) * Math.PI / 180,
      lon: (i * 0.65),
      speed: 0.005 + (i % 3) * 0.002
    }));

    const ships = Array.from({ length: 16 }, (_, i) => ({
      lat: ((i * 29) % 90 - 45) * Math.PI / 180,
      lon: (i * 0.85) + 0.3
    }));

    const quakes = [
      { lat: -0.4, lon: 1.2 },
      { lat: 0.62, lon: 2.5 },
      { lat: -0.15, lon: 4.1 },
      { lat: 0.35, lon: 5.3 }
    ];

    function project(lat, lon, radius) {
      const x = radius * Math.cos(lat) * Math.sin(lon);
      const y = -radius * Math.sin(lat);
      const z = radius * Math.cos(lat) * Math.cos(lon);
      return { x: cx + x, y: cy + y, z };
    }

    function drawFrame() {
      ctx.clearRect(0, 0, W, H);
      angle += reducedMotion ? 0 : 0.0045;

      // Subtle atmospheric rim
      const grd = ctx.createRadialGradient(cx - 34, cy - 34, R * 0.25, cx, cy, R * 1.18);
      grd.addColorStop(0, "rgba(38, 108, 126, 0.24)");
      grd.addColorStop(0.78, "rgba(10, 22, 30, 0.52)");
      grd.addColorStop(1, "rgba(10, 22, 30, 0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.18, 0, Math.PI * 2);
      ctx.fill();

      // Geodetic meridians & parallels
      ctx.strokeStyle = "rgba(92, 184, 201, 0.14)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      for (let latDeg = -60; latDeg <= 60; latDeg += 30) {
        const lat = latDeg * Math.PI / 180;
        const rLat = R * Math.cos(lat);
        const yLat = cy - R * Math.sin(lat);
        ctx.beginPath();
        ctx.ellipse(cx, yLat, rLat, rLat * 0.22, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (let m = 0; m < 6; m++) {
        const lon = angle + (m * Math.PI) / 6;
        ctx.beginPath();
        for (let t = -90; t <= 90; t += 10) {
          const p = project(t * Math.PI / 180, lon, R);
          if (t === -90) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Layer: AIS Maritime (Teal dots)
      if (state.globeLayers.ais) {
        ships.forEach((s) => {
          const p = project(s.lat, s.lon + angle, R);
          if (p.z > 0) {
            ctx.fillStyle = "rgba(76, 166, 184, 0.85)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2.3, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      // Layer: ADS-B Flights (Warm white arcs + moving points)
      if (state.globeLayers.adsb) {
        flights.forEach((f) => {
          const lon = f.lon + angle * 1.4;
          const p = project(f.lat, lon, R + 5);
          if (p.z > 0) {
            ctx.fillStyle = "rgba(245, 244, 240, 0.92)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2.1, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      // Layer: USGS Seismic Rings (Amber pulses)
      if (state.globeLayers.usgs) {
        const pulse = (Math.sin(angle * 8) + 1) * 0.5;
        quakes.forEach((q) => {
          const p = project(q.lat, q.lon + angle, R);
          if (p.z > 0) {
            ctx.strokeStyle = `rgba(226, 146, 74, ${0.75 - pulse * 0.4})`;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 5 + pulse * 8, 0, Math.PI * 2);
            ctx.stroke();
          }
        });
      }

      // Layer: SGP4 Satellites (Champagne gold orbits)
      if (state.globeLayers.sgp4) {
        sats.forEach((sat) => {
          const theta = sat.phase + angle * (sat.speed * 180);
          const lat = Math.sin(theta) * sat.inc;
          const lon = theta;
          const p = project(lat, lon, sat.alt);
          if (p.z > -40) {
            ctx.fillStyle = "#E2D188";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3.1, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      requestAnimationFrame(drawFrame);
    }
    requestAnimationFrame(drawFrame);

    document.querySelectorAll(".layer-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.layer;
        state.globeLayers[key] = !state.globeLayers[key];
        btn.classList.toggle("is-on", state.globeLayers[key]);
        const activeCount = Object.values(state.globeLayers).filter(Boolean).length;
        document.getElementById("globeActiveLayers").textContent = `${activeCount} / 4 sensores`;
      });
    });
  }

  /* Lab Panel 4: Atlas / Thallium Toggle */
  const SYS_VIEWS = {
    atlas: {
      img: STATIC_BASE + "images/v2/atlas_tablet.jpg",
      kicker: "TYPESCRIPT · NEXT.JS · AST · ZOD",
      heading: "Atlas Engineering OS",
      desc: "Governança estática para código produzido por agentes de IA. Analisa árvores AST para bloquear violações arquiteturais, dependências cíclicas e deriva silenciosa antes do merge.",
      invariant: "Zero architectural drift em CI/CD",
      linkText: "atlas-landing-page.vercel.app →",
      href: "https://atlas-landing-page.vercel.app"
    },
    thallium: {
      img: STATIC_BASE + "images/v2/thallium_tablet.jpg",
      kicker: "TYPESCRIPT · POSTGRESQL · SUPABASE RLS",
      heading: "Thallium Core Ledger",
      desc: "Core bancário de partidas dobradas (double-entry) desenhado para consistência absoluta: nenhum saldo é alterado diretamente sem lançamento contábil imutável e auditável.",
      invariant: "Soma de débitos == créditos em 100% das transações",
      linkText: "github.com/Taiwansz/Thallium →",
      href: "https://github.com/Taiwansz/Thallium"
    }
  };

  document.querySelectorAll("[data-sys-view]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = SYS_VIEWS[btn.dataset.sysView];
      if (!v) return;
      document.querySelectorAll("[data-sys-view]").forEach((b) => b.classList.toggle("is-active", b === btn));
      document.getElementById("atlasStageImg").src = v.img;
      document.getElementById("atlasKicker").textContent = v.kicker;
      document.getElementById("atlasHeading").textContent = v.heading;
      document.getElementById("atlasDesc").textContent = v.desc;
      document.getElementById("atlasInvariant").textContent = v.invariant;
      const a = document.getElementById("atlasRepoLink");
      a.textContent = v.linkText;
      a.href = v.href;
    });
  });

  /* ------------------------------------------------------------------------
     ACT 4: SIGNATURE TOY #2 — INTERACTIVE ENGINEERING BRIEF CHASSIS
     ------------------------------------------------------------------------ */
  const capPickerGrid = document.getElementById("capPickerGrid");
  const briefCase = document.getElementById("briefCase");
  const briefBays = document.querySelectorAll("#briefBays .kit-bay");
  const briefLid = document.getElementById("briefLid");
  const briefProgressText = document.getElementById("briefProgressText");
  const briefFitLabel = document.getElementById("briefFitLabel");
  const briefProfileTitle = document.getElementById("briefProfileTitle");
  const sealedRoleLabel = document.getElementById("sealedRoleLabel");
  const copyBriefBtn = document.getElementById("copyBriefBtn");
  const reopenBriefBtn = document.getElementById("reopenBriefBtn");

  function renderCapPicker() {
    capPickerGrid.innerHTML = CAPABILITIES.map((c) => `
      <article class="kit-item-card">
        <span class="kit-item-qty" id="cap-qty-${c.id}">0</span>
        <div>
          <span class="kit-item-code">${c.code}</span>
          <h3 class="kit-item-name">${c.name}</h3>
          <p class="kit-item-proof">${c.proof}</p>
        </div>
        <div class="kit-item-bottom">
          <span class="kit-item-tag">${c.tag}</span>
          <button type="button" class="kit-add-btn" data-cap-add="${c.id}" aria-label="Adicionar ${c.name}">+</button>
        </div>
      </article>
    `).join("");

    capPickerGrid.querySelectorAll("[data-cap-add]").forEach((btn) => {
      btn.addEventListener("click", () => addCapability(btn.dataset.capAdd));
    });
  }

  function addCapability(id) {
    const idx = state.briefSlots.indexOf(null);
    if (idx === -1) {
      showToast("Chassi completo. Copie o brief ou clique em Montar outro.");
      return;
    }
    const cap = CAPABILITIES.find((x) => x.id === id);
    if (!cap) return;
    state.briefSlots[idx] = cap;
    renderBriefState();
    const count = state.briefSlots.filter(Boolean).length;
    showToast(count === 4 ? "Chassi homologado — resumo técnico pronto" : `${cap.name} encaixado (${count}/4)`);
  }

  function removeBriefSlot(idx) {
    if (!state.briefSlots[idx]) return;
    state.briefSlots[idx] = null;
    const compact = state.briefSlots.filter(Boolean);
    state.briefSlots = [compact[0] || null, compact[1] || null, compact[2] || null, compact[3] || null];
    renderBriefState();
  }

  function inferRoleProfile(filled) {
    const ids = new Set(filled.map((x) => x.id));
    if (ids.has("cap-agents") && ids.has("cap-compilers")) return "Applied AI Systems Engineer";
    if (ids.has("cap-data") && ids.has("cap-db")) return "Data & Backend Systems Engineer";
    if (ids.has("cap-ast") && ids.has("cap-craft")) return "Full-Stack AI Product Engineer";
    return "Software & AI Engineer";
  }

  function renderBriefState() {
    const filled = state.briefSlots.filter(Boolean);
    const count = filled.length;
    const isFull = count === 4;

    briefBays.forEach((bay, i) => {
      const cap = state.briefSlots[i];
      if (cap) {
        bay.classList.add("is-filled");
        bay.setAttribute("aria-label", `Remover ${cap.name}`);
        bay.innerHTML = `<span class="kit-bay-code">${cap.code}</span><span class="kit-bay-name">${cap.name}</span>`;
      } else {
        bay.classList.remove("is-filled");
        bay.setAttribute("aria-label", `Compartimento ${i + 1} vazio`);
        bay.innerHTML = "";
      }
    });

    CAPABILITIES.forEach((cap) => {
      const q = filled.filter((x) => x.id === cap.id).length;
      const el = document.getElementById(`cap-qty-${cap.id}`);
      if (el) {
        el.textContent = `+${q}`;
        el.classList.toggle("is-visible", q > 0);
      }
    });

    const role = count > 0 ? inferRoleProfile(filled) : "Selecione a stack";
    briefProfileTitle.textContent = role;
    sealedRoleLabel.textContent = `${role} · Homologado`;
    if (isFull) {
      briefProgressText.textContent = "Chassi completo e lacrado";
      briefFitLabel.textContent = "Aderência máxima";
    } else {
      const miss = 4 - count;
      briefProgressText.textContent = `${count} de 4 módulos · ${miss === 1 ? "falta 1" : `faltam ${miss}`}`;
      briefFitLabel.textContent = count > 0 ? "UTC-3 · Inglês Fluente" : "";
    }

    briefCase.classList.toggle("is-sealed", isFull);
    briefLid.setAttribute("aria-hidden", String(!isFull));
    copyBriefBtn.disabled = count === 0;
    copyBriefBtn.textContent = isFull ? "Copiar brief" : "Copiar seleção";
    reopenBriefBtn.hidden = !isFull;
  }

  briefBays.forEach((bay) => {
    bay.addEventListener("click", () => removeBriefSlot(Number(bay.dataset.slot)));
  });

  function resetBrief() {
    state.briefSlots = [null, null, null, null];
    renderBriefState();
  }
  document.getElementById("clearBriefBtn").addEventListener("click", resetBrief);
  reopenBriefBtn.addEventListener("click", resetBrief);

  copyBriefBtn.addEventListener("click", () => {
    const filled = state.briefSlots.filter(Boolean);
    if (!filled.length) return;
    const role = inferRoleProfile(filled);
    const lines = [
      `Matheus Sousa dos Santos — ${role}`,
      `Stack selecionada: ${filled.map((x) => x.name).join(" + ")}`,
      `Base: Indaiatuba/Campinas (CLT RMC/Remoto ou Global USD UTC-3)`,
      `Contato: std.matheus@gmail.com | github.com/Taiwansz | linkedin.com/in/mth3us`
    ].join("\n");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(lines).catch(() => {});
    }
    showToast("Brief técnico copiado para a área de transferência");
  });

  /* ------------------------------------------------------------------------
     ACT 5B: FILTERABLE ARCHIVE & DOSSIER DRAWER
     ------------------------------------------------------------------------ */
  const archiveFilters = document.getElementById("archiveFilters");
  const archiveGrid = document.getElementById("archiveGrid");

  function renderArchiveFilters() {
    archiveFilters.innerHTML = ARCHIVE_CATS.map((c) => {
      const count = c.id === "all" ? ARCHIVE_ITEMS.length : ARCHIVE_ITEMS.filter((x) => x.cat === c.id).length;
      const active = state.activeArchiveCat === c.id;
      return `<button type="button" class="filter-tab ${active ? "is-active" : ""}" data-acat="${c.id}" role="tab" aria-selected="${active}"><span>${c.label}</span><span class="filter-count">${count}</span></button>`;
    }).join("");

    archiveFilters.querySelectorAll(".filter-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeArchiveCat = btn.dataset.acat;
        renderArchiveFilters();
        renderArchiveGrid();
      });
    });
  }

  function renderArchiveGrid() {
    const list = state.activeArchiveCat === "all"
      ? ARCHIVE_ITEMS
      : ARCHIVE_ITEMS.filter((x) => x.cat === state.activeArchiveCat);

    archiveGrid.innerHTML = list.map((item) => {
      const isExternal = item.link.startsWith("http");
      return `
        <article class="archive-card">
          <div>
            <div class="archive-top">
              <span class="archive-rank">${item.rank}</span>
              <span class="archive-tier">${item.tier}</span>
            </div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="archive-stack">${item.stack}</div>
          </div>
          <div class="archive-links">
            ${item.dossier ? `<button type="button" class="archive-btn is-ghost" data-open-dossier="${item.dossier}">Raio-X</button>` : ""}
            <a href="${item.link}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""} class="archive-btn">${item.linkLabel}</a>
          </div>
        </article>
      `;
    }).join("");

    archiveGrid.querySelectorAll("[data-open-dossier]").forEach((btn) => {
      btn.addEventListener("click", () => openDossier(btn.dataset.openDossier));
    });
  }

  /* Slide-Over Architecture Dossier Drawer */
  const dossierBackdrop = document.getElementById("dossierBackdrop");
  const dossierDrawer = document.getElementById("dossierDrawer");
  const dossierTier = document.getElementById("dossierTier");
  const dossierTitle = document.getElementById("dossierTitle");
  const dossierBody = document.getElementById("dossierBody");

  function openDossier(id) {
    const d = DOSSIERS[id];
    if (!d) return;
    dossierTier.textContent = d.tier;
    dossierTitle.textContent = d.title;
    dossierBody.innerHTML = `
      <div class="dossier-section">
        <h4>Problema de Engenharia</h4>
        <p>${d.problem}</p>
      </div>
      <div class="dossier-section">
        <h4>Por Que Está Neste Nível de Complexidade</h4>
        <p>${d.complexity}</p>
      </div>
      <div class="dossier-section">
        <h4>Métricas Verificadas</h4>
        <div class="dossier-metrics">
          ${d.metrics.map((m) => `<div class="dossier-metric"><strong>${m.val}</strong><span>${m.lbl}</span></div>`).join("")}
        </div>
      </div>
      <div class="dossier-section">
        <h4>Stack</h4>
        <p style="font-family:var(--font-mono);font-size:12.5px">${d.stack}</p>
      </div>
      <div class="dossier-cta-row">
        ${d.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener noreferrer" class="archive-btn ${l.primary ? "" : "is-ghost"}">${l.label}</a>`).join("")}
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

  document.querySelectorAll("[data-open-dossier]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.closest("a") || e.target.closest("[data-scroll-lab]")) return;
      openDossier(el.dataset.openDossier);
    });
  });

  document.getElementById("closeDossierBtn").addEventListener("click", closeDossier);
  dossierBackdrop.addEventListener("click", closeDossier);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDossier(); });

  /* Copy Email CTA */
  document.getElementById("copyEmailBtn").addEventListener("click", () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText("std.matheus@gmail.com").catch(() => {});
    }
    showToast("E-mail std.matheus@gmail.com copiado");
  });

  /* ------------------------------------------------------------------------
     GSAP SCROLLTRIGGER + ADAPTIVE LIQUID GLASS NAVBAR
     ------------------------------------------------------------------------ */
  function initMotion() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

    gsap.to("#topProgressBar", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.2 }
    });

    // Single deterministic navbar polarity checker (zero ScrollTrigger race conditions)
    const nav = document.getElementById("siteNav");
    const sectionLightMap = [
      { id: "hero", light: () => false },
      { id: "projetos", light: () => true },
      { id: "arquitetura", light: () => labStage.getAttribute("data-theme") === "light" },
      { id: "escopo", light: () => true },
      { id: "trajetoria", light: () => true },
      { id: "arquivo", light: () => true },
      { id: "contato", light: () => false }
    ];

    function updateNavbarPolarity() {
      const probeY = 48;
      for (const entry of sectionLightMap) {
        const el = document.getElementById(entry.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= probeY && r.bottom >= probeY) {
          nav.classList.toggle("is-light", entry.light());
          break;
        }
      }
    }

    window.addEventListener("scroll", updateNavbarPolarity, { passive: true });
    window.addEventListener("resize", updateNavbarPolarity, { passive: true });
    document.querySelectorAll(".lab-tab").forEach((t) => t.addEventListener("click", () => setTimeout(updateNavbarPolarity, 20)));
    updateNavbarPolarity();

    ["projetos", "arquitetura", "escopo", "trajetoria", "arquivo"].forEach((id) => {
      const sec = document.getElementById(id);
      const link = document.querySelector(`.nav-link[data-section="${id}"]`);
      if (!sec || !link) return;
      ScrollTrigger.create({
        trigger: sec,
        start: "top 45%",
        end: "bottom 45%",
        onToggle: (self) => {
          if (self.isActive) {
            document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        }
      });
    });

    if (reducedMotion) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      document.querySelectorAll(".hero-artifact").forEach((el) => {
        const depth = Number(el.dataset.depth || 20);
        gsap.to(el, {
          y: -depth * 2.2,
          ease: "none",
          scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 0.6 }
        });
      });

      const hero = document.getElementById("hero");
      hero.addEventListener("pointermove", (e) => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        document.querySelectorAll(".hero-artifact").forEach((el) => {
          const depth = Number(el.dataset.depth || 20);
          gsap.to(el, { x: nx * depth * 0.7, duration: 0.9, ease: "power2.out", overwrite: "auto" });
        });
      });
    });

    gsap.from(".bento-card", {
      y: 28,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: ".bento-grid", start: "top 82%", once: true }
    });

    window.addEventListener("load", () => ScrollTrigger.refresh());
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
  }

  /* ------------------------------------------------------------------------
     BOOT
     ------------------------------------------------------------------------ */
  renderCapPicker();
  renderBriefState();
  renderArchiveFilters();
  renderArchiveGrid();
  switchLab("thsyr");
  initHeroCanvas();
  initOrbitalGlobe();
  initMotion();
  runPreloader();
})();
