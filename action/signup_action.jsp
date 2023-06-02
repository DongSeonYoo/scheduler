<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<%
  // 이전 페이지에서 온 값 저장
  request.setCharacterEncoding("utf-8");

  // 로그인 한 상태에서는 접근 불가

  // 이전 페이지의 Form 태그 안에 있는 input들의 값을 받아서 저장하는 코드
  String idValue = request.getParameter("id_value");
  String pwValue = request.getParameter("pw_value");
  String positionValue = request.getParameter("position_value");
  String nameValue = request.getParameter("name_value");
  String phoneNumberValue = request.getParameter("phonenumber_value");

  boolean flag = true;
  String errorMessage = "";

  try {
    // 데이터베이스 처리
    // Step 1: Connector 파일을 불러와야 함
    Class.forName("com.mysql.jdbc.Driver");

    // Step 2: 데이터베이스 연결
    Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

    // Step 3: SQL 생성 및 전송
    String sql = "INSERT INTO user_TB (login_id, password, position, name, phone_number, created_date, updated_date) VALUES (?, ?, ?, ?, ?, NOW(), NOW())";
    
    PreparedStatement query = connect.prepareStatement(sql);
    query.setString(1, idValue);
    query.setString(2, pwValue);
    query.setString(3, positionValue);
    query.setString(4, nameValue);
    query.setString(5, phoneNumberValue);
    query.executeUpdate();
    
  } catch (SQLException e) {
    errorMessage = e.getMessage();
    flag = false;
  }
%>

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>회원가입 결과</title>
</head>
<body>
  <script>
    const isSuccess = "<%=flag%>";
    const errorMessage = "<%= errorMessage %>";

    if (isSuccess === "true") {
      alert("회원가입 성공");
      location.href = "/";

    } else {
      alert(errorMessage);
      history.back();
    }
  </script>
</body>
</html>
