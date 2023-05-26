// 스케쥴러 js

let yearSelectLabel;
let currentYear;
let currentMonth;
let scheduleArea = document.getElementById("schedule-area");

initYearSelectLabel();

function initYearSelectLabel() {
  yearSelectLabel = document.getElementById("year-select-label");
  currentYear = "2023";
  currentMonth = "1";
  yearSelectLabel.innerHTML = currentYear + "년";

  if (scheduleArea.childElementCount === 0) {
    const noScheduleText = document.createElement("p");
    noScheduleText.id = "no-schedule-text";
    noScheduleText.innerHTML = "일정이 없습니다";
    scheduleArea.appendChild(noScheduleText);
  }
}

// 스케쥴러 페이지

// 이전 연도 버튼
const yearPreviousBtn = document.getElementById("year-previous-button");
yearPreviousBtn.addEventListener("click", () => {
  if (yearSelectLabel.innerHTML >= "2000") {
    currentYear = parseInt(currentYear) - 1;
    yearSelectLabel.innerHTML = currentYear + "년"; 
  }
});

const yearAfterBtn = document.getElementById("year-after-button");
yearAfterBtn.addEventListener("click", () => {
  if (yearSelectLabel.innerHTML <= "2030") {
    currentYear = parseInt(currentYear) + 1;
    yearSelectLabel.innerHTML = currentYear + "년"; 
  }
});

const modalOpen = () => {
  document.querySelector(".modal").classList.remove("hidden");
}

const modalClose = () => {
  document.querySelector(".modal").classList.add("hidden");
}


// 모달에 관련된 동작
const addScheduleBtn = document.getElementById("add-schedule-button");
addScheduleBtn.addEventListener("click", modalOpen);

const modalCloseBtn = document.getElementById("modal-close-button");
modalCloseBtn.addEventListener("click", modalClose);

const background = document.querySelector(".background").addEventListener("click", modalClose)

function addModalValidate() {

  const timeInputValue = document.getElementById("time-select-input").value;
  const scheduleInputValue = document.getElementById("schedule-text-area").value;

  if (timeInputValue === "") {
    alert("날짜를 선택해주세요");
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

  makeSchedule(scheduleInputValue, timeInputValue);
  modalClose(); // 모달 닫기
  return true;
}


function makeSchedule(scheduleInputValue, timeInputValue) {
  // 스케줄 박스 요소 생성
  const scheduleBox = document.createElement("section");
  scheduleBox.id = "schedule-box";

  // 날짜 라벨 생성
  const dayLabel = document.createElement("h1");
  dayLabel.id = "day-label";
  dayLabel.textContent = "1일";
  scheduleBox.appendChild(dayLabel);

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
  scheduleBox.appendChild(scheduleSettionButton);

  // 수정 버튼 생성
  const modifyButton = document.createElement("button");
  modifyButton.id = "schedule-modify-button";
  modifyButton.textContent = "수정";
  scheduleSettionButton.appendChild(modifyButton);

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.id = "schedule-delete-button";
  deleteButton.textContent = "삭제";
  scheduleSettionButton.appendChild(deleteButton);

  // 스케줄 박스를 schedule-area에 추가
  const scheduleArea = document.getElementById("schedule-area");
  scheduleArea.appendChild(scheduleBox);
}
