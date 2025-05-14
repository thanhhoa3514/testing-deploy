// kiểm tra lại coi file js này chạy trước hay file html chạy trước để tránh xảy ra lỗi

var userCurent;
var cartUser;
var data=[];
window.onload = function() {
    userCurent = JSON.parse(localStorage.getItem('userCurent'));
    // alert(userCurent);
    cartUser = 'cart' + userCurent;
    // alert(cartUser);
    if (localStorage.getItem(cartUser) == null) {
        // alert("chua co du lieu");
        localStorage.setItem(cartUser, JSON.stringify(data));
    } else {
        // alert("Da co du lieu");
        data = JSON.parse(localStorage.getItem(cartUser));
    }

}
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
window.onclick = function(event) {
    if (event.target == document.getElementById("wrapper")) {
        show();
    }
}

function show() {
    var y = document.getElementById("wrapper");
    var x = document.getElementsByClassName("Window")[0];
    if (y.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "flex";
        y.style.display = "block";
    }
}

function updateCartTotal() {
    //khai báo biến để lấy giá trị của món hàng
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    // chạy vòng lập duyệt các giá trị của món hàng
    for (var i = 0; i < cartRows.length; i++) {
        // duyệt giá tiền và số sản phẩm của từng món hàng (có ép kiểu sang số thực or số nguyên)
        // chỗ value là để lấy giá trị từ input
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var quantity = quantityElement.value
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        total += (price * quantity);
        // console.log(total);

    }
    // làm tròn số
    document.getElementsByClassName('cart-total-price')[0].innerText = total + " đ"
}

function ready() {
    // khai báo biến nút xóa khỏi giỏ hàng (remove)
    // chạy vòng lặp duyệt các nút xóa trong trang 
    // truyền giá trị của sản phẩm vào cái nút mỗi khi mình bấm
    // dùng tham biến parent để xóa hẳn product khỏi giỏ hàng.

    
    if (localStorage.getItem('arrReceipt') == null) {
        localStorage.setItem('arrReceipt', JSON.stringify(arrReceipt));
    } else {
        arrReceipt = JSON.parse(localStorage.getItem('arrReceipt'));
    }
    
    if (localStorage.getItem('receiptIdNext') == null) {
        localStorage.setItem('receiptIdNext', JSON.stringify(receiptIdNext));
    } else {
        receiptIdNext = JSON.parse(localStorage.getItem('receiptIdNext'));
    }

    userCurent = JSON.parse(localStorage.getItem('userCurent'));
    // alert(userCurent);
    cartUser = 'cart' + userCurent;
    // alert(cartUser);

    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    // thêm điều kiện kiểm tra số lượng sản phẩm
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }
    addtoCart();
    updateCartTotal();
    // // khi mà click mua
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
// chức năng sau khi bấm mua
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dateObj = new Date();
const month = monthNames[dateObj.getMonth()];
const day = String(dateObj.getDate()).padStart(2, '0');
const year = dateObj.getFullYear();
const dateoutput = month + '\n' + day + ',' + year;

function purchaseClicked() {
    alert('Cảm ơn bạn vì đã ủng hộ !')
    window.location.href= 'index.html';
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var arrpurchaseItem = [];

    // chạy vòng lập duyệt các giá trị của món hàng
    if(localStorage.getItem(cartUser)==null){
        data=[];
    }
    else{
        data = JSON.parse(localStorage.getItem(cartUser));
    }
    for (var i = 0; i < cartRows.length; i++) {
        for (i = 0; i < data.length; i++) {
            var purPrice = data[i].producePrice;
            var purTitle = data[i].produceName;
            var purId = data[i].produceId;
            var cartRow = cartRows[i];
            var purImg = data[i].produceImg;
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
            var quantity = quantityElement.value;
            console.log(quantity, purId);

            var date = dateoutput;
            var purchaseItem = { id: purId, sl: quantity, date: date, price: purPrice, img: purImg, title: purTitle }
            arrpurchaseItem.push(purchaseItem);
            localStorage.setItem("purchaseItem", JSON.stringify(arrpurchaseItem));

            var totalPrice = quantity * purPrice;
            console.log(totalPrice);

        }
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild);
        }
        updateCartTotal();
    }
    createReceipt();
    window.localStorage.removeItem(cartUser);


}
var receiptIdNext = 103;
var arrReceipt = [];


function createReceipt() {


    if (localStorage.getItem('arrReceipt') == null) {
        localStorage.setItem('arrReceipt', JSON.stringify(arrReceipt));
    } else {
        arrReceipt = JSON.parse(localStorage.getItem('arrReceipt'));
    }
    var receipt = { receiptId: JSON.parse(localStorage.getItem('receiptIdNext')), listItem: JSON.parse(localStorage.getItem('purchaseItem')), userId: JSON.parse(localStorage.getItem('userCurent')) };
    console.log(receipt);
    arrReceipt.push(receipt);
    localStorage.setItem('arrReceipt', JSON.stringify(arrReceipt));
    receiptIdNext = Number(receiptIdNext) + 1;
    localStorage.setItem('receiptIdNext', JSON.stringify(receiptIdNext));
}



// chức năng xóa
function removeCartItem(event) {
    var buttonClicked = event.target;
    // alert(buttonClicked.getAttribute("name"));
    console.log(buttonClicked.getAttribute("name"));
    buttonClicked.parentElement.parentElement.remove();
    for (let i = 0; i < data.length; i++) {
        if (data[i].produceId === Number(buttonClicked.getAttribute("name"))) {
            data.splice(i, 1);
            break;
        }
    }
    localStorage.setItem(cartUser, JSON.stringify(data));

    // localStorage.removeItem(mainCart)
    updateCartTotal();
}
// chức năng kiểm tra số lượng sp
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
// chức năng thêm sản phẩm 
//parentElement là lấy luôn các thuộc tính cha (bao quát)
function addtoCart() {
    // var mainCart = JSON.parse(localStorage.getItem("mainCart"));
    // var button = event.target
    data = JSON.parse(localStorage.getItem(cartUser));
    for (i = 0; i < data.length; i++) {
        var proTitle = data[i].produceName;
        var proimgSrc = data[i].produceImg;
        var proPrice = data[i].producePrice;
        var proId = data[i].produceId;
        console.log(proTitle, proimgSrc, proPrice)
        addItemToCart(proTitle, proimgSrc, proPrice, proId)
        updateCartTotal();

    }
    // chức năng thêm sản phẩm
    function addItemToCart(proTitle, proimgSrc, proPrice, proId) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        cartRow.innerText = proTitle
        var cartItems = document.getElementsByClassName('cart-items')[0]
            // kiểm tra sản phẩm đã trong giỏ hàng hay chưa
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText == proTitle) {
                alert('Sản phẩm này đã ở trong giỏ hàng!')
                return
            }
        }
        // nội dung của các món hàng khi thêm 


        var cartRowContents = `
        <div class="cart-item cart-column" >
            <img class="cart-item-image" src="${proimgSrc}" width="100" height="100">
            <span class="cart-item-title">${proTitle}</span>
            </div>
            <span class="cart-price cart-column">${proPrice}</span>
            <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button"  name="${proId}"   >REMOVE</button>
        </div>
    `

   
        cartRow.innerHTML = cartRowContents
            //append thêm cái cart row ở cuối cartitem
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    }
    // update lại tổng giá tiền
}