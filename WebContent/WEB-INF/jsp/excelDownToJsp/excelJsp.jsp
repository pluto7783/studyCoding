<%@ page contentType="application/vnd.ms-excel; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page session="false" %>
<%
    //출력 데이타 받기
	Object obj = request.getAttribute("list");
	obj= (obj == null) ? new ArrayList() : obj ;
	List<Map<String,String>> list=(List) obj;
	
	//파일명에 다운로드 날짜 붙여주기 위해 작성
	Date date=new Date();
	SimpleDateFormat dayformat=new SimpleDateFormat("yyyyMMdd", Locale.KOREA);
	SimpleDateFormat hourformat=new SimpleDateFormat("hhmmss", Locale.KOREA);
	String day=dayformat.format(date);
	String hour=hourformat.format(date);
	String fileName="파일명적어주세요^^"+day+"_"+hour;
	
	//필수 선언 부분
	//.getBytes("KSC5601"),"8859_1") 을 통한 한글파일명 깨짐 방지
	response.setHeader("Content-Disposition", "attachment; filename="+new String((fileName).getBytes("KSC5601"),"8859_1")+".xls");
	response.setHeader("Content-Description", "JSP Generated Date");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>${myMsg }</title>
</head>
<body bgcolor="#ffffff" text="#000000" topmargin="0" leftmargin="0">
<table width="784" border="1" bordercolor="#A2AFCC" bordercolorlight="#ffffff" bordercolordark="#6C717D" cellspacing="0" cellpadding="0">
	<thead>
	   <tr align="center">
		<th scope="col" bgcolor="CDCDCD">제품이름</th>
		<th scope="col" bgcolor="CDCDCD">가격</th>
		<th scope="col" bgcolor="CDCDCD">구매링크</th>
	   </tr>
	</thead>
	<tbody>
	<% for(int i=0; i<list.size(); i++){ 	%>
		<tr>
			<td style="text-align:left;"><%= list.get(i).get("ITEM")%> </td>
			<td style="text-align:left; mso-number-format:\#\,\#\#0\;" ><%= list.get(i).get("PRICE")%> </td>
			<td style="text-align:left;"><%= list.get(i).get("LINK")%> </td>
		</tr>
	 <%}%>
	</tbody>
</table>

</body>
</html>
