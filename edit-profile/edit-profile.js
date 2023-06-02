const homeBtn = document.getElementById("home-button");
homeBtn.addEventListener("click", () => {
  location.href = "/";
});

let positionSelect = "";
function changeFunc(target) {
  positionSelect = target.value;
};

const phoneNumberCheckLabel = document.getElementById("phonenumber-check-label");
phoneNumberCheckLabel.style.color = "red";
const phoneNumberInput = document.getElementById("phonenumber-text-field");

phoneNumberInput.addEventListener("input", () => {
  const phoneNumberValue = phoneNumberInput.value;
  const phoneNumberRegx = /^0\d{10}$/;
  
  if (phoneNumberRegx.test(phoneNumberValue)) {
    phoneNumberCheckLabel.innerHTML = "올바른 형식입니다";
    phoneNumberCheckLabel.style.color = "blue";
  } else {
    phoneNumberCheckLabel.innerHTML = "올바른 형식이 아닙니다";
    phoneNumberCheckLabel.style.color = "red";
  }
});

function validate() {

  const nameValue = document.getElementById("name-text-field").value;
  if (nameValue === "") {
    alert("이름이 입력되지 않았습니다");
    return false;
  }

  if (nameValue.length > 10) {
    alert("이름이 너무 깁니다 10자 이내로 입력해주세요");
    return false;
  }

  // 기존 이름과 동일한 이름일 경우 예외처리 (이름이 변경되지 않았을 경우)

  if (phoneNumberCheckLabel.style.color === "red") {
    alert("전화번호 형식을 확인해주세요");
    return false;
  }
  
  return true;
}