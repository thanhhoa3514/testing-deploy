function changeMenu(object) {

    userCurent = localStorage.getItem('userCurent');
    // alert(userCurent);
    // userCurent = 101;


    cartUser = 'cart' + userCurent;
    var a = object;
    var s;
    console.log(a.id);
    switch (a.id) {
        case 'home':
            s = home();
            // document.getElementById("producePage").setAttribute("style","padding: 0% 10% 0% 10%;");
            break;
        case 'contact':
            // document.getElementById("producePage").setAttribute("style","padding: 0% 10% 0% 10%;");
            s = contact();
            break;
        case 'clickproduct':
            document.getElementById("clickbox").style.paddingLeft="10%";
            document.getElementById("clickbox").style.paddingRight="10%";
            s = product();
            break;
        case 'clickblog':
            // document.getElementById("producePage").setAttribute("style","padding: 0% 10% 0% 10%;");
            s = blog();
            break;
        case 'thongtin':
            // document.getElementById("producePage").setAttribute("style","padding: 0% 10% 0% 10%;");
            s = "Bạn đang xem thông tin liên hệ";
            break;
        default:
            s = "";
            break;
    }
    document.getElementById('clickbox').innerHTML = s;
}

function home() {
    var s = '<div id="titleproduct">Our best product in this month</div>' +
        '<div id="boxproduct">' +
        '<div class="product">' +
        '<div class="img-product">' +
        '<img src="./product/Daxay/matchadaxay.jpg" alt="matcha">' +
        '</div>' +
        '<div class="name">' + mainProduce[19].produceName + '</div>' +
        '<div class="price">' + mainProduce[19].producePrice + ' đ</div>' +
        '<div class="tocart">' +
        '<a href="#titleproduct"><i  onclick="themVaoGioHangTheoMaSP(this)" name="' + mainProduce[19].produceId + '" class="fas fa-plus-circle"></i></a>' +
        '</div>' +
        '</div>' +
        '<div class="product">' +
        '<div class="img-product">' +
        '<img src="./product/Caphe/caramel-macchiato.jpg" alt="caramel">' +
        '</div>' +
        '<div class="name">' + mainProduce[3].produceName + '</div>' +
        '<div class="price">' + mainProduce[3].producePrice + ' đ</div>' +
        '<div class="tocart">' +
        '<a href="#titleproduct"><i  onclick="themVaoGioHangTheoMaSP(this)" name="' + mainProduce[3].produceId + '" class="fas fa-plus-circle"></i></a>' +
        '</div>' +
        '</div>' +
        '<div class="product">' +
        '<div class="img-product">' +
        '<img src="./product/Tra/tra-dao-cam-xa.jpg" alt="tradao">' +
        '</div>' +
        '<div class="name">' + mainProduce[25].produceName + '</div>' +
        '<div class="price">' + mainProduce[25].producePrice + ' đ</div>' +
        '<div class="tocart">' +
        '<a href="#titleproduct"><i onclick="themVaoGioHangTheoMaSP(this)" name="' + mainProduce[25].produceId + '" class="fas fa-plus-circle"></i></a>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<a href="#" style="float: right; margin-top: 3%; margin-bottom: 3%;" onclick="changeMenu(document.getElementById(' + "'clickproduct'" + ')); xuatList(' + "'id'" + ', ' + "'all'" + '); menuTop();">View all ... </a>' +
        '<div id="titleblog">Our Blog</div>' +
        '<div id="boxblog">' +
        '<div class="blog">' +
        '<div class="img-product">' +
        '<img src="img/cappuccino-blog.jpg" alt="cappucino">' +
        '</div>' +
        '<div class="name">' +
        'Không "đen như địa ngục, đắng như tử thần" như cách người Thổ Nhĩ Kỳ định nghĩa về một hương vị café, với Cappuccino của người Ý, bạn sẽ cảm nhận chút đăng đắng của café được hòa tan, cân chỉnh với vị ngọt ngào, beo béo của kem, sữa và sự bồng bềnh của ' +
        'lớp bọt trên cùng. Cappuccino thường được thưởng thức trong những chiếc ly làm bằng đá hay sứ, có thành dày và được hâm nóng trước khi mang ra phục vụ cho khách.' +
        '</div>' +
        '</div>' +
        '<div class="blog">' +
        '<div class="img-product">' +
        '<img src="img/Black-coffee-blog.jpg" alt="blackcoffee">' +
        '</div>' +
        '<div class="name">' +
        'Cà phê ở Việt Nam được người Pháp đưa vào trồng từ những năm 1857, nhận thấy thổ nhưỡng vùng Tây Nguyên khá thích hợp để trồng cà phê, thực dân Pháp không bỏ lỡ cơ hội để người Việt Nam canh tác thứ "vàng đen" đang được Châu Âu ưa chuộng lúc bấy giờ cho ' +
        'họ. Trong những năm tháng bắt người Việt trồng cà phê, người Pháp cũng mang văn hóa thưởng thức cà phê vào cho các tầng lớp thành thị ở Việt Nam, nó dần biến thành một thứ thói quen không thể thiếu của thị dân mãi đến cả những năm ' +
        '70 sau khi chiến tranh chấm dứt.' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<a href="#" style="float: right; margin-top: 3%; margin-bottom: 3%;"' +
        'onclick="changeMenu(document.getElementById(' + "'clickblog'" + '));' +
        '">View all ... </a>' +

        '<div id="titlestore">Our stores</div>' +
        '<div id="boxstore">' +
        '<div class="store" id="store1">' +
        '<div class="img-product">' +
        '<img src="img/img1.jpg" alt="store1">' +
        '</div>' +
        '<div class="hotline">HOTLINE: 0937.693.101</div>' +
        '<div class="name" style="margin-bottom: 2%;">' +
        '<p>Thành phố Hồ Chí Minh</p>' +
        '105 Bà Huyện Thanh Quan, Võ Thị Sáu, Quận 3' +
        '</div>' +
        '</div>' +
        '<div class="store" id="store2">' +
        '<div class="img-product">' +
        '<img src="img/img2.jpg" alt="store2">' +
        '</div>' +
        '<div class="hotline">HOTLINE: 0937.693.101</div>' +
        '<div class="name" style="margin-bottom: 2%;">' +
        '<p>Thành phố Hồ Chí Minh</p>' +
        '180 Cao Lỗ, Phường 4, Quận 8' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<a href="#" style="float: right; margin-top: 3%; margin-bottom: 3%;"' +
        'onclick="changeMenu(document.getElementById(' + "'clickblog'" + '));' +
        '">View all ... </a>' +

        // "<div id='titlecontact'>Let's Contact</div>" +
        // '<div id="boxcontact">' +
        '</div>';
    return s;
}

function contact() {
    var s;
    s = '<h4 class="contact-place-tile">our offical</h4>' +
    '<div class="contact-place" style="height: 450px" >' +
    '<div class="contact-place-infomation" id="contact-place-infomation-wrapper">' +
    '<div id="contact-place-infomation-1">' +
    '<i class="fas fa-window-close" onclick="closePlaceInfomation()"></i>' +
    '<img src="./img/img1.jpg" alt="place 1"> <br>' +
    '<p>Trụ sở chính</p>' +
    '<span>' +
    '105 Bà Huyện Thanh Quan <br>Võ Thị Sáu <br>Quận 3' +
    '</span>' +
    '<p>working times</p>' +
    '<span>' +
    'Mon - Fri 08:00 to 22:00 <br>' +
    'Sat - 09:00 to 20:00 <br>' +
    'Sun - 12:00 to 18:00' +
    '</span>' +
    '</div>' +
    '<div id="contact-place-infomation-2">' +
    '<i class="fas fa-window-close" onclick="closePlaceInfomation()"></i>' +
    '<img src="./img/img2.jpg" alt="place 2" id="place-2"> <br>' +
    '<p>Chi nhánh 1</p>' +
    '<span>' +
    '180  Cao Lỗ <br>Phường 4 <br>Quận 8' +
    '</span>' +
    '<p>working times</p>' +
    '<span>' +
    'Mon - Wed 09:00 to 21:00 <br>' +
    'Thu - Sat 09:00 to 22:00 <br>' +
    'Sun - 10:00 to 19:00 <br>' +
    '</span>' +
    '</div>' +
    '</div>' +
    '<div class="span-1-of-2">' +
    '<img src="./img/img1.jpg" alt="place 1" id="place-1" onclick="showPlaceInfomation(this)"> <br>' +
    '<p>Trụ sở chính</p>' +  
    '<span>' +
    '105 Bà Huyện Thanh Quan <br>Võ Thị Sáu <br>Quận 3' +
    '</span>' +
    '</div>' +
    '<div class="span-1-of-2">' +
    '<img src="./img/img2.jpg" alt="place 2" id="place-2" onclick="showPlaceInfomation(this)"> <br>' +
    '<p>Chi nhánh 1</p>' +
    '<span>' +
    '180 Đường Cao Lỗ <br>Phường 4 <br>Quận 8' +
    '</span>' +
    '</div>' +
    '</div>' +
        '<h2 class="contact-tile">CONNECT WITH US</h2>' +
        '<!-- -----------------------contact form---------------------- -->' +
        '<div class="contact-form" style="overflow: hidden;">' +
        '<form>' +
        '<p>CONTACT FORM</p>' +
        '<div id="contact-text">' +
        '<label>Your name</label><span id="requiredName">* Required</span><input type="text" value="" id="textName" placeholder="peter parker">' +
        '<label>Email</label><span id="requiredEmail">* Required</span><input type="email" value="" id="textEmail" placeholder="customer@gmail.com">' +
        '<label>Message</label><textarea placeholder="Ask about us"></textarea>' +
        '<div id="button">' +
        '<button type="button" class="btn" onclick="checkInput()">send message</button>' +
        '</div>' +
        '<!-- <div style="text-align: center; padding: 5%; background-color:whitesmoke; margin-right: 5%; margin-top: 5%;">' +
        '<i class="fas fa-check-square" style="font-size: 175%;"></i>' +
        '<p style= "font-size: 110%;">Thank you! Your submission has been received!</p>' +
        '</div> -->' +
        '</div>' +
        '</form>' +
        '<div class="contact-infomation">' +
        '<p>CONTACT INFOMATION</p> <br>' +
        '<h3>TeaLab</h3>' +
        '<i class="fas fa-map-marker-alt"></i>' +
        '<p>180 Cao Lỗ Phường 4, Quận 8, Thành phố Hồ Chí Minh</p> <br>' +
        '<p>CALL US</p>' +
        '<i class="fas fa-phone"></i> <br>' +
        '<h3>028 3850 5520</h3> <br>' +
        '<p>EMAIL US</p>' +
        '<i class="fas fa-envelope-square"></i> <br>' +
        '<h3>tealab@gmail.com</h3> <br>' +
        '<ul class="social">' +
        '<li><a href="#"><i class="fab fa-facebook"></i></a></li>' +
        '<li><a href="#"><i class="fab fa-twitter"></i></a></li>' +
        '<li></i><a href="#"><i class="fab fa-instagram"></i></a></li>' +
        '<li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="clearfix"></div>' +
        '<!-- -----------------------directory------------------------ -->' +
        '<div class="clearfix"></div>' +
        '<div class="directory">' +
        '<div class="directory-tile">' +
        '<h4>directory</h4>' +
        '</div>' +
        '<div class="directory-infomation">' +
        '<div class=" ">' +
        '<p>CEO</p>' +
        '<h4>phạm yến nhi</h4>' +
        '<span>090-871-9006</span> <br>' +
        '<span>yen.nhi.tealab@gmail.com</span>' +
        '</div>' +
        '</div>' +
        '</div>';
    return s;
}

function product() {
    var string;
    string =
        '<div class="tool" id="page">' +
        '<div class="menuSP">' +
        '</div>' +
        '<div>' +
        '<ul>' +
        '<li>Xếp theo khoản giá</li>' +
        '</ul>' +
        '<form class="search" action="" style="' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: baseline;' +
        'flex-direction: row;' +
        'margin-top: 2%;' +
        '">' +
        '<input id="priceMin"  type="number" placeholder="Giá tối thiểu" style="' +
        'padding: 12px 20px;' +
        'border: none;' +
        'border-bottom: lightsteelblue 3px solid;' +
        'border-radius: 16px;' +
        'margin-right: 2%;' +
        '">' +
        '<input id="priceMax"  type="number" placeholder="Giá tối đa" style="' +
        'padding: 12px 20px;' +
        'border: none;' +
        'border-bottom: lightsteelblue 3px solid;' +
        'border-radius: 16px;' +
        'margin-right: 2%;' +
        '">' +
        '</form>' +
        '<ul>' +
        '<a onclick="searchForPrice()"><li>Tìm theo giá</li></a>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<form class="search" action="" style="' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: baseline;' +
        'flex-direction: row;' +
        'margin-top: 2%;' +
        '"><input id="searchProduct" onkeyup="searchForProductName()" type="text" placeholder="Search.." name="search" style="' +
        'padding: 12px 20px;' +
        'border: none;' +
        'border-bottom: lightsteelblue 3px solid;' +
        'border-radius: 16px;' +
        'margin-right: 2%;' +
        '"></form>' +
        '<div class="info">' +
        '<div class="infoCard">' +
        '<div>' +
        '<a class="icon" onclick="closeinfoCard()"> <i class="fa fa-times-circle" aria-hidden="true"></i> </a>' +
        '</div>' +
        '<div class="img_content">' +
        '<img class="imgInfo" src="" alt="">' +
        '<div class="Content">' +
        '</div>' +
        '</div>' +
        '<div class="ghichu">' +
        '<input type="text" name="txtghichu" id="ghichu" placeholder="Ghi chú thêm cho nhân viên...">' +
        '</div>' +
        '<div class="xacnhanSP">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div id="producePage">' +
        '<div class="container">' +
        '</div>' +
        '<div class="page">' +
        '</div>' +
        '</div>' ;

    return string;
}

function blog() {
    var s =
    '<h4 class="contact-place-tile">our store</h4>' +
        '<div class="contact-place">' +
        '<div class="contact-place-infomation" id="contact-place-infomation-wrapper">' +
        '<div id="contact-place-infomation-1">' +
        '<i class="fas fa-window-close" onclick="closePlaceInfomation()"></i>' +
        '<img src="./img/img1.jpg" alt="place 1"> <br>' +
        '<p>Thành phố Hồ Chí Minh</p>' +
        '<span>' +
        '105 Bà Huyện Thanh Quan <br>Võ Thị Sáu <br>Quận 3' +
        '</span>' +
        '<p>opening times</p>' +
        '<span>' +
        'Mon - Fri 08:00 to 22:00 <br>' +
        'Sat - 09:00 to 20:00 <br>' +
        'Sun - 12:00 to 18:00' +
        '</span>' +
        '</div>' +
        '<div id="contact-place-infomation-2">' +
        '<i class="fas fa-window-close" onclick="closePlaceInfomation()"></i>' +
        '<img src="./img/img2.jpg" alt="place 2" id="place-2"> <br>' +
        '<p>Thành phố Hồ Chí Minh</p>' +
        '<span>' +
        '180 Cao Lỗ <br>Phường 4 <br>Quận 8' +
        '</span>' +
        '<p>opening times</p>' +
        '<span>' +
        'Mon - Wed 09:00 to 21:00 <br>' +
        'Thu - Sat 09:00 to 22:00 <br>' +
        'Sun - 10:00 to 19:00 <br>' +
        '</span>' +
        '</div>' +
        '<div id="contact-place-infomation-3">' +
        '<i class="fas fa-window-close" onclick="closePlaceInfomation()"></i>' +
        '<img src="./img/img3.jpg" alt="place 3"> <br>' +
        '<p>Thành phố Hồ Chí Minh</p>' +
        '<span>' +
        '4 Đ. Tôn Đức Thắng <br>Bến Nghé <br>Quận 1' +
        '</span>' +
        '<p>opening times</p>' +
        '<span>' +
        'Mon - Tue 07:00 to 21:00 <br>' +
        'Wed - Sat 09:00 to 22:00 <br>' +
        'Sun - 10:00 to 20:00 <br>' +
        '</span>' +
        '</div>' +
        '<div id="contact-place-infomation-4">' +
        '<i class="fas fa-window-close" onclick="closePlaceInfomation()"></i>' +
        '<img src="./img/img4.jpg" alt="place 4"> <br>' +
        '<p>Thành phố Hồ Chí Minh</p>' +
        '<span>' +
        '20 Ngô Thời Nhiệm <br>Võ Thị Sáu <br>Quận 3' +
        '</span>' +
        '<p>opening times</p>' +
        '<span>' +
        'Mon - Thu 08:00 to 22:00 <br>' +
        'Fri - Sat 09:00 to 20:00 <br>' +
        'Sun - 12:00 to 18:00' +
        '</span>' +
        '</div>' +
        '</div>' +
        '<div class="span-1-of-2">' +
        '<img src="./img/img1.jpg" alt="place 1" id="place-1" onclick="showPlaceInfomation(this)"> <br>' +
        '<p>Thành phố Hồ Chí Minh</p>' +
        '<span>' +
        '105 Bà Huyện Thanh Quan <br>Võ Thị Sáu <br>Quận 3' +
        '</span>' +
        '</div>' +
        '<div class="span-1-of-2">' +
        '<img src="./img/img2.jpg" alt="place 2" id="place-2" onclick="showPlaceInfomation(this)"> <br>' +
        '<p>Thành phố Hồ Chí Minh</p>' +
        '<span>' +
        '180 Cao Lỗ <br>Phường 4 <br>Quận 8' +
        '</span>' +
        '</div>' +
        '<div class="span-1-of-2">' +
        '<img src="./img/img3.jpg" alt="place 3" id="place-3" onclick="showPlaceInfomation(this)"> <br>' +
        '<p>Thành phố Hồ Chí Minh</p>' +
        '<span>' +
        '4 Đ. Tôn Đức Thắng <br>Bến Nghé <br>Quận 1' +
        '</span>' +
        '</div>' +
        '<div class="span-1-of-2">' +
        '<img src="./img/img4.jpg" alt="place 4" id="place-4" onclick="showPlaceInfomation(this)"> <br>' +
        '<p>Thành phố Hồ Chí Minh</p>' +
        '<span>' +
        '20 Ngô Thời Nhiệm <br>Võ Thị Sáu <br>Quận 3' +
        '</span>' +
        '</div>' +
        '</div>' +
        '<div class="blog-infomation" id="blog-infomation-wrapper">' +
        '    <div id="blog-infomation-1">' +
        '        <i class="fas fa-window-close" onclick="closeBlogInfomation()"></i>' +
        '        <img src="./img/blog-1-1.jpg" alt="blog-1-1"> <br>' +
        '        <h3>How long does a cup of coffee keep you awake?</h3>' +
        '        <h4>Vel qui et ad voluptatem.</h4>' +
        '        <span>Libero minus et quae est ipsum molestiae eos. Tempore aut expedita culpa maiores. Saepe quia sed earum ratione sequi. Aperiam reprehenderit quod necessitatibus. Temporibus deserunt vero ut quia enim sapiente.</span>' +
        '        <h4>Nesciunt rerum recusandae omnis nam ad id.</h4>' +
        '        <span>Libero minus et quae est ipsum molestiae eos. Tempore aut expedita culpa maiores. Saepe quia sed earum ratione sequi. Aperiam reprehenderit quod necessitatibus. Temporibus deserunt vero ut quia enim sapiente. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.</span>' +
        '    </div>' +
        '    <div id="blog-infomation-2">' +
        '        <i class="fas fa-window-close" onclick="closeBlogInfomation()"></i>' +
        '        <img src="./img/blog-2-1.png" alt="blog-2-1"> <br>' +
        '        <h3>More coffee, lower death risk?</h3>' +
        '        <h4>Ut aut dignissimos natus harum.</h4>' +
        '        <span>Perferendis non porro sint doloremque optio qui. Quam saepe aperiam velit assumenda magni consequuntur accusamus debitis quia. Et voluptatem amet optio velit.</span>' +
        '        <h4>Molestiae amet dolorem.</h4>' +
        '        <span>Est voluptatibus rerum minima consequuntur tempora voluptatem. Cum nihil iusto repellat voluptatum quaerat quos ut soluta veniam. Rerum explicabo eius sit rem laboriosam. Non iure ipsa harum itaque laboriosam adipisci. Quas excepturi laborum officia debitis ratione cum officiis. Consequatur totam ut et qui facere quia. Nulla modi provident tenetur.</span>' +
        '        <h4>Minima mollitia quasi dicta officia quia tempora dolorum cum.</h4>' +
        '        <span>Architecto voluptas molestiae architecto blanditiis quo distinctio enim. Aut fugit vel architecto illo est sit earum. Et et dignissimos ipsa maiores impedit impedit alias in minima. Consequatur reiciendis aperiam. Accusamus nihil fugiat ab nesciunt eos vel vel aut.</span>' +
        '    </div>' +
        '    <div id="blog-infomation-3">' +
        '        <i class="fas fa-window-close" onclick="closeBlogInfomation()"></i>' +
        '        <img src="./img/3.jpg" alt="blog-3"> <br>' +
        '        <h3>Health Check: why do I get a headache when I haven\'t had my coffee?</h3>' +
        '        <h4>Est tenetur eos.</h4>' +
        '        <span>Eum aliquid aliquam qui sit mollitia sit. Ut possimus in autem omnis dicta eum velit. Architecto voluptate doloribus corrupti doloremque aspernatur fuga in.</span>' +
        '        <h4>Nam autem modi maiores nesciunt.</h4>' +
        '        <span>Asperiores in eos beatae sed. Expedita quia minus sed. Assumenda ab odit. Quae aut animi doloribus. Assumenda ut non sed tenetur qui nisi recusandae. Magnam molestiae voluptatibus vitae delectus doloremque. Asperiores in eos beatae sed. Expedita quia minus sed. Assumenda ab odit. Quae aut animi doloribus. Assumenda ut non sed tenetur qui nisi recusandae. Magnam molestiae voluptatibus vitae delectus doloremque.Repudiandae laboriosam at qui quisquam totam. Et nobis est excepturi nulla eum et. Quasi rerum ab similique est explicabo suscipit harum ducimus atque.</span>' +
        '        <h4>Corrupti esse rerum tempore qui sunt commodi sapiente alias.</h4>' +
        '        <span>Culpa accusantium eum et odio incidunt dolore. Ad fugit qui aspernatur repudiandae et hic ullam occaecati veniam. Velit reiciendis magni maiores doloremque exercitationem. Enim ea molestias ad aut fugiat voluptatibus. Repellat odio iusto distinctio eum sunt. Est ea voluptas voluptatem voluptatem sapiente quo.</span>' +
        '        <h4>Nesciunt qui commodi.</h4>' +
        '        <span>Asperiores in eos beatae sed. Expedita quia minus sed. Assumenda ab odit. Quae aut animi doloribus. Assumenda ut non sed tenetur qui nisi recusandae. Magnam molestiae voluptatibus vitae delectus doloremque.Veritatis error deleniti. Ipsa doloremque dolorem facilis minima distinctio et. Cum consequatur laboriosam aperiam eos. Suscipit qui soluta aut quas asperiores nihil ex error. Ut inventore ut eaque excepturi porro quidem iure. Facere laborum magni et est nulla doloribus.</span>' +
        '    </div>' +
        '</div>' +



        '<h2 class="blog-tile">Read coffee stories on our Blog</h2>' +
        '<!-- ------------------------FEATURED POSTS------------------- -->' +
        '<div class="feature-post">' +
        '<div class="feature-tile">' +
        '<h4>FEATURED POSTS</h4>' +
        '</div>' +
        '<div class="span-1-of-2">' +
        '<div class="post-picture" id="feature-blog-1" onclick="showBlogInfomation(this)">' +
        '<img src="./img/blog-1-1.jpg" alt="blog-1-1">' +
        '<p class="post-title">read full story</p>' +
        '</div>' +
        '<a id="link-feature-blog-1" onclick="showBlogInfomation(this)">How long does a cup of coffee keep you awake?</a>' +
        '<span>MAY 17, 2025</span>' +
        '</div>' +
        '<div class="span-1-of-2">' +
        '<div class="post-picture" id="feature-blog-2" onclick="showBlogInfomation(this)">' +
        '<img src="./img/blog-2-1.png" alt="blog-2-1">' +
        '<p class="post-title">read full story</p>' +
        '</div>' +
        '<a id="link-feature-blog-2" onclick="showBlogInfomation(this)">More coffee, lower death risk?</a>' +
        '<span>MAY 17, 2025</span>' +
        '</div>' +
        '</div>' +
        '<div class="clearfix"></div>' +
        '<!-- -------------------latest post & about us---------------- -->' +
        '<div class="latest-post-and-about-us">' +
        '<div class="span-2-of-3 latest-post">' +
        '<h3>Latest Post</h3>' +
        '<hr>' +
        '<div>' +
        '<div class="post-picture" id="blog-1" onclick="showBlogInfomation(this)">' +
        '<img src="./img/blog-1-1.jpg" alt="bog-1">' +
        '<p class="post-title">read full story</p>' +
        '</div>' +
        '<a id="link-blog-1" onclick="showBlogInfomation(this)">How long does a cup of coffee <br> keep you awake?</a>' +
        '<span>MAY 17, 2025</span>' +
        '</div>' +
        '<div class="clearfix"></div>' +
        '<div>' +
        '<div class="post-picture" id="blog-2" onclick="showBlogInfomation(this)">' +
        '<img src="./img/blog-2-1.png" alt="blog-2">' +
        '<p class="post-title">read full story</p>' +
        '</div>' +
        '<a id="link-blog-2" onclick="showBlogInfomation(this)">More coffee, lower death risk?</a>' +
        '<span>MAY 17, 2025</span>' +
        '</div>' +
        '<div class="clearfix"></div>' +
        '<div>' +
        '<div class="post-picture" id="blog-3" onclick="showBlogInfomation(this)">' +
        '<img src="./img/3.jpg" alt="blog-3">' +
        '<p class="post-title">read full story</p>' +
        '</div>' +
        '<a id="link-blog-3" onclick="showBlogInfomation(this)">Health Check: why do I get a <br> headache when I haven\'t had <br> my coffee?</a>' +
        '<span>MAY 17, 2025</span>' +
        '</div>' +
        '</div>' +
        '<div class="span-1-of-3 about-us">' +
        '<h3>About Us</h3>' +
        '<hr>' +
        '<h2>TeaLab.</h2>' +
        '<p>"TeaLab" is the most loved home base for espresso and discussions. Famously known as TeaLab, we ' +
        'endeavor to give the best involvement to our visitors. Our espressos sourced from a large number of ' +
        'little espresso grower, who made us our identity today and we\'re happy to be a piece of their lives.' +
        '</p>' +
        '</div>' +
        '</div>' +
        '<div class="clearfix"></div>';
    return s;
}