$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});




$(document).ready(function(){
    $(".m-nav").click(function(){
        $("#menu-toggle").css("right","0%");
    });
    $(".m-nav_1").click(function(){
        $("#menu-toggle").css("right","0%");
    });
    $(".o-nav").click(function(){
        $("#menu-toggle").css("right","-100%");
    });
    $("#portfolio_grid").mixItUp();
    
    $(".s_portfolio li").click(function() {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });
});


$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    speed:2000,
    smartSpeed:2000,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
});
});


        $(".features1").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    
  });

        $(".work1").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    
  });

        $(".team1").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    
  });

        $(".testimonials1").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    
  });
          $(".contact1").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    
  });


 $(window).scroll(function(){
         if ($(this).scrollTop() >= 650) {
             $('.menu-fixed').fadeIn(1000);
          } else {
             $('.menu-fixed').fadeOut(1000);
          }
      });