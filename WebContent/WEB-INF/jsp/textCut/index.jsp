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
<style>
#cutTextBtn {
    height: 121px;
    position: absolute;
    width: 100px;
}
#rsltText>div>input
, #rsltText>div>span{
	position: absolute;
    left: 178px;
}
</style>
<script>
	$(function(){
		$("input").on("click",function(){	//모든 버튼 클릭 이벤트
			var trg = this.id;
		
			switch (trg){
				case "btnExcelDownGo": 
					location.href = "/proj/excelDownData.do";
					break;
				case "cutTextBtn":
					viewDisplay($("#textStr").val());
					break;
			}
		});
	});
	
	
	var calByte = {
			getByteLength : function(s) {
				if (s == null || s.length == 0) {
					return 0;
				}
				var size = 0;
				for ( var i = 0; i < s.length; i++) {
					size += this.charByteSize(s.charAt(i));
				}
				return size;
			},
			cutByteLength : function(s, len) {
				if (s == null || s.length == 0) {
					return 0;
				}
				var size = 0;
				var rIndex = s.length;
				for ( var i = 0; i < s.length; i++) {
					size += this.charByteSize(s.charAt(i));
					if( size == len ) {
						rIndex = i + 1;
						break;
					} else if( size > len ) {
						rIndex = i;
						break;
					}
				}
				return s.substring(0, rIndex);
			},
			charByteSize : function(ch) {
				if (ch == null || ch.length == 0) {
					return 0;
				}
				var charCode = ch.charCodeAt(0);
				if (charCode <= 0x00007F) {
					return 1;
				} else if (charCode <= 0x0007FF) {
					return 2;
				} else if (charCode <= 0x00FFFF) {
					return 3;
				} else {
					return 4;
				}
			}
		};

		function viewDisplay(obj) {
			if(isNaN($("#cutValue").val())){
				alert("자를 Byte 크기는 숫자만 입력가능합니다.");
				$("#cutValue").focus();
				return;
			}
			
			$(".viewByte").html( calByte.getByteLength( obj ) );
			$(".viewCutByte").html( calByte.cutByteLength( obj, $("#cutValue").val()));
		}
</script>
</head>
<body>
	<div class="contentBody">
	<jsp:include page="../navbar.jsp"></jsp:include>
		<h2>${myMsg }</h2>
		<div>
			<p>
				원하는 Byte만큼 텍스트를 자르기
			</p>
		</div>
		<div>
			<textarea rows="8" cols="60" id="textStr"></textarea>
			<input type="button" id="cutTextBtn" value="자르기">
		</div>
		<div id="rsltText">
			<div>
				자를 Byte 크기 : <input type="text" id = "cutValue" value="20">
			</div>
			<div>
				작성한 text Byte : <span class="viewByte"></span>
			</div>
			<div>
				자른 text : <span class="viewCutByte"></span>
			</div>
		</div>
	</div>
</body>
</html>
