<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  String userSession = (String)session.getAttribute("userSession");

  if (userSession == null) {
    response.sendRedirect("/");
  }
  else {
    session.removeAttribute("userSession");
    response.sendRedirect("/");
  }
%>

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>로그아웃</title>
</head>
<body>
</body>
</html>