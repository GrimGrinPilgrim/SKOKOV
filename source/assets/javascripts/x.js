"use strict";
$(function() {

    //console.dir( $(".project_slider_image1") );
    var $mainSlide = $('.project_main_slide');
    
    var step = 1;
    var modernTwist;
    
    $(".project_arrow_left").on('click', function(){

        modernTwist = $( ".project_twist_mini"+step );

        if(step == 1){
            $mainSlide.removeClass("project_slider_image"+step);
            modernTwist.children().css( "visibility", "hidden" );
            step = 12;
            modernTwist = $( ".project_twist_mini"+step );
            $mainSlide.addClass('project_slider_image'+step);
            modernTwist.children().css( "visibility", "visible" );
        } else {
            $mainSlide.removeClass("project_slider_image"+step);
            modernTwist.children().css( "visibility", "hidden" );
            step -= 1;
            modernTwist = $( ".project_twist_mini"+step );
            $mainSlide.addClass('project_slider_image'+step);
            modernTwist.children().css( "visibility", "visible" );
        }
    });
    $(".project_arrow_right").on('click', function(){
        
        modernTwist = $( ".project_twist_mini"+step );
        
        if(step == 12){
            $mainSlide.removeClass("project_slider_image"+step);
            modernTwist.children().css( "visibility", "hidden" );
            step = 1;
            modernTwist = $( ".project_twist_mini"+step );
            $mainSlide.addClass('project_slider_image'+step);
            modernTwist.children().css( "visibility", "visible" );
        } else {
            $mainSlide.removeClass("project_slider_image"+step);
            modernTwist.children().css( "visibility", "hidden" );
            step += 1;
            modernTwist = $( ".project_twist_mini"+step );
            $mainSlide.addClass('project_slider_image'+step);
            modernTwist.children().css( "visibility", "visible" );
        }
    });
});