const menuBtn = document.querySelector(".humbergar");
const naviMenu = document.querySelector(".header__navi");  //クリックされた時のメニュー画面
const menuItems = document.querySelectorAll(".navi__menu__item");
const sections = document.querySelectorAll(".section");


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

window.addEventListener("scroll", () => {
  animationScroll();
});

function animationScroll() {
  const scrollY = window.scrollY;//スクロール量
  const windowHeight = window.innerHeight;//ウィンドウの高さ

  sections.forEach((section) => {
    const offsetTop = section.offsetTop;//要素の縦方向の位置。
    const inviewHeight = 250;

    if(scrollY + windowHeight > offsetTop + inviewHeight) {
      section.classList.add("section--active");
    }
  });
}

