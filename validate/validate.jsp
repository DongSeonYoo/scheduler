<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

    <title>비밀번호 찾기 페이지</title>

    <link rel="stylesheet" type="text/css" href="validate.css">
</head>

<body>
  <section id="container" role="main">

    <div id="content">

      <h1 id="title">비밀번호 찾기 </h1>

      <form action="/action/validate_action.jsp" onsubmit="return validate()">

        <div class="join_content">
          <h4 class="info-label">아이디</h4>

          <span class="input-box">
            <input id="id-text-field" class="info-text-field" placeholder="ID" type="text" name="id_value">
          </span>

          <h4 class="info-label">이름</h4>

          <span class="input-box">
            <input id="name-text-field" class="info-text-field" placeholder="이름" type="text" name="name_value">
          </span>

          <h4 id="phonenumber-label" class="info-label">전화번호 예시: 01000000000</h4>
          <label id="phonenumber-check-label">올바른 형식이 아닙니다</label>

          <span id="phonenumber-input-box" class="input-box">
            <input id="phonenumber-text-field" class="info-text-field" placeholder="전화번호" type="text"
              name="phonenumber_value">
          </span>

          <div id="button-container">

            <button id="find-id-button" class="action-button" type="submit">
              비밀번호 재설정
            </button>

            <button id="home-button" class="action-button" type="button">
              로그인 화면으로 가기
            </button>

          </div>

        </div>

      </form>

    </div>

    </div>
  </section>

  <script src="validate.js"></script>
</body>

</html>