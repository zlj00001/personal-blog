function time() {
    let times = new Date();
    let hours = times.getHours();
    let minutes = times.getMinutes();
    let seconds = times.getSeconds();
    let year = times.getFullYear();
    let month = times.getMonth();
    let day = times.getDay();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    document.querySelector(".time-hour").innerHTML = hours;
    document.querySelector(".time-minute").innerHTML = minutes;
    document.querySelector(".time-second").innerHTML = seconds;

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    document.querySelector(".time-year").innerHTML = year;
    document.querySelector(".time-month").innerHTML = month;
    document.querySelector(".time-day").innerHTML = day;
}
time();
setInterval(time, 1000);


let oLeft = document.querySelector("#l");
let oRight = document.querySelector("#r");
let oImgList = document.querySelector("#imglist");
console.log(oImgList);

//获得第一张图片
let firstImg = oImgList.firstElementChild.cloneNode();
oImgList.appendChild(firstImg);


let index = 0;
let lock = false;//防止页面滚动过快

//轮播时候让小圆点跟着变化
let circles = document.querySelectorAll(".circle");
function setCircles() {
    for (let i = 0; i < circles.length; i++) {
        if (i == index) {
            circles[i].classList.add("active");
        } else {
            circles[i].classList.remove("active");
        }
    }
}

let oCircle = document.querySelector(".circle-list");
oCircle.addEventListener('click', (e) => {
    if (e.target.nodeName.toLowerCase() === 'li') {
        const n = Number(e.target.getAttribute("data-n"));
        index = n;
        setCircles();
        oImgList.style.transition = "0.5s ease";
        oImgList.style.left = index * -760 + 'px';
    }
});

//自动点击右键实现轮播
function handleRightBtn() {
    if (lock) return;
    index++;
    oImgList.style.left = index * -760 + 'px';
    oImgList.style.transition = '0.5s ease';
    if (index === 5) {
        index = 0;
        setTimeout(() => {
            oImgList.style.left = 0;
            oImgList.style.transition = 'none';
        }, 500);
    }

    setCircles();

    lock = true;
    setTimeout(() => {
        lock = false;
    }, 500);
}

oRight.addEventListener('click', handleRightBtn);

oLeft.addEventListener('click', () => {
    if (lock) return;
    index--;
    if (index === -1) {
        oImgList.style.left = 5 * -760 + 'px';
        oImgList.style.transition = 'none';
        index = 4;
        setCircles();
        setTimeout(() => {
            oImgList.style.left = index * -760 + 'px';
            oImgList.style.transition = '0.5s ease';
        }, 0);
    } else {
        setCircles();
        oImgList.style.left = index * -760 + 'px';
        lock = true;
        setTimeout(() => {
            lock = false;
        }, 500);
    }
})

let autoPlay = setInterval(handleRightBtn, 3000);

let ci = document.querySelector(".carousel-image");
let arr = document.querySelector('.arrow');
ci.addEventListener("mouseenter", () => {
    arr.className = 'arrow';
    clearInterval(autoPlay);
});
ci.addEventListener("mouseleave", () => {
    arr.className = 'arrow hidden-arrow';
    clearInterval(autoPlay);
    autoPlay = setInterval(handleRightBtn, 3000);
});
