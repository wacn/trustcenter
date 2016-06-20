 $(function(){
     $(".content-faq-footer").hide();
     $(".content-faq label").click(function(){
         $(this).siblings().toggle();
         if( $(this).siblings().css("display") == 'none' ){  
            $(this).removeClass("content-faqys");
         }else{
            $(this).addClass("content-faqys");
         }
     });
     $(".faq-lan").hover(function(){
    	      	$(this).css({"color":"#008f8f"});
    	},function(){
          		$(this).css({"color":"#00a8d9"});
    	});
    	$("#zh-cn").click(function(){
     	var  current = "../.." + (window.location.pathname.indexOf("en-us")==-1?"/zh-cn":window.location.pathname.replace("en-us","zh-cn"));
     		$(this).children("a").attr("href",current);
    	});
    		$("#en-us").click(function(){
     		    current = "../.." + (window.location.pathname.indexOf("zh-cn")==-1?"/en-us":window.location.pathname.replace("zh-cn","en-us"));
     		$(this).children("a").attr("href",current);
    	});
 });
