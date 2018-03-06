$(document).foundation()


$("[data-menu-underline-from-center] a").addClass("underline-from-center");


$('[data-curtain-menu-button]').click(function(){
  $('body').toggleClass('curtain-menu-open');
})


var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('textfast');  
})
