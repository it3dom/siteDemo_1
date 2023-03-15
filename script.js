'use strict';

let menuActive = document.querySelector('.menu_open'); //находим меню
let headerMenu = document.querySelector('.Hamburg'); // находим кнопку бургера
let menuClose = document.querySelector('.menu_close'); // находим кнопку крестика

function toggleMenu(){
menuActive.classList.toggle('Ham_menu'); // ф-я удаляет или устанавливает с название Ham_menu

}

headerMenu.addEventListener('click',toggleMenu );// по клику срабатывает ф-я
menuClose.addEventListener('click',toggleMenu); // по клику срабатывает  кнопка крестик