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

  Class.forName("com.mysql.jdbc.Driver");

  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

  String sql = "INSERT INTO scheduler_TB (user_id, datetime, description, created_date, updated_date) VALUES (?, ?, ?, now(), now())";
  
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, userPk);
  query.setString(2, yearValue  + "-" + monthValue + "-" + dayValue + " " + timeValue);
  query.setString(3, descriptionValue);
  query.executeUpdate();

  response.sendRedirect("../scheduler/scheduler.jsp");
%>