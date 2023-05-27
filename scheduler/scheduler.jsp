<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <title>스케쥴러 페이지</title>

    <link rel="stylesheet" type="text/css" href="scheduler.css">
</head>

<body>
  <header id="top-bar" class="topbar-draw-color">
    <div id="current-user-name">
      유동선 [팀원]의 일정 <!-- db에서 이름 가져와서 넣을거고-->
    </div>
    <button id="menu-open-button">
      menu
    </button>
  </header>

  <main>
    <div id="date-add-container">
      <section id="date-select-area">
        <button id="year-previous-button" class="year-button">
          < </button>
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
              <div id="month-text">월</div>
            </div>
            <button id="year-after-button" class="year-button"> > </button>
      </section>

      <button class="schedule-view-add-button">일정 보기</button> <!-- db에서 년 월의 일정 가져옴 -->

      <button id="add-schedule-button" class="schedule-view-add-button">일정 추가</button>
    </div>

    <section id="scheduler-container">

      <section id="schedule-area">
      </section>
    </section>

    <div class="modal hidden">
      <div class="background"></div>
      <div class="modalBox">
        <div id="inside">
          <h2>일정 추가</h2>
          <form id="schedule-data-form" action="" onsubmit="return addModalValidate(event)">
            <div id="select-input-area">
              
              <div id="year-label"> </div>
              <div id="month-label"> </div>

              <select id="day-select-input">
                <option value="">--</option>
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
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <span>일</span>

              <input id="time-select-input" type="time">
            </div>

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