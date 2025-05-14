function showReg() {
    var y = document.getElementById("regwrapper");
    var x = document.getElementsByClassName("regWindow")[0];
    if (y.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "flex";
        y.style.display = "block";
    }
}

function showLog() {
    var y = document.getElementById("logwrapper");
    var x = document.getElementsByClassName("logWindow")[0];
    document.getElementById("hoten").value='';
    document.getElementById("txtpassword").value='';
    document.getElementById("txtpasswordcheck").value='';
    document.getElementById("txtusername").value='';
    document.getElementById("sodienthoai").value='';
    document.getElementById("diachi").value='';
    if (y.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "flex";
        y.style.display = "block";
    }
}

function closeregForm() {
    document.getElementById("regwrapper").style.display = "none";
    document.getElementsByClassName("regWindow")[0].style.display = "none";
}

function closelogForm() {
    document.getElementById("logwrapper").style.display = "none";
    document.getElementsByClassName("logWindow")[0].style.display = "none";
}

function checkForm() {
    var hoten, password,passwordcheck,username,phone
    hoten = document.getElementById("hoten").value;
    password = document.getElementById("txtpassword").value;
    passwordcheck = document.getElementById("txtpasswordcheck").value;
    username = document.getElementById("txtusername").value;
    phone=document.getElementById("sodienthoai").value;

    if (hoten == "") {
        document.getElementById("checkhoten").innerHTML = " *Họ và tên rỗng";
        document.getElementById("hoten").focus();
        //document.getElementById("hoten").select();

        return false;
    } else {
        document.getElementById("checkhoten").innerHTML = "";
    }

    if (username == "") {
        document.getElementById("checkuser").innerHTML = " *Tên đăng nhập rỗng";
        document.getElementById("txtusername").focus();
        return false;

    } else {
        var tmp1=JSON.parse(localStorage.getItem('txtusername'));
        for(let i=0;i<tmp1.length;i++){
            if(tmp1[i].username==username){
                alert("Tên đăng nhập đã tồn tại!!");
                document.getElementById("txtusername").select();
                document.getElementById("txtusername").focus();                
                return false;
            }
        }
        document.getElementById("checkuser").innerHTML = "";
    }

    if (password == "") {
        document.getElementById("checkpass").innerHTML = " *Mật khẩu không được rỗng";
        document.getElementById("txtpassword").focus();
        return false;
    }
    if(document.getElementById("diachi").value=="")
    {
        alert("Địa chỉ không được để trống!!")
        document.getElementById("diachi").focus();
        return false;
    }
    if (document.getElementById("txtpassword").value.length < 8) {
        document.getElementById("checkpass").innerHTML = " *Mật khẩu phải lớn hơn 8 ký tự";
        return false;
    } else {
        document.getElementById("checkpass").innerHTML = "";
    }


        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if(phone !==''){
            if (vnf_regex.test(phone) == false) 
            {
                alert('Số điện thoại của bạn không đúng định dạng!');
                return false;
            }
        }else{
            alert('Bạn chưa điền số điện thoại!');
            document.getElementById("sodienthoai").focus();
            return false;
        }
    

    if (password != passwordcheck) {
        document.getElementById("checkconfirm").innerHTML = " *Mật khẩu không khớp";
        document.getElementById("txtpasswordcheck").focus();
        return false;
    } else {
        document.getElementById("checkconfirm").innerHTML = "";
    }
    return true;
}