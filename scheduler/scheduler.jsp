<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.util.ArrayList" %>

<%
  // 이전 페이지에서 온 값 저장
  request.setCharacterEncoding("utf-8");

  String userSession = (String)session.getAttribute("userSession");
  String currentYearSession = (String)session.getAttribute("currentYearSession");
  String currentMonthSession = (String)session.getAttribute("currentMonthSession");

  String loginUserName = "";
  String loginUserPosition = "";

  ArrayList<String> dayList = new ArrayList();
  ArrayList<String> timeList = new ArrayList();
  ArrayList<String> descriptionList = new ArrayList();

  Boolean isFindSchedule = false;

  if (userSession == null) {
    response.sendRedirect("/");
  }
  
  // 데이터베이스 처리
  // Step 1: Connector 파일을 불러와야 함
  Class.forName("com.mysql.jdbc.Driver");

  // Step 2: 데이터베이스 연결
  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

  // 유저의 정보를 가져옴
  String userTBsql = "SELECT name, position FROM user_TB WHERE id = ?";
  PreparedStatement userTBquery = connect.prepareStatement(userTBsql);
  userTBquery.setString(1, userSession);
  ResultSet userTBresultSet = userTBquery.executeQuery();

  if (userTBresultSet.next()) {
    loginUserName = userTBresultSet.getString("name");
    loginUserPosition = userTBresultSet.getString("position");
  }

  // 현재 보고있는 날짜의 일정을 가져옴 (정렬된 상태로)
  String schedulerTBsql = "SELECT DATE_FORMAT(datetime, '%d') AS day, TIME_FORMAT(datetime, '%H:%i') AS time, description FROM scheduler_TB WHERE YEAR(datetime) = ? AND MONTH(datetime) = ? AND user_id = ? ORDER BY datetime";

  PreparedStatement schedulerTBquery = connect.prepareStatement(schedulerTBsql);
  schedulerTBquery.setString(1, currentYearSession);
  schedulerTBquery.setString(2, currentMonthSession);
  schedulerTBquery.setString(3, userSession);
  ResultSet schedulerTBresultSet = schedulerTBquery.executeQuery();

  while (schedulerTBresultSet.next()) {
    String getDay = schedulerTBresultSet.getString("day");
    String getTime = schedulerTBresultSet.getString("time");
    String getDescription = schedulerTBresultSet.getString("description");

    dayList.add("'" + getDay + "'");
    timeList.add("'" + getTime + "'");
    descriptionList.add("'" + getDescription + "'");
  }

  if (dayList.isEmpty()) {
    isFindSchedule = false;

  } else {
    isFindSchedule = true;
  }
%>
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>스케쥴러 페이지</title>

  <link rel="stylesheet" type="text/css" href="scheduler.css">
</head>

<body>
  <header id="top-bar" class="topbar-draw-color">
    <div id="current-view-schedule-owner">
      유동선 [팀원]의 일정<!-- 현재 보고있는 일정의 주인의 프로필을 db에서 가져올거이름 가져와서 넣을거고-->
    </div>
    <p id="current-schedule-date-label"> </p>
    <button id="menu-open-button">
      menu
    </button>
  </header>

  <nav id="menu-bar" class="hidden">
    <div id="menu-bar-inside">
      <div id="profile-information">
        <div class="profile-header">
          <p id="loggedin-user-info"></p>
          <button id="menu-close-button">X</button>
        </div>

        <div id="login-associated-button-container">
          <button id="profile-edit-button" class="login-associated-button">
            프로필 수정
          </button>

          <button id="logout-button" class="login-associated-button">
            로그아웃
          </button>
        </div>

        <button id="view-my-profile-button">
          내 일정 보기
        </button>
      </div>
    </div>

    <div id="border-bottom-line"></div>
  </nav>

  <main>
    <div id="date-add-container">
      <form id="date-select-form" action="../action/view-schedule_action.jsp">
        <section id="date-select-area">
          <button id="year-previous-button" class="year-button">
            < </button>
              <div id="year-month-box">
                <p id="year-select-label"></p>
                <p id="year-text">년</p>

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

                <p id="month-text">월</p>

              </div>
              <button id="year-after-button" class="year-button"> > </button>
        </section>
        <input type="hidden" id="year-select-input" name="selectedYear">
        <input type="hidden" id="month-select-input" name="selectedMonth">
      </form>
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

              <div id="modal-year-label"> </div>
              <div id="modal-month-label"> </div>

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

  <script>
    const currentYearSession = "<%= currentYearSession %>";
    const currentMonthSession = "<%= currentMonthSession %>";

    const loginUserName = "<%= loginUserName %>";
    const loginUserPosition = "<%= loginUserPosition %>";

    const isFindSchedule = <%= isFindSchedule %>;
    
    const dayList = <%= dayList %>;
    const timeList = <%= timeList %>;
    const descriptionList = <%= descriptionList %>;
  </script>

  <script src="/scheduler/scheduler.js"></script>
</body>

</html>
