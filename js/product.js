var curent, curentSize;
var cartUser;

function closeinfoCard() {
    document.getElementsByClassName("info")[0].style.display = "none";
}

function thongtin(obj) {

    // alert("xem thông tin "+ obj.getAttribute("name"));
    var id = obj.getAttribute("name");
    document.getElementsByClassName("info")[0].style.display = 'block';
    for (let i = 0; i < mainProduce.length; i++) {
        if (mainProduce[i].produceId == id) {
            xuatThongTin(mainProduce[i]);
            break;
        }
    }

}

function xuatThongTin(obj) {
    curent = obj;
    document.getElementsByClassName("imgInfo")[0].setAttribute("src", obj.produceImg);
    document.getElementsByClassName("Content")[0].innerHTML = '<h2>' + obj.produceName + '</h2><span>' + obj.produceInfo + '</span>';
    var s = '<a onclick="themvaogiohang(curent)"><p>' + obj.producePrice + ' đ - Thêm vào giỏ hàng</p></a>';
    document.getElementsByClassName("xacnhanSP")[0].innerHTML = s;
}


var mainCart = []

function themVaoGioHangTheoMaSP(obj) {
    // alert("Thêm vào giỏ hàng "+ obj.getAttribute("name"));
    if (JSON.parse(localStorage.getItem('status')) === -1) {
        alert("Vui lòng đăng nhập để mua hàng");
        showLog();
        return;
    } 
    // else if (JSON.parse(localStorage.getItem('status')) === 0) {
    //     alert("Bạn đang sử dụng tài khoản admin");
    //     return;
    // }
    userCurent = JSON.parse(localStorage.getItem('userCurent'));
    cartUser = 'cart' + userCurent;
    if(localStorage.getItem(cartUser)!= null)
        mainCart=JSON.parse(localStorage.getItem(cartUser));
    
    for (let i = 0; i < mainProduce.length; i++) {
        if (mainProduce[i].produceId == obj.getAttribute("name")) {
            for (let j = 0; j < mainCart.length; j++) {
                if (mainProduce[i].produceId === mainCart[j].produceId) {
                    alert('Sản phẩm này đã ở trong giỏ hàng!')
                    alert('Bạn có thể dễ dàng thay đổi số lượng trong giỏ hàng')
                    return;
                }
            }
            mainCart.push(mainProduce[i]);
            localStorage.setItem(cartUser, JSON.stringify(mainCart));
            alert('Thêm sản phẩm thành công');
            return;
        }
    }
}
 


// function themvaogiohang(obj) {
//     // alert("Thêm vào giỏ hàng " + obj.produceId + "  size  " + size);
//     if (JSON.parse(localStorage.getItem('status')) === -1) {
//         alert("Vui lòng đăng nhập để mua hàng");
//         showLog();
//         return;
//     } else if (JSON.parse(localStorage.getItem('status')) === 0) {
//         alert("Bạn đang sử dụng tài khoản admin");
//         return;
//     }
//     userCurent = JSON.parse(localStorage.getItem('userCurent'));
//     cartUser = 'cart' + userCurent;
//     if(localStorage.getItem(cartUser)!= null)
//         mainCart=JSON.parse(localStorage.getItem(cartUser));

//     for (let i = 0; i < mainProduce.length; i++) {
//         if (mainProduce[i].produceId == curent.produceId) {

//             for (let j = 0; j < mainCart.length; j++) {
//                 if (mainProduce[i].produceId === mainCart[j].produceId) {
//                     alert('Sản phẩm này đã ở trong giỏ hàng!')
//                     return;
//                 }
//             }
//             mainCart.push(mainProduce[i]);
//             localStorage.setItem(cartUser, JSON.stringify(mainCart));
//             alert('Thêm sản phẩm thành công');
//             return;
//         }
//     }

// }
function themvaogiohang(obj) {
    // alert("Thêm vào giỏ hàng " + obj.produceId + "  size  " + size);
    if (JSON.parse(localStorage.getItem('status')) === -1) {
        alert("Vui lòng đăng nhập để mua hàng");
        showLog();
        return;
    } 
    // else if (JSON.parse(localStorage.getItem('status')) === 0) {
    //     alert("Bạn đang sử dụng tài khoản admin");
    //     return;
    // }
    userCurent = JSON.parse(localStorage.getItem('userCurent'));
    cartUser = 'cart' + userCurent;
    if(localStorage.getItem(cartUser)!= null)
        mainCart=JSON.parse(localStorage.getItem(cartUser));

    for (let i = 0; i < mainProduce.length; i++) {
        if (mainProduce[i].produceId == curent.produceId) {

            for (let j = 0; j < mainCart.length; j++) {
                if (mainProduce[i].produceId === mainCart[j].produceId) {
                    alert('Sản phẩm này đã ở trong giỏ hàng!')
                    alert('Bạn có thể dễ dàng thay đổi số lượng trong giỏ hàng')
                    return;
                }
            }
            mainCart.push(mainProduce[i]);
            localStorage.setItem(cartUser, JSON.stringify(mainCart));
            alert('Thêm sản phẩm thành công');
            return;
        }
    }

}

var arrSearch=[];
function searchForProductName() {
    var filter = document.getElementById('searchProduct').value.toLowerCase();
    // alert(filter);
    arrSearch=[];
    for (let i = 0; i < arrTmp.length; i++) {
        if (Number(arrTmp[i].produceName.toLowerCase().indexOf(filter)) > -1) {
            arrSearch.push(arrTmp[i]);
        }
    }

    let Page = Math.ceil(arrSearch.length / cntInPage);

    var s = '<ul>';
    if (Page > 1) {
        for (let i = 1; i <= Page; i++) {
            var tmp = '<a href="#page" onclick="xuatTrangSanPham(' + i + ',arrSearch)"><li>' + i + '</li></a>';
            s += tmp;
        }
    }
    s += '</ul>';
    document.getElementsByClassName("page")[0].innerHTML = s;
    xuatTrangSanPham(1, arrSearch);
}

// function searchForProductName() {
//     var filter = document.getElementById('searchProduct').value.toLowerCase();
//     // alert(filter);
//     arrTmp = [];
//     for (let i = 0; i < mainProduce.length; i++) {
//         if (Number(mainProduce[i].produceName.toLowerCase().indexOf(filter)) > -1) {
//             arrTmp.push(mainProduce[i]);
//         }
//     }

//     let Page = Math.ceil(arrTmp.length / cntInPage);

//     var s = '<ul>';
//     if (Page > 1) {
//         for (let i = 1; i <= Page; i++) {
//             var tmp = '<a href="#page" onclick="xuatTrangSanPham(' + i + ',arrTmp)"><li>' + i + '</li></a>';
//             s += tmp;
//         }
//     }
//     s += '</ul>';
//     document.getElementsByClassName("page")[0].innerHTML = s;
//     xuatTrangSanPham(1, arrTmp);
// }

function searchForPrice(){
    var min=document.getElementById("priceMin").value;
    var max=document.getElementById("priceMax").value;
    if(min==""){
        min=0;
    }
    if(max==""){
        max=99999999;
    }
    document.getElementById('searchProduct').value="";
    console.log(min);
    console.log(max);
    for(let i=0;i<arrTmp.length;i++){
        if(arrTmp[i].producePrice < min || arrTmp[i].producePrice > max ){
            arrTmp.splice(i,1);
            i=i-1;
        }
    }

    let Page = Math.ceil(arrTmp.length / cntInPage);
    var s = '<ul>';
    if (Page > 1) {
        for (let i = 1; i <= Page; i++) {
            var tmp = '<a href="#page" onclick="xuatTrangSanPham(' + i + ',arrTmp)"><li>' + i + '</li></a>';
            s += tmp;
        }
    }
    s += '</ul>';
    document.getElementsByClassName("page")[0].innerHTML = s;
    xuatTrangSanPham(1, arrTmp);
}

function themyeuthich(obj) {
    alert("Thêm yêu thích " + obj.getAttribute("name"));
}

var mainProduce = [{
    produceName: 'Armericano Nóng',
    produceType: 'caphe',
    produceId: 01,
    produceImg: './product/Caphe/arme-nong.jpg',
    producePrice: 40000,
    produceRating: 5,
    produceInfo: 'Americano được pha chế bằng cách pha thêm nước với tỷ lệ nhất định vào tách cà phê Espresso, từ đó mang lại hương vị nhẹ nhàng và giữ trọn được mùi hương cà phê đặc trưng.'
}, {
    produceName: 'Cappuccino Nóng',
    produceType: 'caphe',
    produceId: 02,
    produceImg: './product/Caphe/cappuccino.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Capuchino là thức uống hòa quyện giữa hương thơm của sữa, vị béo của bọt kem cùng vị đậm đà từ cà phê Espresso. Tất cả tạo nên một hương vị đặc biệt, một chút nhẹ nhàng, trầm lắng và tinh tế.'
}, {
    produceName: 'Cappuccino Đá',
    produceType: 'caphe',
    produceId: 03,
    produceImg: './product/Caphe/Capu-da.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Capuchino là thức uống hòa quyện giữa hương thơm của sữa, vị béo của bọt kem cùng vị đậm đà từ cà phê Espresso. Tất cả tạo nên một hương vị đặc biệt, một chút nhẹ nhàng, trầm lắng và tinh tế.'
}, {
    produceName: 'Caramel Macchiato',
    produceType: 'caphe',
    produceId: 04,
    produceImg: './product/Caphe/caramel-macchiato.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.'
}, {
    produceName: 'Cà Phê Đá Xay',
    produceType: 'caphe',
    produceId: 05,
    produceImg: './product/Caphe/cf-da-xay.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Một phiên bản "upgrade" từ ly cà phê sữa quen thuộc, nhưng lại tỉnh táo và tươi mát hơn bởi lớp đá xay đi kèm. Nhấp 1 ngụm cà phê đá xay là thấy đã, ngụm thứ hai thêm tỉnh táo và cứ thế lôi cuốn bạn đến ngụm cuối cùng.'
}, {
    produceName: 'Cold Brew Truyền Thống',
    produceType: 'caphe',
    produceId: 06,
    produceImg: './product/Caphe/classic-cold.jpg',
    producePrice: 45000,
    produceRating: 5,
    produceInfo: 'Cold Brew được ủ và phục vụ mỗi ngày từ 100% hạt Arabica Cầu Đất với hương gỗ thông, hạt dẻ, nốt sô-cô-la đặc trưng, thoang thoảng hương khói nhẹ giúp Cold Brew giữ nguyên vị tươi mới.'
}, {
    produceName: 'Espresso Nóng',
    produceType: 'caphe',
    produceId: 07,
    produceImg: './product/Caphe/espressoNong.jpg',
    producePrice: 40000,
    produceRating: 5,
    produceInfo: 'Một tách Espresso nguyên bản được bắt đầu bởi những hạt Arabica chất lượng, phối trộn với tỉ lệ cân đối hạt Robusta, cho ra vị ngọt caramel, vị chua dịu và sánh đặc.'
}, {
    produceName: 'Latte Nóng',
    produceType: 'caphe',
    produceId: 08,
    produceImg: './product/Caphe/latte.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Một sự kết hợp tinh tế giữa vị đắng cà phê Espresso nguyên chất hòa quyện cùng vị sữa nóng ngọt ngào, bên trên là một lớp kem mỏng nhẹ tạo nên một tách cà phê hoàn hảo về hương vị lẫn nhãn quan.'
}, {
    produceName: 'Latte Đá',
    produceType: 'caphe',
    produceId: 09,
    produceImg: './product/Caphe/latte-da.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Một sự kết hợp tinh tế giữa vị đắng cà phê Espresso nguyên chất hòa quyện cùng vị sữa nóng ngọt ngào, bên trên là một lớp kem mỏng nhẹ tạo nên một tách cà phê hoàn hảo về hương vị lẫn nhãn quan'
}, {
    produceName: 'Mocha Đá',
    produceType: 'caphe',
    produceId: 10,
    produceImg: './product/Caphe/mocha-da.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Loại cà phê được tạo nên từ sự kết hợp hoàn hảo của vị đắng đậm đà của Espresso và sốt sô-cô-la ngọt ngào mang tới hương vị đầy lôi cuốn, đánh thức mọi giác quan nên đây chính là thức uống ưa thích của phụ nữ và giới trẻ.'
}, {
    produceName: 'Mocha Nóng',
    produceType: 'caphe',
    produceId: 11,
    produceImg: './product/Caphe/mochanong.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Loại cà phê được tạo nên từ sự kết hợp hoàn hảo của vị đắng đậm đà của Espresso và sốt sô-cô-la ngọt ngào mang tới hương vị đầy lôi cuốn, đánh thức mọi giác quan nên đây chính là thức uống ưa thích của phụ nữ và giới trẻ.'
}, {
    produceName: 'Bạc Sỉu',
    produceType: 'caphe',
    produceId: 12,
    produceImg: './product/Caphe/bacsiu.jpg',
    producePrice: 29000,
    produceRating: 5,
    produceInfo: 'Bạc sỉu chính là "Ly sữa trắng kèm một chút cà phê". Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.'
}, {
    produceName: 'Cà Phê Đen Đá',
    produceType: 'caphe',
    produceId: 13,
    produceImg: './product/Caphe/caphedenda.jpg',
    producePrice: 29000,
    produceRating: 5,
    produceInfo: 'Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi tuột xuống vòm họng.'
}, {
    produceName: 'Cà Phê Sữa Đá',
    produceType: 'caphe',
    produceId: 14,
    produceImg: './product/Caphe/caphesuada.jpg',
    producePrice: 29000,
    produceRating: 5,
    produceInfo: 'Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.'
}, {
    produceName: 'Cà Phê Đen Nóng',
    produceType: 'caphe',
    produceId: 15,
    produceImg: './product/Caphe/cfden_nong.jpg',
    producePrice: 30000,
    produceRating: 5,
    produceInfo: 'Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi tuột xuống vòm họng.'
}, {
    produceName: 'Cà Phê Sữa Nóng',
    produceType: 'caphe',
    produceId: 16,
    produceImg: './product/Caphe/cfsua-bacsiu_nong.jpg',
    producePrice: 30000,
    produceRating: 5,
    produceInfo: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.'
}, {
    produceName: 'Caramel Macchiato Nóng',
    produceType: 'caphe',
    produceId: 17,
    produceImg: './product/Caphe/caramelmacchiatonong.jpg',
    producePrice: 30000,
    produceRating: 5,
    produceInfo: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.'
}, {
    produceName: 'Chocolate Đá',
    produceType: 'da_xay',
    produceId: 18,
    produceImg: './product/Daxay/chocolate-da.jpg',
    producePrice: 30000,
    produceRating: 5,
    produceInfo: 'Bột chocolate nguyên chất hoà cùng sữa tươi béo ngậy. Vị ngọt tự nhiên, không gắt cổ, để lại một chút đắng nhẹ, cay cay trên đầu lưỡi.'
}, {
    produceName: 'Chocolate Ice Blended',
    produceType: 'da_xay',
    produceId: 19,
    produceImg: './product/Daxay/Chocolate-ice-blended.jpg',
    producePrice: 30000,
    produceRating: 5,
    produceInfo: 'Sữa và kem tươi béo ngọt được “cá tính hoá” bởi vị chocolate/sô-cô-la đăng đắng. Dành cho các tín đồ hảo ngọt. Lựa chọn hàng đầu nếu bạn đang cần chút năng lượng tinh thần.'
}, {
    produceName: 'Matcha Đá Xay',
    produceType: 'da_xay',
    produceId: 20,
    produceImg: './product/Daxay/matchadaxay.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Matcha thanh, nhẫn, và đắng nhẹ được nhân đôi sảng khoái khi uống lạnh. Nhấn nhá thêm những nét bùi béo của kem và sữa. Gây thương nhớ vô cùng!'
}, {
    produceName: 'Matcha Latte Đá',
    produceType: 'da_xay',
    produceId: 21,
    produceImg: './product/Daxay/matcha-latte-da.jpg',
    producePrice: 30000,
    produceRating: 5,
    produceInfo: 'Với màu xanh mát mắt của bột trà Matcha, vị ngọt nhẹ nhàng, pha trộn cùng sữa tươi và lớp foam mềm mịn, Matcha Latte sẽ khiến bạn yêu ngay từ lần đầu tiên.'
}, {
    produceName: 'Sinh Tố Việt Quốc',
    produceType: 'da_xay',
    produceId: 22,
    produceImg: './product/Daxay/sinh-to-viet-quoc.jpg',
    producePrice: 30000,
    produceRating: 5,
    produceInfo: 'Mứt Việt Quất chua thanh, ngòn ngọt, phối hợp nhịp nhàng với dòng sữa chua bổ dưỡng. Là món sinh tố thơm ngon mà cả đầu lưỡi và làn da đều thích.'
}, {
    produceName: 'Hồng Trà Latte',
    produceType: 'tra',
    produceId: 23,
    produceImg: './product/Tra/hong-tra-latte.jpg',
    producePrice: 55000,
    produceRating: 5,
    produceInfo: 'Sự kết hợp hoàn hảo bởi hồng trà dịu nhẹ và sữa tươi, nhấn nhá thêm lớp macchiato trứ danh của The Coffee House mang đến cho bạn hương vị trà sữa đúng gu tinh tế và healthy.'
}, {
    produceName: 'Hồng Trà Sữa Trân Châu',
    produceType: 'tra',
    produceId: 24,
    produceImg: './product/Tra/hong-tra-sua-tran-chau.jpg',
    producePrice: 30000,
    produceRating: 5,
    produceInfo: ''
}, {
    produceName: 'Trà Oolong Nướng Trân Châu',
    produceType: 'tra',
    produceId: 25,
    produceImg: './product/Tra/olong-nuong-tran-chau.jpg',
    producePrice: 55000,
    produceRating: 5,
    produceInfo: 'Hương vị chân ái đúng gu đậm đà với trà oolong được “sao” (nướng) lâu hơn cho hương vị đậm đà, hòa quyện với sữa thơm béo mang đến cảm giác mát lạnh, lưu luyến vị trà sữa đậm đà nơi vòm họng.'
}, {
    produceName: 'Trà Đào Cam Sả',
    produceType: 'tra',
    produceId: 26,
    produceImg: './product/Tra/tra-dao-cam-xa.jpg',
    producePrice: 45000,
    produceRating: 5,
    produceInfo: 'Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.'
}, {
    produceName: 'Trà Đen Matchiato',
    produceType: 'tra',
    produceId: 27,
    produceImg: './product/Tra/tra-den-matchiato.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Trà đen được ủ mới mỗi ngày, giữ nguyên được vị chát mạnh mẽ đặc trưng của lá trà, phủ bên trên là lớp Macchiato "homemade" bồng bềnh quyến rũ vị phô mai mặn mặn mà béo béo.'
}, {
    produceName: 'Trà Long Nhãn Hạt Chia',
    produceType: 'tra',
    produceId: 28,
    produceImg: './product/Tra/tra-nhan-da.jpg',
    producePrice: 45000,
    produceRating: 5,
    produceInfo: 'Vị nhãn ngọt, tươi mát đặc trưng hoà quyện tinh tế cùng vị trà oolong hảo hạng và hạt chia mang đến cho bạn một thức uống không chỉ thơm ngon mà còn bổ dưỡng.'
}, {
    produceName: 'Trà Phúc Bồn Tử',
    produceType: 'tra',
    produceId: 29,
    produceImg: './product/Tra/tra-pbt.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Quả Phúc Bồn Tử hoàn toàn tự nhiên, được các barista Nhà kết hợp một cách đầy tinh tế cùng trà Oolong và cam vàng tạo ra một dư vị hoàn toàn tươi mới. Mát lạnh ngay từ ngụm đầu tiên, đọng lại cuối cùng là hương vị trà thơm lừng và vị ngọt thanh, chua dịu khó quên của trái phúc bồn tử.'
}, {
    produceName: 'Trà Hạt Sen',
    produceType: 'tra',
    produceId: 30,
    produceImg: './product/Tra/tra-sen.jpg',
    producePrice: 45000,
    produceRating: 5,
    produceInfo: 'Nền trà oolong hảo hạng kết hợp cùng hạt sen tươi, bùi bùi và lớp foam cheese béo ngậy. Trà hạt sen là thức uống thanh mát, nhẹ nhàng phù hợp cho cả buổi sáng và chiều tối.'
}, {
    produceName: 'Trà Sữa Mắc Ca Trân Châu',
    produceType: 'tra',
    produceId: 31,
    produceImg: './product/Tra/tra-sua-mac-ca.jpg',
    producePrice: 50000,
    produceRating: 5,
    produceInfo: 'Mỗi ngày với The Coffee House sẽ là điều tươi mới hơn với sữa hạt mắc ca thơm ngon, bổ dưỡng quyện cùng nền trà oolong cho vị cân bằng, ngọt dịu đi kèm cùng Trân châu trắng giòn dai mang lại cảm giác “đã” trong từng ngụm trà sữa.'
}];

function loai(matl, tentl) {
    this.matl = matl;
    this.tentl = tentl;
}

// function menuTop() {
//     arrTheLoai = [
//         new loai('all', 'Tất cả sản phầm'),
//         new loai('caphe', 'Cà phê'),
//         new loai('da_xay', 'Đá Xay'),
//         new loai('tra', 'Trà')
//     ]
//     var s = '<ul>';
//     for (let i = 0; i < arrTheLoai.length; i++) {
//         var tmp = '<a id="' + arrTheLoai[i].matl + '" onclick="xuatList(\'id\',this.id)" ><li>' + arrTheLoai[i].tentl + '</li></a>';
//         s += tmp;
//     }
//     s += '</ul>';
//     document.getElementsByClassName("menuSP")[0].innerHTML = s;
// }
function menuTop() {
    arrTheLoai = [
        new loai('all', 'Tất cả sản phầm'),
        new loai('caphe', 'Cà phê'),
        new loai('da_xay', 'Đá Xay'),
        new loai('tra', 'Trà')
    ]
    var s = '<ul>';
    for (let i = 0; i < arrTheLoai.length; i++) {
        var tmp = '<a id="' + arrTheLoai[i].matl + '" onclick="changeCondition(\''+arrTheLoai[i].matl+'\')" ><li>' + arrTheLoai[i].tentl + '</li></a>';
        s += tmp;
    }
    s += '</ul>';
    document.getElementsByClassName("menuSP")[0].innerHTML = s;
}
// var cntOfPage=1;
const cntInPage = 8;

function xuatSanPham(obj) {
    var tmp = '<div class="card" ><div class="img_box"><img src="' + obj.produceImg + '" alt=""><ul class="action" ><li><i onclick="thongtin(this)" name="' + obj.produceId + '" class="fa fa-eye" aria-hidden="true"></i></li><li><i onclick="themVaoGioHangTheoMaSP(this)" name="' + obj.produceId + '" class="fa fa-shopping-cart" aria-hidden="true"></i></li><li><i  onclick="" name="' + obj.produceId + '" class="fa fa-heart-o" aria-hidden="true"></i></li></ul></div><div class="content"><div class="product_name"><h3>' + obj.produceName + '</h3></div><div class="product_price_rating"><div>' + obj.producePrice + ' đ</div><div class="rating">';
    let j;
    for (j = 1; j <= obj.produceRating && j <= 5; j++) {
        tmp += '<i class="fa fa-star" aria-hidden="true"></i>';
    }
    for (; j <= 5; j++) {
        tmp += '<i class="fa fa-star gray" aria-hidden="true"></i>';
    }
    tmp += '</div></div></div></div>';
    return tmp;
}
var conditionTypeArr=[
    {type:'tra',status:0}
    ,{type:'caphe',status:0}
    ,{type:'da_xay',status:0}
];


function changeCondition(type){
    document.getElementById("priceMin").value="";
    document.getElementById("priceMax").value="";
    document.getElementById('searchProduct').value="";  
    mainProduce=JSON.parse(localStorage.getItem('myStorage'));
    if(type=='all'){
        for(let i=0;i<conditionTypeArr.length;i++){
                conditionTypeArr[i].status=0;
                document.getElementById(conditionTypeArr[i].type).style.backgroundColor="lightsteelblue";
        }
        xuatList('all');
    }
    else{
        let tmp=0;
        for(let i=0;i<conditionTypeArr.length;i++){
            if(conditionTypeArr[i].type==type){
                if(conditionTypeArr[i].status==1){
                    conditionTypeArr[i].status=0;
                }
                else{
                    conditionTypeArr[i].status=1;
                }
            }
        }

        for(let i=0;i<conditionTypeArr.length;i++){
            if(conditionTypeArr[i].status==1){
                document.getElementById(conditionTypeArr[i].type).style.backgroundColor="purple";
                tmp=tmp+1;
            }
            else    
            document.getElementById(conditionTypeArr[i].type).style.backgroundColor="lightsteelblue";
       }
        if(tmp==3 || tmp==0){
            changeCondition('all');
        }
        else{
            xuatList('type');
            // console.log(conditionTypeArr);
        }
    }
}
var arrTmp = [];
function xuatList(condition) {
    // alert(condition);
    arrTmp=[];
    if(condition=='all'){
        arrTmp=mainProduce;
    }
    else{        
        for(let i=0;i<conditionTypeArr.length;i++){
            if(conditionTypeArr[i].status===1){
                for(let j=0;j<mainProduce.length;j++){
                    
                    if(mainProduce[j].produceType===conditionTypeArr[i].type){
                        arrTmp.push(mainProduce[j]);
                    }
                }
            }
        }
    }
    console.log(arrTmp);
    let Page = Math.ceil(arrTmp.length / cntInPage);
    var s = '<ul>';
    if (Page > 1) {
        for (let i = 1; i <= Page; i++) {
            var tmp = '<a href="#page" onclick="xuatTrangSanPham(' + i + ',arrTmp)"><li>' + i + '</li></a>';
            s += tmp;
        }
    }
    s += '</ul>';
    document.getElementsByClassName("page")[0].innerHTML = s;
    xuatTrangSanPham(1, arrTmp);
}

// function xuatList(type, condition) {
//     // alert(condition);
//     arrTmp = [];
//     if (type == 'gia') {
//         // alert("Gia");
//         var min, max;
//         if (condition == 1) {
//             min = 0;
//             max = 35000;
//         } else if (condition == 2) {
//             min = 35001;
//             max = 50000;
//         } else if (condition == 3) {
//             min = 50001;
//             max = 999999;
//         }
//         for (let i = 0; i < mainProduce.length; i++) {
//             let tmp = Number(mainProduce[i].producePrice);
//             if (tmp >= Number(min) && tmp <= Number(max)) {
//                 arrTmp.push(mainProduce[i]);
//             }
//         }
//     } else if (type == 'id') {
//         // alert("");
//         for (let i = 0; i < mainProduce.length; i++) {
//             if (mainProduce[i].produceType === condition || condition === 'all') {
//                 arrTmp.push(mainProduce[i]);
//             }
//         }
//     }
//     let Page = Math.ceil(arrTmp.length / cntInPage);
//     var s = '<ul>';
//     if (Page > 1) {
//         for (let i = 1; i <= Page; i++) {
//             var tmp = '<a href="#page" onclick="xuatTrangSanPham(' + i + ',arrTmp)"><li>' + i + '</li></a>';
//             s += tmp;
//         }
//     }
//     s += '</ul>';
//     document.getElementsByClassName("page")[0].innerHTML = s;
//     xuatTrangSanPham(1, arrTmp);
// }



function xuatTrangSanPham(page, arr) {
    if (localStorage.getItem('status') === 2) {
        userCurent = JSON.parse(localStorage.getItem('userCurent'));
        cartUser = 'cart' + userCurent;
    }
    // alert(cartUser);
    var obj = document.getElementsByClassName("container")[0];
    // alert(obj);

    // alert(page);
    var s = '';
    let i = (page - 1) * cntInPage;
    for (; i < (page * cntInPage) && i < arr.length; i++) {
        // alert(i+(Page*cntInPage));
        s += xuatSanPham(arr[i]);
    }
    obj.innerHTML = s;
    if ((i - (page - 1) * cntInPage) == 1 || (i - (page - 1) * cntInPage) == 2) {
        document.getElementsByClassName("container")[0].setAttribute("style", "grid-template-columns: repeat(auto-fit,minmax(200px,300px));");
    } else {
        document.getElementsByClassName("container")[0].setAttribute("style", "grid-template-columns: repeat(auto-fit,minmax(200px,1fr));");
    }
}