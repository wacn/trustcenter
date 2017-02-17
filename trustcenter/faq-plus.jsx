function zhCn(){
     window.location.href = "../.." + (window.location.pathname.indexOf("en-us")==-1?"/zh-cn" + (window.location.pathname.split("zh-cn").length == 1?"":window.location.pathname.split("zh-cn")[1]) :window.location.pathname.replace("en-us","zh-cn"));
    	}    
function enUs(){
     window.location.href = "../.." + (window.location.pathname.indexOf("zh-cn")==-1?"/en-us" + (window.location.pathname.split("en-us").length == 1?"":window.location.pathname.split("en-us")[1]) :window.location.pathname.replace("zh-cn","en-us"));
};
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
    	
 });
