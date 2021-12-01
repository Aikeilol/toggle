"use strict";
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[2].classList.add("red"));
// // console.log(btns[0].classList.remove("blue"));
// // console.log(btns[0].classList.toggle("blue"));

// if (btns[2].classList.contains("red")){
//     console.log("red");
// }

// btns[0].addEventListener('click', (e) =>{
// if (!btns[1].classList.contains("red")){
//     btns[1].classList.add("red");
// }else{
//     btns[1].classList.remove("red");
// }
// btns[1].classList.toggle("blue");
// });

btns[0].addEventListener("click", (e) => {
btns.forEach(item => {
item.classList.toggle("blue");
});
});

wrapper.addEventListener('click', (e) => {
if(e.target && e.target.classList.contains("blue")){
    console.log("hello");
}
});