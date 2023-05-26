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
