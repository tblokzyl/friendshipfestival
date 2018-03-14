$(document).foundation()


$("[data-menu-underline-from-center] a").addClass("underline-from-center");


$('[data-curtain-menu-button]').click(function(){
  $('body').toggleClass('curtain-menu-open');
})

// shows and hides filtered items
$(".filter-simple-button").click(function() {
  var value = $(this).attr('data-filter');
  if(value === "all") {
    $('.filter-simple-item').show();
  } else {
    $(".filter-simple-item").not('.'+value).hide();
    $('.filter-simple-item').filter('.'+value).show();
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

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });