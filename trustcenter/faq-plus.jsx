 $(function(){
     $(".content-faq-footer").hide();
     $(".content-faq label").click(function(){
         $(this).siblings().toggle();
         if( $(this).siblings().css("display") == 'none' ){  
            $(this).parent(".content-faq").removeClass("content-faqys");
            $(this).removeClass("faq-lan");
         }else{
            $(this).parent(".content-faq").addClass("content-faqys");
            $(this).addClass("faq-lan");
         }
     });
     $(".faq-lan").hover(function(){
    	      	$(this).addClass("faq-lv");
    	},function(){
          		$(this).removeClass("faq-lv");
    	});
 });
