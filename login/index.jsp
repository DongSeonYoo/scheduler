<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<% String userSession = (String)session.getAttribute("userSession"); %>

<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>로그인 페이지</title>

  <link rel="stylesheet" type="text/css" href="index.css">
</head>

<body>
  <section id="container" role="main">

    <div id="content">

      <%= userSession %>

      <h1 id="title">daily </h1>

      <form action="/action/login_action.jsp" onsubmit="return validate()">

        <div class="join_content">
          <h4 class="info-label">아이디</h4>

          <span class="input-box">
            <input id="id-text-field" class="info-text-field" placeholder="ID" type="text" name="id_value">
          </span>

          <h4 class="info-label">비밀번호</h4>

          <span class="input-box">
            <input id="pw-text-field" class="info-text-field" placeholder="PW" type="password" name="password_value">
          </span>

          <button id="login-button" type="submit">
            로그인
          </button>

        </div>

      </form>
      <div id="other-button">
        <a id="find-id-link" class="link" href="/find-id/find-id.jsp">아이디 찾기</a>
        <a id="find-pw-link" class="link" href="/validate/validate.jsp">비밀번호 찾기</a>
        <a id="signup-link" class="link" href="/signup/signup.jsp">회원가입</a>
      </div>

    </div>
  </section>


  <script src="index.js"></script>
</body>

</html>