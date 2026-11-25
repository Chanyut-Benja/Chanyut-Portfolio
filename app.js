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
      roleBadge: 'Game Development • Team of 6',
      badgeClass: 'badge-hybrid',
      imageSrc: null,
      imageAlt: 'Subject N: Lab Breakout Gameplay Screenshot',
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
      metaThemeColor.setAttribute('content', normalized === 'dark' ? '#0B0F19' : '#F8FAFC');
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
        // Force reflow for crisp staggered entrance animation
        void card.offsetWidth;
        card.style.animationDelay = visibleIndex * 55 + 'ms';
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

  /* ========================================================================
     4. SLIDE-OVER DRAWER FOR DEEP-DIVE PROJECT DETAILS
     ======================================================================== */
  const drawer = document.getElementById('project-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const drawerBody = document.getElementById('drawer-body');
  const drawerCloseBtn = document.getElementById('drawer-close');
  const drawerCloseBottomBtn = document.getElementById('drawer-close-bottom');
  const drawerPrevBtn = document.getElementById('drawer-prev');
  const drawerNextBtn = document.getElementById('drawer-next');

  // Dynamic Drawer Content Nodes
  const drawerRoleBadge = document.getElementById('drawer-role-badge');
  const drawerIndexBadge = document.getElementById('drawer-index-badge');
  const drawerBanner = document.getElementById('drawer-banner');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerSubtitle = document.getElementById('drawer-subtitle');
  const drawerFacts = document.getElementById('drawer-facts');
  const drawerProblem = document.getElementById('drawer-problem');
  const drawerArchHeading = document.getElementById('drawer-arch-heading');
  const drawerArchIntro = document.getElementById('drawer-architecture-intro');
  const drawerFlowSteps = document.getElementById('drawer-flow-steps');
  const drawerHighlights = document.getElementById('drawer-highlights');
  const drawerTechTags = document.getElementById('drawer-tech-tags');
  const drawerGithubBtn = document.getElementById('drawer-github-btn');

  let activeProjectId = null;
  let lastFocusedTrigger = null;
  let closeTimer = null;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderDrawerContent(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    activeProjectId = projectId;

    drawerRoleBadge.className = 'role-badge ' + data.badgeClass;
    drawerRoleBadge.textContent = data.roleBadge;
    drawerIndexBadge.textContent = data.indexLabel;

    const screenshotMarkup = data.imageSrc
      ? '<div class="drawer-screenshot-frame">' +
        '<img src="' + escapeHtml(data.imageSrc) + '" alt="' + escapeHtml(data.imageAlt || data.title) + '" class="drawer-screenshot-img" loading="lazy" />' +
        '</div>'
      : '';

    drawerBanner.innerHTML =
      screenshotMarkup +
      '<span class="drawer-banner-kicker">' + escapeHtml(data.bannerKicker) + '</span>' +
      '<p class="drawer-banner-summary">' + escapeHtml(data.bannerSummary) + '</p>';

    drawerTitle.textContent = data.title;
    drawerSubtitle.textContent = data.subtitle;

    drawerFacts.innerHTML = data.facts
      .map(function (fact) {
        return (
          '<div class="fact-box">' +
          '<span class="fact-label">' + escapeHtml(fact.label) + '</span>' +
          '<span class="fact-value">' + escapeHtml(fact.value) + '</span>' +
          '</div>'
        );
      })
      .join('');

    drawerProblem.textContent = data.problem;
    drawerArchHeading.textContent = data.archHeading;
    drawerArchIntro.textContent = data.architectureIntro;

    drawerFlowSteps.innerHTML = data.flowSteps
      .map(function (step) {
        return (
          '<div class="flow-step-card">' +
          '<span class="flow-step-tag">' + escapeHtml(step.tag) + '</span>' +
          '<div class="flow-step-title">' + escapeHtml(step.title) + '</div>' +
          '<p class="flow-step-desc">' + escapeHtml(step.desc) + '</p>' +
          '</div>'
        );
      })
      .join('');

    drawerHighlights.innerHTML = data.highlights
      .map(function (item) {
        return '<li>' + escapeHtml(item) + '</li>';
      })
      .join('');

    drawerTechTags.innerHTML = data.techStack
      .map(function (tech) {
        return '<span class="mono-tag">' + escapeHtml(tech) + '</span>';
      })
      .join('');

    drawerGithubBtn.setAttribute('href', data.githubUrl);

    if (drawerBody) {
      drawerBody.scrollTop = 0;
    }
  }

  function openDrawer(projectId, triggerEl) {
    if (!drawer || !backdrop || !PROJECTS_DATA[projectId]) return;

    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }

    lastFocusedTrigger = triggerEl || document.activeElement;
    renderDrawerContent(projectId);

    backdrop.hidden = false;
    drawer.hidden = false;
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');

    requestAnimationFrame(function () {
      backdrop.classList.add('is-visible');
      drawer.classList.add('is-open');
      if (drawerCloseBtn) {
        drawerCloseBtn.focus();
      }
    });
  }

  function closeDrawer() {
    if (!drawer || !backdrop || drawer.hidden) return;

    backdrop.classList.remove('is-visible');
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');

    closeTimer = setTimeout(function () {
      backdrop.hidden = true;
      drawer.hidden = true;
      activeProjectId = null;
      if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
        lastFocusedTrigger.focus();
      }
    }, 320);
  }

  function navigateDrawer(direction) {
    if (!activeProjectId) return;
    const idx = PROJECT_ORDER.indexOf(activeProjectId);
    if (idx === -1) return;
    const nextIdx = (idx + direction + PROJECT_ORDER.length) % PROJECT_ORDER.length;
    renderDrawerContent(PROJECT_ORDER[nextIdx]);
  }

  // Bind Project Card Click & Keyboard Activation
  projectCards.forEach(function (card) {
    card.addEventListener('click', function (event) {
      // Allow direct clicks on the GitHub repository badge link without opening the drawer
      if (event.target.closest('a')) {
        return;
      }
      const projectId = card.dataset.projectId;
      openDrawer(projectId, card);
    });

    card.addEventListener('keydown', function (event) {
      if (event.target.closest('a')) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const projectId = card.dataset.projectId;
        openDrawer(projectId, card);
      }
    });
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }
  if (drawerCloseBottomBtn) {
    drawerCloseBottomBtn.addEventListener('click', closeDrawer);
  }
  if (drawerPrevBtn) {
    drawerPrevBtn.addEventListener('click', function () {
      navigateDrawer(-1);
    });
  }
  if (drawerNextBtn) {
    drawerNextBtn.addEventListener('click', function () {
      navigateDrawer(1);
    });
  }

  document.addEventListener('keydown', function (event) {
    if (!drawer || drawer.hidden) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeDrawer();
    } else if (event.key === 'ArrowLeft') {
      navigateDrawer(-1);
    } else if (event.key === 'ArrowRight') {
      navigateDrawer(1);
    }
  });

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
     6. BENTO CARD SUBTLE CURSOR SPOTLIGHT TRACKING
     ======================================================================== */
  const allBentoCards = document.querySelectorAll('.bento-card');
  allBentoCards.forEach(function (card) {
    card.addEventListener('mousemove', function (event) {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });
})();
