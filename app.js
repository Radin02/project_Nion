










$(".owl-carousel").owlCarousel({
  	autoplay:1000,
  	stopOnHover : false,
  	rewind:true,
  	items:1
  });


















// $("#webdesign").click(function(){

	$("#btn-webdesign").click(function(){

		$(".development").hide(1000);
		$(".photography").hide(1000);
		$(".webdesign").show(3000).removeClass("WOW fadeInDown");
	});

	$("#btn-development").click(function(){

		$(".webdesign").hide(1000);
		$(".photography").hide(1000);
		$(".development").show(1000).removeClass("WOW fadeInDown");;
	});

	$("#btn-photography").click(function(){

		$(".development").hide(1000);
		$(".webdesign").hide(1000);
		$(".photography").show(1000).removeClass("WOW fadeInDown");;
	});

	$("#btn-all").click(function(){

		$(".development").show(1000).removeClass("WOW fadeInDown");;
		$(".photography").show(1000).removeClass("WOW fadeInDown");;
		$(".webdesign").show(1000).removeClass("WOW fadeInDown");;
	});





$("#single-service-1").mouseover(function(){
		
		$("#work_caption_1").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#recent_work_1").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-1").mouseleave(function(){
		
		$("#work_caption_1").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#recent_work_1").css(
			"opacity", "1"
		);

	});

	$("#single-service-2").mouseover(function(){
		
		$("#work_caption_2").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#recent_work_2").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-2").mouseleave(function(){
		
		$("#work_caption_2").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#recent_work_2").css(
			"opacity", "1"
		);

	});


	$("#single-service-3").mouseover(function(){
		
		$("#work_caption_3").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#recent_work_3").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-3").mouseleave(function(){
		
		$("#work_caption_3").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#recent_work_3").css(
			"opacity", "1"
		);

	});


		$("#single-service-4").mouseover(function(){
		
		$("#work_caption_4").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#recent_work_4").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-4").mouseleave(function(){
		
		$("#work_caption_4").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#recent_work_4").css(
			"opacity", "1"
		);

	});



	$("#single-service-5").mouseover(function(){
		
		$("#work_caption_5").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#recent_work_5").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-5").mouseleave(function(){
		
		$("#work_caption_5").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#recent_work_5").css(
			"opacity", "1"
		);

	});


	$("#single-service-6").mouseover(function(){
		
		$("#work_caption_4").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#recent_work_6").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-6").mouseleave(function(){
		
		$("#work_caption_6").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#recent_work_6").css(
			"opacity", "1"
		);

	});






  $("#rot").click(function(){
  	$(".hi").fadeToggle(500,function(){
  		var x = $("#rot").hasClass("fa-bars");
  		if(x==true){
  		$("#rot").removeClass("fa-bars");
  		$("#rot").addClass("fa-times");
  		}
  		else{
  		$("#rot").removeClass("fa-times");
  		$("#rot").addClass("fa-bars");
  		}
  	});
  });
