/* ==========================================================================
   MATHEUS SOUSA PORTFOLIO 2026 — LIVE 3D NEURAL CORE, COMPLEXITY MATRIX & TOKLANG
   ========================================================================== */
(function () {
  "use strict";

  const STATIC_BASE = window.PORTFOLIO_STATIC_BASE || "/static/";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------------
     BILINGUAL DICTIONARY (PT-BR / EN-US)
     ------------------------------------------------------------------------ */
  const I18N = {
    pt: {
      nav_thsyr: "ThSyr",
      nav_rank: "Complexidade",
      nav_compiler: "TokLang",
      nav_story: "Trajetória",
      nav_index: "Índice",
      nav_contact: "Contato",
      hero_kicker: "AI & SYSTEMS ENGINEER · INDAIATUBA / CAMPINAS",
      hero_l1: "Sistemas cognitivos.",
      hero_l2: "Engenharia sem folga.",
      hero_lead: "HR Data Analyst I no Agibank e graduando em Ciência da Computação (UniMAX '27). Projeto runtimes multiagentes em Python, compiladores determinísticos para LLMs e software com tolerância de usinagem.",
      hero_cta1: "Explorar ThSyr #01 &rarr;",
      hero_cta2: "Testar compilador TokLang",
      t_mod: "módulos no engine ThSyr",
      t_ast: "tipagem estrita AST",
      t_tok: "tokens no TokLang",
      t_nod: "nós no grafo neural",
      thsyr_tag: "PROJETO PRINCIPAL · COMPLEXIDADE MÁXIMA",
      thsyr_lead: "Meu sistema operacional cognitivo pessoal. Construído do zero para resolver os três colapsos estruturais de agentes de IA: amnésia entre sessões, bajulação (sycophancy) e alucinação arquitetural.",
      btn_full_xray: "Dossiê completo",
      rank_kicker: "02 &mdash; 07 · PROJETOS AUTORAIS POR COMPLEXIDADE",
      rank_h2: "Cada sistema ranqueado pelo<br>peso real de engenharia.",
      rank_note: "Apenas repositórios de autoria própria. Selecione qualquer linha para inspecionar arquitetura, métricas verificadas e links de código.",
      wb_kicker: "PROVA INTERATIVA · PROJETO #02 (TCC)",
      wb_h2: "Compilador TokLang ao vivo.",
      story_kicker: "A GÊNESE INDUSTRIAL",
      story_h2: "Da tolerância de micrômetro<br>à arquitetura de sistemas.",
      story_p: "Antes de escrever runtimes multiagentes e compiladores, formei-me em Mecânico de Usinagem pelo SENAI e operei máquinas operatrizes pesadas na Fupresa. No chão de fábrica, um milímetro de folga condena a peça. Trago exatamente essa intolerância a código descartável para cada automação Python, pipeline SQL e arquitetura em produção no Agibank.",
      fin_kicker: "DISPONIBILIDADE · 2026 / 2027",
      fin_l1: "Rigor de usinagem.",
      fin_l2: "Escala de software.",
      fin_sub: "Aberto a posições CLT Junior / Pleno em AI & Software Engineering (Campinas/RMC ou Remoto Brasil) e oportunidades Remotas Globais em USD (fuso UTC-3)."
    },
    en: {
      nav_thsyr: "ThSyr",
      nav_rank: "Complexity",
      nav_compiler: "TokLang",
      nav_story: "Story",
      nav_index: "Index",
      nav_contact: "Contact",
      hero_kicker: "APPLIED AI & SYSTEMS ENGINEER · BRAZIL (UTC-3)",
      hero_l1: "Cognitive systems.",
      hero_l2: "Zero-tolerance engineering.",
      hero_lead: "HR Data Analyst I at Agibank and CS Senior (UniMAX '27). I architect multi-agent Python runtimes, deterministic LLM context compilers, and production software with industrial machining precision.",
      hero_cta1: "Explore ThSyr #01 &rarr;",
      hero_cta2: "Run TokLang compiler",
      t_mod: "Python engine modules",
      t_ast: "strict AST type coverage",
      t_tok: "TokLang token reduction",
      t_nod: "synaptic graph nodes",
      thsyr_tag: "FLAGSHIP PROJECT · MAXIMUM COMPLEXITY",
      thsyr_lead: "My personal cognitive operating system. Built from scratch to eliminate the three failure modes of AI agents: cross-session amnesia, sycophancy, and architectural hallucination.",
      btn_full_xray: "Full architecture dossier",
      rank_kicker: "02 &mdash; 07 · AUTHORED SYSTEMS BY COMPLEXITY",
      rank_h2: "Every system ranked by<br>real engineering depth.",
      rank_note: "Strictly original self-authored repositories. Select any row to inspect architecture, verified metrics, and live code links.",
      wb_kicker: "LIVE PROOF · PROJECT #02 (B.S. THESIS)",
      wb_h2: "TokLang compiler running live.",
      story_kicker: "THE INDUSTRIAL GENESIS",
      story_h2: "From micron tolerance<br>to systems architecture.",
      story_p: "Before writing multi-agent runtimes and compilers, I trained in CNC/machining at SENAI and operated heavy machine tools at Fupresa. On the factory floor, one millimeter of play scraps the part. I enforce that exact metrological discipline on every Python automation, SQL pipeline, and architecture at Agibank.",
      fin_kicker: "AVAILABILITY · 2026 / 2027",
      fin_l1: "Machining rigor.",
      fin_l2: "Software scale.",
      fin_sub: "Open to full-time AI & Software Engineering roles (Campinas/RMC Hybrid, Brazil Remote, or Global Remote USD in UTC-3)."
    }
  };

  /* ------------------------------------------------------------------------
     LIVE ANIMATED 3D GOLDEN THSYR NEURAL CORE (FAITHFUL TO UPLOADED IMAGE!)
     Crown dome + 5 stratified golden hemispherical lobes + synaptic pulses
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
    let rotX = 0.22; // Iconic ~12.5 deg top-front viewing angle matching ThSyr Neural Core
    let velY = 0.0034;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;

    // Pre-bake crisp circular dot sprites (ZERO square pixels, ZERO overexposed white blob!)
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

    // Deterministic Martin Roberts R3 quasi-random constants (from ThSyr galaxyLayout.ts)
    const PHI1 = 1.22074408460575947536;
    const A1 = 1 / PHI1, A2 = 1 / (PHI1 * PHI1), A3 = 1 / (PHI1 * PHI1 * PHI1);
    const lobeList = ["frontal", "parietal", "temporal", "occipital", "limbico"];

    const nodes = [];

    // 1. UPPER GOLDEN CROWN DOME (crisp individual amber-gold nodes forming spherical cap)
    const CROWN_N = 560;
    const CROWN_R = 0.56;
    const CROWN_BASE_Y = -0.34;
    for (let i = 0; i < CROWN_N; i++) {
      const u = (0.5 + (i + 1) * A1) % 1;
      const v = (0.5 + (i + 1) * A2) % 1;
      const theta = u * Math.PI * 2;
      // Spherical cap from apex (phi = 0) to rim (phi = ~0.96 rad)
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

    // 2. INNER CONCENTRIC HEMISPHERICAL BOWL (open at top y=-0.30, curving smoothly to rounded bottom)
    const INNER_N = 620;
    for (let i = 0; i < INNER_N; i++) {
      const u = (0.5 + (i + 37) * A1) % 1;
      const v = (0.5 + (i + 37) * A2) % 1;
      const w = (0.5 + (i + 37) * A3) % 1;
      const theta = u * Math.PI * 2;
      // Latitude from upper open rim (0.04) down to rounded bottom pole (PI/2)
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

    // 3. OUTER WINGED VEIL HEMISPHERE (wide sweeping outer chalice wings tapering to rounded bottom)
    const OUTER_N = 640;
    for (let i = 0; i < OUTER_N; i++) {
      const u = (0.5 + (i + 113) * A1) % 1;
      const v = (0.5 + (i + 113) * A2) % 1;
      const w = (0.5 + (i + 113) * A3) % 1;
      const theta = u * Math.PI * 2;
      const lat = Math.asin(Math.pow(v, 0.82));
      // Subtle sculpted rim wave at top edge matching ThSyr reference silhouette
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

    // 4. Equatorial Whisper Rings & Synaptic Filaments (subtle horizon shelf + lobe bridges)
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

    // Interactive orbit drag + subtle pointer hover tilt
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

    // Lobe filter buttons
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

        if (!dragging && !reducedMotion) {
          rotY += velY;
          velY += (0.0034 - velY) * 0.04;
        }
        time += reducedMotion ? 0 : 0.022;

        const cx = w * 0.5;
        const cy = h * 0.45; // Centered vertically with clean top/bottom obsidian margin!
        const scale = Math.min(w, h) * 0.36;
        const cosY = Math.cos(rotY + targetTiltY);
        const sinY = Math.sin(rotY + targetTiltY);
        const cosX = Math.cos(rotX + targetTiltX);
        const sinX = Math.sin(rotX + targetTiltX);

        // Subtle dark-warm ambient core aura behind silhouette
        const aura = ctx.createRadialGradient(cx, cy - scale * 0.2, scale * 0.05, cx, cy + scale * 0.1, scale * 1.15);
        aura.addColorStop(0, "rgba(235, 168, 42, 0.12)");
        aura.addColorStop(0.55, "rgba(190, 128, 28, 0.04)");
        aura.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(cx, cy + scale * 0.08, scale * 1.18, 0, Math.PI * 2);
        ctx.fill();

        // Subtle golden equatorial horizon arcs (2 sweeping elliptical filaments around crown base)
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

        // Project all nodes with gentle volumetric breathing
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
          projected[i] = {
            sx: cx + rx * scale * perspective,
            sy: cy + ry * scale * perspective,
            z: rz,
            p: perspective,
            node: n
          };
        }

        // Delicate synaptic filament edges
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

        // Depth-sort back to front: source-over preserves EVERY INDIVIDUAL GOLDEN DOT crisply!
        projected.sort((a, b) => b.z - a.z);

        ctx.globalCompositeOperation = "source-over";
        for (let i = 0; i < projected.length; i++) {
          const item = projected[i];
          const n = item.node;
          const isMatch = activeLobe === "all" || n.lobe === activeLobe || ((n.kind === "apex" || n.kind === "crown") && activeLobe === "frontal");
          const twinkle = 0.82 + 0.18 * Math.sin(time * 1.45 + n.phase);
          const depthFactor = Math.max(0.28, Math.min(1, (1.35 - item.z * 0.42)));
          const r = n.size * item.p * (isMatch ? 1.72 : 1.25);

          ctx.globalAlpha = isMatch ? depthFactor * twinkle : depthFactor * 0.24;
          let spr = sprBowlFine;
          if (!isMatch) spr = sprDim;
          else if (n.kind === "apex") spr = sprCrownApex;
          else if (n.kind === "crown") spr = sprCrownRich;
          else if (n.kind === "hero") spr = sprBowlBright;

          ctx.drawImage(spr, item.sx - r, item.sy - r, r * 2, r * 2);
        }

        // Additive luminous glint ONLY for traveling synaptic pulses along active bridges
        if (!reducedMotion) {
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

      if (!reducedMotion) requestAnimationFrame(render);
    }

    render();
  }

  /* ------------------------------------------------------------------------
     COMPLEXITY MATRIX (#02 -> #07 — 100% AUTHORED REPOSITORIES ONLY!)
     ------------------------------------------------------------------------ */
  const COMPLEXITY_SYSTEMS = [
    {
      id: "toklang",
      rank: "02",
      name: "TokLang",
      subtitle: "Compilador Determinístico LL(1) para LLMs (TCC)",
      tierLabel: "COMPLEXIDADE #02 · COMPILADORES & IA",
      bars: 5,
      meterText: "ALTA",
      desc: "Middleware formal e compilador determinístico (Lexer -> Parser LL(1) -> AST -> poda por Entropia de Shannon) para comprimir janelas de RAG e prompts sem perder fidelidade semântica. Validado sobre NVIDIA NIM em cluster A100 SXM4.",
      stack: "Python · Teoria de Compiladores · AST · Entropia de Shannon · NVIDIA NIM",
      metrics: [
        { val: "-56,2%", lbl: "Redução de tokens faturados" },
        { val: "-80,7%", lbl: "Economia em FLOPs O(n²)" },
        { val: "574 ms", lbl: "Latência TTFT medida" },
        { val: "100%", lbl: "Reversível e auditável" }
      ],
      diagram: [
        "STAGE 01  ::  Lexer & Proteção de Entidades de Domínio",
        "STAGE 02  ::  Parser LL(1) -> AST Canônica",
        "STAGE 03  ::  Poda Lexical por Entropia de Shannon",
        "BENCHMARK ::  NVIDIA NIM A100 (-56,2% tokens · 574ms)"
      ],
      links: [
        { label: "Testar compilador abaixo", href: "#toklang-lab", primary: true, internal: true },
        { label: "Repositório TCC", href: "https://github.com/Taiwansz/TCC-CIENCIAS-DA-COMPUTACAO-2026" }
      ]
    },
    {
      id: "atlas",
      rank: "03",
      name: "Atlas Engineering OS",
      subtitle: "Governança Agent-Native & Auditoria AST",
      tierLabel: "COMPLEXIDADE #03 · ANÁLISE ESTÁTICA & SAAS",
      bars: 5,
      meterText: "ALTA",
      desc: "Plataforma SaaS e CLI construída para impedir architectural drift em repositórios alterados por agentes autônomos. Audita Árvores Sintáticas Abstratas (AST), contratos Zod e invariantes arquiteturais em tempo real.",
      stack: "TypeScript · Python · Next.js · AST Static Analysis · Zod · OAuth2 CLI",
      metrics: [
        { val: "100", lbl: "Módulos de código" },
        { val: "SaaS + CLI", lbl: "Arquitetura híbrida" },
        { val: "AST Gate", lbl: "Bloqueio de code drift" },
        { val: "Live", lbl: "Deploy Vercel" }
      ],
      img: STATIC_BASE + "images/v2/atlas_tablet.jpg",
      links: [
        { label: "Abrir na Vercel", href: "https://atlas-landing-page.vercel.app", primary: true },
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
      meterText: "MÉDIA-ALTA",
      desc: "Sistema operacional epistêmico autônomo em Python desenhado para aprendizado profundo estruturado, decomposição conceitual e verificação rigorosa de domínio sem consumo passivo.",
      stack: "Python · Arquitetura Epistêmica · Grafo Conceitual · Automação",
      metrics: [
        { val: "47", lbl: "Módulos Python/Web" },
        { val: "Autônomo", lbl: "Ciclo epistêmico" },
        { val: "Zero Slop", lbl: "Rigor conceitual" },
        { val: "Autoral", lbl: "Ecossistema Th" }
      ],
      diagram: [
        "INGEST   ::  Decomposição de fontes e conceitos-chave",
        "SYNTH    ::  Mapeamento de dependências epistêmicas",
        "VERIFY   ::  Checagem ativa contra lacunas de entendimento",
        "OUTPUT   ::  Dossiês técnicos estruturados"
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
      meterText: "MÉDIA-ALTA",
      desc: "Engine financeiro digital projetado sobre contabilidade de partidas dobradas em PostgreSQL + Supabase RLS. Nenhum saldo é editado diretamente sem lançamento contábil imutável que preserve soma zero.",
      stack: "TypeScript · PostgreSQL · Supabase RLS · ACID · Double-Entry Ledger",
      metrics: [
        { val: "Double-Entry", lbl: "Invariante contábil" },
        { val: "ACID + RLS", lbl: "Isolamento no banco" },
        { val: "Imutável", lbl: "Trilha de lançamentos" },
        { val: "Live", lbl: "Deploy Vercel" }
      ],
      img: STATIC_BASE + "images/v2/thallium_tablet.jpg",
      links: [
        { label: "Abrir na Vercel", href: "https://thallium-chi.vercel.app", primary: true },
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
      meterText: "MÉDIA",
      desc: "Motor determinístico de folha de pagamento contínua aderente à legislação brasileira (CLT/RFB/MTE), com barra de prontidão (readiness 98,2%), simulação de encargos, remessa CNAB 240/Pix e visão documental ICP-Brasil.",
      stack: "JavaScript · TypeScript · Regras CLT/eSocial · CNAB 240/Pix · PDF Audit",
      metrics: [
        { val: "391 vidas", lbl: "Base simulada CLT + PJ" },
        { val: "98,2%", lbl: "Readiness validada" },
        { val: "eSocial", lbl: "Compliance CLT/RFB" },
        { val: "ICP-BR", lbl: "Holerite arquivístico" }
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
      meterText: "MÉDIA",
      desc: "Projeto autoral desenvolvido em C++ sobre Unreal Engine 5, explorando gerenciamento de memória de baixo nível, loop de simulação em tempo real e arquitetura orientada a componentes fora do eixo web.",
      stack: "C++ · Unreal Engine 5 · Arquitetura 3D · Real-Time Loop",
      metrics: [
        { val: "C++", lbl: "Linguagem core" },
        { val: "UE5", lbl: "Engine 3D real-time" },
        { val: "Low-Level", lbl: "Controle de memória" },
        { val: "Autoral", lbl: "Repositório público" }
      ],
      diagram: [
        "CORE     ::  C++ Actors, Components & State Machines",
        "ENGINE   ::  Unreal Engine 5 Real-Time Pipeline",
        "PHYSICS  ::  Collision & Spatial Simulation Loop",
        "REPO     ::  github.com/Taiwansz/skypea"
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

  const complexityList = document.getElementById("complexityList");
  const complexityInspector = document.getElementById("complexityInspector");
  let activeSystemId = "toklang";

  function renderComplexityMatrix() {
    complexityList.innerHTML = COMPLEXITY_SYSTEMS.map((sys) => {
      const on = sys.id === activeSystemId;
      const barsHtml = Array.from({ length: 5 }, (_, idx) => `<i class="${idx < sys.bars ? "on" : ""}"></i>`).join("");
      return `
        <button type="button" class="cx-row ${on ? "is-active" : ""}" data-cx="${sys.id}" role="tab" aria-selected="${on}">
          <span class="cx-rank">${sys.rank}</span>
          <span>
            <span class="cx-name">${sys.name}</span>
            <span class="cx-sub">${sys.subtitle}</span>
          </span>
          <span class="cx-meter">
            <span class="cx-meter-label">${sys.meterText}</span>
            <span class="cx-bars" aria-hidden="true">${barsHtml}</span>
          </span>
        </button>
      `;
    }).join("");

    complexityList.querySelectorAll(".cx-row").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeSystemId = btn.dataset.cx;
        renderComplexityMatrix();
      });
    });

    const cur = COMPLEXITY_SYSTEMS.find((s) => s.id === activeSystemId) || COMPLEXITY_SYSTEMS[0];
    const visualHtml = cur.img
      ? `<img src="${cur.img}" alt="${cur.name}">`
      : `<div class="ins-diagram">${cur.diagram.map((line) => `<div class="ins-diag-line">${line}</div>`).join("")}</div>`;

    complexityInspector.innerHTML = `
      <div class="ins-visual">${visualHtml}</div>
      <div class="ins-body">
        <span class="ins-tier">${cur.tierLabel}</span>
        <h3>${cur.name}</h3>
        <p class="ins-desc">${cur.desc}</p>
        <div class="ins-metrics">
          ${cur.metrics.map((m) => `<div class="ins-metric"><strong>${m.val}</strong><span>${m.lbl}</span></div>`).join("")}
        </div>
        <div class="ins-stack">${cur.stack}</div>
        <div class="ins-actions">
          ${cur.links.map((l) => `<a href="${l.href}" ${l.internal ? "" : 'target="_blank" rel="noopener noreferrer"'} class="${l.primary ? "btn-solid-ink" : "btn-line-ink"}">${l.label}</a>`).join("")}
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     ACT 4: TOKLANG 3-STAGE LIVE COMPILER WORKBENCH
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

  const tokInput = document.getElementById("tokInput");
  const tokDiff = document.getElementById("tokTokenDiff");
  const tokOutput = document.getElementById("tokOutput");

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function runTokLangWorkbench() {
    let raw = tokInput.value.trim();
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
      runTokLangWorkbench();
    });
  });

  tokInput.addEventListener("input", runTokLangWorkbench);
  tokInput.value = TOKLANG_PRESETS.rag;
  runTokLangWorkbench();

  document.getElementById("tokCopyBtn").addEventListener("click", () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(tokOutput.textContent).catch(() => {});
    }
    showToast("AST TokLang copiado");
  });

  /* ------------------------------------------------------------------------
     ACT 5B: FULL FILTERABLE INDEX (100% AUTHORED + LIVE FLASK SUB-APPS)
     ------------------------------------------------------------------------ */
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

  const ARCHIVE_CATS = [
    { id: "all", label: "Todos" },
    { id: "core", label: "Core #01–#07" },
    { id: "web", label: "Produtos Web" },
    { id: "live", label: "Apps Flask ao Vivo" }
  ];

  let activeArchiveCat = "all";
  const archiveFilters = document.getElementById("archiveFilters");
  const archiveRows = document.getElementById("archiveRows");

  function renderArchive() {
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
     DOSSIER DRAWER, TOAST, LANGUAGE & DETERMINISTIC HEADER POLARITY
     ------------------------------------------------------------------------ */
  const toastEl = document.getElementById("toast");
  let toastTimer = null;
  function showToast(msg) {
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

  document.querySelectorAll("[data-open-dossier]").forEach((el) => {
    el.addEventListener("click", () => openDossier(el.dataset.openDossier));
  });
  document.getElementById("closeDossierBtn").addEventListener("click", closeDossier);
  dossierBackdrop.addEventListener("click", closeDossier);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDossier(); });

  /* Language Toggle */
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

  /* Copy Email */
  document.getElementById("copyEmailBtn").addEventListener("click", () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText("std.matheus@gmail.com").catch(() => {});
    }
    showToast("std.matheus@gmail.com copiado");
  });

  /* Deterministic Header Rail Light/Dark Polarity + GSAP Progress */
  function initNavigationAndMotion() {
    const header = document.getElementById("siteHeader");
    const sections = [
      { id: "hero", light: false },
      { id: "thsyr", light: true },
      { id: "complexidade", light: true },
      { id: "toklang-lab", light: false },
      { id: "trajetoria", light: true },
      { id: "indice", light: true },
      { id: "contato", light: false }
    ];

    function syncHeader() {
      // Probe 96px down (strictly below the 60px fixed rail & scroll-margin-top)
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;
      if (atBottom) {
        header.classList.toggle("is-light", false);
        document.querySelectorAll(".rail-link").forEach((a) => a.classList.remove("is-active"));
        return;
      }

      const probe = 96;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) {
          header.classList.toggle("is-light", s.light);
          document.querySelectorAll(".rail-link").forEach((a) => {
            a.classList.toggle("is-active", a.dataset.section === s.id);
          });
          break;
        }
      }
    }

    window.addEventListener("scroll", syncHeader, { passive: true });
    window.addEventListener("resize", syncHeader, { passive: true });
    syncHeader();

    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

      gsap.to("#topProgressBar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.2 }
      });

      if (!reducedMotion) {
        gsap.fromTo(".reveal-in", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.72, stagger: 0.08, ease: "power3.out", clearProps: "transform" });
        gsap.from(".pillar-card", {
          y: 26,
          opacity: 0,
          duration: 0.68,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: ".flagship-pillars", start: "top 84%", once: true }
        });
      }
    }
  }

  /* Boot */
  renderComplexityMatrix();
  renderArchive();
  initLiveNeuralCore();
  initNavigationAndMotion();
})();
