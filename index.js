const menuBtn = document.querySelector(".humbergar");
const naviMenu = document.querySelector(".header__navi");  //クリックされた時のメニュー画面
const menuItems = document.querySelectorAll(".navi__menu__item");

//humbergar--menuをクリックした時の動作
menuBtn.addEventListener("click" , function() {
  this.classList.toggle("active__humbergar"); //ボタンの切り替え動作
  naviMenu.classList.toggle("active__navi");
  menuItems = classList.add("active__item");
  console.log(menuItems);
});

//navimenuの背景をクリックした時の動作
naviMenu.addEventListener("click" , function() {
this.classList.remove("active__navi");
menuBtn.classList.toggle("active__humbergar");
});
