$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 50) {
	    $(".navbar").css("backgroundColor" , "#343a40");
	  }

	  else{
		  $(".navbar").css("backgroundColor" , "transparent");  	
	  }
  });
    
    
    $('.navbar li a').click(function(){
        
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1}, 1000);
    });
    
    //add class active for active elements and remove it from siblings 
    $('.navbar li a').click(function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        
    });
    
    //Syn Navbar Links With Sections
    $(window).scroll(function(){
        $('section').each(function(){
        if($(window).scrollTop() > $(this).offset().top){
            var blockID = $(this).attr('id');
            $('.navbar a').removeClass('active');
            $('.navbar li a[data-scroll="' +blockID+ '"]').addClass('active');
            
        }
        
    });
                     
 });
});
    /* $("#home").height($(window).height());
     $(window).on("resize" , function(){
        
       $("#home").height($(window).height());
    });
    
    
    //Body padding depends on navbar height
    //$('body').css('paddingTop', $('.navbar').innerHeight() + 11);
    
    //Scroll to elements
  /*  
*/

