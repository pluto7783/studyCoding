document.getElementById("on").onclick = function(){
	chrome.runtime.sendMessage({check: "clickOn"}, function(response) {
		  /*if(response.check){
			  document.getElementById("on").style.backgroundColor = "black";
		  }else{
			  document.getElementById("on").style.backgroundColor = "white";
		  }*/
	});
}

document.getElementById("off").onclick = function(){
	chrome.runtime.sendMessage({check: "clickOff"}, function(response) {
		
	});
}

document.getElementById("removeIfr").onclick = function(){
	/*chrome.runtime.sendMessage({check: "removeIfr"}, function(response) {
	});*/
	chrome.tabs.query({active:true, currentWindow:true},function(tabs){
		chrome.tabs.executeScript(
			tabs[0].id,
			{ file: "content/ifr/ifr.js" }
		)
	});
}

document.getElementById("removeImg").onclick = function(){
	chrome.tabs.query({active:true, currentWindow:true},function(tabs){
		chrome.tabs.executeScript(
			tabs[0].id,
			{ file: "content/img/img.js" }
		)
	});
}

document.getElementById("drag").onclick = function(){
	chrome.tabs.query({active:true, currentWindow:true},function(tabs){
		chrome.tabs.executeScript(
				tabs[0].id,
				{ file: "content/drag/drag.js" }
		)
	});
}

document.getElementById("remote").onclick = function(){
	chrome.runtime.sendMessage({check: "remoteSwich"}, function(response) {
		
	});
	
	chrome.tabs.query({active:true, currentWindow:true},function(tabs){
		chrome.tabs.executeScript(
				tabs[0].id,
				{ file: "content/remocon/remocon.js" }
		)
	});
} 