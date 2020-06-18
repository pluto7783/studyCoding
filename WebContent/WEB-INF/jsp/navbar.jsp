<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<link href="/css/navbar/navbar.css" rel="stylesheet" type="text/css">
<script src="/js/navbar/navbar.js"></script>
<div class="navbar" id = "goMain">
	<div class="navLogo">K(로고 위치)</div>	<!-- 로고 -->
	<div class="menu-background">
		<ul class="nav-menu">	<!-- 네브바 메뉴 -->
			<li id = "myProduct"><a href="/proj/index.do">개인 작품</a></li>
			<li id = "practiceCode"><a href="#">샘플 코드</a></li>
			<li><a href="#">추가예정</a></li>
		</ul>
	</div>
	<div class="rightBtn" id="menuBtn"></div> <!-- 모바일버전우측버튼 -->
</div>