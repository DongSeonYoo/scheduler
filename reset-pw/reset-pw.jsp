<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

    <title>비밀번호 재설정 페이지</title>

    <link rel="stylesheet" type="text/css" href="reset-pw.css">
</head>

<body>
  <section id="container" role="main">

    <div id="content">

      <h1 id="title">비밀번호 재설정</h1>
      

      <form action="/action/reset-pw_action.jsp" onsubmit= "return validate()">

        <div class="join_content">

          <h4 class="info-label">새로운 비밀번호</h4>
          <label id="pw-check-label" class="check-label">비밀번호 형식에 맞지 않습니다</label>

          <span class="input-box">
            <input id="new-pw-textfield" class="info-text-field" placeholder="새롭게 설정할 비밀번호" type="password" name="new_pw_value">
          </span>

          <h4 class="info-label">비밀번호 재확인</h4>
          <label id="pw-same-check-label" class="check-label">비밀번호가 동일하지 않습니다</label>

          <span class="input-box">
            <input id="pw-check-textfield" class="info-text-field" placeholder="동일한 비밀번호" type="password">
          </span>

          <div id="button-container">

            <button id="reset-pw-button" class="action-button" type="submit">
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

  <script src="/common/common.js"></script>
  <script src="reset-pw.js"></script>
</body>

</html>