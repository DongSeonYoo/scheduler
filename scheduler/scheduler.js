// 스케쥴러 js

let yearSelectLabel;
let currentYear;

initYearSelectLabel();

function initYearSelectLabel() {
  yearSelectLabel = document.getElementById("year-select-label");
  currentYear = "2023";
  yearSelectLabel.innerHTML = currentYear + "년";
}

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

// const addScheduleBtn = document.getElementById("add-schedule-button");
// addScheduleBtn.addEventListener("click", () => {
//   document.querySelector(".modal").classList.remove("hidden");
// })

const modalOpen = () => {
  document.querySelector(".modal").classList.remove("hidden");
}

const modalClose = () => {
  document.querySelector(".modal").classList.add("hidden");
}

const addScheduleBtn = document.getElementById("add-schedule-button");
addScheduleBtn.addEventListener("click", modalOpen);

const modalCloseBtn = document.getElementById("modal-close-button");
modalCloseBtn.addEventListener("click", modalClose);

const background = document.querySelector(".background").addEventListener("click", modalClose);