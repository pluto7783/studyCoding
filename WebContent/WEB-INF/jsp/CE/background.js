//chrome.browserAction.onClicked.addListener(
//	function (tab) {
//		chrome.tabs.executeScript(null, { file: "jquery-3.4.1.min.js" }, function() {
//		    chrome.tabs.executeScript(null, { file: "inject.js" });
//		});
//	}
//)
var enable=false;
var remoteVal = false;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.check == "on")
      sendResponse({check: enable});
    if (request.check == "clickOn"){
    	enable = true;
    	chrome.browserAction.setIcon({ path: 'iconon.png' });
		chrome.browserAction.setBadgeText({ text: 'ON' });
		sendResponse({check: enable});
    }
    if (request.check == "clickOff"){
    	enable = false;
    	chrome.browserAction.setIcon({ path: 'iconoff.png'});
		chrome.browserAction.setBadgeText({ text: 'OFF' });
		sendResponse({check: enable});
    }
    if (request.check == "remoteOn"){
    	sendResponse({check: remoteVal});
    }
    if (request.check == "remoteSwich"){
    	remoteVal = !remoteVal;
    	sendResponse({check: remoteVal});
    }
   /* if (request.check == "removeImg"){
    	chrome.tabs.executeScript(null, { file: "content/img/img.js" });
    	sendResponse({check: enable});
    }*/
});

/*chrome.browserAction.onClicked.addListener(function (tab) {
	enable = enable ? false : true;
	if(enable){
	//turn on...
		chrome.browserAction.setIcon({ path: 'iconon.png' });
		chrome.browserAction.setBadgeText({ text: 'ON' });
		console.log("on/off :"+(enable?"on":"off"))
	}else{
	//turn off...
		chrome.browserAction.setIcon({ path: 'iconoff.png'});
		chrome.browserAction.setBadgeText({ text: 'OFF' });
		console.log("on/off :"+(enable?"on":"off"))
	}
});*/