// Simple navigation functionality
let activeSection = "welcome";

// Smooth scroll to section
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
        });
        setActiveSection(id);
    }
}

// Set active navigation item
function setActiveSection(sectionId) {
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to current section
    const activeNav = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }
    
    activeSection = sectionId;
}

// Auto-highlight nav based on scroll position
function highlightNavOnScroll() {
    const sections = ['welcome', 'whoiam', 'whatido', 'connectwithme'];
    const scrollPosition = window.scrollY + 100; // Offset for better detection
    
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
            if (activeSection !== sections[i]) {
                setActiveSection(sections[i]);
            }
            break;
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set initial active section
    setActiveSection('welcome');
    
    // Add scroll listener for auto-highlighting
    window.addEventListener('scroll', highlightNavOnScroll);
});