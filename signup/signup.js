let positionSelect = "";
function changeFunc(target) {
  positionSelect = target.value;
}

const idCheckLabel = document.getElementById("id-check-label");
const idInput = document.getElementById("id-text-field");
idInput.addEventListener("input", () => {
  const idRegex = /^(?=.*\d)(?=.*[a-z])[a-z\d]{6,10}$/;
  const idValue = idInput.value;
  
  if (idRegex.test(idValue)) {
    idCheckLabel.innerHTML = "올바른 형식입니다";
    idCheckLabel.style.color = "blue";
  } else {
    idCheckLabel.innerHTML = "올바른 형식이 아닙니다";
    idCheckLabel.style.color = "red";
  }
});

const pwCheckLabel = document.getElementById("pw-check-label");
const pwInput = document.getElementById("pw-text-field");
pwInput.addEventListener("input", () => {
  const pwRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*.])[0-9a-z!@#$%^&*.]{10,14}$/;
  const pwValue = pwInput.value;

  if (pwRegex.test(pwValue)) {
    pwCheckLabel.innerHTML = "올바른 형식입니다";
    pwCheckLabel.style.color = "blue";
  } else {
    pwCheckLabel.innerHTML = "비밀번호 형식에 맞지 않습니다";
    pwCheckLabel.style.color = "red";
  }
});
const pwSameCheckLabel = document.getElementById("pw-same-check-label");
const checkPwInput = document.getElementById("pw-check-text-field");
checkPwInput.addEventListener("input", () => {
  const checkPwValue = checkPwInput.value;

  if (checkPwValue === pwInput.value) {
    pwSameCheckLabel.innerHTML = "비밀번호가 동일합니다";
    pwSameCheckLabel.style.color = "blue";
  } else {
    pwSameCheckLabel.innerHTML = "비밀번호가 동일하지 않습니다";
    pwSameCheckLabel.style.color = "red";
  }
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
  const idValue = document.getElementById("id-text-field").value;
  if (idValue === "") {
    alert("아이디가 입력되지 않았습니다");
    return false;
  }

  const pwValue = document.getElementById("pw-text-field").value;
  if (pwValue === "") {
    alert("비밀번호가 입력되지 않았습니다");
    return false;
  }

  const pwCheckValue = document.getElementById("pw-check-text-field").value;
  if (pwCheckValue === "") {
    alert("비밀번호 재확인이 입력되지 않았습니다");
    return false;
  }

  if (positionSelect === "") {
    alert("직급을 선택하지 않았습니다");
    return false;
  }

  const nameValue = document.getElementById("name-text-field").value;
  if (nameValue === "") {
    alert("이름이 입력되지 않았습니다");
    return false;
  }

  const phoneNumberValue = document.getElementById("phonenumber-text-field").value;
  if (phoneNumberValue === "") {
    alert("전화번호가 입력되지 않았습니다");
    return false;
  }

  if (idCheckLabel.style.color === "red") {
    alert("아이디 형식을 확인해주세요");
    return false;
  }

  if (pwCheckLabel.style.color === "red") {
    alert("비밀번호 형식을 확인해주세요");
    return false;
  }

  if (pwSameCheckLabel.style.color === "red") {
    alert("비밀번호가 동일하지 않습니다");
    return false;
  }

  if (phoneNumberCheckLabel.style.color === "red") {
    alert("전화번호 형식을 확인해주세요");
    return false;
  }
  
  return true;
}