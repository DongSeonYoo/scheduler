<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

    <title>아이디 찾기 페이지</title>

    <link rel="stylesheet" type="text/css" href="find-id.css">
</head>

<body>
  <section id="container" role="main">

    <div id="content">

      <h1 id="title">아이디 찾기 </h1>

      <form action="find-id_action.jsp" onsubmit="return validate()">

        <div class="join_content">

          <h4>이름</h4>

          <span class="input-box">
            <input id="name-text-field" class="info-text-field" placeholder="이름" type="text" name="name_value">
          </span>

          <h4 id="phonenumber-label">전화번호 예시: 01000000000</h4>
          <label id="phonenumber-check-label">올바른 형식이 아닙니다</label>

          <span id="phonenumber-input-box" class="input-box">
            <input id="phonenumber-text-field" class="info-text-field" placeholder="전화번호" type="text"
              name="phonenumber_value">
          </span>

          <div id="button-container">

            <button id="find-id-button" class="action-button" type="submit">
              아이디 찾기
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

  <script src="find-id.js"></script>
</body>

</html>