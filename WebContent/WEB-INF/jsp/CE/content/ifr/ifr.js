function onLoadFuc(){
	console.log("===== ifr.js 11 =====")
}
/* 
var ifr = document.getElementsByTagName("iframe");
var ifrlength = ifr.length;
for (var i = 0; i < ifrlength; i++){
	ifr[0].remove();
}
*/

/**
 * querySelectorAll 셀렉터를 이용한 제거
 */
var ifr = document.querySelectorAll("iframe")
ifr.forEach(function(r){
  r.remove();  
})

window.onload = onLoadFuc;
