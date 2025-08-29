// Animations JavaScript for Sharede Vision

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations when the page loads
    initAnimations();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize scroll progress bar
    initScrollProgress();
    
    // Add typing effect to hero heading if it exists
    const heroHeading = document.querySelector('.hero h1');
    if (heroHeading && !heroHeading.classList.contains('typing-effect')) {
        // Save the original text
        const originalText = heroHeading.textContent;
        // Clear the text
        heroHeading.textContent = '';
        // Add the typing effect class
        heroHeading.classList.add('typing-effect');
        // Set a timeout to start typing
        setTimeout(() => {
            heroHeading.textContent = originalText;
        }, 500);
    }
});

// Initialize animations
function initAnimations() {
    // Add animation classes to elements
    
    // Hero section animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const heroElements = heroContent.children;
        Array.from(heroElements).forEach((element, index) => {
            element.classList.add('animate-fade-in');
            element.classList.add(`delay-${(index + 1) * 100}`);
        });
    }
    
    // Section titles animation
    const sectionTitles = document.querySelectorAll('.section-title h2');
    sectionTitles.forEach(title => {
        title.classList.add('gradient-text');
    });
    
    // Service cards animation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.classList.add('hover-lift');
    });
    
    // Feature items animation
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.classList.add('hover-scale');
    });
    
    // Process steps animation
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
        step.classList.add('hover-glow');
    });
    
    // Value items animation
    const valueItems = document.querySelectorAll('.value-item');
    valueItems.forEach(item => {
        item.classList.add('hover-lift');
    });
    
    // Add animated underline to all footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.classList.add('animated-underline');
    });
    
    // Add floating animation to the logo in hero section
    const heroLogo = document.querySelector('.hero-logo');
    if (heroLogo) {
        heroLogo.classList.add('floating');
    }
    
    // Add animated icon effect to all feature icons
    const featureIcons = document.querySelectorAll('.feature-icon i, .process-icon i, .value-icon i');
    featureIcons.forEach(icon => {
        icon.classList.add('animated-icon');
    });
    
    // Add gradient border to testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.classList.add('gradient-border');
    });
    
    // Add pulse animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-section .btn');
    ctaButtons.forEach(button => {
        button.classList.add('animate-pulse');
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    // Get all elements that should be animated on scroll
    const elements = document.querySelectorAll('.section-title, .service-card, .feature-item, .process-step, .value-item, .testimonial-card');
    
    // Add reveal class to all elements
    elements.forEach(element => {
        if (!element.classList.contains('reveal')) {
            element.classList.add('reveal');
        }
    });
    
    // Function to check if element is in viewport
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        elements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            // Check if element is in viewport
            if (
                (elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)
            ) {
                element.classList.add('active');
            }
        });
    }
    
    // Add event listener for scroll
    window.addEventListener('scroll', checkIfInView);
    
    // Trigger once on load
    checkIfInView();
}

// Initialize scroll progress bar
function initScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    // Update progress bar width on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercentage + '%';
    });
}

