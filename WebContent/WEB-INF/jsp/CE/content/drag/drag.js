function onLoadFuc(){
	console.log("===== drag.js 11 =====")
}
/* TagName 셀렉터를 이용한 제거
var img = document.getElementsByTagName("img");
var imglength = img.length;
for (var i = 0; i < imglength; i++){
	img[0].remove();
}
*/

/**
 * querySelectAll 셀렉터를 이용한 제거 ;
 */
document.querySelectorAll("*").forEach(function(ele){
	console.log(ele.oncontextmenu)
	if(ele.oncontextmenu){
		console.log(ele)
		ele.oncontextmenu = null;
    }
	if(ele.ondragstart){
		console.log(ele)
		ele.ondragstart = null;
    }
	if(ele.onselectstart){
		console.log(ele)
		ele.onselectstart = null;
    }
})
console.log(123)

window.onload = onLoadFuc;
