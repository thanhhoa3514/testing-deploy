var sidebarwrap;
window.onclick = function(event) {
    info = document.getElementsByClassName("info")[0];
    if (event.target == info) {
        info.style.display = "none";
    }



    //Menu top responsive
    sidebarwrap = document.getElementById("sidebarwrapper");

    if (event.target == sidebarwrap) {
        sidebarwrap.style.display = "none";
    }

    //Contact
    if (event.target == document.getElementById("contact-place-infomation-wrapper")) {
        document.getElementById("contact-place-infomation-wrapper").style.display = "none";
    }

    //blog
    if (event.target == document.getElementById("blog-infomation-wrapper")) {
        closeBlogInfomation();
    }

    //form-reg-login
    if (event.target == document.getElementById("regwrapper")) {
        closeregForm();
    }

    if (event.target == document.getElementById("logwrapper")) {
        closelogForm();
    }
}