let currentYear = currentYearSession;
let currentMonth = currentMonthSession;
let scheduleArea = document.getElementById("schedule-area");

const dateSelectForm = document.getElementById("date-select-form");
const yearSelectInput = document.getElementById("year-select-input");
const monthSelectInput = document.getElementById("month-select-input");

initYearSelectLabel();

// ------------------------------------------------------------ 상단 바 ------------------------------------------------------------//

// 현재 보고 있는 일정 주인의 프로필을 왼쪽에 보여줄거
// ...

// 현재 보고있는 일정의 연도와 월을 보여줌
const currentScheduleDateLabel = document.getElementById("current-schedule-date-label");
currentScheduleDateLabel.textContent = currentYear + "년 " + currentMonth + "월 일정";

// ------------------------------------------------------------ 일정 선택 영역 ------------------------------------------------------------//

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
const modalOpenBtn = document.getElementById("add-schedule-button");
modalOpenBtn.addEventListener("click", () => {
  const yearLabel = document.getElementById("modal-year-label");
  const monthLabel = document.getElementById("modal-month-label");
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

// ------------------------------------------------------------ 스케쥴 영역 ------------------------------------------------------------//

if (isFindSchedule === true) {
  const scheduleData = [];

  for (let i = 0; i < dayList.length; i++) {
    scheduleData.push({
      day: parseInt(dayList[i]),
      time: parseInt(timeList[i]),
      description: descriptionList[i]
    });
  }

  for (const schedule of scheduleData) {
    makeSchedule(schedule.day, schedule.description, schedule.time);
  }

} else {
  if (scheduleArea.childElementCount === 0) {
    const noScheduleText = document.createElement("p");
    noScheduleText.id = "no-schedule-text";
    noScheduleText.innerHTML = "일정이 없습니다";
    scheduleArea.appendChild(noScheduleText);
  }
}

function makeSchedule(dayInputValue, scheduleDescriptionValue, timeInputValue) {
  const noScheduleText = document.getElementById("no-schedule-text");
  if (noScheduleText) {
    scheduleArea.removeChild(noScheduleText);
  }

  // 스케줄 박스 생성
  const scheduleBox = createScheduleContainer();

  // 스케줄의 day를 나타내는 header를 생성
  createScheduleHeader(dayInputValue, scheduleBox);

  // 날짜와 스케줄 내용을 담는 요소 생성
  createScheduleInfo(scheduleBox, timeInputValue, scheduleDescriptionValue);
}

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

function createScheduleInfo(scheduleBox, timeInputValue, scheduleDescriptionValue) {
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
  scheduleDescription.textContent = scheduleDescriptionValue;
  scheduleDescriptionBox.appendChild(scheduleDescription);

  // 스케줄 설정 버튼영역 생성
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

function createScheduleHeader(dayInputValue, scheduleBox) {
  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  // 날짜 라벨 생성
  const dayLabel = document.createElement("h1");
  dayLabel.id = "day-label";
  dayLabel.innerHTML = dayInputValue + "일";
  headerContainer.appendChild(dayLabel);
  scheduleBox.appendChild(headerContainer);
}

function createScheduleContainer() {
  const scheduleBox = document.createElement("section");
  scheduleBox.id = "schedule-box";
  return scheduleBox;
}

function initYearSelectLabel() {
  let monthSelectForm;
  let yearSelectLabel;

  yearSelectLabel = document.getElementById("year-select-label");
  yearSelectLabel.innerHTML = currentYear;

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