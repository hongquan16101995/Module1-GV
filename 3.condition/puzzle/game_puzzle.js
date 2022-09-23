let img1 = 0;
let img2 = 2;
let img3 = 1;
let img4 = 2;
let img5 = 0;

function changeImg() {
    img1++
    let image = document.getElementById("img1");
    image.src = "image/first" + img1 + ".jpg";
    if (img1 >= 3) {
        img1 = 0;
    }
    checkWin()
}

function changeImg1() {
    img2++;
    let image = document.querySelector("#img2");
    image.src = "image/two" + img2 + ".jpg";
    if (img2 >= 3) {
        img2 = 0;
    }
    checkWin()
}

function changeImg2(image) {
    img3++;
    image.src = "image/three" + img3 + ".jpg";
    if (img3 >= 3) {
        img3 = 0;
    }
    checkWin()
}

function changeImg3(image) {
    img4++;
    image.src = "image/four" + img4 + ".jpg";
    if (img4 >= 3) {
        img4 = 0;
    }
    checkWin()
}

function changeImg4(image) {
    img5++;
    image.src = "image/five" + img5 + ".jpg";
    if (img5 >= 3) {
        img5 = 0;
    }
    checkWin()
}

function checkWin() {
    let check = (img1 === img2 && img2 === img3 && img3 === img4 && img4 === img5);
    if (check) {
        document.getElementById("img1").style.boxShadow = "4px 4px 9px red"
        document.getElementById("img2").style.boxShadow = "4px 4px 9px red"
        document.getElementById("img3").style.boxShadow = "4px 4px 9px red"
        document.getElementById("img4").style.boxShadow = "4px 4px 9px red"
        document.getElementById("img5").style.boxShadow = "4px 4px 9px red"
    }
}