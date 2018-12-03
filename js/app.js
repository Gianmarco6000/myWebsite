$(document).ready(function(){
	var skillAnimation = false;
	var mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
	var percentages = [70, 70, 60, 70, 60, 70, 60, 80, 70, 80, 50, 90, 70];
	var lastHeight = 0;

    $("header > ul > li > a").click(function(evt){
    	var p = $('#' + this.id + '-wrapper').offset();
    	$("html, body").animate({ scrollTop: p.top });
    });

    $(".up-arrow").click(function(evt){
    	$("html, body").animate({ scrollTop: 0 });
    });

    $(".arrow-down").click(function(evt){
    	$("html, body").animate({ scrollTop: $("#about-me-wrapper").offset().top });
    });

    $(document).scroll(function(evt){
    	if(!skillAnimation && $(this).scrollTop() >= ($("#skill-wrapper").offset().top - $(window).height()*0.7)){
			skillAnimation = true;
			for (var i = 0; i < percentages.length; i++) {
				$("#skill-wrapper > div:last-of-type > .skill:nth-child(" + (i + 1) + ")").animate({ width: percentages[i] + "%" }).delay(2000);
			}
    	}
    	if($(this).scrollTop() == 0){
    		$(".up-arrow").css('display','none');
    		return;
    	}
    	$(".up-arrow").css('display','block');
    });
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });
	$(window).resize(function(){
		if(!mobile) {
			if(lastHeight != $(window).height()){
				lastHeight = $(window).height();
				$("#video-wallpaper-wrapper").css('height', lastHeight + 'px');
			}
		}
	});
});
