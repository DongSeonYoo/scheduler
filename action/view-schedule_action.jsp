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