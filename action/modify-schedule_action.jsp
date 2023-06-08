<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  request.setCharacterEncoding("utf-8");
  String userPk = (String)session.getAttribute("userSession");

  String yearValue = request.getParameter("year");
  String monthValue = request.getParameter("month");
  String dayValue = request.getParameter("day");
  String timeValue = request.getParameter("datetime");
  String descriptionValue = request.getParameter("description");
  String schedulePkValue = request.getParameter("schedulePk");

  Class.forName("com.mysql.jdbc.Driver");

  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");
  
  String sql = "UPDATE scheduler_TB SET datetime = ?, description = ? WHERE id = ?";
  
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, yearValue  + "-" + monthValue + "-" + dayValue + " " + timeValue);
  query.setString(2, descriptionValue);
  query.setString(3, schedulePkValue);
  query.executeUpdate();

  response.sendRedirect("../scheduler/scheduler.jsp");
%>