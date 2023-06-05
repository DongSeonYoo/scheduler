<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  request.setCharacterEncoding("utf-8");
  String userPk = (String)session.getAttribute("userSession");

  // edit-profile.jsp 에서 받아온 이름과 전화번호
  String changedNameValue = request.getParameter("name_value");
  String changedPhoneNumberValue = request.getParameter("phonenumber_value");

  Class.forName("com.mysql.jdbc.Driver");

  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

  String sql = "update user_TB set name = ?, phone_number = ? WHERE id = ?";
  
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, changedNameValue);
  query.setString(2, changedPhoneNumberValue);
  query.setString(3, userPk);

  int resultSet = query.executeUpdate();  // 반영된 레코드의 건수 반환

  if (resultSet == 1) {
    response.sendRedirect("../scheduler/scheduler.jsp");

  } else {
  }
%>