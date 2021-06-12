$(document).ready(function(){console.log("Re");});

$( document ).ready(function() {
	$("#batTeam button").click(function(){
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
	$("#bat_multiselect select").multiselect(
	// 	function(){
	// 	// console.log($(this).attr("value"))
	// 	$("#batsmenForm").value = $(this).attr("value")
	// 	$("#bat_multiselect").fadeOut(300,function(){
	// 		$("#bowl_multiselect").fadeIn();			
	// 	}
	// 	);
	// }
	)

	

});

