<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  request.setCharacterEncoding("utf-8");

  String userSession = (String)session.getAttribute("userSession");
  Boolean flag = false;
  
  if (userSession == null) {
    response.sendRedirect("/");

  } else {
    flag = true;

    String selectedYearValue = request.getParameter("year");
    String selectedMonthValue = request.getParameter("month");

    session.setAttribute("currentYearSession", selectedYearValue);
    session.setAttribute("currentMonthSession", selectedMonthValue);
  }
%>

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <script>
    const isSuccess = "<%= flag %>";
    if (isSuccess === "true") {
      location.href = "../scheduler.jsp";
    }
  </script>
</body>
</html>
