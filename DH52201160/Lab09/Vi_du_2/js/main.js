'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

    /*  Mã này đang xử lý trình tải trước, là một thành phần giao diện người dùng thường 
        hiển thị hoạt ảnh đang tải trong khi nội dung của trang web đang được tải. 
        Trong trường hợp này, nó nhắm mục tiêu các phần tử có lớp .loader và #preloder 
        (có lẽ đại diện cho các phần tử trình tải và trình tải trước) và làm mờ chúng sau khi cửa sổ tải xong. 
        Ngoài ra còn có mã bổ sung cho bộ lọc thư viện bên trong trình xử lý sự kiện này. */

        /*------------------
            Gallery filter
        --------------------*/
        $('.featured__controls li').on('click', function () {
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }

    /*  Mã này có liên quan đến bộ lọc thư viện. Khi một mục danh sách bên trong một phần tử có lớp 
        .featured__controls được nhấp vào, nó sẽ xóa lớp 'hoạt động' khỏi tất cả các mục danh sách và thêm nó vào mục được nhấp vào. Nó cũng kiểm tra xem một phần tử có lớp.
        .featured__filter có tồn tại hay không và nếu có, nó sẽ khởi tạo một plugin MixItUp (giả sử nó được bao gồm ở nơi khác trong mã). */
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');

    /* Mã này đặt hình nền cho các phần tử có lớp .set-bg. Nó lấy URL hình ảnh từ thuộc tính data-setbg và đặt nó làm hình nền. */
    });

    /*------------------
        Humberger Menu
    --------------------*/
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");

        /*  Mã này xử lý việc mở và đóng menu hamburger. 
            Khi nhấp vào một phần tử có lớp .humberger__open, nó sẽ thêm các lớp để hiển thị menu.
            Nhấp vào phần tử lớp phủ có lớp .humberger__menu__overlay sẽ đóng menu. */
    });


    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true

        /*  Mã này khởi tạo plugin SlickNav trên một phần tử có lớp .mobile-menu, 
            định cấu hình nó để thêm menu điều hướng vào phần tử có ID #mobile-menu-wrap 
            và cho phép các liên kết gốc. */
    });


    
    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            
            0: {
                items: 1,
            },
            
            480: {
                items: 2,
            },

            768: {
                items: 3,
            },
            
            992: {
                items: 4,
            }
        }
        /*  Mã này khởi tạo plugin Owl Carousel trên một phần tử có lớp .categories__slider. 
            Nó định cấu hình băng chuyền để lặp, hiển thị mũi tên điều hướng và điều chỉnh 
            số lượng mục dựa trên kích thước màn hình. Cài đặt đáp ứng xác định số lượng mục 
            được hiển thị ở các kích thước màn hình khác nhau. */
    });
    
    $('.hero__categories__all').on('click', function(){
        $('.hero__categories ul').slideToggle(400);
    });

})(jQuery);