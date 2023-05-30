<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  // 이전 페이지에서 온 값 저장
  request.setCharacterEncoding("utf-8");

  // 이전 페이지의 Form 태그 안에 있는 input들의 값을 받아서 저장하는 코드
  String idValue = request.getParameter("id_value");
  String passwordValue = request.getParameter("password_value");

  String message = "";
  boolean flag = true;

  // 데이터베이스 처리
  // Step 1: Connector 파일을 불러와야 함
  Class.forName("com.mysql.jdbc.Driver");

  // Step 2: 데이터베이스 연결
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

  // Step 3: SQL 생성 및 전송
  String sql = "SELECT id FROM user_TB WHERE login_id = ? AND password = ?";
  
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, idValue);
  query.setString(2, passwordValue);

  ResultSet resultSet = query.executeQuery();

  if (resultSet.next()) {
    flag = true;
    String userPk = resultSet.getString("id");

    session.setAttribute("userSession", userPk); // 세션 등록

  } else {
    message = "아이디 또는 비밀번호가 올바르지 않습니다.";
    flag = false;
  }
  
%>

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>로그인 결과</title>
</head>
<body>
  <script>
    const isSuccess = "<%=flag%>";

    if (isSuccess === "true") {
      alert("로그인 성공");
      location.href = "../../scheduler/scheduler.jsp";
      
    } else {
      alert("로그인 실패: <%= message %>");
      history.back();
    }
  </script>
</body>
</html>
