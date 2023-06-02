<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.util.ArrayList" %>

<%
  // 이전 페이지에서 온 값 저장
  request.setCharacterEncoding("utf-8");

  Boolean isFindSchedule = false;

  String userSession = (String)session.getAttribute("userSession");
  String currentYearSession = (String)session.getAttribute("currentYearSession");
  String currentMonthSession = (String)session.getAttribute("currentMonthSession");

  String loginUserName = "";
  String loginUserPosition = "";

  String scheduleDateOfDay = "";
  String scheudleDateOfTime = "";
  String scheduleDescription = "";

  ArrayList scheduleDayList = new ArrayList();
  ArrayList scheduleTimeList = new ArrayList();
  ArrayList scheduleDescriptionList = new ArrayList();

  if (userSession == null) {

  } else {
    int userPk = Integer.parseInt(userSession);
  
    // 데이터베이스 처리
    // Step 1: Connector 파일을 불러와야 함
    Class.forName("com.mysql.jdbc.Driver");
  
    // Step 2: 데이터베이스 연결
    Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");
  
    // Step 3: SQL 생성 및 전송
    String userTBsql = "SELECT name, position FROM user_TB WHERE id = ?";
  
    PreparedStatement userTBquery = connect.prepareStatement(userTBsql);
    userTBquery.setInt(1, userPk);
    ResultSet userTBresultSet = userTBquery.executeQuery();
  
    while (userTBresultSet.next()) {
      loginUserName = userTBresultSet.getString("name");
      loginUserPosition = userTBresultSet.getString("position");
    }

    String schedulerTBsql = "SELECT * FROM scheduler_TB WHERE user_id = ? AND year = ? AND month = ?";

    PreparedStatement schedulerTBquery = connect.prepareStatement(schedulerTBsql);
    schedulerTBquery.setInt(1, userPk);
    schedulerTBquery.setString(2, currentYearSession);
    schedulerTBquery.setString(3, currentMonthSession);
    ResultSet schedulerTBresultSet = schedulerTBquery.executeQuery();

    while (schedulerTBresultSet.next()) {
      scheduleDayList.add(schedulerTBresultSet.getString("day"));
      scheduleTimeList.add(schedulerTBresultSet.getString("time"));
      scheduleDescriptionList.add(schedulerTBresultSet.getString("description"));
    }

    if (!scheduleDayList.isEmpty()) {
      isFindSchedule = true;
    } else {
      isFindSchedule = false;
    }
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
      <section id="date-select-area">
        <button id="year-previous-button" class="year-button"> < </button>

          
            <div id="year-month-box">

              <p id="year-select-label"></p>

              <select id="month-select-form" name="selectedMonth">
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

      <form id="schedule-view-form" action="scheduler-action/view-schedule_action.jsp">
        <input id="hiddenYearValue" type="hidden" name="year">
        <input id="hiddenMonthValue" type="hidden" name="month">
        <button id="schedule-view-button" class="schedule-view-add-button">일정 보기</button> <!-- db에서 년 월의 일정 가져옴 -->
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
    const loginUserName = "<%= loginUserName %>";
    const loginUserPosition = "<%= loginUserPosition %>";

    const isFindSchedule = "<%= isFindSchedule %>";

    const currentYearSession = "<%= currentYearSession %>";
    const currentMonthSession = "<%= currentMonthSession %>";

    const scheduleDayListStr = "<%= scheduleDayList %>";
    const scheduleDescriptionListStr = "<%= scheduleDescriptionList %>";
    const scheduleTimeListStr = "<%= scheduleTimeList %>";
  </script>

  <script src="/scheduler/scheduler.js"></script>
</body>

</html>