<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <title>스케쥴러</title>

    <link rel="stylesheet" type="text/css" href="/daily/scheduler/scheduler.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha512-..." crossorigin="anonymous" />

</head>

<body>

  <header id="top-bar" class="topbar-draw-color">
    <div id="current-user-name">
      유동선 [팀원]의 일정
    </div>

    <button id="menu-open-button">
      menu
    </button>
  </header>

  <main>
    <section id="date-select-area">
      <button id="year-previous-button" class="year-button"> < </button>

          <div id="year-month-box">

            <div id="year-select-label"></div>

              <select id="month-select-form">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>

            <div id="month-label">월</div>

          </div>

          <button id="year-after-button" class="year-button"> > </button>

          <button id="add-schedule-button">일정 추가</button>
    </section>
    
    <section id="scheduler-container">

      <section id="day-bar">

        <button class="day-button">
          1
        </button>
        <button class="day-button">
          2
        </button>
        <button class="day-button">
          3
        </button>
      </section>

      <section id="schedule-area">
        <section id="schedule-box">
          <h1 id="day-label">1일</h1>
        </section>

        <section id="schedule-box">
          <h1 id="day-label">2일</h1>
        </section>
      </section>

    </section>

    <div class="modal hidden">

      <div class="background"></div>

      <div class="modalBox">
        <div id="inside">

          <h2>일정 추가</h2>

          <form id="schedule-data-form" action="">

            <input id="time-select-input" type="time">

            <input id="schedule-text-area" type="text">

            <div id="button-area">
              <button id="schedule-add-button" class="modal-button" type="submit">
                추가
              </button>

              <button id="modal-close-button" class="modal-button" type="button">
                취소
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </main>

  <script src="/scheduler/scheduler.js"></script>
</body>

</html>