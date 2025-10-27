// Assessment Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const assessmentForm = document.getElementById('assessmentForm');
    const assessmentResult = document.getElementById('assessmentResult');
    const resultContent = document.getElementById('resultContent');

    if (assessmentForm) {
        assessmentForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const q1 = parseInt(document.querySelector('input[name="q1"]:checked')?.value || 0);
            const q2 = parseInt(document.querySelector('input[name="q2"]:checked')?.value || 0);
            const q3 = parseInt(document.querySelector('input[name="q3"]:checked')?.value || 0);

            // Calculate score
            const totalScore = q1 + q2 + q3;

            // Generate result
            let resultHTML = '';
            let resultClass = '';

            if (totalScore <= 3) {
                resultHTML = `
                    <div class="alert alert-success" role="alert">
                        <h5 class="alert-heading">¡Excelente! 😊</h5>
                        <p>Tu bienestar emocional parece estar en buen estado. Mantén estos hábitos saludables y recuerda que siempre puedes buscar apoyo si lo necesitas.</p>
                    </div>
                `;
            } else if (totalScore <= 6) {
                resultHTML = `
                    <div class="alert alert-info" role="alert">
                        <h5 class="alert-heading">Algo que considerar 🤔</h5>
                        <p>Parece que has experimentado algunos momentos de estrés o dificultad. Podría ser beneficioso hablar con un profesional para aprender estrategias de manejo del estrés.</p>
                    </div>
                `;
            } else if (totalScore <= 9) {
                resultHTML = `
                    <div class="alert alert-warning" role="alert">
                        <h5 class="alert-heading">Te recomendamos apoyo profesional ⚠️</h5>
                        <p>Los síntomas que describes sugieren que podrías beneficiarte de una sesión con un psicólogo. Nuestro equipo está aquí para ayudarte a sentirte mejor.</p>
                    </div>
                `;
            } else {
                resultHTML = `
                    <div class="alert alert-danger" role="alert">
                        <h5 class="alert-heading">¡Busca ayuda profesional ahora! 🆘</h5>
                        <p>Los síntomas que describes indican que necesitas apoyo profesional urgente. Por favor, contacta con uno de nuestros psicólogos hoy mismo. Tu bienestar es importante.</p>
                    </div>
                `;
            }

            // Hide form and show result
            assessmentForm.style.display = 'none';
            resultContent.innerHTML = resultHTML;
            assessmentResult.style.display = 'block';

            // Scroll to result
            resultContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card-custom, .service-card, .trust-card, .unique-feature, .plan-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Mobile menu close on link click
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Add active class to navbar links based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(139, 94, 60, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(amount);
}

// Add to cart or booking functionality (example)
function bookSession(planType) {
    console.log('Booking session for plan:', planType);
    // This would typically send data to a backend or redirect to a booking page
}

// Contact form handler (if needed)
function handleContactForm(event) {
    event.preventDefault();
    // Handle form submission
    console.log('Contact form submitted');
}

// Add active state to nav links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Lazy load images (optional enhancement)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Validate email function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add form validation
function validateForm(formData) {
    const errors = [];

    if (!formData.name || formData.name.trim() === '') {
        errors.push('El nombre es requerido');
    }

    if (!formData.email || !isValidEmail(formData.email)) {
        errors.push('El email es inválido');
    }

    if (!formData.message || formData.message.trim() === '') {
        errors.push('El mensaje es requerido');
    }

    return errors;
}

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: debounce scroll listener
const handleScroll = debounce(() => {
    // Scroll event handler
}, 100);

window.addEventListener('scroll', handleScroll);

// Add keyboard accessibility
document.addEventListener('keydown', function(event) {
    // Close modal on Escape key
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.hide();
            }
        });
    }
});

// Log page load time
window.addEventListener('load', function() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
});



// Load Psychologists
document.addEventListener('DOMContentLoaded', function() {
    loadPsychologists();
});

function loadPsychologists() {
    fetch('/musical-octo-telegram/psychologists.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('psychologists-container');
            container.innerHTML = '';

            data.forEach(psychologist => {
                const psychologistCard = createPsychologistCard(psychologist);
                container.appendChild(psychologistCard);
            });

            // Observe psychologist cards for animation
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            });

            document.querySelectorAll('.psychologist-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        })
        .catch(error => console.error('Error loading psychologists:', error));
}

function createPsychologistCard(psychologist) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';

    const availabilityHTML = Object.entries(psychologist.availability)
        .map(([day, time]) => `
            <div class="availability-item">
                <span class="availability-day">${day}:</span>
                <span class="availability-time">${time}</span>
            </div>
        `)
        .join('');

    col.innerHTML = `
        <div class="psychologist-card">
            <img src="${psychologist.photo}" alt="${psychologist.name}" class="psychologist-photo">
            <h3 class="psychologist-name">${psychologist.name}</h3>
            <p class="psychologist-specialty">${psychologist.specialty}</p>
            <p class="psychologist-experience">${psychologist.experience}</p>
            
            <div class="psychologist-availability">
                <div class="availability-title">Disponibilidad:</div>
                ${availabilityHTML}
            </div>
            
            <div class="psychologist-contact">
                <a href="https://wa.me/573150835253?text=Hola%20BullyGuard%2C%20me%20gustaría%20agendar%20una%20sesión%20con%20${psychologist.name}" 
                   class="btn btn-custom-primary w-100" target="_blank">
                    💬 Agendar sesión con ${psychologist.name.split(' ')[0]}
                </a>
            </div>
        </div>
    `;

    return col;
}

