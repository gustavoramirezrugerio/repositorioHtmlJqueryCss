if($(window).width()>1024){
      document.write("<"+"script src='js/jquery.preloader.js'></"+"script>");
    }
jQuery(window).load(function() {
    $x = $(window).width();
    if($x > 1024)	{
       jQuery("#contenido .row").preloader();
    }
    jQuery('.magnifier').touchTouch();
    jQuery('.spinner').animate({'opacity':0},1000,'easeOutCubic',function (){jQuery(this).css('display','none')});
    
});