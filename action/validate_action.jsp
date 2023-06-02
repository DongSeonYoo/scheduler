<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  request.setCharacterEncoding("utf-8");

  String idValue = request.getParameter("id_value");
  String nameValue = request.getParameter("name_value");
  String phoneNumberValue = request.getParameter("phonenumber_value");

  String message = "";
  boolean flag = true;

  // 데이터베이스 처리
  // Step 1: Connector 파일을 불러와야 함
  Class.forName("com.mysql.jdbc.Driver");

  // Step 2: 데이터베이스 연결
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

  // Step 3: SQL 생성 및 전송
  String sql = "SELECT id FROM user_TB WHERE login_id = ? AND name = ? AND phone_number = ?";
  
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, idValue);
  query.setString(2, nameValue);
  query.setString(3, phoneNumberValue);

  ResultSet resultSet = query.executeQuery();

  if (resultSet.next()) {

    flag = true;
    response.sendRedirect("../reset-pw/reset-pw.jsp");
  } else {
    flag = false;
  }
%>