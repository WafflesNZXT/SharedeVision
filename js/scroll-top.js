// Scroll to Top Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Create the scroll-to-top button element
    const scrollTopButton = document.createElement('div');
    scrollTopButton.className = 'scroll-to-top';
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    
    // Append the button to the body
    document.body.appendChild(scrollTopButton);
    
    // Show/hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('visible');
            
            // Add bounce animation after a delay
            setTimeout(() => {
                if (window.pageYOffset > 600 && !scrollTopButton.classList.contains('bounce')) {
                    scrollTopButton.classList.add('bounce');
                }
            }, 2000);
        } else {
            scrollTopButton.classList.remove('visible');
            scrollTopButton.classList.remove('bounce');
        }
    });
    
    // Scroll to top when the button is clicked
    scrollTopButton.addEventListener('click', function() {
        // Remove bounce animation when clicked
        scrollTopButton.classList.remove('bounce');
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

