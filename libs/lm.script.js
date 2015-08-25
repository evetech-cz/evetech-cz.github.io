$(function () { // wait for document ready
            // init
            var controller = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: 'onLeave'
                }
            });
            var controllerMenu = new ScrollMagic.Controller({
                globalSceneOptions: {

                }
            });

            // get all slides
            var slides = document.querySelectorAll("section.screen-panel");

            // create scene for every slide
            for (var i=0; i<slides.length; i++) {
                new ScrollMagic.Scene({
                        triggerElement: slides[i]
                    })
                    .setPin(slides[i])
                    .addTo(controller);
                
            }
            
            
            //margin-left: calc(50% - 127px);
            
            function initStart() {
                if ($(window).width() < 760) {
                    $(".fixed > .container-float > .navbar-header > a > .navbar-brand-logo > #small-logo").attr("src", "./css/images/small-logo-eonly.png");
                    $(".fixed > .container-float > .navbar-header > a > .navbar-brand-logo > #small-logo").css("margin-top", "0px");
                } else {
                    $(".fixed > .container-float > .navbar-header > a > .navbar-brand-logo > #small-logo").attr("src", "./css/images/small-banner.png");
                    $(".fixed > .container-float > .navbar-header > a > .navbar-brand-logo > #small-logo").css("margin-top", "-10px");
                }
                
            };
            
            function callbackStart (event) {
                initStart();
                
                if ($(".fixed").attr("state") == "") {
                    $(".fixed").attr("state", "fixed");
                }
                
                if ($(".fixed").attr("state") == "fixed") {                    
                    $(".fixed > .container-float > .navbar-header > a > .navbar-brand-logo > #small-logo").stop().animate({
                        "margin-left": "-300px"
                    }, 800);
                    $(".fixed > .container-float > #navbar").stop().animate({
                        "margin-left": "0px"
                    }, 800);
                    
                    $(".fixed").attr("state", "relative");
                } else {
                    //$(".fixed > .container-float > .navbar-header > a > .navbar-brand-logo").html(
                      //  '<img src="./css/images/big-banner.png" id="small-logo" height="90px" alt="EVE Solutions s.r.o. logo">'
                    //);
                    
                    $(".fixed > .container-float > .navbar-header > a > .navbar-brand-logo > #small-logo").stop().animate({
                        "margin-left": "5%"
                    }, 800);
                    $(".fixed > .container-float > #navbar").stop().animate({
                        "margin-left": "20%"
                    }, 800);
                    
                    $(".fixed").attr("state", "fixed");
                }
                $( window ).resize(function() {
                    initStart();
                });
            };
            
            // build scene for fixed menu function
            new ScrollMagic.Scene({triggerElement: ".home"})
                .setPin("#main-nav")
                .setClassToggle("#main-nav", "fixed")
				.addTo(controller)
                .on("start", callbackStart);
            
            
            //ABOUT US SCEENE
            new ScrollMagic.Scene({triggerElement: ".aboutus-container", duration: $(".aboutus-container").height()})
                            .setClassToggle(".nav-table > ul > li:eq(0)", "active") // add class toggle
                            .addIndicators() // add indicators (requires plugin)
                            .addTo(controllerMenu);
	        new ScrollMagic.Scene({triggerElement: ".services-container", duration: $(".services-container").height()})
                            .setClassToggle(".nav-table > ul > li:eq(1)", "active") // add class toggle
                            .addIndicators() // add indicators (requires plugin)
                            .addTo(controllerMenu);
	        new ScrollMagic.Scene({triggerElement: ".team-container", duration: $(".team-container").height()})
                            .setClassToggle(".nav-table > ul > li:eq(2)", "active") // add class toggle
                            .addIndicators() // add indicators (requires plugin)
                            .addTo(controllerMenu);
	        new ScrollMagic.Scene({triggerElement: ".map-container", duration: ($(".map-container").height() + $(".contact-container").height()) })
                            .setClassToggle(".nav-table > ul > li:eq(3)", "active") // add class toggle
                            .addIndicators() // add indicators (requires plugin)
                            .addTo(controllerMenu);
        });
        
        var vid = document.getElementById("bgvid");
        var pauseButton = document.querySelector("#polina button");

        $(window).load(function() {
            vid.play();
        });


/********************************************************
                Loading document language
********************************************************/

$(document).ready(function() {
    $("#language-icon").click(function() {
        if ($("#language-icon").attr("actual") == "cs") {
            $(this).css('background-position', '0px 0px');
            $(this).attr("actual","en");
            localStorage.setItem("language", "en");
            location.reload();
        } else if ($("#language-icon").attr("actual") == "en") {
            $(this).css('background-position', '24px 0px');
            $(this).attr("actual","cs");
            localStorage.setItem("language", "cs");
            location.reload();
        }
    });
});

    