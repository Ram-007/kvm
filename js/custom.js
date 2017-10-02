(function($){
	$(document).ready(function(){
		/* ----------------------------------------------------------- */
	  	/*  DROPDOWN MENU
	  	/* ----------------------------------------------------------- */

	   	// for hover dropdown menu
	  	$('ul.nav li.dropdown').hover(function() {
	      	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
	    }, function() {
	      	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
	    });
		
		/* ----------------------------------------------------------- */
		/*  SUPERSLIDES SLIDER
		/* ----------------------------------------------------------- */
		$('#slides').superslides({
	      	animation: 'fade',
	      	animation_easing: 'linear',
	      	pagination: 'true',
	      	play:5000
	    });
		$('#slides').on('mouseenter', function() {
		    $(this).superslides('stop');
		});
		$('#slides').on('mouseleave', function() {
		    $(this).superslides('start');
		});

		/* ----------------------------------------------------------- */
		/*  SKILL CIRCLE
		/* ----------------------------------------------------------- */
		
		//Repeat Learners
		$('#myStat1').circliful({percent:82 }); 
		//success rate
		$('#myStat2').circliful({percent:85 }); 
		//student engagement
		$('#myStat3').circliful({percent:92 }); 
		//certified courses
		$('#myStat4').circliful({percent:88 }); 
		
		/* ----------------------------------------------------------- */
		/*  WOW SMOOTH ANIMATIN
		/* ----------------------------------------------------------- */

		wow = new WOW({
	        animateClass: 'animated',
	        offset:       100
	    });
	    wow.init();


		/* ----------------------------------------------------------- */
		/*  COURSE SLIDER
		/* ----------------------------------------------------------- */
		
	    $('.course_nav').slick({
		  	dots: false,
		  	infinite: false,
		  	speed: 300,
		  	slidesToShow: 3,
		  	arrows:true,  
		  	slidesToScroll: 3,
		  	slide: 'li',
		  	responsive: [
		    {
		      	breakpoint: 1024,
		      	settings: {
		        	slidesToShow: 3,
		        	slidesToScroll: 3,
		        	infinite: true,
		        	dots: true
		      	}
		    },
		    {
		      	breakpoint: 600,
		      	settings: {
		        	slidesToShow: 2,
		        	slidesToScroll: 2
		      	}
		    },
		    {
		      	breakpoint: 480,
		      	settings: {
		        	slidesToShow: 1,
		        	slidesToScroll: 1
		      	}
		    }
		  ]
		});

		/* ----------------------------------------------------------- */
		/*  TUTORS SLIDER
		/* ----------------------------------------------------------- */

		$('.tutors_nav').slick({
		  	dots: true,	  
		  	infinite: true,
		  	speed: 300,
		  	slidesToShow: 5,
		  	arrows:false,  
		  	slidesToScroll: 1,
		  	slide: 'li',
		  	responsive: [
		    {
		      	breakpoint: 1024,
		      	settings: {
		        	slidesToShow: 3,
		        	slidesToScroll: 3,
		        	infinite: true,
		        	arrows:false
		      	}
		    },
		    {
		      	breakpoint: 600,
		      	settings: {
		        	slidesToShow: 2,
		        	slidesToScroll: 2
		      	}
		    },
		    {
		      	breakpoint: 480,
		      	settings: {
		        	slidesToShow: 1,
		        	slidesToScroll: 1
		      	}
		    }
		  ]
		});
			
		/* ----------------------------------------------------------- */
		/*  PRELOADER 
		/* ----------------------------------------------------------- */
		
        new QueryLoader2(document.querySelector("body"), {
            barColor: "#efefef",
            backgroundColor: "#111",
            percentage: true,
            barHeight: 1,
            minimumTime: 200,
            fadeOutTime: 1000
        });

	    /* ----------------------------------------------------------- */
		/*   EVENTS SLIDER
		/* ----------------------------------------------------------- */
		   
		$('.events_slider').slick({
		  	dots: true,
		  	infinite: true,
		  	speed: 500,
		  	fade: true,
		  	cssEase: 'linear'
		});

	    /* ----------------------------------------------------------- */
		/*  GALLERY SLIDER
		/* ----------------------------------------------------------- */
		$('#gallerySLide a').tosrus({
	        buttons: 'inline',
	        pagination  : {
	        	add     : true,
	            type    : 'thumbnails'            
	        },
	        caption   : {
	            add     : true
	        }
	    }); 	

		/* ----------------------------------------------------------- */
		/*  SCROLL UP BUTTON
		/* ----------------------------------------------------------- */

		$(window).scroll(function(){
		  	if ($(this).scrollTop() > 300) {
		      $('.scrollToTop').fadeIn();
		    } else {
		      $('.scrollToTop').fadeOut();
		    }
		});
		   
		//Click event to scroll to top

		$('.scrollToTop').click(function(){
		    $('html, body').animate({scrollTop : 0},800);
		    return false;
		});
	});
})(jQuery);