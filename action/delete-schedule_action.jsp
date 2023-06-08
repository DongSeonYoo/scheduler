<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  request.setCharacterEncoding("utf-8");

  String deleteSchedulerPk = request.getParameter("schedulePk");

  Class.forName("com.mysql.jdbc.Driver");

  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

  String sql = "DELETE FROM scheduler_TB WHERE id = ?";
  
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, deleteSchedulerPk);
  query.executeUpdate();

  response.sendRedirect("../scheduler/scheduler.jsp");
%>