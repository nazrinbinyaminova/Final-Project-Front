$(document).ready(function(){

    /****************** Links in Header Section ******************/

	var linkCount = $("#header .col-md-5 span").length;
	function myFunc(){
		for (var i = 0; i < linkCount; i++) {
			$("#header .col-md-5 span").hide();
			$("#header .col-md-5 span").eq(i).fadeIn();
		}
	}
	setInterval(myFunc, 5000)
 
	/****************** Color of Social Icon ******************/

	$(".contactLink li").eq(0).css("background-color","#00ABE3")
	$(".contactLink li").eq(1).css("background-color","#004088")
	$(".contactLink li").eq(2).css("background-color","#01669C")
	$(".contactLink li").eq(3).css("background-color","#CA2128")
	$(".contactLink li").eq(4).css("background-color","#FF5B22")

	/****************** Search Input Width ******************/

	$("#header .search input").click(function(){
		$("#header .search").animate({width:"100%"},800)
	})

	/****************** Features Page's DropDown ******************/

	$(".dropDownMenuFeatures").hide();
	$(".menuDropFeatures").hover(function(){
		$(".dropDownMenuFeatures").show();
	}, function(){
		$(".dropDownMenuFeatures").hide();
	});

	$(".dropDownMenuEnter").hide();
	$(".menuDropEnter").hover(function(){
		$(".dropDownMenuEnter").show();
	}, function(){
		$(".dropDownMenuEnter").hide();
	});

	/****************** XS size NavBar ******************/

	$(".smallNavBar .listBtn i").click(function(){
		$(".smallNavBarItem").toggle();
	});

	/****************** XS size NavBar Item ******************/

	$(".smallNavBarItem .fa-chevron-down").click(function(){
		var index=$(".smallNavBarItem .fa-chevron-down").index(this);
		$(".smallNavBarItem .featuresItem").eq(index).toggle();
		if ($(this).parent("li").attr("class")!="activeSmall") {
			$(this).parent("li").addClass("activeSmall");
		}else{
			$(this).parent("li").removeClass("activeSmall");		
		}
	});

	$(".smallNavBarItem .fa-angle-down").click(function(){
		var index=$(".smallNavBarItem .fa-angle-down").index(this);
		$(".smallNavBarItem .featuresItemItem").eq(index).toggle();
		if ($(this).parent("li").attr("class")!="activeSmall") {
			$(this).parent("li").addClass("activeSmall");
		}else{
			$(this).parent("li").removeClass("activeSmall");
		}
	});

	/****************** XS size NavBar Search Input ******************/

	$(".smallNavBar .right i").click(function(){
		$(".smallNavBar .left input").show();
		$(".smallNavBar .left a").hide();
	});
	
	/****************** Top List Change ******************/

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

	
	/****************** Slider Top ******************/

	var slideWidth=$("#homeSliderSection .sliderSection").width();
	var slideCount=$("#homeSliderSection .slideImage").length;
	$("#homeSliderSection ul li").width(slideWidth/slideCount-3);

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
		$("#homeSliderSection .slideImage").eq(count).fadeIn(1000);
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
		$("#homeSliderSection .slideImage").eq(count).fadeIn(1000);
		$("#homeSliderSection ul li").addClass("activeBackGray");
		$("#homeSliderSection ul li").removeClass("activeBackRed");
		$("#homeSliderSection ul li").eq(count).addClass("activeBackRed");
	})

	/****************** Slider Right Bar ******************/

	count2=0;
	$(".rightSlider .slideBtnLeft").click(function(){
		var slideCount=$(".rightSlider .slideImage").length;
		count2--;
		if(count2<0){
			count2=slideCount-1;
		}
		$(".rightSlider .slideImage").hide();
		$(".rightSlider .slideImage").eq(count2).fadeIn(1000);
	})

	$(".rightSlider .slideBtnRight").click(function(){
		var slideCount=$(".rightSlider .slideImage").length;
		count2++;
		if(count2==slideCount){
			count2=0;
		}
		$(".rightSlider .slideImage").hide();
		$(".rightSlider .slideImage").eq(count2).fadeIn(1000);
	})

	/****************** Foot Slider ******************/

	count3=0;
	$(".slowSlider .slideBtnLeft").click(function(){
		var slideWidth=$(".slowSlider .slowSlideItem").width();
		var length=(slideWidth+32)*2;
		if(count3==0){
			$(".slowSlider .homeSlider").css({
				marginLeft: -length+"px"
			});
			count3=1;
		}else{
			$(".slowSlider .homeSlider").css({
				marginLeft: 0
			});
			count3=0;
		}
	})

	$(".slowSlider .slideBtnRight").click(function(){
		var slideWidth=$(".slowSlider .slowSlideItem").width();
		var length=(slideWidth+32)*2;
		if(count3==0){
			$(".slowSlider .homeSlider").css({
				marginLeft: -length+"px"
			});
			count3=1;
		}else{
			$(".slowSlider .homeSlider").css({
				marginLeft: 0
			});
			count3=0;
		}
	})

	/****************** Auto Slider ******************/

	function autoSlide(){
		var slideCount=$("#homeSliderSection .slideImage").length;
		count++;
		if(count==slideCount){
			count=0;
		}
		$("#homeSliderSection .slideImage").hide();
		$("#homeSliderSection .slideImage").eq(count).fadeIn(1000);
		$("#homeSliderSection ul li").addClass("activeBackGray");
		$("#homeSliderSection ul li").removeClass("activeBackRed");
		$("#homeSliderSection ul li").eq(count).addClass("activeBackRed");
	}
	setInterval(autoSlide, 4000)

	/******************  Slider with click to li  ******************/

	$("#homeSliderSection ul li").click(function(){
		var index = $("#homeSliderSection ul li").index(this);
		$("#homeSliderSection .slideImage").hide();
		$("#homeSliderSection .slideImage").eq(index).fadeIn(1000);
		$("#homeSliderSection ul li").addClass("activeBackGray");
		$("#homeSliderSection ul li").removeClass("activeBackRed");
		$("#homeSliderSection ul li").eq(index).addClass("activeBackRed");
		count=index;
	})
	/******************  Register Form open with click to icon  ******************/
	
	$(".registerlinkForm").hide();
	$(".registerlinkForm .header span:contains('REGISTER')").html('SIGN IN');
	$(".registerlinkForm .header span:contains('RECOVER PASSWORD')").html('SIGN IN');
	$(".registerForms").hide();
	$(".registerlinkForm .rmvClass ").show();
	$("#navHead ul .clickFormIcon").click(function(){
		$(".registerlinkForm .button").val("Login");
		$(".myLink").removeAttr('href');
		$(".registerForms").show();
		$(".registerlinkForm").show();
		$(".registerlinkForm .h5").show();
		$(".registerlinkForm .rmvClass ").show();
		$(".registerlinkForm Form").find("input[type=password], input[type=password], textarea").each(function(ev)
			  {
			     if(!$(this).val()) { 
			     $(this).attr("placeholder", "Your Password");
			  }
  		})
  		$(".registerlinkForm Form .changeIcon").find($(".changeIcon .fa").removeClass("fa-envelope").addClass("fa-lock"));
  		$(".registerlinkForm ").find($("span .changeA").html('Lost Password?'));

	})
	$(".registerForms").click(function(){
		$(".registerlinkForm").hide();
		$(".registerForms").hide();
	});
	$(".registerForms").click(function(){
		$(".registerlinkForm").hide();
		$(".registerForms").hide();
	});
	$(".registerlinkForm .header button").click(function(){
		$(".registerlinkForm").hide();
		$(".registerForms").hide();
	})
	$(".registerlinkForm .activeClick").click(function(){
		$(".registerlinkForm").hide();
		$(".registerForms").hide();
	})
	$(".rightMenu .h5 a").click(function(){
		$(".registerlinkForm .button").val("Register");
		$(".myLinkDisabled").removeAttr('href');
		$(".registerForms").show();
		$(".registerlinkForm").show();
		$(".registerlinkForm .header span:contains('SIGN IN')").html('REGISTER');
		$(".registerlinkForm .header span:contains('RECOVER PASSWORD')").html('REGISTER');
		$(".registerlinkForm ").find($("span .changeA").html('A password will be e-mailed to you.'));
		$(".registerlinkForm Form").find("input[type=password], input[type=password], textarea").each(function(ev)
			  {
			      if(!$(this).val()) { 
			     $(this).attr("placeholder", "Your Email");
			  }
  		})
  		$(".registerlinkForm Form .changeIcon").find($(".changeIcon .fa").removeClass("fa-lock").addClass("fa-envelope"));
  		$(".registerlinkForm .h5").hide();
  		$(".registerlinkForm .rmvClass ").show();
	})
	$(".rightMenu form .form-group .a").click(function(){
		$(".registerForms").show();
		$(".registerlinkForm").show();
		$(".registerlinkForm .header span:contains('SIGN IN')").html('RECOVER PASSWORD');
		$(".registerlinkForm .button").val("RECOVER");
		$(".a").removeAttr('href');
		$(".registerlinkForm .rmvClass ").hide();
		$(".registerlinkForm Form").find("input[type=username], input[type=username], textarea").each(function(ev)
			  {
			      if(!$(this).val()) { 
			     $(this).attr("placeholder", "Your Email or Your Username");
			  }
  		})
		
	})
	$("#navHead .smallNavBarItem .visible-xs .userRegister ").click(function () {
		$(".userRegister").removeAttr('href');
		$(".registerForms").show();
		$(".registerlinkForm").show();
	})
	/******************  Politic page info  ******************/
	$("#content .infoTab").hide();
	$("#content .infoImgTab").hide();
	$("#content .wrapper .imageSide").click(function(){
		$("#content .infoTab").show();
		$("#content .infoImgTab").show();
	})
	$("#content .infoTab").click(function(){
		$("#content .infoTab").hide();
		$("#content .infoImgTab").hide();
	})
	$("#content .infoImgTab .closeImg").click(function(){
		$(".closeImg").removeAttr('href');
		$("#content .infoTab").hide();
		$("#content .infoImgTab").hide();
	})
})

