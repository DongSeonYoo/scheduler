<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.sql.*" %>

<%
  request.setCharacterEncoding("utf-8");

  String userSession = (String)session.getAttribute("userSession");

  if (userSession == null) {
    response.sendRedirect("/");
  }

  ArrayList userInfoList = new ArrayList();
  Boolean flag = false;

  Class.forName("com.mysql.jdbc.Driver");

  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

  String sql = "SELECT * FROM user_TB WHERE id = ?";
  
  PreparedStatement query = connect.prepareStatement(sql);

  query.setString(1, userSession);

  ResultSet resultSet = query.executeQuery();

  while (resultSet.next()) {
    userInfoList.add(resultSet.getString("login_id"));
    userInfoList.add(resultSet.getString("position"));
    userInfoList.add(resultSet.getString("name"));
    userInfoList.add(resultSet.getString("phone_number"));
  }
%>

<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>프로필 수정 페이지</title>

    <link rel="stylesheet" type="text/css" href="edit-profile.css">
</head>

<body>
  <section id="container" role="main">

    <div id="content">

      <h1 id="title">프로필 수정 페이지</h1>

      <form action="../action/edit-profile_action.jsp" onsubmit="return validate()">

        <div class="join_content">
          <div class="fixed-form-container">
            <h4 class="info-label">아이디</h4>
            <p id="user-id" class="user-value"> </p> <!-- 현재 로그인한 사용자의 아이디 -->
          </div>

          <div class="fixed-form-container">
            <h4 class="info-label">직급</h4>
            <p id="user-position" class="user-value"> </p> <!-- 현재 로그인한 사용자의 직급 -->
          </div>
          
          <div id="name-form">
            <h4 class="info-label">이름</h4>
            <label id="name-check-label" class="check-label"></label>
            
            <span class="input-box">
              
              <input id="name-text-field" class="info-text-field" type="text" name="name_value">
            </span>
          </div>

          <div class="form-container">
            <h4 id="phonenumber-label" class="info-label">전화번호 예시: 01000000000</h4>
            <label id="phonenumber-check-label" class="check-label"></label>

            <span id="phonenumber-input-box" class="input-box">
              <input id="phonenumber-text-field" class="info-text-field" placeholder="전화번호" type="text"
                name="phonenumber_value">
            </span>
          </div>

          <div id="button-container">

            <button id="profile-update-button" class="action-button" type="submit">
              프로필 수정
            </button>
          </div>

        </div>

      </form>
      <button id="prev-button" class="action-button">스케쥴 페이지로 돌아가기</button>

    </div>

    </div>
  </section>

  <script>
    const userInfoList = [
      "<%= userInfoList.get(0) %>",
      "<%= userInfoList.get(1) %>",
      "<%= userInfoList.get(2) %>",
      "<%= userInfoList.get(3) %>"
    ];

  </script>

  <script src="edit-profile.js"></script>
</body>

</html>