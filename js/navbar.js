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