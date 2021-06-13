$(document).ready(function(){console.log("Re");});

$( document ).ready(function() {
	$("#batTeam div").click(function(){
		// console.log($(this).attr("value"))
		$("#batTeamForm")[0].value = $(this).attr("value")
		$("#batTeam").fadeOut(300,function(){
			$("#bowlTeam").fadeIn();			
		});
	})

	$("#bowlTeam button").click(function(){
		// console.log($(this).attr("value"))
		$("#bowlTeamForm")[0].value = $(this).attr("value")
		$("#bowlTeam").fadeOut(300,function(){
			$("#innings").fadeIn();			
		});
	})

	$("#innings button").click(function(){
		// console.log($(this).attr("value"))
		$("#inningsForm")[0].value = $(this).attr("value")
		$("#innings").fadeOut(300,function(){
			$("#venue").fadeIn();			
		});
	})

	$("#venue button").click(function(){
		// console.log($(this).attr("value"))
		$("#venueForm")[0].value = $(this).attr("value")
		$("#venue").fadeOut(300,function(){
			$("#bat_multiselect").fadeIn();			
		});
	})

	$("#batsman button").click(function(){
		$("#bat_multiselect")[0][$(this)[0].value].selected = true;
		$(this).css("border","2px solid red");
	})
	$("#bat_complete").click(function(){
		$("#batsman").fadeOut(300,function(){
			$("#bowlers").fadeIn();			
			$("#bowl_multiselect").fadeIn();			
		});
	})
	

});

