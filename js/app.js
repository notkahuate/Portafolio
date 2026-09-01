const translations = {
    es: {
        'nav.home': 'INICIO',
        'nav.services': 'SERVICIOS',
        'nav.projects': 'PROYECTOS',
        'nav.skills': 'SKILLS',
        'nav.experience': 'EXPERIENCIA',
        'nav.languages': 'IDIOMAS',
        'nav.education': 'ESTUDIOS',
        'nav.books': 'LIBROS',
        'nav.music': 'MÚSICA',
        'nav.sports': 'DEPORTES',
        'nav.contact': 'CONTACTO',
        'nav.talk': 'Hablemos',
        'navToggle': 'Abrir menú',
        'hero.title': 'Soy Kevin',
        'hero.badge': 'SOY DESARROLLADOR',
        'hero.lead': 'Desarrollador full stack. Construyo productos web con Vue, Nuxt, Strapi y Azure.',
        'hero.projects': 'Ver proyectos',
        'hero.contact': 'Contactar',
        'hero.statReviews': 'Reviews',
        'hero.statYears': 'Años de experiencia',
        'hero.statTech': 'Tecnologías',
        'services.title': 'Servicios que impulsan tu producto digital',
        'services.webTitle': 'Diseño Web',
        'services.webDesc': 'Diseño y desarrollo de sitios claros, responsivos y listos para convertir visitantes en clientes.',
        'services.dbTitle': 'Bases de datos',
        'services.dbDesc': 'Modelado, administración y mantenimiento de bases de datos MySQL y PostgreSQL.',
        'services.beTitle': 'Backend',
        'services.beDesc': 'APIs y lógica de servidor con JavaScript, Java, Python, PHP y Strapi.',
        'projects.title': 'MIS <span>PROYECTOS</span>',
        'projects.foodTitle': 'Website Food',
        'projects.foodDesc': 'Sitio para presentar un menú de comida, con interfaz clara y navegación responsive para móvil y escritorio.',
        'projects.hotelTitle': 'Hotel Reserve',
        'projects.hotelDesc': 'Plataforma de reserva de hoteles con detalle por propiedad, ticket único y código QR para validar la reserva.',
        'projects.view': 'Ver proyecto',
        'skills.title': 'MIS <span>SKILLS</span>',
        'experience.title': 'MI <span>EXPERIENCIA</span>',
        'experience.role': 'Desarrollador de Software',
        'experience.globantDate': 'Junio 2025 — Diciembre 2025',
        'experience.dataGlobalDate': 'Abril 2025 — Presente',
        'experience.globant': 'Desarrollo de soluciones digitales en equipo, aplicando buenas prácticas, metodologías ágiles y tecnologías web modernas.',
        'experience.dataGlobal': 'Participación en proyectos de software orientados a datos y aplicaciones web, con foco en calidad, entrega y colaboración.',
        'languages.title': 'MIS <span>IDIOMAS</span>',
        'languages.english': 'Inglés',
        'languages.englishStatus': 'Actualmente soy estudiante de inglés.',
        'languages.reading': 'Lectura',
        'languages.speaking': 'Habla',
        'languages.writing': 'Escritura',
        'languages.french': 'Francés',
        'languages.frenchStatus': 'Lo inicié recientemente. Estudio en Smart Academy.',
        'languages.frenchLevel': 'Nivel: principiante / inicio',
        'education.title': 'MIS <span>ESTUDIOS</span>',
        'education.present': 'Presente',
        'education.current': 'Actual',
        'education.utsProgram': 'Ingeniería de Sistemas',
        'education.utsDesc': 'Universidad — Unidades Tecnológicas de Santander.',
        'education.smartProgram': 'Inglés y Francés',
        'education.smartDesc': 'Formación en idiomas: inglés (estudiante actual) y francés (inicio reciente).',
        'education.campusProgram': 'Formación en desarrollo de software',
        'education.campusDesc': 'Programa de formación tecnológica en desarrollo de software.',
        'about.kicker': 'Más que código',
        'about.title': 'SOBRE <span>MÍ</span>',
        'about.lead': 'Fuera del editor también vivo entre libros, playlists y deporte. Esta es la versión de Kevin que no cabe en un commit.',
        'about.booksTag': 'Estantería',
        'about.booksSectionTitle': 'MIS <span>LIBROS</span>',
        'about.booksTitle': 'Libros que me marcan',
        'about.booksDesc': 'De magia, realismo y hábitos: mi mix de lectura favorito.',
        'about.bookCholera': 'Amor en los tiempos del cólera',
        'about.bookRichDad': 'Padre Rico, Padre Pobre',
        'about.bookHabits': 'Hábitos Atómicos',
        'about.bookAgartha': 'El Mensajero de Agartha',
        'about.bookBabilonia': 'El Hombre Más Rico de Babilonia',
        'about.bookGreg': 'El diario de Greg',
        'about.bookCien': 'Cien años de soledad',
        'about.bookPrincipito': 'El Principito',
        'about.musicTag': 'Now playing',
        'about.musicSectionTitle': 'MI <span>MÚSICA</span>',
        'about.musicTitle': 'Música en repeat',
        'about.musicDesc': 'Del dream pop a la calle: mi soundtrack del día a día.',
        'about.lanaVibe': 'Melancolía cinematográfica',
        'about.feidVibe': 'Reggaetón fresco y urbano',
        'about.omarVibe': 'Flow suave, vibes fuertes',
        'about.sportsTag': 'En movimiento',
        'about.sportsSectionTitle': 'MIS <span>DEPORTES</span>',
        'about.sportsTitle': 'Deporte que practico',
        'about.sportsDesc': 'Me gusta moverme: disciplina, adrenalina y juego en equipo.',
        'about.tennis': 'Tenis',
        'about.tennisDesc': 'Precisión, ritmo y foco en cada punto.',
        'about.boxing': 'Boxeo',
        'about.boxingDesc': 'Disciplina, potencia y mente fría.',
        'about.tableTennis': 'Tenis de mesa',
        'about.tableTennisDesc': 'Reflejos rápidos y juego mental.',
        'about.football': 'Fútbol',
        'about.footballDesc': 'Equipo, pasión y energía en la cancha.',
        'about.taekwondo': 'Taekwondo',
        'about.taekwondoDesc': 'Técnica, respeto y movimiento limpio.',
        'contact.title': 'Hablemos de proyectos',
        'contact.name': 'Nombre',
        'contact.email': 'Email',
        'contact.message': 'Tu mensaje',
        'contact.send': 'Enviar mensaje',
        'contact.info': 'Info de contacto',
        'footer.copy': '© 2026 Kevin Bueno. Todos los derechos reservados.',
        'whatsapp': 'Hola Kevin, me interesa hablar sobre un proyecto.',
        'mailSubject': 'Contacto desde portafolio - ',
        'mailBodyName': 'Nombre: ',
        'mailBodyEmail': 'Email: ',
        'themeLight': 'Cambiar a tema claro',
        'themeDark': 'Cambiar a tema oscuro',
        'langSwitch': 'Cambiar a inglés'
    },
    en: {
        'nav.home': 'HOME',
        'nav.services': 'SERVICES',
        'nav.projects': 'PROJECTS',
        'nav.skills': 'SKILLS',
        'nav.experience': 'EXPERIENCE',
        'nav.languages': 'LANGUAGES',
        'nav.education': 'STUDIES',
        'nav.books': 'BOOKS',
        'nav.music': 'MUSIC',
        'nav.sports': 'SPORTS',
        'nav.contact': 'CONTACT',
        'nav.talk': "Let's Talk",
        'navToggle': 'Open menu',
        'hero.title': "I'm Kevin",
        'hero.badge': "I'M A DEVELOPER",
        'hero.lead': 'Full stack developer. I build web products with Vue, Nuxt, Strapi and Azure.',
        'hero.projects': 'View projects',
        'hero.contact': 'Contact',
        'hero.statReviews': 'Reviews',
        'hero.statYears': 'Years Experience',
        'hero.statTech': 'Technologies',
        'services.title': 'Services that power your digital product',
        'services.webTitle': 'Web Design',
        'services.webDesc': 'Design and development of clear, responsive websites ready to convert visitors into customers.',
        'services.dbTitle': 'Databases',
        'services.dbDesc': 'Modeling, administration and maintenance of MySQL and PostgreSQL databases.',
        'services.beTitle': 'Backend',
        'services.beDesc': 'APIs and server-side logic with JavaScript, Java, Python, PHP and Strapi.',
        'projects.title': 'MY <span>PROJECTS</span>',
        'projects.foodTitle': 'Website Food',
        'projects.foodDesc': 'A site to present a food menu, with a clear UI and responsive navigation for mobile and desktop.',
        'projects.hotelTitle': 'Hotel Reserve',
        'projects.hotelDesc': 'Hotel booking platform with property details, unique tickets and QR codes to validate reservations.',
        'projects.view': 'View Project',
        'skills.title': 'MY <span>SKILLS</span>',
        'experience.title': 'MY <span>EXPERIENCE</span>',
        'experience.role': 'Software Developer',
        'experience.globantDate': 'June 2025 — December 2025',
        'experience.dataGlobalDate': 'April 2025 — Present',
        'experience.globant': 'Building digital solutions in a team, applying best practices, agile methods and modern web technologies.',
        'experience.dataGlobal': 'Contributing to data-oriented software and web applications, with focus on quality, delivery and collaboration.',
        'languages.title': 'MY <span>LANGUAGES</span>',
        'languages.english': 'English',
        'languages.englishStatus': 'I am currently an English student.',
        'languages.reading': 'Reading',
        'languages.speaking': 'Speaking',
        'languages.writing': 'Writing',
        'languages.french': 'French',
        'languages.frenchStatus': 'I recently started learning French. I study at Smart Academy.',
        'languages.frenchLevel': 'Level: beginner / just started',
        'education.title': 'MY <span>STUDIES</span>',
        'education.present': 'Present',
        'education.current': 'Current',
        'education.utsProgram': 'Systems Engineering',
        'education.utsDesc': 'University — Unidades Tecnológicas de Santander.',
        'education.smartProgram': 'English and French',
        'education.smartDesc': 'Language training: English (current student) and French (recently started).',
        'education.campusProgram': 'Software development training',
        'education.campusDesc': 'Technology training program focused on software development.',
        'about.kicker': 'More than code',
        'about.title': 'ABOUT <span>ME</span>',
        'about.lead': 'Outside the editor I live between books, playlists and sports. This is the Kevin that does not fit in a commit.',
        'about.booksTag': 'Bookshelf',
        'about.booksSectionTitle': 'MY <span>BOOKS</span>',
        'about.booksTitle': 'Books that shaped me',
        'about.booksDesc': 'From magic and realism to habits: my favorite reading mix.',
        'about.bookCholera': 'Love in the Time of Cholera',
        'about.bookRichDad': 'Rich Dad Poor Dad',
        'about.bookHabits': 'Atomic Habits',
        'about.bookAgartha': 'The Messenger of Agartha',
        'about.bookBabilonia': 'The Richest Man in Babylon',
        'about.bookGreg': 'Diary of a Wimpy Kid',
        'about.bookCien': 'One Hundred Years of Solitude',
        'about.bookPrincipito': 'The Little Prince',
        'about.musicTag': 'Now playing',
        'about.musicSectionTitle': 'MY <span>MUSIC</span>',
        'about.musicTitle': 'Music on repeat',
        'about.musicDesc': 'From dream pop to the street: my everyday soundtrack.',
        'about.lanaVibe': 'Cinematic melancholy',
        'about.feidVibe': 'Fresh urban reggaeton',
        'about.omarVibe': 'Smooth flow, strong vibes',
        'about.sportsTag': 'In motion',
        'about.sportsSectionTitle': 'MY <span>SPORTS</span>',
        'about.sportsTitle': 'Sports I practice',
        'about.sportsDesc': 'I like to move: discipline, adrenaline and teamwork.',
        'about.tennis': 'Tennis',
        'about.tennisDesc': 'Precision, rhythm and focus on every point.',
        'about.boxing': 'Boxing',
        'about.boxingDesc': 'Discipline, power and a cool mind.',
        'about.tableTennis': 'Table tennis',
        'about.tableTennisDesc': 'Fast reflexes and mental game.',
        'about.football': 'Soccer',
        'about.footballDesc': 'Teamwork, passion and energy on the field.',
        'about.taekwondo': 'Taekwondo',
        'about.taekwondoDesc': 'Technique, respect and clean movement.',
        'contact.title': "Let's Discuss Projects",
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Your message',
        'contact.send': 'Send Message',
        'contact.info': 'Contact Info',
        'footer.copy': '© 2026 Kevin Bueno. All rights reserved.',
        'whatsapp': 'Hi Kevin, I would like to talk about a project.',
        'mailSubject': 'Portfolio contact - ',
        'mailBodyName': 'Name: ',
        'mailBodyEmail': 'Email: ',
        'themeLight': 'Switch to light theme',
        'themeDark': 'Switch to dark theme',
        'langSwitch': 'Switch to Spanish'
    }
};

document.addEventListener('DOMContentLoaded', function () {
    let currentLang = localStorage.getItem('lang') || 'es';
    let currentTheme = localStorage.getItem('theme') || 'dark';
    let badgeText = translations[currentLang]['hero.badge'];
    let typeIndex = 0;
    let deleting = false;
    let typeTimeout = null;

    const textElement = document.querySelector('.dev-badge');
    const langToggle = document.getElementById('lang-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    const whatsappLink = document.getElementById('whatsapp-link');

    function applyTranslations(lang) {
        const dict = translations[lang];

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-aria');
            if (dict[key] !== undefined) {
                el.setAttribute('aria-label', dict[key]);
            }
        });

        document.documentElement.setAttribute('lang', lang);

        if (langToggle) {
            langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
            langToggle.setAttribute('aria-label', dict.langSwitch);
        }

        if (whatsappLink) {
            whatsappLink.href = 'https://wa.me/573162851135?text=' + encodeURIComponent(dict.whatsapp);
        }

        badgeText = dict['hero.badge'];
        restartTypeEffect();
        updateThemeButton();
    }

    function updateThemeButton() {
        if (!themeToggle) return;
        const isDark = currentTheme === 'dark';
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        themeToggle.setAttribute(
            'aria-label',
            translations[currentLang][isDark ? 'themeLight' : 'themeDark']
        );
    }

    function setTheme(theme) {
        currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeButton();
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        applyTranslations(lang);
    }

    function restartTypeEffect() {
        if (typeTimeout) clearTimeout(typeTimeout);
        typeIndex = 0;
        deleting = false;
        if (textElement) textElement.textContent = '';
        typeEffect();
    }

    function typeEffect() {
        if (!textElement) return;

        if (!deleting) {
            typeIndex++;
            textElement.textContent = badgeText.slice(0, typeIndex);
            if (typeIndex === badgeText.length) {
                deleting = true;
                typeTimeout = setTimeout(typeEffect, 1400);
                return;
            }
        } else {
            typeIndex--;
            textElement.textContent = badgeText.slice(0, typeIndex);
            if (typeIndex === 0) {
                deleting = false;
            }
        }

        typeTimeout = setTimeout(typeEffect, deleting ? 55 : 110);
    }

    if (langToggle) {
        langToggle.addEventListener('click', function () {
            setLanguage(currentLang === 'es' ? 'en' : 'es');
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    applyTranslations(currentLang);
    setTheme(currentTheme);

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Fullpage section navigation
    const sectionIds = [
        'home', 'services', 'projects', 'About_ME', 'experience',
        'languages', 'education', 'books', 'music', 'sports', 'contact'
    ];
    const sections = sectionIds
        .map(function (id) { return document.getElementById(id); })
        .filter(Boolean);

    sections.forEach(function (section) {
        section.classList.add('page-section');
    });

    let sectionIndex = 0;
    let isAnimating = false;
    const TRANSITION_MS = 650;
    const dots = document.querySelectorAll('.section-dots a');

    function updateActiveDot() {
        const currentId = sectionIds[sectionIndex];
        dots.forEach(function (dot) {
            dot.classList.toggle('active', dot.getAttribute('data-dot') === currentId);
        });
    }

    function triggerSectionAnim(section) {
        if (!section || !section.classList.contains('anim-section')) return;
        section.classList.remove('is-in');
        void section.offsetWidth;
        section.classList.add('is-in');
    }

    function goToSection(nextIndex, force) {
        if (nextIndex < 0 || nextIndex >= sections.length) return;
        if (!force && (nextIndex === sectionIndex || isAnimating)) return;

        const current = sections[sectionIndex];
        const next = sections[nextIndex];
        const goingDown = nextIndex > sectionIndex;

        isAnimating = true;

        current.classList.add('is-leaving');
        current.classList.remove('is-active');

        next.classList.remove('is-leaving');
        next.classList.add(goingDown ? 'is-entering-down' : 'is-entering-up');
        void next.offsetWidth;
        next.classList.add('is-active');
        next.classList.remove('is-entering-down', 'is-entering-up');

        triggerSectionAnim(next);
        sectionIndex = nextIndex;
        updateActiveDot();

        if (history.replaceState) {
            history.replaceState(null, '', '#' + sectionIds[sectionIndex]);
        }

        setTimeout(function () {
            current.classList.remove('is-leaving');
            current.scrollTop = 0;
            isAnimating = false;
        }, TRANSITION_MS);
    }

    function canScrollInside(el, deltaY) {
        let node = el;
        while (node && node !== document.body) {
            if (node.classList && node.classList.contains('page-section') && node.classList.contains('is-active')) {
                const atTop = node.scrollTop <= 0;
                const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 2;
                if (deltaY < 0 && !atTop) return true;
                if (deltaY > 0 && !atBottom) return true;
                return false;
            }
            const style = window.getComputedStyle(node);
            const overflowY = style.overflowY;
            const scrollable = (overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight + 1;
            if (scrollable) {
                const atTop = node.scrollTop <= 0;
                const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 2;
                if (deltaY < 0 && !atTop) return true;
                if (deltaY > 0 && !atBottom) return true;
            }
            node = node.parentElement;
        }
        return false;
    }

    // Initial section from hash
    const hashId = (location.hash || '#home').replace('#', '');
    const startIndex = Math.max(0, sectionIds.indexOf(hashId));
    sections.forEach(function (section, i) {
        section.classList.toggle('is-active', i === startIndex);
    });
    sectionIndex = startIndex;
    updateActiveDot();
    triggerSectionAnim(sections[sectionIndex]);

    let wheelLock = false;
    window.addEventListener('wheel', function (event) {
        if (Math.abs(event.deltaY) < 12) return;
        if (canScrollInside(event.target, event.deltaY)) return;

        event.preventDefault();
        if (wheelLock || isAnimating) return;

        wheelLock = true;
        if (event.deltaY > 0) goToSection(sectionIndex + 1);
        else goToSection(sectionIndex - 1);

        setTimeout(function () { wheelLock = false; }, TRANSITION_MS);
    }, { passive: false });

    let touchStartY = 0;
    window.addEventListener('touchstart', function (event) {
        touchStartY = event.changedTouches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', function (event) {
        const diff = touchStartY - event.changedTouches[0].clientY;
        if (Math.abs(diff) < 55) return;
        if (canScrollInside(event.target, diff)) return;
        if (isAnimating) return;
        if (diff > 0) goToSection(sectionIndex + 1);
        else goToSection(sectionIndex - 1);
    }, { passive: true });

    function navigateFromHash(href) {
        const id = href.replace('#', '');
        const idx = sectionIds.indexOf(id);
        if (idx >= 0) goToSection(idx);
    }

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navigateFromHash(link.getAttribute('href') || '');
            });
        });
    }

    dots.forEach(function (dot) {
        dot.addEventListener('click', function (event) {
            event.preventDefault();
            navigateFromHash(dot.getAttribute('href') || '');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        if (link.closest('.nav-links') || link.closest('.section-dots')) return;
        link.addEventListener('click', function (event) {
            const href = link.getAttribute('href') || '';
            if (sectionIds.indexOf(href.replace('#', '')) >= 0) {
                event.preventDefault();
                navigateFromHash(href);
            }
        });
    });

    window.addEventListener('keydown', function (event) {
        if (isAnimating) return;
        const tag = (event.target && event.target.tagName) || '';
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        if (event.key === 'ArrowDown' || event.key === 'PageDown') {
            event.preventDefault();
            goToSection(sectionIndex + 1);
        } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
            event.preventDefault();
            goToSection(sectionIndex - 1);
        } else if (event.key === 'Home') {
            event.preventDefault();
            goToSection(0);
        } else if (event.key === 'End') {
            event.preventDefault();
            goToSection(sections.length - 1);
        }
    });

    // Stagger delays for skills orbit
    document.querySelectorAll('.about_me .skill-item').forEach(function (el, index) {
        el.style.animationDelay = (0.05 + index * 0.05) + 's';
    });

    // Sports arena featured rotator
    const sportsData = [
        {
            img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1400&q=80',
            titleKey: 'about.tennis',
            descKey: 'about.tennisDesc'
        },
        {
            img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1400&q=80',
            titleKey: 'about.boxing',
            descKey: 'about.boxingDesc'
        },
        {
            img: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=1400&q=80',
            titleKey: 'about.tableTennis',
            descKey: 'about.tableTennisDesc'
        },
        {
            img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80',
            titleKey: 'about.football',
            descKey: 'about.footballDesc'
        },
        {
            img: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1400&q=80',
            titleKey: 'about.taekwondo',
            descKey: 'about.taekwondoDesc'
        }
    ];

    const sportFeatured = document.getElementById('sport-featured');
    const sportFeaturedImg = document.getElementById('sport-featured-img');
    const sportFeaturedTitle = document.getElementById('sport-featured-title');
    const sportFeaturedDesc = document.getElementById('sport-featured-desc');
    const sportFeaturedIndex = document.getElementById('sport-featured-index');
    const sportThumbs = Array.from(document.querySelectorAll('.sport-thumb'));
    let sportIndex = 0;
    let sportTimer = null;

    function setSport(index) {
        if (!sportFeatured || !sportsData[index]) return;
        sportIndex = index;
        const sport = sportsData[index];
        const dict = translations[currentLang];

        sportFeatured.classList.remove('is-switching');
        void sportFeatured.offsetWidth;
        sportFeatured.classList.add('is-switching');

        sportFeaturedImg.src = sport.img;
        sportFeaturedImg.alt = dict[sport.titleKey] || '';
        sportFeaturedTitle.textContent = dict[sport.titleKey] || '';
        sportFeaturedDesc.textContent = dict[sport.descKey] || '';
        sportFeaturedIndex.textContent = String(index + 1).padStart(2, '0');

        sportThumbs.forEach(function (thumb, i) {
            thumb.classList.toggle('is-active', i === index);
        });
    }

    function restartSportTimer() {
        if (sportTimer) clearInterval(sportTimer);
        sportTimer = setInterval(function () {
            setSport((sportIndex + 1) % sportsData.length);
        }, 4200);
    }

    if (sportFeatured && sportThumbs.length) {
        sportThumbs.forEach(function (thumb) {
            thumb.addEventListener('click', function () {
                const idx = Number(thumb.getAttribute('data-sport'));
                setSport(idx);
                restartSportTimer();
            });
        });
        restartSportTimer();

        if (langToggle) {
            langToggle.addEventListener('click', function () {
                setTimeout(function () {
                    setSport(sportIndex);
                }, 20);
            });
        }
    }

    // Book cover carousel
    const bookCovers = Array.from(document.querySelectorAll('.book-cover'));
    const bookDots = document.getElementById('book-dots');
    const bookPrev = document.querySelector('.book-prev');
    const bookNext = document.querySelector('.book-next');
    let bookIndex = 0;
    let bookTimer = null;

    function renderBookDots() {
        if (!bookDots) return;
        bookDots.innerHTML = '';
        bookCovers.forEach(function (_, i) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.setAttribute('aria-label', 'Libro ' + (i + 1));
            if (i === bookIndex) btn.classList.add('active');
            btn.addEventListener('click', function () {
                bookIndex = i;
                updateBooks();
                restartBookTimer();
            });
            bookDots.appendChild(btn);
        });
    }

    function updateBooks() {
        const total = bookCovers.length;
        bookCovers.forEach(function (cover, i) {
            cover.classList.remove('is-active', 'is-prev', 'is-next');
            if (i === bookIndex) {
                cover.classList.add('is-active');
            } else if (i === (bookIndex - 1 + total) % total) {
                cover.classList.add('is-prev');
            } else if (i === (bookIndex + 1) % total) {
                cover.classList.add('is-next');
            }
        });
        renderBookDots();
    }

    function restartBookTimer() {
        if (bookTimer) clearInterval(bookTimer);
        bookTimer = setInterval(function () {
            bookIndex = (bookIndex + 1) % bookCovers.length;
            updateBooks();
        }, 3200);
    }

    if (bookCovers.length) {
        updateBooks();
        restartBookTimer();
        if (bookPrev) {
            bookPrev.addEventListener('click', function () {
                bookIndex = (bookIndex - 1 + bookCovers.length) % bookCovers.length;
                updateBooks();
                restartBookTimer();
            });
        }
        if (bookNext) {
            bookNext.addEventListener('click', function () {
                bookIndex = (bookIndex + 1) % bookCovers.length;
                updateBooks();
                restartBookTimer();
            });
        }
    }

    // Vinyl player toggle
    document.querySelectorAll('.vinyl-item').forEach(function (item) {
        item.addEventListener('click', function () {
            document.querySelectorAll('.vinyl-item').forEach(function (el) {
                el.classList.remove('is-playing');
            });
            item.classList.add('is-playing');
        });
    });

    const image = document.querySelector('.hero-image img');
    if (image) {
        const originalSrc = image.src;
        const newSrc = 'img/WhatsApp Image 2025-05-09 at 1.12.06 PM.jpeg';

        image.addEventListener('mouseover', function () {
            image.src = newSrc;
        });

        image.addEventListener('mouseout', function () {
            image.src = originalSrc;
        });
    }

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const dict = translations[currentLang];
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();
            const subject = encodeURIComponent(dict.mailSubject + name);
            const body = encodeURIComponent(dict.mailBodyName + name + '\n' + dict.mailBodyEmail + email + '\n\n' + message);
            window.location.href = 'mailto:ksbuenors@gmail.com?subject=' + subject + '&body=' + body;
        });
    }
});
