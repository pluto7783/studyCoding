function imgRemove(){

	/*$(function(){
		if($("#topDiv")[0]){
			$("#topDiv").remove();
			return;
		}
		var topD = $("<div>", {id : "topDiv"}).css({"width":"100px",
													"height":"100px",
													"backgroundColor":"white",
													"position":"fixed",
													"zIndex":"999999",
													"bottom":"100px",
													"right":"100px",
													"border":"1px solid #64646433"});
		
		$("body").append(topD);
		
		console.log("===== 테스트 009 =====")
	});*/
	
//	$("img").remove();
	chrome.runtime.sendMessage({check: "on"}, function(response) {
		  if(response.check){
			  console.log("on")
		  }else{
			  console.log("off")
		  }
	});
	
	console.log("===== main inject.js 13 =====")
}

window.onload = imgRemove;