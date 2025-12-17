// Mobile Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isOpen = navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Update ARIA attribute
        mobileMenuToggle.setAttribute('aria-expanded', isOpen);
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        body.classList.remove('menu-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
    
    // Toggle menu when hamburger button is clicked
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close menu when a navigation link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = event.target.closest('.nav-container');
        const isMenuOpen = navMenu.classList.contains('active');
        
        if (!isClickInsideNav && isMenuOpen) {
            closeMobileMenu();
        }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
            mobileMenuToggle.focus(); // Return focus to toggle button
        }
    });
    
    // Handle keyboard navigation in mobile menu
    mobileMenuToggle.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMobileMenu();
        }
    });
});
