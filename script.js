document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const icon = themeToggleBtn.querySelector('i');

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateIcon(theme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            contactForm.reset();
        });
    }
});

// FUNCTION UNTUK KLIK SUIS PILL COLIN MOY
document.addEventListener('DOMContentLoaded', () => {
    const pillSwitch = document.querySelector('.moy-pill-switch');
    const switchCircle = document.querySelector('.moy-switch-circle');

    if (pillSwitch && switchCircle) {
        pillSwitch.addEventListener('click', () => {
            // Semak posisi bulatan. Jika di kanan, bawa ke kiri. Jika kiri, bawa ke kanan.
            if (switchCircle.style.left === '15px') {
                switchCircle.style.left = '';
                switchCircle.style.right = '15px';
            } else {
                switchCircle.style.right = '';
                switchCircle.style.left = '15px';
            }
        });
    }
});