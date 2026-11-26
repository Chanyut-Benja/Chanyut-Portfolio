/**
 * Chanyut Benjapalakorn — Personal Portfolio Interactive Controller
 * Handles: Theme Toggle, Project Filtering, Deep-Dive Case Study Drawer,
 * One-Click Clipboard Copy + Toast, and Bento Card Cursor Spotlight.
 */

(function () {
  'use strict';

  /* ========================================================================
     1. DEEP-DIVE CASE STUDY DATA FOR ALL 3 FEATURED PROJECTS
     ======================================================================== */
  const PROJECTS_DATA = {
    matchwork: {
      id: 'matchwork',
      indexLabel: '01 / 03',
      year: '2025',
      roleBadge: 'Full-Stack Engineering',
      badgeClass: 'badge-blue',
      imageSrc: './assets/matchwork-preview.png',
      imageAlt: 'MatchWork Candidate Job Matching Dashboard UI',
      bannerKicker: 'FULL-STACK WEB APPLICATION • MVC & AUTOMATED TESTING',
      bannerSummary:
        'A skill-tag job matching web platform featuring JWT authentication, normalized relational database design, and automated Unit/API test suites powered by Jest.',
      title: 'MatchWork — Job Matching Platform',
      subtitle: 'Skill-Tag Job Matching Platform with MVC Architecture & RESTful APIs',
      facts: [
        { label: 'Role', value: 'Full-Stack / Backend Dev' },
        { label: 'Architecture', value: 'MVC + RESTful API' },
        { label: 'Quality Assurance', value: 'Unit & API Tests (Jest)' }
      ],
      problem:
        'Tech job seekers and recent graduates often struggle to discover openings aligned with their specific technical stack, while recruiters spend excessive time manually screening applications without a transparent, skill-weighted matching score.',
      archHeading: 'System Architecture & Backend Engineering',
      architectureIntro:
        'Engineered the backend using a clean Model-View-Controller (MVC) pattern to decouple business logic from data access layers, paired with a deterministic tag-matching algorithm that scores candidate-to-role compatibility.',
      flowSteps: [
        {
          tag: 'STEP 01 • DATABASE SCHEMA',
          title: 'Relational DB Modeling (MySQL)',
          desc: 'Designed normalized Users, Jobs, Skills, and many-to-many junction tables to support fast, indexed skill-tag matching queries.'
        },
        {
          tag: 'STEP 02 • AUTH & SECURITY',
          title: 'JWT Authentication & RBAC',
          desc: 'Implemented stateless JSON Web Token (JWT) authentication, password hashing, and role-based middleware separating candidates and employers.'
        },
        {
          tag: 'STEP 03 • MATCHING ENGINE',
          title: 'RESTful API & MVC Controllers',
          desc: 'Built modular endpoints to compute skill-match percentages, rank recommended positions, and track application lifecycles.'
        },
        {
          tag: 'STEP 04 • AUTOMATED TESTING',
          title: 'Unit & Integration Testing (Jest)',
          desc: 'Authored automated Jest test suites covering authentication flows, input validation, and API endpoints to prevent regressions.'
        }
      ],
      highlights: [
        'Structured codebase into clear MVC layers (Routes, Controllers, Services, Models) for long-term maintainability and team scalability.',
        'Standardized RESTful API responses with consistent HTTP status codes, payload validation, and centralized error handling.',
        'Designed ER diagrams and optimized SQL JOIN queries to calculate real-time candidate skill-match percentages.',
        'Verified core business rules and edge cases using automated Unit and API integration tests in Jest.'
      ],
      techStack: [
        'Node.js',
        'Express.js',
        'MySQL',
        'RESTful APIs',
        'JWT Auth',
        'MVC Architecture',
        'Jest',
        'HTML/CSS/JS',
        'Git/GitHub'
      ],
      githubUrl: 'https://github.com/Chanyut-Benja/MatchWork-Prototype'
    },

    easydorm: {
      id: 'easydorm',
      indexLabel: '02 / 03',
      year: '2025',
      roleBadge: 'Product Design & Web',
      badgeClass: 'badge-cyan',
      imageSrc: './assets/easydorm-preview.png',
      imageAlt: 'EasyDorm Smart Dormitory Resident Dashboard UI',
      bannerKicker: 'END-TO-END PRODUCT DESIGN • RESPONSIVE WEB PROTOTYPE',
      bannerSummary:
        'A smart dormitory management platform connecting residents and property managers with utility bill alerts, live maintenance tracking, and mobile virtual keycard access.',
      title: 'EasyDorm — Smart Dormitory System',
      subtitle: 'Smart Dormitory Management UX/UI & Responsive Web Application',
      facts: [
        { label: 'Role', value: 'UX/UI & Frontend Dev' },
        { label: 'Platform', value: 'Responsive PC & Mobile' },
        { label: 'Core Deliverables', value: 'Figma + Web Prototype' }
      ],
      problem:
        'Many student dormitories still rely on paper slips or fragmented group chats for monthly water and electricity bills, making payment history difficult to track, leaving residents in the dark on repair schedules, and causing frequent physical keycard lockouts.',
      archHeading: 'UX/UI Design Process & Responsive Prototyping',
      architectureIntro:
        'Applied a User-Centered Design workflow starting from pain-point interviews with university dormitory residents and managers, translating findings into a clear information architecture and an adaptive web prototype for both desktop and mobile.',
      flowSteps: [
        {
          tag: 'STEP 01 • DISCOVERY',
          title: 'User Research & Persona Mapping',
          desc: 'Mapped workflows for two distinct user groups: residents (quick mobile actions) and dorm administrators (multi-room desktop overview).'
        },
        {
          tag: 'STEP 02 • UX ARCHITECTURE',
          title: 'User Flows & Wireframing',
          desc: 'Streamlined invoice inspection, payment slip uploads, and maintenance ticket submission into minimal, high-clarity steps.'
        },
        {
          tag: 'STEP 03 • UI SYSTEM',
          title: 'Design System & Virtual Keycard',
          desc: 'Built a reusable Figma component library and designed a one-tap Virtual Keycard pass accessible directly from the mobile home screen.'
        },
        {
          tag: 'STEP 04 • WEB PROTOTYPE',
          title: 'Responsive Web Implementation',
          desc: 'Developed a responsive web prototype featuring an adaptive multi-column desktop dashboard and thumb-friendly mobile navigation.'
        }
      ],
      highlights: [
        'Monthly water and electricity billing dashboard with clear usage breakdowns and instant payment status indicators.',
        'Step-by-step maintenance ticketing tracker showing live progress from request submission to technician completion.',
        'Ergonomic Virtual Keycard interface designed around mobile thumb-zones for effortless one-handed building entry.',
        'Fully responsive layout engineered to transition seamlessly between desktop management views and mobile resident screens.'
      ],
      techStack: [
        'Figma',
        'Product Design',
        'UX/UI Design',
        'Design System',
        'Responsive Web',
        'HTML5 / CSS3',
        'JavaScript',
        'Git/GitHub'
      ],
      githubUrl: 'https://github.com/Chanyut-Benja/EasyDorm-Upgrade'
    },

    subjectn: {
      id: 'subjectn',
      indexLabel: '03 / 03',
      year: '2024',
      roleBadge: 'Game Development • Team of 6',
      badgeClass: 'badge-hybrid',
      imageSrc: './assets/subjectn-menu.jpg',
      imageAlt: 'Subject N: Lab Breakout — Title Screen & Main Menu',
      images: [
        {
          src: './assets/subjectn-menu.jpg',
          alt: 'Subject N: Lab Breakout — Title Screen & Main Menu (Play, Skill Tree, Settings, How to Play)',
          caption: 'Main Menu & Persistent Skill Tree Entry'
        },
        {
          src: './assets/subjectn-boss-brute.jpg',
          alt: 'Subject N: Lab Breakout — Floor 1 Boss Fight against The Brute with combat HUD',
          caption: 'Floor 1 Boss Encounter: The Brute & Combat HUD'
        },
        {
          src: './assets/subjectn-boss-stormcaller.jpg',
          alt: 'Subject N: Lab Breakout — Floor 2 Boss Fight against The Stormcaller with Weapons, Tech Passives, and Research Boons',
          caption: 'Floor 2 Boss Encounter: The Stormcaller & Modular Augment Loadout'
        }
      ],
      bannerKicker: '2D TOP-DOWN ACTION ROGUE-LITE • UNITY & C# SYSTEMS',
      bannerSummary:
        'A top-down 2D sci-fi action rogue-lite co-developed in a 6-person team, featuring Hades-inspired modular skill upgrades, multi-floor lab stages, and a persistent skill point tree.',
      title: 'Subject N: Lab Breakout — 2D Action Rogue-lite',
      subtitle: 'Top-Down 2D Action Rogue-lite with Modular Skill Upgrades & Multi-Floor Progression',
      facts: [
        { label: 'Role', value: 'Game Systems & UI Dev' },
        { label: 'Collaboration', value: '6-Person Dev Team' },
        { label: 'Engine', value: 'Unity Engine (C#)' }
      ],
      problem:
        'Action games quickly lose replayability when combat builds feel repetitive. Our core challenge was architecting modular C# systems in Unity that support both exciting randomized in-run ability synergies and long-term skill-tree progression while enabling 6 teammates to collaborate cleanly via Git.',
      archHeading: 'Game Systems Architecture & Team Workflow',
      architectureIntro:
        'Designed a data-driven architecture in C# using modular upgrade definitions decoupled from core combat controllers, allowing designers to balance stats and introduce new ability modifiers without rewriting gameplay code.',
      flowSteps: [
        {
          tag: 'STEP 01 • CORE GAME LOOP',
          title: 'Multi-Floor Lab Progression',
          desc: 'Structured escalating containment-lab floors with wave encounters, room-clear rewards, and sector boss fights.'
        },
        {
          tag: 'STEP 02 • HADES-STYLE BOONS',
          title: 'Modular In-Run Upgrade System',
          desc: 'Engineered randomized post-room augment cards that stack attack, dash, and elemental status effects into unique combat builds.'
        },
        {
          tag: 'STEP 03 • META PROGRESSION',
          title: 'Skill Point Tree & Stat Persistence',
          desc: 'Built an interactive skill-point tree graph for permanent stat unlocks, complete with node dependency checks and clear UI feedback.'
        },
        {
          tag: 'STEP 04 • TEAM WORKFLOW',
          title: '6-Person Git Collaboration',
          desc: 'Organized Unity Prefabs, ScriptableObjects, and Scenes modularly to minimize merge conflicts across programmers and artists.'
        }
      ],
      highlights: [
        'Developed a Hades-inspired randomized upgrade selection system supporting diverse combat synergies every run.',
        'Programmed a node-based Skill Point Tree system managing unlock prerequisites and dynamic player stat calculation.',
        'Implemented multi-floor stage transitions and responsive combat HUD elements for health, cooldowns, and active augments.',
        'Collaborated across a 6-member team from Game Design Document planning and sprints through iterative playtesting and balancing.'
      ],
      techStack: [
        'Unity',
        'C#',
        'Game Systems Architecture',
        'ScriptableObjects',
        'Game UI/HUD',
        'Adobe Illustrator',
        'Git/GitHub'
      ],
      githubUrl: 'https://github.com/Chanyut-Benja/lab-breakout-roguelite'
    }
  };

  const PROJECT_ORDER = ['matchwork', 'easydorm', 'subjectn'];

  /* ========================================================================
     2. THEME CONTROLLER (LIGHT #F8FAFC <-> DARK #0B0F19)
     ======================================================================== */
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeLabelEl = document.getElementById('theme-label');
  const metaThemeColor = document.getElementById('meta-theme-color');
  const THEME_STORAGE_KEY = 'chanyut-portfolio-theme';

  function applyTheme(theme) {
    const normalized = theme === 'dark' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', normalized);

    if (themeLabelEl) {
      themeLabelEl.textContent = normalized === 'light' ? 'Dark' : 'Light';
    }

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', normalized === 'dark' ? '#070B14' : '#F8FAFC');
    }
  }

  // Initialize saved theme (defaults to crisp Light Mode #F8FAFC as specified)
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'dark' || savedTheme === 'light') {
      applyTheme(savedTheme);
    } else {
      applyTheme('light');
    }
  } catch (_) {
    applyTheme('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const current = htmlEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch (_) {
        // Ignore storage errors in private mode
      }
    });
  }

  /* ========================================================================
     3. INTERACTIVE PROJECT FILTER BAR
     ======================================================================== */
  const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
  const projectsGrid = document.getElementById('projects-grid');
  const projectCards = Array.from(document.querySelectorAll('.project-card'));
  let currentFilter = 'all';

  function filterProjects(category) {
    currentFilter = category;

    filterButtons.forEach(function (btn) {
      const isMatch = btn.dataset.filter === category;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    let visibleIndex = 0;
    projectCards.forEach(function (card) {
      const categories = (card.dataset.categories || '').split(/\s+/);
      const shouldShow = category === 'all' || categories.includes(category);

      card.classList.remove('is-filtering-in');

      if (shouldShow) {
        card.classList.remove('is-hidden');
        card.classList.add('is-visible');
        card.style.transitionDelay = '0ms';
        // Force reflow for crisp staggered entrance animation
        void card.offsetWidth;
        card.style.animationDelay = visibleIndex * 60 + 'ms';
        card.classList.add('is-filtering-in');
        visibleIndex += 1;
      } else {
        card.classList.add('is-hidden');
        card.style.animationDelay = '0ms';
      }
    });

    if (projectsGrid) {
      projectsGrid.classList.remove('filtered-1', 'filtered-2');
      if (category !== 'all') {
        if (visibleIndex === 1) {
          projectsGrid.classList.add('filtered-1');
        } else if (visibleIndex === 2) {
          projectsGrid.classList.add('filtered-2');
        }
      }
    }
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetFilter = btn.dataset.filter || 'all';
      if (targetFilter !== currentFilter) {
        filterProjects(targetFilter);
      }
    });
  });

  /* Interactive Hero Focus Cards -> Smooth Scroll to #projects & Auto-Filter */
  const focusCards = Array.from(document.querySelectorAll('.focus-card[data-filter-target]'));
  const projectsSection = document.getElementById('projects');

  function activateFocusCard(card) {
    const targetFilter = card.dataset.filterTarget;
    if (!targetFilter) return;

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const matchingFilterBtn = document.querySelector('.filter-btn[data-filter="' + targetFilter + '"]');
    if (matchingFilterBtn) {
      matchingFilterBtn.click();
    } else {
      filterProjects(targetFilter);
    }
  }

  focusCards.forEach(function (card) {
    card.addEventListener('click', function () {
      activateFocusCard(card);
    });
    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activateFocusCard(card);
      }
    });
  });

  /* ========================================================================
     4. FULL-PAGE PROJECT DETAIL VIEW & COBALT-CYAN CURTAIN TRANSITION
     ======================================================================== */
  const mainContent = document.getElementById('main-content');
  const detailView = document.getElementById('project-detail-view');
  const pageTransition = document.getElementById('page-transition');
  const pdBackBtn = document.getElementById('pd-back-btn');
  const pdPrevBtn = document.getElementById('pd-prev-btn');
  const pdNextBtn = document.getElementById('pd-next-btn');

  const pdRoleBadge = document.getElementById('pd-role-badge');
  const pdIndexBadge = document.getElementById('pd-index-badge');
  const pdTitle = document.getElementById('pd-title');
  const pdSubtitle = document.getElementById('pd-subtitle');
  const pdGithubIconLink = document.getElementById('pd-github-icon-link');
  const pdYear = document.getElementById('pd-year');
  const pdRole = document.getElementById('pd-role');
  const pdTechLine = document.getElementById('pd-tech-line');
  const pdSummary = document.getElementById('pd-summary');
  const pdProblem = document.getElementById('pd-problem');
  const pdHighlights = document.getElementById('pd-highlights');
  const pdArchHeading = document.getElementById('pd-arch-heading');
  const pdArchIntro = document.getElementById('pd-architecture-intro');
  const pdFlowSteps = document.getElementById('pd-flow-steps');
  const pdShowcase = document.getElementById('pd-showcase');
  const pdGithubBtn = document.getElementById('pd-github-btn');

  let activeProjectId = null;
  let lastFocusedTrigger = null;
  let savedScrollY = 0;
  let isTransitioning = false;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderProjectDetail(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    activeProjectId = projectId;

    if (pdRoleBadge) {
      pdRoleBadge.className = 'role-badge ' + data.badgeClass;
      pdRoleBadge.textContent = data.roleBadge;
    }
    if (pdIndexBadge) pdIndexBadge.textContent = data.indexLabel;
    if (pdTitle) pdTitle.textContent = data.title;
    if (pdSubtitle) pdSubtitle.textContent = data.subtitle;
    if (pdGithubIconLink) pdGithubIconLink.setAttribute('href', data.githubUrl);
    if (pdYear) pdYear.textContent = data.year || '2025';
    if (pdRole) pdRole.textContent = (data.facts && data.facts[0] && data.facts[0].value) || data.roleBadge;
    if (pdTechLine) pdTechLine.textContent = data.techStack.join(', ');
    if (pdSummary) pdSummary.textContent = data.bannerSummary;
    if (pdProblem) pdProblem.textContent = data.problem;
    if (pdArchHeading) pdArchHeading.textContent = data.archHeading;
    if (pdArchIntro) pdArchIntro.textContent = data.architectureIntro;

    if (pdHighlights) {
      pdHighlights.innerHTML = data.highlights
        .map(function (item) {
          return '<li>' + escapeHtml(item) + '</li>';
        })
        .join('');
    }

    if (pdFlowSteps) {
      pdFlowSteps.innerHTML = data.flowSteps
        .map(function (step) {
          return (
            '<div class="pd-flow-card">' +
            '<span class="pd-flow-tag">' + escapeHtml(step.tag) + '</span>' +
            '<div class="pd-flow-title">' + escapeHtml(step.title) + '</div>' +
            '<p class="pd-flow-desc">' + escapeHtml(step.desc) + '</p>' +
            '</div>'
          );
        })
        .join('');
    }

    if (pdShowcase) {
      if (data.images && data.images.length > 0) {
        pdShowcase.innerHTML = data.images
          .map(function (img) {
            return (
              '<figure class="pd-showcase-frame">' +
              '<img src="' + escapeHtml(img.src) + '" alt="' + escapeHtml(img.alt || data.title) + '" class="pd-showcase-img" loading="lazy" />' +
              (img.caption ? '<figcaption class="pd-showcase-caption">' + escapeHtml(img.caption) + '</figcaption>' : '') +
              '</figure>'
            );
          })
          .join('');
      } else if (data.imageSrc) {
        pdShowcase.innerHTML =
          '<div class="pd-showcase-frame">' +
          '<img src="' + escapeHtml(data.imageSrc) + '" alt="' + escapeHtml(data.imageAlt || data.title) + '" class="pd-showcase-img" loading="lazy" />' +
          '</div>';
      } else {
        pdShowcase.innerHTML =
          '<div class="pd-game-showcase">' +
          '<div class="pd-game-hud-top">' +
          '<span>SECTOR B-03 // CONTAINMENT LAB</span>' +
          '<span>UNITY 2D • C# SYSTEMS</span>' +
          '</div>' +
          '<div class="pd-game-hp-bar"><div class="pd-game-hp-fill"></div></div>' +
          '<div class="pd-game-augments">' +
          '<div class="pd-game-augment-card">' +
          '<span class="pd-game-augment-tag">AUGMENT 01</span>' +
          '<div class="pd-game-augment-name">Overclock Dash</div>' +
          '<p class="pd-game-augment-desc">Modular dash cooldown &amp; kinetic burst modifier.</p>' +
          '</div>' +
          '<div class="pd-game-augment-card">' +
          '<span class="pd-game-augment-tag">AUGMENT 02</span>' +
          '<div class="pd-game-augment-name">Arc Capacitor</div>' +
          '<p class="pd-game-augment-desc">Chain-lightning synergy on primary weapon hits.</p>' +
          '</div>' +
          '<div class="pd-game-augment-card">' +
          '<span class="pd-game-augment-tag">META TREE</span>' +
          '<div class="pd-game-augment-name">Skill Point Graph</div>' +
          '<p class="pd-game-augment-desc">Persistent node unlocks with prerequisite validation.</p>' +
          '</div>' +
          '</div>' +
          '</div>';
      }
    }

    if (pdGithubBtn) pdGithubBtn.setAttribute('href', data.githubUrl);
  }

  function runPageTransition(onCovered, skipAnimation) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (skipAnimation || reduceMotion || !pageTransition) {
      onCovered();
      return;
    }

    isTransitioning = true;
    pageTransition.classList.remove('is-leaving');
    pageTransition.classList.add('is-active', 'is-entering');

    setTimeout(function () {
      onCovered();
      pageTransition.classList.remove('is-entering');
      pageTransition.classList.add('is-leaving');

      setTimeout(function () {
        pageTransition.classList.remove('is-active', 'is-leaving');
        isTransitioning = false;
      }, 380);
    }, 340);
  }

  function openProjectDetail(projectId, triggerEl, options) {
    const opts = options || {};
    if (!detailView || !mainContent || !PROJECTS_DATA[projectId] || isTransitioning) return;

    const wasAlreadyOpen = !detailView.hidden;
    if (!wasAlreadyOpen) {
      savedScrollY = window.scrollY;
      lastFocusedTrigger = triggerEl || document.activeElement;
    }

    runPageTransition(function () {
      renderProjectDetail(projectId);
      mainContent.hidden = true;
      detailView.hidden = false;
      detailView.setAttribute('aria-hidden', 'false');
      document.body.classList.add('project-detail-active');
      window.scrollTo({ top: 0, behavior: 'instant' });

      if (opts.updateHash !== false) {
        const targetHash = '#project/' + projectId;
        if (window.location.hash !== targetHash) {
          history.pushState({ projectId: projectId }, '', targetHash);
        }
      }

      if (pdBackBtn) {
        pdBackBtn.focus({ preventScroll: true });
      }
    }, opts.skipAnimation);
  }

  function closeProjectDetail(options) {
    const opts = options || {};
    if (!detailView || !mainContent || detailView.hidden || isTransitioning) return;

    runPageTransition(function () {
      detailView.hidden = true;
      detailView.setAttribute('aria-hidden', 'true');
      mainContent.hidden = false;
      document.body.classList.remove('project-detail-active');
      activeProjectId = null;

      if (opts.updateHash !== false) {
        history.pushState(null, '', '#projects');
      }

      window.scrollTo({ top: savedScrollY || 0, behavior: 'instant' });
      if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
        lastFocusedTrigger.focus({ preventScroll: true });
      }
    }, opts.skipAnimation);
  }

  function navigateProjectDetail(direction) {
    if (!activeProjectId || isTransitioning) return;
    const idx = PROJECT_ORDER.indexOf(activeProjectId);
    if (idx === -1) return;
    const nextIdx = (idx + direction + PROJECT_ORDER.length) % PROJECT_ORDER.length;
    openProjectDetail(PROJECT_ORDER[nextIdx], null, { skipAnimation: false });
  }

  // Bind Project Row Click & Keyboard Activation
  projectCards.forEach(function (card) {
    card.addEventListener('click', function (event) {
      if (event.target.closest('a')) return;
      const projectId = card.dataset.projectId;
      openProjectDetail(projectId, card);
    });

    card.addEventListener('keydown', function (event) {
      if (event.target.closest('a')) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const projectId = card.dataset.projectId;
        openProjectDetail(projectId, card);
      }
    });
  });

  if (pdBackBtn) {
    pdBackBtn.addEventListener('click', function () {
      closeProjectDetail();
    });
  }
  if (pdPrevBtn) {
    pdPrevBtn.addEventListener('click', function () {
      navigateProjectDetail(-1);
    });
  }
  if (pdNextBtn) {
    pdNextBtn.addEventListener('click', function () {
      navigateProjectDetail(1);
    });
  }

  document.addEventListener('keydown', function (event) {
    if (!detailView || detailView.hidden) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeProjectDetail();
    } else if (event.key === 'ArrowLeft') {
      navigateProjectDetail(-1);
    } else if (event.key === 'ArrowRight') {
      navigateProjectDetail(1);
    }
  });

  // Sync with browser Back / Forward buttons & direct hash links
  function handleHashRoute(skipAnimation) {
    const match = window.location.hash.match(/^#project\/([a-z0-9-]+)$/i);
    if (match && PROJECTS_DATA[match[1]]) {
      openProjectDetail(match[1], null, { updateHash: false, skipAnimation: !!skipAnimation });
    } else if (detailView && !detailView.hidden) {
      closeProjectDetail({ updateHash: false, skipAnimation: !!skipAnimation });
    }
  }

  window.addEventListener('popstate', function () {
    handleHashRoute(false);
  });

  handleHashRoute(true);

  /* ========================================================================
     5. ONE-CLICK CLIPBOARD COPY + FLOATING TOAST
     ======================================================================== */
  const toastEl = document.getElementById('toast');
  const toastMessageEl = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(message) {
    if (!toastEl || !toastMessageEl) return;
    if (toastTimer) clearTimeout(toastTimer);

    toastMessageEl.textContent = message;
    toastEl.hidden = false;

    requestAnimationFrame(function () {
      toastEl.classList.add('is-visible');
    });

    toastTimer = setTimeout(function () {
      toastEl.classList.remove('is-visible');
      setTimeout(function () {
        toastEl.hidden = true;
      }, 240);
    }, 2400);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  // Hero Email Copy Button
  document.querySelectorAll('.copy-email-btn').forEach(function (btn) {
    const textSpan = btn.querySelector('.copy-btn-text');
    let resetBtnTimer = null;

    btn.addEventListener('click', function () {
      const value = btn.dataset.copy || 'chanyut.benjapala@gmail.com';
      const defaultLabel = btn.dataset.labelDefault || value;

      copyToClipboard(value).then(function () {
        btn.classList.add('is-copied');
        if (textSpan) {
          textSpan.textContent = 'Email Copied!';
        }
        showToast('Copied ' + value + ' to clipboard');

        if (resetBtnTimer) clearTimeout(resetBtnTimer);
        resetBtnTimer = setTimeout(function () {
          btn.classList.remove('is-copied');
          if (textSpan) {
            textSpan.textContent = defaultLabel;
          }
        }, 2200);
      });
    });
  });

  // Connect Card Quick Copy Buttons
  document.querySelectorAll('.mini-copy-btn').forEach(function (btn) {
    let resetMiniTimer = null;
    const originalText = btn.textContent.trim();

    btn.addEventListener('click', function () {
      const value = btn.dataset.copy || '';
      if (!value) return;

      copyToClipboard(value).then(function () {
        btn.classList.add('is-copied');
        btn.textContent = 'Copied ✓';
        showToast('Copied ' + value + ' to clipboard');

        if (resetMiniTimer) clearTimeout(resetMiniTimer);
        resetMiniTimer = setTimeout(function () {
          btn.classList.remove('is-copied');
          btn.textContent = originalText;
        }, 2000);
      });
    });
  });

  /* ========================================================================
     6. BENTO / HUD CARD SUBTLE CURSOR SPOTLIGHT TRACKING
     ======================================================================== */
  const allBentoCards = document.querySelectorAll('.bento-card, .hud-glass-card');
  allBentoCards.forEach(function (card) {
    card.addEventListener('mousemove', function (event) {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });

  /* ========================================================================
     7. HERO, SCROLL CHOREOGRAPHY & INTERACTIVE MICRO-INTERACTIONS
     ======================================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  // Ambient Mouse Glow, Scroll Indicator & Scroll-Velocity Asterisk Loop (60fps)
  const scrollFill = document.getElementById('scroll-fill');
  const stackAsterisks = Array.from(document.querySelectorAll('.stack-asterisk'));

  function getTargetScrollPercent() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;
    return 24 + progress * 76;
  }

  if (prefersReducedMotion) {
    if (scrollFill) {
      const syncScroll = function () {
        scrollFill.style.height = getTargetScrollPercent().toFixed(2) + '%';
      };
      window.addEventListener('scroll', syncScroll, { passive: true });
      syncScroll();
    }
  } else {
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.4;
    let currentX = targetX;
    let currentY = targetY;
    let currentX2 = targetX;
    let currentY2 = targetY;

    let targetFill = getTargetScrollPercent();
    let currentFill = targetFill;

    let lastScrollY = window.scrollY;
    let asteriskAngle = 0;
    let asteriskVelocity = 0;

    stackAsterisks.forEach(function (el) {
      el.classList.add('is-js-driven');
    });

    window.addEventListener(
      'pointermove',
      function (e) {
        targetX = e.clientX;
        targetY = e.clientY;
      },
      { passive: true }
    );

    window.addEventListener(
      'scroll',
      function () {
        targetFill = getTargetScrollPercent();
        const nowY = window.scrollY;
        const delta = nowY - lastScrollY;
        lastScrollY = nowY;
        asteriskVelocity = Math.max(-18, Math.min(18, asteriskVelocity + delta * 0.22));
      },
      { passive: true }
    );

    window.addEventListener(
      'resize',
      function () {
        targetFill = getTargetScrollPercent();
      },
      { passive: true }
    );

    function tickAnimations() {
      // Layered lerp for Cobalt & Cyan ambient glows
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      currentX2 += (targetX - currentX2) * 0.045;
      currentY2 += (targetY - currentY2) * 0.045;

      htmlEl.style.setProperty('--mx', currentX.toFixed(1) + 'px');
      htmlEl.style.setProperty('--my', currentY.toFixed(1) + 'px');
      htmlEl.style.setProperty('--mx2', currentX2.toFixed(1) + 'px');
      htmlEl.style.setProperty('--my2', currentY2.toFixed(1) + 'px');

      // Smooth scroll progress bar
      if (scrollFill) {
        currentFill += (targetFill - currentFill) * 0.16;
        scrollFill.style.height = currentFill.toFixed(2) + '%';
      }

      // Continuous + scroll-velocity asterisk rotation
      if (stackAsterisks.length > 0) {
        asteriskAngle = (asteriskAngle + 0.42 + asteriskVelocity) % 360;
        asteriskVelocity *= 0.92;
        if (Math.abs(asteriskVelocity) < 0.01) asteriskVelocity = 0;
        const rot = 'rotate(' + asteriskAngle.toFixed(2) + 'deg)';
        stackAsterisks.forEach(function (el) {
          el.style.transform = rot;
        });
      }

      requestAnimationFrame(tickAnimations);
    }

    requestAnimationFrame(tickAnimations);
  }

  // Hero Focus Cards 3D Perspective Tilt
  if (!prefersReducedMotion && isFinePointer) {
    document.querySelectorAll('.focus-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        const rx = (-ny * 8).toFixed(2);
        const ry = (nx * 10).toFixed(2);
        card.style.transform =
          'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateX(-8px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });

    // Selected Project Row Floating Thumbnail Vertical Parallax
    document.querySelectorAll('.selected-project-row').forEach(function (row) {
      row.addEventListener('mousemove', function (e) {
        const rect = row.getBoundingClientRect();
        const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
        row.style.setProperty('--thumb-y', offsetY.toFixed(1) + 'px');
      });

      row.addEventListener('mouseleave', function () {
        row.style.setProperty('--thumb-y', '0px');
      });
    });

    // Magnetic Effect on Primary & Secondary HUD Buttons
    document.querySelectorAll('.hud-btn-primary, .hud-btn-secondary').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        const rect = btn.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width * 0.5)) * 0.22;
        const dy = (e.clientY - (rect.top + rect.height * 0.5)) * 0.22;
        const tx = Math.max(-8, Math.min(8, dx)).toFixed(1);
        const ty = Math.max(-6, Math.min(6, dy)).toFixed(1);
        btn.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) translateY(-2px)';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  // Stack Item Icon-Color Glow Extraction
  function toRgba(colorStr, alpha) {
    const match = colorStr.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!match) return '';
    return 'rgba(' + match[1] + ', ' + match[2] + ', ' + match[3] + ', ' + alpha + ')';
  }

  document.querySelectorAll('.stack-item').forEach(function (item) {
    const icon = item.querySelector('.stack-icon');
    if (!icon || icon.classList.contains('stack-icon-neutral')) return;
    const computedColor = window.getComputedStyle(icon).color;
    const softGlow = toRgba(computedColor, 0.34);
    if (computedColor && softGlow) {
      item.style.setProperty('--item-glow', computedColor);
      item.style.setProperty('--item-glow-soft', softGlow);
    }
  });

  // Scroll-Reveal Choreography (reveals cleanly on scroll into view)
  const revealTargets = Array.from(
    document.querySelectorAll(
      '.stack-hud-tag:not(.hud-tag-compact), .hud-section-title, .hud-section-subtitle, .stack-row, .selected-project-row, .edu-hud-row, .contact-row'
    )
  );

  function setStackItemDelays(row, staggered) {
    if (!row.classList.contains('stack-row')) return;
    row.querySelectorAll('.stack-item').forEach(function (item, idx) {
      item.style.transitionDelay = staggered ? idx * 45 + 'ms' : '0ms';
    });
  }

  function revealRowElement(row, delayMs) {
    if (row._revealTimer) clearTimeout(row._revealTimer);
    row.classList.remove('is-scroll-above');
    setStackItemDelays(row, true);
    row.style.transitionDelay = delayMs + 'ms';
    row.classList.add('is-visible');

    // Clear transitionDelay after reveal so hover micro-interactions respond instantly
    row._revealTimer = setTimeout(function () {
      row.style.transitionDelay = '0ms';
      setStackItemDelays(row, false);
    }, 700 + delayMs);
  }

  if (revealTargets.length > 0) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach(function (row) {
        row.classList.add('is-visible');
        setStackItemDelays(row, false);
      });
    } else {
      const rowObserver = new IntersectionObserver(
        function (entries) {
          let batchIdx = 0;
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              revealRowElement(entry.target, batchIdx * 60);
              batchIdx += 1;
              rowObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: '0px 0px 40px 0px' }
      );

      revealTargets.forEach(function (row) {
        rowObserver.observe(row);
      });

      function revealInOrAboveViewport() {
        let batchIdx = 0;
        const thresholdY = window.innerHeight + 60;
        revealTargets.forEach(function (row) {
          if (row.classList.contains('is-visible')) return;
          const rect = row.getBoundingClientRect();
          if (rect.top < thresholdY) {
            revealRowElement(row, Math.min(batchIdx * 40, 160));
            batchIdx += 1;
            rowObserver.unobserve(row);
          }
        });
      }

      window.addEventListener('hashchange', function () {
        setTimeout(revealInOrAboveViewport, 60);
      });

      document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function () {
          setTimeout(revealInOrAboveViewport, 80);
          setTimeout(revealInOrAboveViewport, 380);
        });
      });

      window.addEventListener('scroll', revealInOrAboveViewport, { passive: true });
      revealInOrAboveViewport();
    }
  }
})();
