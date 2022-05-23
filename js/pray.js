// 祝词
var words = [
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug',
    '代码没有bug'];


//生成指定范围的随机数
function randomNum(min, max) {
    let num = (Math.random() * (max - min + 1) + min).toFixed(2);
    return num;
}



function init() {
    let container = document.querySelector('.pray-container');
    let f = document.createDocumentFragment();//创建文档片段对象

    function run(w) {
        let word_box = document.createElement('div');
        let word = document.createElement('div');

        word.innerText = w;
        word.classList.add('word');

        //随机颜色
        // let hue = randomNum(0, 400);
        // word.style.color = 'hsl(' + hue + ',100%,65%)';
        // word.style.color = '#E8F9FD';

        word_box.classList.add('word-box');

        //给自定义属性赋随机值
        word_box.style.setProperty('--margin-top', randomNum(-80, 40) + 'vh');
        word_box.style.setProperty('--margin-left', randomNum(4, 25) + 'vw');
        word_box.style.setProperty('--animation-duration', randomNum(8, 20) + 's');
        word_box.style.setProperty('--animation-delay', randomNum(-20, 0) + 's');

        word_box.appendChild(word);
        f.appendChild(word_box);
        console.log('aaa');
    }

    words.forEach(w => {
        run(w);
    })

    container.appendChild(f);

    //留言框部分
    let btn = document.querySelector('.text-button');
    let text = document.querySelector('.input-text');
    let ul = document.querySelector('.add-text');

    words.forEach(w => {
        let li = document.createElement('li');
        li.innerText = w;
        ul.appendChild(li);
    })

    btn.onclick = () => {
        // 创建元素
        let li = document.createElement('li');
        if (text.value != '') {
            li.innerText = text.value
            // ul.appendChild(li);
            ul.insertBefore(li, ul.children[0]);
            run(text.value);
            container.appendChild(f);
            text.value = '';
        }
    }
}

window.addEventListener('load', init);