let currentYear = currentYearSession;
let currentMonth = currentMonthSession;
let scheduleArea = document.getElementById("schedule-area");
let scheduleBox;

const dateSelectForm = document.getElementById("date-select-form");
const yearSelectInput = document.getElementById("year-select-input");
const monthSelectInput = document.getElementById("month-select-input");

initYearSelectLabel();
createSchedule();

// 상단 바에 현재 보고있는 일정의 연도와 월을 보여줌
const currentScheduleDateLabel = document.getElementById("current-schedule-date-label");
currentScheduleDateLabel.textContent = currentYear + "년 " + currentMonth + "월 일정";

// -- 일정 선택 영역 -- 

// 이전 연도 버튼 동작
const yearPreviousBtn = document.getElementById("year-previous-button");
yearPreviousBtn.addEventListener("click", () => {
  changeYear(currentYear - 1);
});

// 이후 연도 버튼 동작
const yearAfterBtn = document.getElementById("year-after-button");
yearAfterBtn.addEventListener("click", () => {
  currentYear = parseInt(currentYear) + 1;
  changeYear(currentYear);
});

// 월 선택 버튼 동작
const monthSelectBtn = document.getElementById("month-select-form");
monthSelectBtn.addEventListener("change", (event) => {
  changeMonth(event.target.value);
});

// 일정 추가 버튼 누르면 모달 오픈
const addScheduleBtn = document.getElementById("add-schedule-button");
addScheduleBtn.addEventListener("click", () => {
  const modalTitle = document.getElementById("modal-title");
  const insideDiv = document.getElementById("inside");
  const addScheduleForm = document.createElement("form");

  modalTitle.innerHTML = "일정 추가"
  
  addScheduleForm.id = "schedule-data-form";
  addScheduleForm.action = "/action/add-schedule_action.jsp";
  addScheduleForm.onsubmit = addModalValidate;

  while (insideDiv.firstChild) {
    addScheduleForm.appendChild(insideDiv.firstChild);
  }

  insideDiv.appendChild(addScheduleForm);

  const yearLabel = document.getElementById("modal-year-label");
  const monthLabel = document.getElementById("modal-month-label");
  yearLabel.innerHTML = currentYear + "년";
  monthLabel.innerHTML = currentMonth + "월";

  modalOpen();
});

// 모달에서 취소 버튼 눌렀을때
const modalCloseBtn = document.getElementById("modal-close-button");
modalCloseBtn.addEventListener("click", modalClose);

// 모달 바깥 영역 눌렀을 떄
const background = document.querySelector(".background");
background.addEventListener("click", modalClose);


// --------- 우측 메뉴바에 관한 동작 --------- //
// 우측 메뉴바를 여는 동작
const menuBar = document.getElementById("menu-bar");
const menuOpenBtn = document.getElementById("menu-open-button");
menuOpenBtn.addEventListener("click", () => {
  menuBar.classList.remove("hidden");
});

// 우측 메뉴바를 닫는 동작
const menuCloseBtn = document.getElementById("menu-close-button");
menuCloseBtn.addEventListener("click", () => {
  menuBar.classList.add("hidden");
});

// 상단에 로그인한 사용자의 프로필 정보 (이름과 직급)를 보여줌
const loginUserInfoTag = document.getElementById("loggedin-user-info");
loginUserInfoTag.textContent = loginUserName + "[" + loginUserPosition + "]";

// 프로필 수정 버튼 동작
const profileEditButton = document.getElementById("profile-edit-button");
profileEditButton.addEventListener("click", () => {
  location.href = "../edit-profile/edit-profile.jsp";
});

// 로그아웃 버튼 동작
const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", () => {
  location.href = "../action/logout_action.jsp";
});


function createSchedule() {
  if (isFindSchedule === true) {
    let scheduleData = [];

    for (let i = 0; i < dayList.length; i++) {
      scheduleData.push({
        day: parseInt(dayList[i]),
        time: timeList[i],
        description: descriptionList[i]
      });
    }

    let groupedSchedules = groupSchedulesByDay(scheduleData);

    for (const day in groupedSchedules) {
      makeSchedule(day, groupedSchedules[day]);
    }

  } else { // 만약 스케쥴을 찾지 못했을 시

    if (scheduleArea.childElementCount === 0) {
      const noScheduleText = document.createElement("p");
      noScheduleText.id = "no-schedule-text";
      noScheduleText.innerHTML = "일정이 없습니다";

      scheduleArea.appendChild(noScheduleText);
    }
  }
}

/*
 일 별로 그룹화 해야됌

  {
    1: [
      {day: 1, time: '15:31', description: 'test'},
      {day: 1, time: '15:57', description: 'test'}
    ],
    2: [
      {day: 2, time: '15:29', description: '32'}
    ]
  }

*/

// 받아온 일정 객체를 날짜별로 그룹화
function groupSchedulesByDay(scheduleData) {
  let groupedSchedules = {};

  for (const schedule of scheduleData) {
    if (!groupedSchedules[schedule.day]) {
      groupedSchedules[schedule.day] = [];
    }
    groupedSchedules[schedule.day].push(schedule);
  }

  return groupedSchedules;
}

function makeSchedule(day, userScheduleDataArray) {
  scheduleBox = createScheduleContainer();
  createScheduleHeader(day);

  const mainContainer = createScheduleMain();

  for (const userScheduleData of userScheduleDataArray) {
    createScheduleInfo(userScheduleData.time, userScheduleData.description, mainContainer);
  }

  scheduleArea.appendChild(scheduleBox);
}

function createScheduleContainer() {
  const scheduleBox = document.createElement("section");
  scheduleBox.id = "schedule-box";

  return scheduleBox;
}

function createScheduleMain() {
  const mainContainer = document.createElement("div");
  mainContainer.className = "schedule-main-container";

  return mainContainer;
}

function createScheduleHeader(dayInputValue) {
  const headerContainer = document.createElement("div");
  headerContainer.className = "schedule-header-container";

  const dayLabel = document.createElement("h1");
  dayLabel.className = "day-label";
  dayLabel.textContent = dayInputValue + "일";


  headerContainer.appendChild(dayLabel);
  scheduleBox.appendChild(headerContainer);
}

function createScheduleInfo(timeInputValue, scheduleDescriptionValue, mainContainer) {
  const dateScheduleBox = document.createElement("div");
  dateScheduleBox.id = "date-schedule-box";

  const dateBox = document.createElement("div");
  dateBox.id = "date-box";
  dateScheduleBox.appendChild(dateBox);

  const dateDescription = document.createElement("p");
  dateDescription.className = "date-description";
  dateDescription.textContent = timeInputValue;
  dateBox.appendChild(dateDescription);

  const scheduleDescription = document.createElement("p");
  scheduleDescription.id = "schedule-description";
  scheduleDescription.textContent = scheduleDescriptionValue;
  dateScheduleBox.appendChild(scheduleDescription);

  const scheduleSettionButton = document.createElement("div");
  scheduleSettionButton.id = "schedule-settion-button";

  const modifyButton = document.createElement("button");
  modifyButton.className = "schedule-set-button";
  modifyButton.textContent = "수정";
  scheduleSettionButton.appendChild(modifyButton);

  const deleteButton = document.createElement("button");
  deleteButton.className = "schedule-set-button";
  deleteButton.textContent = "삭제";


  scheduleSettionButton.appendChild(deleteButton);
  dateScheduleBox.appendChild(scheduleSettionButton);
  mainContainer.appendChild(dateScheduleBox);
  scheduleBox.appendChild(mainContainer);
}

function initYearSelectLabel() {
  let monthSelectForm;
  let yearSelectLabel;

  yearSelectLabel = document.getElementById("year-select-label");
  yearSelectLabel.textContent = currentYear;

  monthSelectForm = document.getElementById("month-select-form");
  monthSelectForm.value = currentMonth; // 현재 보고있는 일정의 월(month)을 기본값으로 지정
}

function changeYear(newYear) {
  currentYear = newYear;
  yearSelectInput.value = currentYear;
  monthSelectInput.value = currentMonth;

  dateSelectForm.submit();
}

function changeMonth(newMonth) {
  yearSelectInput.value = currentYear;
  monthSelectInput.value = newMonth;

  dateSelectForm.submit();
}

function modalOpen() {
  document.querySelector(".modal").classList.remove("hidden");
}

function modalClose() {
  document.querySelector(".modal").classList.add("hidden");
}

// 일정 추가 모달 onsubmit 함수
function addModalValidate(event) {
  const modalDayInputValue = document.getElementById("day-select-input").value;
  const modalTimeInputValue = document.getElementById("time-select-input").value;
  const modalDescriptionInputValue = document.getElementById("schedule-text-area").value;

  if (modalDayInputValue === "") {
    alert("몇 일에 일정을 추가하실건지 선택해주세요");
    return false;
  }

  if (modalTimeInputValue === "") {
    alert("시간을 선택해주세요");
    return false;
  }

  if (modalDescriptionInputValue === "") {
    alert("일정을 입력해주세요");
    return false;
  }

  if (modalDescriptionInputValue.length > 300) {
    alert("일정은 300자 이하여야 합니다");
    return false;
  }

  document.getElementById("modal-hidden-year-input").value = currentYear;
  document.getElementById("modal-hidden-month-input").value = currentMonth;
  document.getElementById("modal-hidden-day-input").value = modalDayInputValue;
  document.getElementById("modal-hidden-datetime-input").value = modalTimeInputValue;
  document.getElementById("modal-hidden-description-input").value = modalDescriptionInputValue;

  return true;
}

