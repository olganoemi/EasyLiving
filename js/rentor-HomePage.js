	$(document).ready(function(){

		$(".otherCarousel ul").each(function(){
			var t = setInterval(function(){
				$(".otherCarousel ul").animate({marginLeft:-480},1000,function(){
					$(this).find("li:last").after($(this).find("li:first"));
					$(this).css({marginLeft:0});
				})
			},4000);
		});
	});
