<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

    <title>회원가입 페이지</title>

    <link rel="stylesheet" type="text/css" href="signup.css">
</head>

<body>
  <section id="container" role="main">

    <div id="content">

      <h1 id="title">회원가입</h1>

      <form action="signup_action.jsp" onsubmit="return validate()">

        <div class="join_content">
          <div id="form-container">
            <h4>아이디 (영어 소문자 + 숫자) 6 ~ 10자리</h4>
            <label id="id-check-label" class="check-label">올바른 형식이 아닙니다</label>
            <span class="input-box">
              <input id="id-text-field" class="info-text-field" placeholder="ID" type="text" name="id_value">
            </span>
          </div>

          <div id="form-container">
            <h4>비밀번호 (영어 소문자 + 숫자 + 특수문자) 10 ~ 14자리</h4>
            <label id="pw-check-label" class="check-label">올바른 형식이 아닙니다</label>

            <span class="input-box">
              <input id="pw-text-field" class="info-text-field" placeholder="비밀번호" type="password" name="pw_value">
            </span>
          </div>

          <div id="form-container">
            <h4>비밀번호 확인</h4>
            <label id="pw-check-label" class="check-label">비밀번호가 동일하지 않습니다</label>

            <span class="input-box">
              <input id="pw-check-text-field" class="info-text-field" placeholder="동일한 비밀번호" type="password">
            </span>
          </div>

          <div id="form-container" class="select">
            <div id="position-select">
              <h4>직급</h4>
              <select class="input-box" name="grade">
                <option value=""> 직급 </option>
                <option value="admin"> 관리자 </option>
                <option value="leader"> 팀장 </option>
                <option value="member"> 팀원 </option>
              </select>
            </div>

            <div id="name-form">
              <h4>이름</h4>
              <span class="input-box">
                <input id="name-text-field" class="info-text-field" placeholder="이름" type="text" name="name_value">
              </span>
            </div>

          </div>

          <div id="form-container">
            <h4 id="phonenumber-label">전화번호 예시: 01000000000</h4>
            <label id="phonenumber-check-label" class="check-label">올바른 형식이 아닙니다</label>

            <span id="phonenumber-input-box" class="input-box">
              <input id="phonenumber-text-field" class="info-text-field" placeholder="전화번호" type="text"
                name="phonenumber_value">
            </span>
          </div>

          <div id="button-container">

            <button id="find-id-button" class="action-button" type="submit">
              회원가입
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

  <script src="signup.js"></script>
</body>

</html>