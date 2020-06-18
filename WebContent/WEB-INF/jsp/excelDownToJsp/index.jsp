<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>${myMsg }</title>
<jsp:include page="../header.jsp"></jsp:include>
<script src ="/js/common/jquery-3.2.0.min.js"/></script>
<script>
	$(function(){
		$("input").on("click",function(){	//모든 버튼 클릭 이벤트
			var trg = this.id;
		
			switch (trg){
				case "btnExcelDownGo": 
					location.href = "/proj/excelDownData.do";
					break;
			}
		});
	});
</script>
</head>
<body>
	<div class="contentBody">
	<jsp:include page="../navbar.jsp"></jsp:include>
		<h2>${myMsg }</h2>
		<div>
			<p>
				라이브러리를 사용하지 않고 쉽게 JSP 페이지를 EXCEL로 변환하는 코드
			</p>
		</div>
		<div>
			<input type="button" value="EXCEL DOWN CODE" id = "btnExcelDownGo"/>
		</div>
	</div>
</body>
</html>
