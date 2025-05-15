//Get the button:
mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction1() };

function scrollFunction1() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "0px 15%";
        document.getElementById("navbar").style.backgroundColor = "whitesmoke";
        // mybutton.style.display = "block";
        document.getElementById("topsidebar").style.padding = "1% 3%";
        document.getElementById("topsidebar").style.backgroundColor = "whitesmoke";
    } else {
        document.getElementById("navbar").style.padding = "5px 10%";
        document.getElementById("navbar").style.backgroundColor = "white"; //Default
        // mybutton.style.display = "none";
        document.getElementById("topsidebar").style.padding = "1.3% 0%";
        document.getElementById("topsidebar").style.backgroundColor = "white";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// const btn = document.getElementById('myBtn');

// btn.addEventListener('click', () => window.scrollTo({
//     top: 1,
//     behavior: 'smooth',
// }));

// Function to handle burger menu
function toggleMobileMenu(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
    } else {
        mobileMenu.classList.add('show');
    }
    
    // Prevent event propagation
    if (event) {
        event.stopPropagation();
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerIcon = document.querySelector('.burger-menu i');
    
    if (mobileMenu && burgerIcon && event.target !== burgerIcon && !mobileMenu.contains(event.target) && mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
    }
});

// Ensure burger menu displays on small screens
window.addEventListener('resize', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu) {
        if (window.innerWidth <= 1000) {
            burgerMenu.style.display = 'block';
        } else {
            burgerMenu.style.display = 'none';
            // Close mobile menu if open when resizing larger
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.remove('show');
            }
        }
    }
});

// Initialize when page loads
window.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu && window.innerWidth <= 1000) {
        burgerMenu.style.display = 'block';
    } else if (burgerMenu) {
        burgerMenu.style.display = 'none';
    }
    
    // Ensure mobile menu has proper initial state
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.remove('show');
    }
});