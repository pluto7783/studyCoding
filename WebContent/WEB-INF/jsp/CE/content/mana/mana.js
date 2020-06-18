function onLoadFuc(){
	//mana광고삭제
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
	
	console.log("===== mana.js 12 =====")
}

onLoadFuc();

//window.onload = onLoadFuc;