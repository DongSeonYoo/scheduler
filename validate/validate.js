function validate() {
  const idValue = document.getElementById("id-text-field").value;
  const nameValue = document.getElementById("name-text-field").value;
  const phoneNumberValue = document.getElementById("phonenumber-text-field").value;

  if (idValue === "") {
    alert("아이디가 입력되지 않았습니다");
    return false;
  }

  if (idValue.length >= 14) {
    alert("아이디의 길이가 너무 깁니다");
    return false;
  }

  if (nameValue === "") {
    alert("이름이 입력되지 않았습니다");
    return false;
  }

  if (nameValue.length > 12) {
    alert("이름의 길이가 너무 깁니다");
    return false;
  }

  if (phoneNumberValue === "") {
    alert("전화번호가 입력되지 않았습니다");
    return false;
  }

  if (phoneNumberValue.length > 11) {
    alert("전화번호의 길이가 너무 깁니다");
    return false;
  }

  if (phoneNumberCheckLabel.style.color === "red") {
    alert("전화번호 형식을 확인해주세요");
    return false;
  }

  return true;
}

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