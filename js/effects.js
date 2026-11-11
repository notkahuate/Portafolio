// Motion layer: preloader, hero intro, cursor/card effects and section HUD.
// Listens to the `portfolio:section` and `portfolio:lang` events dispatched by app.js.
document.addEventListener('DOMContentLoaded', function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const body = document.body;

    // Hero title split into animated letters
    const heroTitle = document.querySelector('.hero-text h1');

    function splitHeroTitle() {
        if (!heroTitle) return;
        const text = heroTitle.textContent.trim();
        const words = text.split(/\s+/);
        let charIndex = 0;
        heroTitle.setAttribute('aria-label', text);
        heroTitle.innerHTML = words.map(function (word, w) {
            const chars = Array.from(word).map(function (ch) {
                const html = '<span class="char" aria-hidden="true"><span style="--i:' + charIndex + '">' + ch + '</span></span>';
                charIndex++;
                return html;
            }).join('');
            const accent = w === words.length - 1 && words.length > 1 ? ' word-accent' : '';
            return '<span class="word' + accent + '">' + chars + '</span>';
        }).join(' ');
    }

    splitHeroTitle();
    document.addEventListener('portfolio:lang', splitHeroTitle);

    // Stat counters
    const counters = Array.from(document.querySelectorAll('.count[data-count]'));

    function runCounters() {
        if (reduceMotion) return;
        counters.forEach(function (el, i) {
            const target = Number(el.getAttribute('data-count')) || 0;
            const duration = 1400;
            const delay = 900 + i * 120;
            const start = performance.now() + delay;
            el.textContent = '0';
            function tick(now) {
                const t = Math.min(1, Math.max(0, (now - start) / duration));
                const eased = 1 - Math.pow(1 - t, 4);
                el.textContent = String(Math.round(target * eased));
                if (t < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    }

    // Marquee built from the skills list so it never drifts from the real data
    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack) {
        const names = Array.from(document.querySelectorAll('.skill-name')).map(function (el) {
            return el.textContent.trim();
        });
        const row = names.map(function (n) { return '<span>' + n + '</span>'; }).join('');
        marqueeTrack.innerHTML = row + row;
    }

    // Hero photos: alternate between the two pictures; a click swaps right away
    const heroPhotos = document.querySelector('.hero-photos');
    const heroPhotoList = heroPhotos ? Array.from(heroPhotos.querySelectorAll('.hero-photo')) : [];
    let heroPhotoIndex = 0;
    let heroPhotoTimer = null;

    function showHeroPhoto(index) {
        heroPhotoIndex = index % heroPhotoList.length;
        heroPhotoList.forEach(function (img, i) {
            img.classList.toggle('is-active', i === heroPhotoIndex);
        });
    }

    function restartHeroPhotoTimer() {
        if (heroPhotoTimer) clearInterval(heroPhotoTimer);
        heroPhotoTimer = setInterval(function () {
            showHeroPhoto(heroPhotoIndex + 1);
        }, 4500);
    }

    if (heroPhotoList.length > 1) {
        restartHeroPhotoTimer();
        heroPhotos.addEventListener('click', function () {
            showHeroPhoto(heroPhotoIndex + 1);
            restartHeroPhotoTimer();
        });
    }

    // Preloader (once per browser session)
    const preloader = document.querySelector('.preloader');
    const preloaderCount = document.querySelector('.preloader-count');
    const preloaderBar = document.querySelector('.preloader-bar');
    let seenIntro = false;
    try { seenIntro = sessionStorage.getItem('introSeen') === '1'; } catch (e) { /* storage blocked */ }

    function reveal() {
        if (preloader) preloader.classList.add('is-done');
        body.classList.add('is-ready');
        runCounters();
        try { sessionStorage.setItem('introSeen', '1'); } catch (e) { /* storage blocked */ }
    }

    if (!preloader || reduceMotion || seenIntro) {
        if (preloader) preloader.style.display = 'none';
        requestAnimationFrame(reveal);
    } else {
        const duration = 1300;
        const startTime = performance.now();
        (function step(now) {
            const t = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const pct = Math.round(eased * 100);
            if (preloaderCount) preloaderCount.textContent = String(pct);
            if (preloaderBar) preloaderBar.style.setProperty('--p', pct);
            if (t < 1) requestAnimationFrame(step);
            else setTimeout(reveal, 180);
        })(startTime);
    }

    // Nav labels for the HUD, dot tooltips and staggered mobile menu
    const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));
    const sectionDots = Array.from(document.querySelectorAll('.section-dots a'));

    function labelFor(id) {
        const link = navAnchors.find(function (a) { return a.getAttribute('href') === '#' + id; });
        return link ? link.textContent.trim() : id;
    }

    function syncLabels() {
        sectionDots.forEach(function (dot) {
            dot.setAttribute('data-label', labelFor(dot.getAttribute('data-dot')));
        });
    }

    navAnchors.forEach(function (a, i) { a.style.setProperty('--i', i); });
    syncLabels();
    document.addEventListener('portfolio:lang', function () {
        syncLabels();
        if (lastSection) updateHud(lastSection, false);
    });

    // Section HUD, progress bar, sweep and current nav link
    const hudIndex = document.querySelector('.hud-index');
    const hudTotal = document.querySelector('.hud-total');
    const hudName = document.querySelector('.hud-name');
    const hudBar = document.querySelector('.hud-bar');
    const progress = document.querySelector('.scroll-progress');
    const wipe = document.querySelector('.section-wipe');
    let lastSection = null;
    let firstAnnouncement = true;

    function restartAnim(el, cls) {
        if (!el) return;
        el.classList.remove(cls);
        void el.offsetWidth;
        el.classList.add(cls);
    }

    function updateHud(detail, animate) {
        const ratio = detail.total > 1 ? detail.index / (detail.total - 1) : 0;
        if (hudIndex) hudIndex.textContent = String(detail.index + 1).padStart(2, '0');
        if (hudTotal) hudTotal.textContent = String(detail.total).padStart(2, '0');
        if (hudName) hudName.textContent = labelFor(detail.id);
        if (hudBar) hudBar.style.setProperty('--progress', ratio);
        if (progress) progress.style.setProperty('--progress', ratio);
        if (animate) {
            restartAnim(hudIndex, 'is-roll');
            restartAnim(hudName, 'is-roll');
        }
    }

    document.addEventListener('portfolio:section', function (event) {
        const detail = event.detail;
        lastSection = detail;
        body.setAttribute('data-section', detail.id);
        updateHud(detail, !firstAnnouncement);

        navAnchors.forEach(function (a) {
            a.classList.toggle('is-current', a.getAttribute('href') === '#' + detail.id);
        });

        if (!firstAnnouncement && wipe && !reduceMotion) {
            wipe.classList.remove('is-down', 'is-up');
            void wipe.offsetWidth;
            wipe.classList.add(detail.down ? 'is-down' : 'is-up');
        }

        if (!firstAnnouncement && detail.id === 'home') runCounters();
        firstAnnouncement = false;
    });

    if (reduceMotion || !finePointer) return;

    // Cursor spotlight (lerped for a soft trail)
    const spotlight = document.querySelector('.fx-spotlight');
    let targetX = innerWidth / 2;
    let targetY = innerHeight / 2;
    let curX = targetX;
    let curY = targetY;

    window.addEventListener('pointermove', function (event) {
        targetX = event.clientX;
        targetY = event.clientY;
        if (spotlight) spotlight.classList.add('is-on');
    }, { passive: true });

    document.addEventListener('pointerleave', function () {
        if (spotlight) spotlight.classList.remove('is-on');
    });

    (function loop() {
        curX += (targetX - curX) * 0.12;
        curY += (targetY - curY) * 0.12;
        if (spotlight) {
            spotlight.style.setProperty('--sx', curX.toFixed(1) + 'px');
            spotlight.style.setProperty('--sy', curY.toFixed(1) + 'px');
        }
        requestAnimationFrame(loop);
    })();

    // Cards: spotlight position + 3D tilt via the `rotate` property
    // (entrance animations own `transform` with fill-mode forwards, so we stay off it)
    const cards = document.querySelectorAll(
        '.service-card, .experience-card, .education-card, .language-card, .about_me .skill-item'
    );
    const TILT_DEG = 7;

    cards.forEach(function (card) {
        card.classList.add('fx-card');
        const tilt = !card.classList.contains('skill-item');

        card.addEventListener('pointermove', function (event) {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            card.style.setProperty('--mx', x + 'px');
            card.style.setProperty('--my', y + 'px');
            if (!tilt) return;
            const dx = (x / rect.width) * 2 - 1;
            const dy = (y / rect.height) * 2 - 1;
            const angle = Math.min(1, Math.hypot(dx, dy)) * TILT_DEG;
            card.style.rotate = (-dy).toFixed(3) + ' ' + dx.toFixed(3) + ' 0 ' + angle.toFixed(2) + 'deg';
        });

        card.addEventListener('pointerleave', function () {
            card.style.rotate = '';
        });
    });

    // Hero photo tilt
    const heroFrame = document.querySelector('.hero-frame');
    const heroPhoto = document.querySelector('.hero-photos');
    if (heroFrame && heroPhoto) {
        heroFrame.addEventListener('pointermove', function (event) {
            const rect = heroFrame.getBoundingClientRect();
            const dx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            const dy = ((event.clientY - rect.top) / rect.height) * 2 - 1;
            const angle = Math.min(1, Math.hypot(dx, dy)) * 10;
            heroPhoto.style.rotate = (-dy).toFixed(3) + ' ' + dx.toFixed(3) + ' 0 ' + angle.toFixed(2) + 'deg';
        });
        heroFrame.addEventListener('pointerleave', function () {
            heroPhoto.style.rotate = '';
        });
        heroFrame.style.perspective = '900px';
    }

    // Magnetic buttons
    const magnets = document.querySelectorAll(
        '.btn-primary, .btn-secondary, .lets-talk, .control-btn, .project-nav, .book-nav, .contact-form button'
    );
    magnets.forEach(function (el) {
        el.classList.add('is-magnetic');
        el.addEventListener('pointermove', function (event) {
            const rect = el.getBoundingClientRect();
            const dx = event.clientX - (rect.left + rect.width / 2);
            const dy = event.clientY - (rect.top + rect.height / 2);
            el.style.translate = (dx * 0.25).toFixed(1) + 'px ' + (dy * 0.35).toFixed(1) + 'px';
        });
        el.addEventListener('pointerleave', function () {
            el.style.translate = '';
        });
    });
});
