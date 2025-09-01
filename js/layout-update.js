/**
 * Layout Update JavaScript
 * Handles interactive elements for the updated layout
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize horizontal scrolling for scroll containers
    initScrollContainers();
});

/**
 * Initialize all scroll containers on the page
 */
function initScrollContainers() {
    const scrollContainers = document.querySelectorAll('.scroll-container');
    
    scrollContainers.forEach(container => {
        const wrapper = container.querySelector('.scroll-wrapper');
        const prevBtn = container.querySelector('.scroll-prev');
        const nextBtn = container.querySelector('.scroll-next');
        
        if (wrapper && prevBtn && nextBtn) {
            // Set up scroll buttons
            prevBtn.addEventListener('click', () => {
                const scrollAmount = wrapper.clientWidth * 0.8;
                wrapper.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            nextBtn.addEventListener('click', () => {
                const scrollAmount = wrapper.clientWidth * 0.8;
                wrapper.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            // Add touch scrolling for mobile
            let isDown = false;
            let startX;
            let scrollLeft;
            
            wrapper.addEventListener('mousedown', (e) => {
                isDown = true;
                wrapper.classList.add('active');
                startX = e.pageX - wrapper.offsetLeft;
                scrollLeft = wrapper.scrollLeft;
            });
            
            wrapper.addEventListener('mouseleave', () => {
                isDown = false;
                wrapper.classList.remove('active');
            });
            
            wrapper.addEventListener('mouseup', () => {
                isDown = false;
                wrapper.classList.remove('active');
            });
            
            wrapper.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - wrapper.offsetLeft;
                const walk = (x - startX) * 2; // Scroll speed
                wrapper.scrollLeft = scrollLeft - walk;
            });
            
            // Touch events for mobile
            wrapper.addEventListener('touchstart', (e) => {
                isDown = true;
                startX = e.touches[0].pageX - wrapper.offsetLeft;
                scrollLeft = wrapper.scrollLeft;
            });
            
            wrapper.addEventListener('touchend', () => {
                isDown = false;
            });
            
            wrapper.addEventListener('touchmove', (e) => {
                if (!isDown) return;
                const x = e.touches[0].pageX - wrapper.offsetLeft;
                const walk = (x - startX) * 2;
                wrapper.scrollLeft = scrollLeft - walk;
            });
        }
    });
}

