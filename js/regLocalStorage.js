function createAdmin() {
    var userArray = [];
    //var userType = 'kh';

    //Kiem tra local storage
    if (localStorage.getItem('txtusername') == null) {
        // alert("Local trống!!!\nMời kiểm tra console.log");
        console.log("Tạo mới 1 admin và 1 user");
        var user2 = {
            userID: 102,
            username: 'thanhtrung01',
            password: '05102002',
            fullname: 'Thành Trung',
            address: "",
            tellnumber: '1234',
            datesignup: dateoutput,
            usertype: 'kh'
        }

        userArray.push(user2);

        console.log(userArray);

        localStorage.setItem('txtusername', JSON.stringify(userArray));
        var userIDMark = 103;
        localStorage.setItem('IDMark', JSON.stringify(userIDMark));
    }
}
var newuser;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dateObj = new Date();
const month = monthNames[dateObj.getMonth()];
const day = String(dateObj.getDate()).padStart(2, '0');
const year = dateObj.getFullYear();
const dateoutput = month + '\n' + day + ',' + year;

function createnewuser() {
    if (checkForm()) {
        userArray = JSON.parse(localStorage.getItem('txtusername'));

        var mark = localStorage.getItem('IDMark');
        newuser = {
            userID: mark,
            username: document.getElementById("txtusername").value,
            password: document.getElementById("txtpasswordcheck").value,
            fullname: document.getElementById("hoten").value,
            address: document.getElementById("diachi").value,
            tellnumber: document.getElementById("sodienthoai").value,
            datesignup: dateoutput,
            usertype: 'kh'
        };

        console.log(newuser.username);
        console.log("Type user 1:");
        console.log(typeof(newuser));

        userArray.push(newuser);
        // var tmp=document.getElementById("txtusername").value;
        // for(let i=0;i<userArray.length;i++){
        //     if(userArray[i].username==tmp){
        //         alert("Tên đăng nhập đã tồn tại");
                
        //     }
        // }
        alert("Tạo mới thành công!");
        //day vao local storage
        localStorage.setItem('txtusername', JSON.stringify(userArray));
        //showUserList();

        mark++;
        localStorage.setItem('IDMark', JSON.stringify(mark));
        closeregForm();
        showLog();
    } else {
        //alert("Tạo mới không thành công!");
        return false;
    }
}
//------------------login-------------------------
function login() {
    //alert("Login");
    var logStatus = -1;
    var userCurent;
    localStorage.setItem('status', JSON.stringify(logStatus));

    var username = document.getElementById("txtusernamelog").value;
    var password = document.getElementById("txtpasswordlog").value;

    document.getElementById("txtusernamelog").value='';
    document.getElementById("txtpasswordlog").value='';
    console.log(username);
    console.log(password);

    var userArray = JSON.parse(localStorage.getItem('txtusername'));
    for (i = 0; i < userArray.length; i++)
        if (userArray[i].username == username && userArray[i].password == password) {
            // if (userArray[i].usertype == "admin") {
            //     logStatus = 0;
            //     //window.location = "manageAccount.html";
            // } else {
                logStatus = i;
                userCurent = userArray[i].userID;
                //window.location = "user.html";
            // }
        }
    localStorage.setItem('status', JSON.stringify(logStatus));
    localStorage.setItem('userCurent', JSON.stringify(userCurent));
    if(logStatus==-1){
        alert("Tài khoản hoặc mật khẩu không đúng!!");
    }
    else{
        alert("Đăng nhập thành công");
    }
    changeLogstatus();
    username = '';
    password = '';
}

function logOut() {
    var status = localStorage.getItem('status');
    status = -1;
    localStorage.setItem('status', JSON.stringify(status));
    window.localStorage.removeItem('mainCart');
    changeLogstatus();
}

function changeLogstatus() {

    var userArray = JSON.parse(localStorage.getItem('txtusername'));
    if(localStorage.getItem('status')==null){
        localStorage.setItem('status',-1);
    }
    var status = localStorage.getItem('status');
    // alert(status);

    // if (status == 0) {
    //     document.getElementById("topright").innerHTML =
    //         '<a href="admin/admin.html">Admin</a>' +
    //         '<a href="index.html" onclick="logOut();"><i class="fas fa-sign-out-alt"></i></a>';

    //     document.getElementById("barright").innerHTML =
    //         '<a href="admin/admin.html" onclick="document.getElementById(' + "'sidebarwrapper'" + ').style.display=' + "'none'" + ';">' +
    //         '<li>Admin</li>' +
    //         '</a>' +
    //         '<a href="index.html" onclick="logOut();"><li>Sign out</li></a>';
    // } else 
    if (status == -1) {
        document.getElementById("topright").innerHTML =
            '<a href="#" onclick="showLog(); createAdmin();">Login</a>';

        document.getElementById("barright").innerHTML =
            '<a href="#" onclick="showLog(); createAdmin(); document.getElementById(' + "'sidebarwrapper'" + ').style.display=' + "'none'" + ';">' +
            '<li>Login</li>' +
            '</a>';
    } else {
        document.getElementById("topright").innerHTML =
            '<a href="#">' +
            userArray[status].fullname +
            '</a>' +
            '<a href="cart.html"><i class="fas fa-shopping-cart"></i></a>' +
            '<a href="index.html" onclick="logOut();"><i class="fas fa-sign-out-alt"></i></a>';

        document.getElementById("barright").innerHTML =
            '<a href="#" onclick="document.getElementById(' + "'sidebarwrapper'" + ').style.display=' + "'none'" + ';">' +
            '<li>' + userArray[status].fullname + '</li>' +
            '</a>' +
            '<a href="cart.html" onclick="document.getElementById(' + "'sidebarwrapper'" + ').style.display=' + "'none'" + ';">' +
            '<li>Cart</li>' +
            '</a>' +
            '<a href="index.html" onclick="logOut();"><li>Sign out</li></a>';
    }
}

// Enter để đăng nhập
// Get the input field
var input = document.getElementById("txtpasswordlog");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("login").click();
    }
});