function showBlogInfomation(obj) {
    switch (obj.id) {
        case 'blog-1':
            document.getElementById("blog-infomation-1").style.display = "block";
            document.getElementById("blog-infomation-wrapper").style.display = "block";
            break;

        case 'feature-blog-1':
            document.getElementById("blog-infomation-1").style.display = "block";
            document.getElementById("blog-infomation-wrapper").style.display = "block";
            break;

        case 'link-feature-blog-1':
            document.getElementById("blog-infomation-1").style.display = "block";
            document.getElementById("blog-infomation-wrapper").style.display = "block";
            break;

        case 'link-blog-1':
            document.getElementById("blog-infomation-1").style.display = "block";
            document.getElementById("blog-infomation-wrapper").style.display = "block";
            break;

        case 'feature-blog-2':
            document.getElementById("blog-infomation-2").style.display = "block";
            document.getElementById("blog-infomation-wrapper").style.display = "block";
            break;

        case 'link-feature-blog-2':
            document.getElementById("blog-infomation-2").style.display = "block";
            document.getElementById("blog-infomation-wrapper").style.display = "block";
            break;

        case 'link-blog-2':
            document.getElementById("blog-infomation-2").style.display = "block";
            document.getElementById("blog-infomation-wrapper").style.display = "block";
            break;

        case 'blog-2':
            document.getElementById("blog-infomation-2").style.display = "block";
            document.getElementById("blog-infomation-wrapper").style.display = "block";
            break;

        case 'blog-3':
            document.getElementById("blog-infomation-3").style.display = "block";
            document.getElementById("blog-infomation-wrapper").style.display = "block";
            break;

        case 'link-blog-3':
            document.getElementById("blog-infomation-3").style.display = "block";
            document.getElementById("blog-infomation-wrapper").style.display = "block";
            break;

        default:
            break;
    }
}

function closeBlogInfomation() {
    document.getElementById("blog-infomation-1").style.display = "none";
    document.getElementById("blog-infomation-2").style.display = "none";
    document.getElementById("blog-infomation-3").style.display = "none";
    document.getElementById("blog-infomation-wrapper").style.display = "none";
}