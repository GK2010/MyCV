$(document).ready(function(){
    
    $('.projects-area').load( './experience/summary.html' );

    $('body').on('click','async-link',function(e){
       console.log("Hello!!!") ;
        e.preventDefault();

        $('.projects-area').load($(this).attr('data-link') ); 
    });
}); 
