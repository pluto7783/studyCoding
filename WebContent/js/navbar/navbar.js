$(function(){
	$("div").on("click",function(e){
		if(this.id == "menuBtn"){
			e.stopPropagation();
			$(".menu-background").toggle(300);			
		}
		if(this.id == "goMain"){
			e.stopPropagation();
			location.href = "/main/index.do";
		}
	});
});