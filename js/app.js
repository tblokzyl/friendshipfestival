$(document).foundation()


$("[data-menu-underline-from-center] a").addClass("underline-from-center");


$('[data-curtain-menu-button]').click(function(){
  $('body').toggleClass('curtain-menu-open');
})

// shows and hides filtered items
$(".filter-simple-button").click(function() {
  var value = $(this).attr('data-filter');
  if(value === "all") {
    $('.filter-simple-item').show('1000');
  } else {
    $(".filter-simple-item").not('.'+value).hide('3000');
    $('.filter-simple-item').filter('.'+value).show('3000');
  }
});

// changes active class on filter buttons
$('.filter-simple-button').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});

var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})

function myFunction() {
   var element = document.getElementById("menu");
   element.classList.toggle("clicked");
   var element = document.getElementById("menu1");
   element.classList.toggle("clicked");
   var element = document.getElementById("menu2");
   element.classList.toggle("clicked");
}
