function onLoadFuc(){
	console.log("===== img.js 11 =====")
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
document.querySelectorAll("img").forEach(function(img){
	img.src = "";  
})

window.onload = onLoadFuc;
