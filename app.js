var menu = document.querySelector("#mobile-menu");
var menulinks = document.querySelector(".navbar__menu");
 
// display mobile menu
// arrow function
//var mobileMenu = () =>{
  //  menu.classList.toggle ("is-active");
    //menulinks.classList.toggle ("active");
//}
//menu.addEventListener("click",mobileMenu);
menu.addEventListener("click",function(){
    menu.classList.toggle("is-active");
    menulinks.classList.toggle("active");
}

)