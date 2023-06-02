<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  request.setCharacterEncoding("utf-8");

  // 이전 페이지에서 온 값 저장
  request.setCharacterEncoding("utf-8");

  String message = "";
  boolean flag = true;

  String nameValue = request.getParameter("name_value");
  String phoneNumberValue = request.getParameter("phonenumber_value");

  String resultLoginId = "";

  // 데이터베이스 처리
  // Step 1: Connector 파일을 불러와야 함
  Class.forName("com.mysql.jdbc.Driver");

  // Step 2: 데이터베이스 연결
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

  // Step 3: SQL 생성 및 전송
  String sql = "SELECT login_id FROM user_TB WHERE name = ? AND phone_number = ?";
  
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, nameValue);
  query.setString(2, phoneNumberValue);

  ResultSet resultSet = query.executeQuery();

  if (resultSet.next()) {
    flag = true;
    resultLoginId = resultSet.getString("login_id");

  } else {
    message = "해당하는 아이디를 찾지 못했습니다.";
    flag = false;
  }
%>

<script>
  const isSucsess = "<%= flag %>";
  const message = "<%= message %>";

  if (isSucsess === "true") {
    alert("<%= resultLoginId %>");
    location.href = "/";

  } else {
    alert(message)
    history.back();
  }
</script>