// Portfolio Navigation and Interaction Script
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation items
    const navItems = document.querySelectorAll('.nav-item');
    
    // Function to scroll to a section smoothly
    function scrollToSection(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }
    
    // Function to update active navigation item
    function setActiveNavItem(activeItem) {
        // Remove active class from all nav items
        navItems.forEach(item => item.classList.remove('active'));
        // Add active class to the clicked item
        activeItem.classList.add('active');
    }
    
    // Add click event listeners to navigation items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            scrollToSection(targetId);
            setActiveNavItem(this);
        });
        
        // Add hover effects
        item.style.cursor = 'pointer';
        item.style.userSelect = 'none';
    });
    
    // Optional: Update active nav item based on scroll position
    function updateActiveNavOnScroll() {
        const sections = ['welcome', 'whoiam', 'whatido', 'connectwithme'];
        const scrollPosition = window.scrollY + 100; // Offset for better detection
        
        sections.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    const correspondingNavItem = document.querySelector(`[data-target="${sectionId}"]`);
                    if (correspondingNavItem) {
                        setActiveNavItem(correspondingNavItem);
                    }
                }
            }
        });
    }
    
    // Add scroll event listener for automatic active nav update
    window.addEventListener('scroll', updateActiveNavOnScroll);
    
    // Initialize - set welcome as active
    const welcomeNavItem = document.querySelector('[data-target="welcome"]');
    if (welcomeNavItem) {
        setActiveNavItem(welcomeNavItem);
    }
    
    // Add some interactive effects
    const learnMoreBtn = document.querySelector('.learn-more-btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            // Button click effect - already handled by CSS hover
            console.log('Resume button clicked');
        });
    }
    
    // Add smooth hover effects for social icons
    const socialIcons = document.querySelectorAll('.social-icons-vertical a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Console log for debugging
    console.log('Portfolio script loaded successfully!');
    console.log('Navigation items found:', navItems.length);
});