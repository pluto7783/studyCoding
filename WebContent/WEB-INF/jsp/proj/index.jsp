<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>MAIN</title>
<jsp:include page="../header.jsp"></jsp:include>
<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
<style>
.main-carousel{
    max-width: 960px;
	width: 80%;
	margin: auto;
}
</style>
<script>
	$(function(){
		$("input").on("click",function(){	//모든 버튼 클릭 이벤트
			var trg = this.id;
		
			switch (trg){
				case "btnExcelDownGo": 
					location.href = "/proj/goExcelDown.do";
					break;
				case "btnTextCut": 
					location.href = "/proj/goTextCut.do";
					break;
			}
		});
		
		$('.main-carousel').flickity({
			  // options
			  cellAlign: 'left',
			  contain: true
		});
	});
</script>
</head>
<body>
	<div class="contentBody">
	<jsp:include page="../navbar.jsp"></jsp:include>
		<h1>
			${myMsg}  
		</h1>
		<div class="main-carousel">
			<div class="carousel-cell">
				<img src="/images/proj/1.jpg"/>
			</div>
			<div class="carousel-cell">
				<img src="/images/proj/2.jpg"/>
			</div>
			<div class="carousel-cell">
				<img src="/images/proj/3.jpg"/>
			</div>
			<div class="carousel-cell">
				<img src="/images/proj/1.jpg"/>
			</div>
			<div class="carousel-cell">
				<img src="/images/proj/2.jpg"/>
			</div>
			<div class="carousel-cell">
				<img src="/images/proj/3.jpg"/>
			</div>
		</div>
		
		<div>
			<ul>
				<li></li>
				<li></li>
				<li><input type="button" value="TEXT CUT BY BYTE" id = "btnTextCut"/></li>
				<li><input type="button" value="EXCEL DOWN CODE" id = "btnExcelDownGo"/></li>
			</ul>
			
		</div>
	</div>	
</body>
</html>
