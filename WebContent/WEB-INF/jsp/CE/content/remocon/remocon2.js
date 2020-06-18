/*(function(){
	if(document.getElementById("topDiv")){		//일단 리모컨이 켜져있으면 삭제하는걸로 나중에수정예정
		document.getElementById("topDiv").remove();
		return;
	}
	
	var topDiv = document.createElement("div");
	topDiv.id = "topDiv";
	topDiv.style.width = "143px";
	topDiv.style.height = "208px";
	topDiv.style.backgroundColor = "white";
	topDiv.style.position = "fixed";
	topDiv.style.bottom = "84px";
	topDiv.style.right = "40px";
	topDiv.style.border = "1px solid #adabab";
	topDiv.style.zIndex = 999999;
	document.body.appendChild(topDiv);
	
	console.log($("body"))
})();*/
$(function(){
	if(document.getElementById("topD")){
		$("#topD").remove();
		return;
	}
	
	var topDiv = $('<div/>',{
		id:"topD",
		css:{
			width:"100px",
			height:"200px",
		    position: "fixed",
		    right: "12px",
		    bottom: "85px",
		    border: "1px solid #737171",
		    backgroundColor: "white",
		    zIndex: "9999999"
		}
	});
	var speedInput = $('<input/>',{id:"speedI",type:"text",value:"8000",
		css:{
		    width: "50%",
		    height: "21px",
	    	marginLeft: "25px",
	    	textAlign: "center",
	        marginTop: "8px"
		}
	});
	var startBtn = $('<button/>',{id:"startB",text:"스크롤",
     	css:{
			width:"56px",
			height: "21px",
			marginTop:"8px",
			marginLeft:"22px"
		}
	});	
	
	var stopBtn = $('<button/>',{
		id:"stopB",
		text:"정 지",
     	css:{
			width:"56px",
			height: "21px",
			marginTop:"8px",
			marginLeft:"22px"
		}
	});	
	var deleteBtn = $('<button/>',{
		id:"delB",
		text:"배너X",
		css:{
			width:"56px",
			height: "21px",
			marginTop:"8px",
			marginLeft:"22px"
		}
	});	
	/*var viewerBtn = $('<button/>',{
		id:"viewB",
		text:"뷰어",
		css:{
			width:"56px",
			height: "21px",
			marginTop:"8px",
			marginLeft:"22px"
		}
	});*/	
	var autoBtn = $('<button/>',{
		id:"autoB",
		text:"자동뷰",
		css:{
			width:"56px",
			height: "21px",
			marginTop:"8px",
			marginLeft:"22px"
		}
	});	
	
	$(topDiv).append(speedInput);
	$(topDiv).append(startBtn);
	$(topDiv).append(stopBtn);
	$(topDiv).append(deleteBtn);
//	$(topDiv).append(viewerBtn);
	$(topDiv).append(autoBtn);
	$('body').append(topDiv);
	
	$('html').css("scrollBehavior","smooth");
	$(deleteBtn).on("click",remotecon.deleteAd)
//	$(viewerBtn).on("click",remotecon.viewerOn)
	$(autoBtn).on("click",remotecon.autoPage)
	$(startBtn).on("click",remotecon.pageScrolling)
	$(stopBtn).on("click",remotecon.stopScroll)
	remotecon.deleteAd();
});
//var scrolldelay = setInterval(function(){$("#nextPanel").trigger("click")},4000);
var scrolldelay = null;
var checkScroll = false;
var remotecon = {
	pageScrolling : function (){
		if(checkScroll){
			console.log("=================다른스크롤 동작중=====================")
			return;
		}
		checkScroll = true;
		console.log("=================스크롤시작=====================")
		var val = $("#speedI").val();
		window.scrollBy(0,400);
		scrolldelay = setTimeout('remotecon.pageScrolling()',val);
	},
	stopScroll : function(){
		if(checkScroll){
			console.log("=================스크롤종료=====================")
			checkScroll = false;
		}
		clearTimeout(scrolldelay);
	},
	deleteAd : function(){
		var j = 0;
		for(var i = 0; i<$("div").length;i++){
			var a ="";
			a += $("div").eq(j).attr("class");
			if(a.indexOf("ad-")>-1){
				$("div").eq(j).remove()
		    }else{
				j++
		    }
		}
	},
	autoPage : function(){
		if(checkScroll){
			console.log("=================다른스크롤 동작중=====================")
			return;
		}
		checkScroll = true;
		scrolldelay = setInterval(function(){$(".right").trigger("click")},$("#speedI").val());
	}
}