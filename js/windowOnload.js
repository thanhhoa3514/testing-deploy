window.onload = function() {
    if (localStorage.getItem('myStorage') == null) {
        localStorage.setItem('myStorage', JSON.stringify(mainProduce));
    } else {
        mainProduce = JSON.parse(localStorage.getItem('myStorage'));
    }
    if(localStorage.getItem('status')==null){
        localStorage.setItem('status',-1);
    }
    createAdmin();
    //show home
    changeMenu(document.getElementById('home'));
    // xuatList('all');
    // menuTop();

    changeLogstatus();
};