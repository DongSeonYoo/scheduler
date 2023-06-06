<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%
  request.setCharacterEncoding("utf-8");

  String userSession = (String)session.getAttribute("userSession");
  
  if (userSession == null) {
    response.sendRedirect("/");
  }

  String selectedYear = request.getParameter("selectedYear");
  String selectedMonth = request.getParameter("selectedMonth");

  session.setAttribute("currentYearSession", selectedYear);
  session.setAttribute("currentMonthSession", selectedMonth);

  response.sendRedirect("../scheduler/scheduler.jsp");
%>

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

</html>