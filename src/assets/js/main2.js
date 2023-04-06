/* Theme JS */

$(document).ready(function() {

  $(".counter").counterUp({
    delay: 10, /* The delay in milliseconds per number count up */
    time: 1000, /*The total duration of the count up animation */
    offset: 100, 
    /*The viewport percentile from which the counter starts (by default it's 100, meaning it's triggered at the very moment the element enters the viewport) */
  });
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<span class="cdown days"><span class="time-count">%-D</span><span>D : </span></span> <span class="cdown hour"><span class="time-count">%-H</span><span>H : </span></span> <span class="cdown minutes"><span class="time-count">%M</span><span>M : </span></span> <span class="cdown second"> <span><span class="time-count">%S</span><span>S</span></span>'
        )
      );
    });
  });
    // -------------------------------------------------------------
    $(".categorie-title").on("click", function () {
    
        $(".categori-menu-list").slideToggle();
      });
      $("#mobile-menu-active").meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
      });
    /* CounterUp Active */


    $.scrollUp({
      scrollText: '<i class="ion-arrow-up-c"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });
      $(".nice-select-menu").niceSelect();

      /*----------------------------
        4.1 Vertical-Menu Activation
        -----------------------------*/
     
      // $(".categorie-title").on("click", function () {
        
      //   $(".categori-menu-list").slideToggle();
      // });
    
  });