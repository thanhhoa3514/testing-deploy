// Lab dropdown menu functionality
function toggleLabMenu() {
    const dropdown = document.getElementById('lab-dropdown-content');
    dropdown.classList.toggle('show');
    
    // Close the dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = event.target.closest('#clicklab') || event.target.closest('#lab-dropdown-content');
        
        if (!isClickInside && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }, { once: true });
    
    // Prevent the click from propagating to document level
    event.stopPropagation();
}

// Function to navigate to lab page
function navigateToLab(labPath) {
    window.location.href = labPath;
}

// Initialize lab dropdown
document.addEventListener('DOMContentLoaded', function() {
    // For mobile view - make cards scrollable
    const labCards = document.querySelectorAll('.lab-card');
    if (window.innerWidth <= 768) {
        labCards.forEach(card => {
            card.addEventListener('click', function(event) {
                // Only handle click if it's on the card itself, not on a link
                if (event.target === this || event.target.tagName !== 'A') {
                    this.querySelector('.lab-links').classList.toggle('visible');
                }
            });
        });
    }
}); 