$(document).ready(function(){
	$(".contactLink li").eq(0).css("background-color","#00ABE3")
	$(".contactLink li").eq(1).css("background-color","#004088")
	$(".contactLink li").eq(2).css("background-color","#01669C")
	$(".contactLink li").eq(3).css("background-color","#CA2128")
	$(".contactLink li").eq(4).css("background-color","#FF5B22")

	$(".contactLink li").hover(function(){
		$(this).css({
			borderRadius: "20px",
			transition: "all 1s ease"
		})
	}, function(){
		$(".contactLink li").css({
			borderRadius:"0",
			transition: "all 1s ease"
		})
	})

	$("#header .search input").click(function(){
		$("#header .search").animate({width:"100%"},800)
	})


	$(".dropDownMenuFeatures").hide();
	$(".menuDropFeatures").hover(function(){
		$(".dropDownMenuFeatures").fadeIn();
	}, function(){
		$(".dropDownMenuFeatures").fadeOut();
	});

	$(".dropDownMenuEnter").hide();
	$(".menuDropEnter").hover(function(){
		$(".dropDownMenuEnter").fadeIn();
	}, function(){
		$(".dropDownMenuEnter").fadeOut();
	});


	$(".smallNavBar .listBtn i").click(function(){
		$(".smallNavBarItem").toggle();
	});

	$(".smallNavBarItem .fa-chevron-down").click(function(){
		$(this).parent("li").siblings("ul").toggle();
		if ($(this).parent("li").attr("class")!="activeSmall") {
			$(this).parent("li").addClass("activeSmall");
		}else{
			$(this).parent("li").removeClass("activeSmall");		
		}
	});

	$(".smallNavBarItem .fa-angle-down").click(function(){
		$(this).parent("li").siblings("ul").toggle();
		if ($(this).parent("li").attr("class")!="activeSmall") {
			$(this).parent("li").addClass("activeSmall");
		}else{
			$(this).parent("li").removeClass("activeSmall");
		}
	});

	$(".smallNavBar .right i").click(function(){
		$(".smallNavBar .left input").show();
		$(".smallNavBar .left a").hide();
	});
	
	$(".enterOrchard ul li a").click(function(event){
		event.preventDefault();
		$(".entertainmentItem").hide();
		var index=$(".enterOrchard ul li a").index(this);
		$(".entertainmentItem").eq(index).fadeIn(800);
		$(".enterOrchard ul li a").removeClass("activeList");
		$(this).addClass("activeList");
		$(".enterOrchard ul li a").removeClass("activeGreen");
		$(this).addClass("activeGreen");
		$(".enterOrchard ul li a").css("color", "gray");
		$(this).css("color", "green");	
	})	

	$(".worldNews ul li a").click(function(event){
		event.preventDefault();
		$(".worldNewsItem").hide();
		var index=$(".worldNews ul li a").index(this);
		$(".worldNewsItem").eq(index).fadeIn(800);
		$(".worldNews ul li a").removeClass("activeList");
		$(this).addClass("activeList");
		$(".worldNews ul li a").removeClass("activeOrange");
		$(this).addClass("activeOrange");
		$(".worldNews ul li a").css("color", "gray");
		$(this).css("color", "darkorange");	
	})

	$(".rightMenu ul li a").click(function(event){
		event.preventDefault();
		$(".newsRightTop").hide();
		var index=$(".rightMenu ul li a").index(this);
		$(".newsRightTop").eq(index).fadeIn(800);
		$(".rightMenu ul li").removeClass("activeRedBorder");
		$(this).parent("li").addClass("activeRedBorder");
		$(".rightMenu ul li").removeClass("active");
		$(this).parent("li").addClass("active");
	})

	
	count=0;
	$(window).resize(function(){
		var slideWidth=$("#homeSliderSection .sliderSection").width();
		var slideCount=$("#homeSliderSection .slideImage").length;
		$("#homeSliderSection ul li").width(slideWidth/slideCount-3);
	})

	$("#homeSliderSection .slideBtnRight").click(function(){
		var slideCount=$("#homeSliderSection .slideImage").length;
		count++;
		if(count==slideCount){
			count=0;
		}
		$("#homeSliderSection .slideImage").hide();
		$("#homeSliderSection .slideImage").eq(count).removeClass("displayNone");
		$("#homeSliderSection .slideImage").eq(count).fadeIn();
		$("#homeSliderSection ul li").addClass("activeBackGray");
		$("#homeSliderSection ul li").removeClass("activeBackRed");
		$("#homeSliderSection ul li").eq(count).addClass("activeBackRed");
	})

	$("#homeSliderSection .slideBtnLeft").click(function(){
		var slideCount=$("#homeSliderSection .slideImage").length;
		count--;
		if(count<0){
			count=slideCount-1;
		}
		$("#homeSliderSection .slideImage").hide();
		$("#homeSliderSection .slideImage").eq(count).removeClass("displayNone");
		$("#homeSliderSection .slideImage").eq(count).fadeIn();
		$("#homeSliderSection ul li").addClass("activeBackGray");
		$("#homeSliderSection ul li").removeClass("activeBackRed");
		$("#homeSliderSection ul li").eq(count).addClass("activeBackRed");
	})

	count2=0;
	$(".rightSlider .slideBtnLeft").click(function(){
		var slideCount=$(".rightSlider .slideImage").length;
		count2--;
		if(count2<0){
			count2=slideCount-1;
		}
		$(".rightSlider .slideImage").hide();
		$(".rightSlider .slideImage").eq(count2).removeClass("displayNone");
		$(".rightSlider .slideImage").eq(count2).fadeIn();
	})

	$(".rightSlider .slideBtnRight").click(function(){
		var slideCount=$(".rightSlider .slideImage").length;
		count2++;
		if(count2==slideCount){
			count2=0;
		}
		$(".rightSlider .slideImage").hide();
		$(".rightSlider .slideImage").eq(count2).removeClass("displayNone");
		$(".rightSlider .slideImage").eq(count2).fadeIn();
	})

	count3=0;
	$(".slowSlider .homeSlider").width($(".slowSlider .slowSlideItem").width()*5)
	$(".slowSlider .slideBtnLeft").click(function(){
		var slideWidth=$(".slowSlider .slowSlideItem").width();
		var uzun=slideWidth*2
		if(count3=0){
			$(".slowSlider .homeSlider").css({
				position: relative,
				left: -uzun
			});
			count3=1;
		}else{
			$(".slowSlider .homeSlider").css("left","(slideWidth*2)px");
			count3=0;
		}
	})

	$(".slowSlider .slideBtnRight").click(function(){
		var slideCount=$(".slowSlider .slowSlideItem").length;
		count3++;
		if(count3==slideCount){
			count3=0;
		}
		$(".slowSlider .slowSlideItem").hide();
		$(".slowSlider .slowSlideItem").eq(count3).removeClass("displayNone");
		$(".slowSlider .slowSlideItem").eq(count3).fadeIn();
	})
})

