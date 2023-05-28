<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

    <title>프로필 수정 페이지</title>

    <link rel="stylesheet" type="text/css" href="edit-profile.css">
</head>

<body>
  <section id="container" role="main">

    <div id="content">

      <h1 id="title">프로필 수정 페이지</h1>

      <form action="edit-profile_action.jsp" onsubmit="return validate()">

        <div class="join_content">
          <div class="fixed-form-container">
            <h4 class="info-label">아이디</h4>
            <p class="fixed-value"> testID </p> <!-- 현재 로그인한 사용자의 아이디 -->
          </div>

          <div class="fixed-form-container">
            <h4 class="info-label">직급</h4>
            <p class="fixed-value"> 팀원 </p> <!-- 현재 로그인한 사용자의 직급 -->
          </div>
          
          <div id="name-form">
            <h4 class="info-label">이름</h4>
            <span class="input-box">
              
              <input id="name-text-field" class="info-text-field" value="유동선" type="text" name="name_value">

            </span>
          </div>

          <div class="form-container">
            <h4 id="phonenumber-label" class="info-label">전화번호 예시: 01000000000</h4>
            <label id="phonenumber-check-label" class="check-label">올바른 형식이 아닙니다</label>

            <span id="phonenumber-input-box" class="input-box">
              <input id="phonenumber-text-field" class="info-text-field" placeholder="전화번호" type="text"
                name="phonenumber_value">
            </span>
          </div>

          <div id="button-container">

            <button id="profile-edit-button" class="action-button" type="submit">
              프로필 수정
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

  <script src="edit-profile.js"></script>
</body>

</html>