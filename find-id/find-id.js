const homebtn = document.getElementById("home-button");
homebtn.addEventListener("click", () => {
  location.href = "/";
})

const phoneNumberCheckLabel = document.getElementById("phonenumber-check-label");
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
  const phoneNumberValue = document.getElementById("phonenumber-text-field").value;

  if (nameValue === "" || phoneNumberValue === "") {
    alert("입력되지 않은 폼이 있습니다");
    return false;
  }

  if (nameValue.length >= 6 || phoneNumberValue.length > 11) {
    alert("아이디 또는 이름의 길이를 확인해주세요");
    return false;
  }

  if (phoneNumberCheckLabel.style.color === "red") {
    alert("전화번호 형식을 확인해주세요");
    return false;
  }

  return true;
}