/* =============================================
   PAF-IAST UNIVERSITY - JAVASCRIPT
   ============================================= */

'use strict';

// =============================================
// 1. MOBILE NAVIGATION TOGGLE
// =============================================
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
        
        // Animate bars
        const bars = this.querySelectorAll('.bar');
        if (this.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translateY(10px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            bars.forEach(bar => {
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        }
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            navToggle.classList.remove('active');
            
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        });
    });
}

// =============================================
// 2. SMOOTH SCROLLING
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                const headerHeight = 155;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// =============================================
// 3. ACTIVE NAVIGATION HIGHLIGHTING
// =============================================
const allSections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollPosition = window.pageYOffset;
    
    allSections.forEach(section => {
        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// =============================================
// 4. HERO IMAGE SLIDER
// =============================================
class ImageSlider {
    constructor() {
        this.slides = document.querySelectorAll('.hero-image-slide');
        this.dots = document.querySelectorAll('.pagination-dot');
        this.prevButton = document.getElementById('slidePrev');
        this.nextButton = document.getElementById('slideNext');
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        
        this.initialize();
    }
    
    initialize() {
        if (this.slides.length === 0) return;
        
        // Button events
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.moveNext());
        }
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.movePrev());
        }
        
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Auto play
        this.startAutoPlay();
        
        // Pause on hover
        const heroSection = document.querySelector('.hero-banner');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => this.pauseAutoPlay());
            heroSection.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }
    
    goToSlide(index) {
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        this.currentIndex = index;
        
        if (this.currentIndex >= this.slides.length) {
            this.currentIndex = 0;
        }
        if (this.currentIndex < 0) {
            this.currentIndex = this.slides.length - 1;
        }
        
        this.slides[this.currentIndex].classList.add('active');
        this.dots[this.currentIndex].classList.add('active');
    }
    
    moveNext() {
        this.goToSlide(this.currentIndex + 1);
        this.resetAutoPlay();
    }
    
    movePrev() {
        this.goToSlide(this.currentIndex - 1);
        this.resetAutoPlay();
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.moveNext();
        }, 5000); // Restored to 5000ms (5 seconds) for a comfortable reading pace
    }
    
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
    
    resetAutoPlay() {
        this.pauseAutoPlay();
        this.startAutoPlay();
    }
}

// Initialize slider
const imageSlider = new ImageSlider();

// =============================================
// 5. STICKY HEADER EFFECTS
// =============================================
const mainHeader = document.getElementById('mainHeader');
let previousScroll = 0;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 120) {
        mainHeader.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.25)';
    } else {
        mainHeader.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    }
    
    previousScroll = currentScroll;
});

// =============================================
// 6. BACK TO TOP BUTTON
// =============================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 350) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =============================================
// 7. SCROLL REVEAL ANIMATIONS
// =============================================
function revealElements() {
    const revealElements = document.querySelectorAll('.department-box, .faculty-card, .news-article-card, .goal-item, .resource-showcase-item, .admission-card, .mv-card, .innovation-feature-box');
    
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for reveal elements
document.querySelectorAll('.department-box, .faculty-card, .news-article-card, .goal-item, .resource-showcase-item, .admission-card, .mv-card, .innovation-feature-box').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// =============================================
// 8. EMAILJS CONFIGURATION
// =============================================
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

const mainContactForm = document.getElementById('mainContactForm');
const formSubmitBtn = document.getElementById('formSubmitBtn');
const formStatusMessage = document.getElementById('formStatusMessage');

if (mainContactForm) {
    mainContactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const userName = document.getElementById('userName').value.trim();
        const userEmail = document.getElementById('userEmail').value.trim();
        const userPhone = document.getElementById('userPhone').value.trim();
        const userSubject = document.getElementById('userSubject').value;
        const userMessage = document.getElementById('userMessage').value.trim();
        
        // Validation
        if (!userName || !userEmail || !userSubject || !userMessage) {
            displayFormStatus('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(userEmail)) {
            displayFormStatus('Please enter a valid email address.', 'error');
            document.getElementById('userEmail').focus();
            return;
        }
        
        // Phone validation (if provided)
        if (userPhone) {
            const phonePattern = /^[\d\s\-\+\(\)]+$/;
            if (!phonePattern.test(userPhone)) {
                displayFormStatus('Please enter a valid phone number.', 'error');
                document.getElementById('userPhone').focus();
                return;
            }
        }
        
        // Update button state
        formSubmitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
        formSubmitBtn.disabled = true;
        formStatusMessage.textContent = '';
        
        // EmailJS parameters
        const emailParams = {
            from_name: userName,
            from_email: userEmail,
            phone: userPhone || 'Not provided',
            subject: userSubject,
            message: userMessage,
            to_name: 'PAF-IAST Administration'
        };
        
        // Send email
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual IDs
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                
                displayFormStatus('Thank you! Your inquiry has been submitted successfully.', 'success');
                
                // Reset form
                mainContactForm.reset();
                
                // Reset button
                resetFormButton();
                
                // Show success alert
                setTimeout(() => {
                    alert('Your message has been sent! We will get back to you soon.');
                }, 500);
                
            }, function(error) {
                console.log('Email sending failed...', error);
                
                displayFormStatus('Failed to send inquiry. Please try again later.', 'error');
                
                // Reset button
                resetFormButton();
                
                // Show error alert
                setTimeout(() => {
                    alert('Failed to send message. Please check your connection and try again.');
                }, 500);
            });
    });
}

function displayFormStatus(message, type) {
    formStatusMessage.textContent = message;
    formStatusMessage.className = `status-message ${type}`;
    
    // Auto-hide after 6 seconds
    setTimeout(() => {
        formStatusMessage.textContent = '';
        formStatusMessage.className = 'status-message';
    }, 3000);
}

function resetFormButton() {
    formSubmitBtn.innerHTML = 'Submit Inquiry <i class="fas fa-paper-plane"></i>';
    formSubmitBtn.disabled = false;
}

// =============================================
// 9. DYNAMIC YEAR IN FOOTER
// =============================================
const year = new Date().getFullYear();
const copyrightText = document.querySelector('.copyright-text');
if (copyrightText) {
    copyrightText.textContent = `© ${year} Pak-Austria Fachhochschule. All Rights Reserved.`;
}

// =============================================
// 10. PREVENT HORIZONTAL SCROLL
// =============================================
function detectHorizontalScroll() {
    const bodyElement = document.body;
    const htmlElement = document.documentElement;
    
    if (bodyElement.scrollWidth > htmlElement.clientWidth) {
        console.warn('⚠️ Horizontal scroll detected. Check for overflowing elements.');
    }
}

window.addEventListener('load', detectHorizontalScroll);
window.addEventListener('resize', detectHorizontalScroll);

// =============================================
// 11. KEYBOARD NAVIGATION SUPPORT
// =============================================
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape
    if (e.key === 'Escape') {
        if (mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            navToggle.classList.remove('active');
            
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        }
    }
});

// =============================================
// 12. FORM FOCUS EFFECTS
// =============================================
const formInputs = document.querySelectorAll('.inquiry-form input, .inquiry-form select, .inquiry-form textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#1E88E5';
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.style.borderColor = '#e0e0e0';
        }
    });
});

// =============================================
// 13. PAGE LOAD ANIMATION
// =============================================
window.addEventListener('load', function() {
    document.body.classList.add('page-loaded');
    console.log('✅ Page fully loaded and ready');
});

// =============================================
// 14. PERFORMANCE MONITORING
// =============================================
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const perfTiming = window.performance.timing;
        const totalLoadTime = perfTiming.loadEventEnd - perfTiming.navigationStart;
        console.log(`⚡ Total page load time: ${totalLoadTime}ms`);
    });
}

// =============================================
// 15. CONSOLE BRANDING
// =============================================
console.log('%c🎓 PAK-AUSTRIA FACHHOCHSCHULE', 'font-size: 24px; font-weight: bold; color: #1E88E5;');
console.log('%cInstitute of Applied Sciences and Technology', 'font-size: 14px; color: #666;');
console.log('%c✨ Professional Education Platform', 'font-size: 13px; color: #999;');

// =============================================
// 16. GALLERY IMAGE CLICK (Optional Enhancement)
// =============================================
const galleryImages = document.querySelectorAll('.gallery-image-box');

galleryImages.forEach(imageBox => {
    imageBox.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').getAttribute('src');
        console.log('Gallery image clicked:', imgSrc);
        // You can add a lightbox modal here if needed
    });
});

// =============================================
// 17. PARALLAX EFFECT FOR BACKGROUNDS
// =============================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    // Apply parallax to background images
    const parallaxElements = document.querySelectorAll('.about-background-image, .innovation-background, .resources-background');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// =============================================
// 18. ADMISSION CARD HOVER EFFECT
// =============================================
const admissionCards = document.querySelectorAll('.admission-card');

admissionCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('featured-card')) {
            this.style.transform = '';
        }
    });
});

// =============================================
// 19. RESOURCE CARDS STAGGER ANIMATION
// =============================================
function staggerAnimation() {
    const resourceCards = document.querySelectorAll('.resource-showcase-item');
    
    resourceCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Run on load if resources section is visible
window.addEventListener('load', function() {
    const resourcesSection = document.querySelector('.campus-resources');
    if (resourcesSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    staggerAnimation();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(resourcesSection);
    }
});

// =============================================
// END OF SCRIPT
// =============================================