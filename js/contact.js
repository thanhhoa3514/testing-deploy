function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function checkInput() {
    var text1 = document.getElementById("textName").value;
    var text2 = document.getElementById("textEmail").value;
    if (text1 == "") {
        document.getElementById('requiredName').style.display = "inline";
        document.getElementById('textName').focus();
    } else if (text2 == "") {
        document.getElementById('requiredEmail').style.display = "inline";
        document.getElementById('textEmail').focus();
    } else {
        document.getElementById("button").innerHTML = '<button type="button" class="btn" style="background-color: gray;" onclick="checkInput()">please wait...</button>';
        await sleep(2000);
        document.getElementById("contact-text").innerHTML = '<div style="text-align: center; padding: 5%; background-color:whitesmoke; margin-right: 5%; margin-top: 5%;"><i class="fas fa-check-square" style="font-size: 175%;"></i><p style= "font-size: 110%;">Thank you! Your submission has been received!</p></div>';
    }
    if (text1 != "") {
        document.getElementById('requiredName').style.display = "none";
    }
    if (text2 != "") {
        document.getElementById('requiredEmail').style.display = "none";
    }
}

function showPlaceInfomation(obj) {
    switch (obj.id) {
        case 'place-1':
            document.getElementById("contact-place-infomation-1").style.display = "block";
            document.getElementById("contact-place-infomation-wrapper").style.display = "block";
            break;

        case 'place-2':
            document.getElementById("contact-place-infomation-2").style.display = "block";
            document.getElementById("contact-place-infomation-wrapper").style.display = "block";
            break;

        case 'place-3':
            document.getElementById("contact-place-infomation-3").style.display = "block";
            document.getElementById("contact-place-infomation-wrapper").style.display = "block";
            break;

        case 'place-4':
            document.getElementById("contact-place-infomation-4").style.display = "block";
            document.getElementById("contact-place-infomation-wrapper").style.display = "block";
            break;

        default:
            break;
    }
}

function closePlaceInfomation() {
    document.getElementById("contact-place-infomation-1").style.display = "none";
    document.getElementById("contact-place-infomation-2").style.display = "none";
    document.getElementById("contact-place-infomation-3").style.display = "none";
    document.getElementById("contact-place-infomation-4").style.display = "none";
    document.getElementById("contact-place-infomation-wrapper").style.display = "none";
}