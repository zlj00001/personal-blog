let li = document.querySelector('.link1');
let logo_link = document.querySelector('.logo-link');
console.log(li);
li.addEventListener('mouseenter', () => {
    console.log('aa');
    logo_link.style.display = 'block';
})

li.addEventListener('mouseleave', () => {
    console.log('bb');
    logo_link.style.display = 'none';
})