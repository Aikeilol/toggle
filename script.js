"use strict";
const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

btns.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle("blue");
    })
})

wrapper.addEventListener('click', (e) => {
if(e.target && e.target.classList.contains("blue")){
    console.log("hello");
}
});