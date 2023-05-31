<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  String userSession = (String)session.getAttribute("userSession");
  Boolean flag = false;

  if (userSession == null) {
    response.sendRedirect("/");
  }
  else {
    session.removeAttribute("userSession");
    flag = true;
  }
%>

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>로그아웃</title>

  <script>
    const flag = "<%= flag %>";
    if (flag === "true") {
      alert("로그아웃 되었습니다");
      location.href = "/";
    }
  </script>
</head>
<body>
</body>
</html>