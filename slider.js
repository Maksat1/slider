// 42
// let texts = ['text1', 'text2', 'text3'];
// let slider = document.querySelector('#slider');

// const { iteratee } = require("underscore");

// let i = 0;

// setInterval(function() {
//     slider.textContent = texts[i]
//     i++;
//     if (i == 3) {
//         i = 0;
//     }
// }, 1000);


//43
// let texts = ['text1', 'text2', 'text3'];
// let slider = document.querySelector('#slider');
// let left = document.querySelector('#left');
// let right = document.querySelector('#right')

// let i = 0; //внешняя переменная
// slider.textContent = texts[0];

// left.addEventListener('click', function() {
    
//     i--; //уменьшаем i на 1
//     slider.textContent = texts[i]; // выводим текст с номером i

//     if (i == -1) {
//         i = 2;
//         slider.textContent = texts[i]
//     }
    

// });

// right.addEventListener('click', function() {
//     i++; //увеличиваем i на 1
    
//     slider.textContent = texts[i]; //выводим текст с номером i
//     if (i == 3) {
//         i = 0;
//         slider.textContent = texts[i]
//     }
//     console.log(i)
// });

//43.2

// let texts = ['text1', 'text2', 'text3'];
// let slider = document.querySelector('#slider');
// let left = document.querySelector('#left');
// let right = document.querySelector('#right')

// let i = 0;
// slider.textContent = texts[0];

// left.addEventListener('click', function() {
//     if (i > 0) {
//         i--;
//         slider.textContent = texts[i]; 
//     }
//     slider.textContent = texts[i];
// });

// right.addEventListener('click', function() {
    
//     if (i < texts.length - 1) {
//         i++;
//         slider.textContent = texts[i];
//     }
// });

//44
// let texts = ['1.png', '2.png', '3.png'];
// let slider = document.querySelector('#slider');

// let i = 0;
// slider.setAttribute("src", texts[0])

// let intervalId = setInterval(function() {
//     i = (i + 1) % texts.length;
//     slider.setAttribute("src", texts[i]);
// }, 5000);

// left.addEventListener('click', function() {
//     clearInterval(intervalId);

//     i--;   
//     if (i < 0) {
//         i = texts.length - 1;
//     }
//     slider.setAttribute("src", texts[i]);

//     intervalId = setInterval(function() {
//         i = (i + 1) % texts.length;
//         slider.setAttribute("src", texts[i]);
//     }, 5000);
// });

// right.addEventListener('click', function() {
//     clearInterval(intervalId);

//     i = (i + 1) % texts.length;
//     slider.setAttribute("src", texts[i]);
    
//     intervalId = setInterval(function() {
//         i = (i + 1) % texts.length;
//         slider.setAttribute("src",texts[i])
//     }, 5000)
// });

// 45
let slider = document.querySelector('#slider');
let images = document.querySelectorAll('img');

let arr = [0, 1, 2];

let i = 0;

let intervalId = setInterval(function() {
    
    let current = arr[i];
    images[current].classList.add('active');
    images[current].classList.remove('hidden');
    
    arr.splice(i, 1);
    console.log(arr[0],arr[1]);
    images[arr[0]].classList.add('hidden');
    images[arr[0]].classList.remove('active');
    images[arr[1]].classList.add('hidden');
    images[arr[1]].classList.remove('active');
    arr.splice(i, 0, i);
        
    i = (i + 1) % arr.length;
    
}, 4000);
