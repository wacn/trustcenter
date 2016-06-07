 $(function(){
     $(".content-faq-footer").hide();
     $(".content-faq label").click(function(){
         $(this).siblings().slideToggle();
     });
 });
