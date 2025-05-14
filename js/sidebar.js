function showsidebar() {
    //var x = document.getElementById("sidebar");
    var y = document.getElementById("sidebarwrapper");
    if (y.style.display === "block") {
        //x.style.display = "flex";
        y.style.display = "none";
    } else {
        //x.style.display = "none";
        y.style.display = "block";
    }
}
