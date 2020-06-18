//http 링크가 걸린 a태그의 href 값을 #으로 치환
for (var i = 0; i <$("a").length;i++){
	var sp = $("a").eq(i);
	if(sp.attr("href")){
		if(sp.attr("href").indexOf("http")>-1){
			sp.attr("href","#");
        }
    }
}

//페이지 내 iframe 전부제거
var ifr = document.getElementsByTagName("iframe");
var ifrlength = ifr.length;
for (var i = 0; i < ifrlength; i++){
	ifr[0].remove();
}

//페이지 모든 element border줘서 구분할수있게
/*$("*").each(function (){
	$(this).css("border","1px solid #eee")
})*/

var a = document.querySelectorAll("*");
a.forEach(function(aa){aa.style.border = "1px solid #eee"})

//페이지 제일 아래로
window.scrollBy(0,document.body.offsetHeight)