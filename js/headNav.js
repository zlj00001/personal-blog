let tab_list = document.querySelector('#nav-select');
let lis = tab_list.querySelectorAll('li');
console.log(lis);
for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = () => {
        for (let j = 0; j < lis.length; j++)lis[j].className = '';
        lis[i].className = 'navigation-select';
    }
}
