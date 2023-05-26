// 스케쥴러 js

let yearSelectLabel;
let currentYear;

initYearSelectLabel();

function initYearSelectLabel() {
  yearSelectLabel = document.getElementById("year-select-label");
  currentYear = "2023";
  yearSelectLabel.innerHTML = currentYear + "년";
}


// 스케쥴러 페이지
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

  return true;
}