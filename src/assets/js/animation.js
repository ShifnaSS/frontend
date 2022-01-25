$(function(){
    var x = $("#animation_id");
    // x.animate({height: '200px', opacity: '10'}, 2000);
    // x.animate({width: '270px', opacity: '10'}, 1500);
    // x.animate({height: '10px', opacity: '10'}, 1000);
    // x.animate({left: "+=500"}, 2000);
    // x.animate({left: "-=300"}, 1000);
    $("#animation_id").animate({
        left: '150px',
        height: '+=350px',
        width: '+=200px',
        opacity: '10',
      },2000);
    timeout = setTimeout(alertFunc, 3500);  
})
function alertFunc(){
    var div =$('#logo_animation');
        $('#logo_animation').fadeOut();
}



