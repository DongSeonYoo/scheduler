// 스케쥴러 js

let yearSelectLabel;
let monthSelectForm;

let currentYear = currentYearSession;
let currentMonth = currentMonthSession;
let scheduleArea = document.getElementById("schedule-area");

let hiddenYearValue = document.getElementById("hiddenYearValue");
let hiddenMonthValue = document.getElementById("hiddenMonthValue");

initYearSelectLabel();

function initYearSelectLabel() {
  yearSelectLabel = document.getElementById("year-select-label");
  yearSelectLabel.innerHTML = currentYear + "년";

  monthSelectForm = document.getElementById("month-select-form");
  monthSelectForm.value = currentMonth; //현재 보고있는 일정의 월(month)을 기본값으로 지정

  hiddenYearValue.value = currentYear;
  hiddenMonthValue.value = currentMonth;
}



// ------------------------------------------------------------ 상단 바 ------------------------------------------------------------//

// 현재 보고 있는 일정 주인의 프로필을 왼쪽에 보여줄거
// ...

// 현재 보고있는 일정의 연도와 월 을 보여줌
const currentScheduleDateLabel = document.getElementById("current-schedule-date-label");
currentScheduleDateLabel.textContent = currentYear + "년 " + currentMonth + "월 일정";


// ------------------------------------------------------------ 일정 선택 영역 ------------------------------------------------------------//

// 이전 연도 버튼 동작
const yearPreviousBtn = document.getElementById("year-previous-button");
yearPreviousBtn.addEventListener("click", () => {
  if (yearSelectLabel.innerHTML >= "2000") {
    currentYear = parseInt(currentYear) - 1;
    yearSelectLabel.innerHTML = currentYear + "년";

    hiddenYearValue.value = currentYear;
  }
});

// 이후 연도 버튼 동작
const yearAfterBtn = document.getElementById("year-after-button");
yearAfterBtn.addEventListener("click", () => {
  if (yearSelectLabel.innerHTML <= "2030") {
    currentYear = parseInt(currentYear) + 1;
    yearSelectLabel.innerHTML = currentYear + "년";

    hiddenYearValue.value = currentYear;
  }
});

// 월 선택 버튼 동작
const monthSelectBtn = document.getElementById("month-select-form");
monthSelectBtn.addEventListener("input", () => {
  currentMonth = monthSelectBtn.value;
  hiddenMonthValue.value = currentMonth;
});

const modalOpen = () => {
  document.querySelector(".modal").classList.remove("hidden");
};

const modalClose = () => {
  document.querySelector(".modal").classList.add("hidden");
};

// 일정 추가 버튼 누르면 모달 오픈
const modalOpenBtn = document.getElementById("add-schedule-button");
modalOpenBtn.addEventListener("click", () => {
  const yearLabel = document.getElementById("year-label");
  const monthLabel = document.getElementById("month-label");
  yearLabel.innerHTML = currentYear + "년";
  monthLabel.innerHTML = currentMonth + "월";
  modalOpen();
});

// 모달에서 일정 추가 눌렀을때
const addScheduleBtn = document.getElementById("schedule-add-button");
addScheduleBtn.addEventListener("click", addModalValidate);

// 모달에서 취소 버튼 눌렀을때
const modalCloseBtn = document.getElementById("modal-close-button");
modalCloseBtn.addEventListener("click", modalClose);

const background = document.querySelector(".background");
background.addEventListener("click", modalClose);

// 일정 추가 모달 onsumbit 함수
function addModalValidate(event) {
  const dayInputValue = document.getElementById("day-select-input").value;
  const timeInputValue = document.getElementById("time-select-input").value;
  const scheduleInputValue = document.getElementById("schedule-text-area").value;

  if (dayInputValue === "") {
    alert("몇 일에 일정을 추가하실건지 선택해주세요");
    return false;
  }

  if (timeInputValue === "") {
    alert("시간을 선택해주세요");
    return false;
  }

  if (scheduleInputValue === "") {
    alert("일정을 입력해주세요");
    return false;
  }

  if (scheduleInputValue.length > 300) {
    alert("일정은 300자 이하여야 합니다");
    return false;
  }

  modalClose();
  return true;
}

// ------------------------------------------------------------ 스케쥴 영역 ------------------------------------------------------------//

if (isFindSchedule === "true") {
  const scheduleData = [];

  const scheduleDayList = scheduleDayListStr.slice(1, -1).split(", ");
  const scheduleTimeList = scheduleTimeListStr.slice(1, -1).split(", ");
  const scheduleDescriptionList = scheduleDescriptionListStr.slice(1, -1).split(", ");

  for (let i = 0; i < scheduleDayList.length; i++) {
    scheduleData.push({
      day: parseInt(scheduleDayList[i]),
      time: scheduleTimeList[i],
      description: scheduleDescriptionList[i]
    });
  }

  scheduleData.sort((a, b) => a.day - b.day);

  for (const schedule of scheduleData) {
    makeSchedule(schedule.day, schedule.description, schedule.time);
  }


} else {

  makeSchedule(day, description, time);
}

function makeSchedule(dayInputValue, scheduleInputValue, timeInputValue) {
  const noScheduleText = document.getElementById("no-schedule-text");
  if (noScheduleText) {
    scheduleArea.removeChild(noScheduleText);
  }
  // 스케줄 박스 생성
  const scheduleBox = document.createElement("section");
  scheduleBox.id = "schedule-box";

  // 날짜 라벨과 해당 일의 일정을 추가하기 위한 버튼을 담기 위한 부모 요소 생성
  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  // 날짜 라벨 생성
  const dayLabel = document.createElement("h1");
  dayLabel.id = "day-label";
  dayLabel.innerHTML = dayInputValue + "일";
  headerContainer.appendChild(dayLabel);

  // 해당 일(day)의 일정을 추가하기 위한 버튼
  const dayAddScheduleBtn = document.createElement("button");
  dayAddScheduleBtn.id = "day-add-schedule-button";
  dayAddScheduleBtn.innerHTML = "+";
  headerContainer.appendChild(dayAddScheduleBtn);

  scheduleBox.appendChild(headerContainer);

  // 날짜와 스케줄 내용을 담는 요소 생성
  const dateScheduleBox = document.createElement("div");
  dateScheduleBox.id = "date-schedule-box";
  scheduleBox.appendChild(dateScheduleBox);

  // 날짜 요소 생성
  const dateBox = document.createElement("div");
  dateBox.id = "date-box";
  dateScheduleBox.appendChild(dateBox);

  // 날짜 설명 생성
  const dateDescription = document.createElement("p");
  dateDescription.id = "date-description";
  dateDescription.textContent = timeInputValue;
  dateBox.appendChild(dateDescription);

  // 스케줄 설명 박스 생성
  const scheduleDescriptionBox = document.createElement("div");
  scheduleDescriptionBox.id = "schedule-description-box";
  dateScheduleBox.appendChild(scheduleDescriptionBox);

  // 스케줄 설명 생성
  const scheduleDescription = document.createElement("p");
  scheduleDescription.id = "schedule-description";
  scheduleDescription.textContent = scheduleInputValue;
  scheduleDescriptionBox.appendChild(scheduleDescription);

  // 스케줄 설정 버튼 생성
  const scheduleSettionButton = document.createElement("div");
  scheduleSettionButton.id = "schedule-settion-button";
  dateScheduleBox.appendChild(scheduleSettionButton);

  // 수정 버튼 생성
  const modifyButton = document.createElement("button");
  modifyButton.id = "schedule-modify-button";
  modifyButton.className = "schedule-set-button";
  modifyButton.textContent = "수정";
  scheduleSettionButton.appendChild(modifyButton);

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.id = "schedule-delete-button";
  deleteButton.className = "schedule-set-button";
  deleteButton.textContent = "삭제";
  scheduleSettionButton.appendChild(deleteButton);

  scheduleArea.appendChild(scheduleBox);
}

// --------- 우측 메뉴바에 관한 동작 --------- //

// 우측 메뉴바를 여는 동작
const menuBar = document.getElementById("menu-bar");
const menuOpenBtn = document.getElementById("menu-open-button");
menuOpenBtn.addEventListener("click", () => {
  menuBar.classList.remove("hidden");
})

// 우측 메뉴바를 닫는 동작
const menuCloseBtn = document.getElementById("menu-close-button");
menuCloseBtn.addEventListener("click", () => {
  menuBar.classList.add("hidden");
})

// 상단에 로그인한 사용자의 프로필 정보 (이름과 직급)를 보여줌
const loginUserInfoTag = document.getElementById("loggedin-user-info");
loginUserInfoTag.textContent = loginUserName + "[" + loginUserPosition + "]";

// 프로필 수정 버튼 동작
const profileEditButton = document.getElementById("profile-edit-button");
profileEditButton.addEventListener("click", () => {
  location.href = "../account/edit/edit-profile.jsp";
})

// 로그아웃 버튼 동작
const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", () => {
  location.href = "../account/logout/logout_action.jsp";
})