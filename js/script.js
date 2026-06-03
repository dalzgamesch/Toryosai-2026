document.addEventListener('DOMContentLoaded', () => {
    
    // --- Loading Animation ---
    const loading = document.getElementById('loading');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loading.classList.add('is-hidden');
        }, 1200);
    });

    // --- Hamburger Menu ---
    const hamburger = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('is-active');
                nav.classList.remove('is-active');
            });
        });
    }

    // --- Text Split Animation (1文字ずつ) ---
    const splitTargets = document.querySelectorAll('.js-split-text');
    splitTargets.forEach(target => {
        const text = target.textContent;
        target.textContent = ''; 
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; 
            span.style.transitionDelay = `${index * 0.05}s`;
            target.appendChild(span);
        });
    });

    // --- Intersection Observer (スクロール連動アニメーション) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.js-split-text, .anim-fade-up').forEach(el => {
        observer.observe(el);
    });
});
