const translations = {
    es: {
        'nav.home': 'INICIO',
        'nav.services': 'SERVICIOS',
        'nav.projects': 'PROYECTOS',
        'nav.skills': 'SKILLS',
        'nav.experience': 'EXPERIENCIA',
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
        'experience.globant': 'Desarrollo de soluciones digitales en equipo, aplicando buenas prácticas, metodologías ágiles y tecnologías web modernas.',
        'experience.dataGlobal': 'Participación en proyectos de software orientados a datos y aplicaciones web, con foco en calidad, entrega y colaboración.',
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
        'experience.globant': 'Building digital solutions in a team, applying best practices, agile methods and modern web technologies.',
        'experience.dataGlobal': 'Contributing to data-oriented software and web applications, with focus on quality, delivery and collaboration.',
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

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.project-card, .about_me .skill-item').forEach(function (el) {
        revealObserver.observe(el);
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
