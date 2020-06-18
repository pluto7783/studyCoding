function onLoadFuc(){
	console.log("===== remocon.js 01 =====")
}

chrome.runtime.sendMessage({check: "remoteOn"}, function(response) {
	  if(!response.check){
		  if(document.getElementById("topD")){
			  document.getElementById("topD").remove();
		  }
		  return;
	  }
	  
	  if(response.check){
		  if(document.getElementById("topD")){
			  document.getElementById("topD").remove();
		  }
		  
		  
		  var topDiv = createElement("div", {id:"topD"
			  							, style:{width:"100px", height:"200px"
			  								    ,border:"1px solid #737171", position:"fixed"
			  								    ,bottom:"85px", right:"40px"
			  								    ,backgroundColor: "white", zIndex: "99999"}});

		  var speedInput = createElement("input", {id:"speedI"
			  									  , type: "text"
			  									  , value: "8000"
												  , style:{width:"50%", height:"21px"
													  	  ,marginLeft:"25px", textAlign:"center"
														  ,marginTop:"8px"}});
		  
		  
		  var startBtn = createElement("button", {id:"startB"
												  , innerText: "스크롤"
												  , style:{width:"56px", height:"21px", minHeight:"21px"
													  	  ,marginLeft:"22px",marginTop:"8px"}});
		  var stopBtn = createElement("button", {id:"stopB"
												  , innerText: "정 지"
												  , style:{width:"56px", height:"21px", minHeight:"21px"
														  ,marginLeft:"22px",marginTop:"8px"}});
										  
		  
		  topDiv.appendChild(speedInput);
		  topDiv.appendChild(startBtn);
		  topDiv.appendChild(stopBtn);
		  document.body.append(topDiv);
		  
		  function createElement(obj,propt){
			  var returnObj = document.createElement(obj);
			  
			  for ( var prt in propt){
				  if(typeof(propt[prt]) == "object"){
					  for(var pr in propt[prt]){
						  returnObj[prt][pr] = propt[prt][pr];
					  }
				  }else{
					  returnObj[prt] = propt[prt];
				  }
			  }
			  return returnObj;
		  }
	  }
});

window.onload = onLoadFuc;
