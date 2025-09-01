// Layout Update JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize horizontal scrolling
    initHorizontalScroll();
    
    // Initialize accordions
    initAccordions();
});

// Horizontal Scrolling Functionality
function initHorizontalScroll() {
    const scrollContainers = document.querySelectorAll('.scroll-container');
    
    scrollContainers.forEach(container => {
        const scrollWrapper = container.querySelector('.scroll-wrapper');
        const prevBtn = container.querySelector('.scroll-prev');
        const nextBtn = container.querySelector('.scroll-next');
        
        if (!scrollWrapper || !prevBtn || !nextBtn) return;
        
        // Calculate scroll amount based on item width
        const scrollAmount = scrollWrapper.querySelector('.scroll-item')?.offsetWidth + 20 || 320;
        
        // Next button click
        nextBtn.addEventListener('click', () => {
            scrollWrapper.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Previous button click
        prevBtn.addEventListener('click', () => {
            scrollWrapper.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Touch events for mobile swiping
        let startX, scrollLeft;
        
        scrollWrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - scrollWrapper.offsetLeft;
            scrollLeft = scrollWrapper.scrollLeft;
        }, { passive: true });
        
        scrollWrapper.addEventListener('touchmove', (e) => {
            if (!startX) return;
            const x = e.touches[0].pageX - scrollWrapper.offsetLeft;
            const walk = (x - startX) * 2;
            scrollWrapper.scrollLeft = scrollLeft - walk;
        }, { passive: true });
        
        scrollWrapper.addEventListener('touchend', () => {
            startX = null;
        }, { passive: true });
    });
}

// Accordion Functionality
function initAccordions() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        if (!header) return;
        
        header.addEventListener('click', () => {
            // Toggle active class on clicked item
            item.classList.toggle('active');
            
            // If we want only one accordion open at a time, uncomment this:
            /*
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            */
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

