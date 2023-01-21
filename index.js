const menuBtn = document.querySelector(".humbergar");
const menuBg = document.querySelector(".header__menu--bg");
const naviMenu = document.querySelector(".header__navi");
const menuItems = document.querySelectorAll(".navi__menu__item");


menuBtn.addEventListener("click" , function() {
  this.classList.toggle("active__humbergar");
  menuBg.classList.toggle("active__bg");
  naviMenu.classList.toggle("active__navi");
  menuItems = classList.add("active__item");
  console.log(menuItems);
});


naviMenu.addEventListener("click" , () => {
menuBg.classList.remove("active__bg");
});
//header__naviがpaddingで大きさ指定しているためmenu__bgとレイアウトが重なってバックグラウンドが押せない。
