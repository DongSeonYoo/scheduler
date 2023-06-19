let positionSelect = "";
let idValidateFlag = false;
let phoneNumberValidateFlag = false;

const idCheckLabel = document.getElementById("id-check-label");
const idInput = document.getElementById("id-text-field");
idInput.addEventListener("input", () => {
  const idRegex = /^(?=.*\d)(?=.*[a-z])[a-z\d]{6,10}$/;
  const idValue = idInput.value;

  if (idValue.length === 0) {
    idCheckLabel.innerHTML = "아이디를 입력해주세요";
    idCheckLabel.style.color = "black";
    idValidateBtn.disabled = true;
    return;
  }

  // 아이디 입력형식이 올바른 경우 중복 체크 활성화
  if (idRegex.test(idValue)) {
    idCheckLabel.innerHTML = "올바른 형식입니다";
    idCheckLabel.style.color = "blue";
    idValidateBtn.disabled = false;

  // 아이디 입력형식이 올바르지 않을 경우 중복 체크 비활성화
  } else {
    idCheckLabel.innerHTML = "올바른 형식이 아닙니다";
    idCheckLabel.style.color = "red";
    idValidateBtn.disabled = true;
  }
});

const idValidateBtn = document.getElementById("id-validate-button");
idValidateBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const idInputValue = idInput.value;
  const form = document.createElement("form");
  form.action = "../action/id-duplicate-check_action.jsp";
  form.style.display = "none";

  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "id_value";
  input.value = idInputValue;
  form.appendChild(input);

  document.body.appendChild(form);
  form.submit();
  idValidateFlag = true;
});

const pwCheckLabel = document.getElementById("pw-check-label");
const pwInput = document.getElementById("pw-text-field");
pwInput.addEventListener("input", () => {
  const pwRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*.])[0-9a-z!@#$%^&*.]{10,14}$/;
  const pwValue = pwInput.value;

  if (pwValue.length === 0) {
    pwCheckLabel.innerHTML = "비밀번호를 입력해주세요";
    pwCheckLabel.style.color = "black";
    return;
  }

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

  if (checkPwValue.length === 0) {
    pwSameCheckLabel.innerHTML = "비밀번호를 재확인해주세요";
    pwSameCheckLabel.style.color = "black";
    return;
  }

  if (checkPwValue === pwInput.value) {
    pwSameCheckLabel.innerHTML = "비밀번호가 동일합니다";
    pwSameCheckLabel.style.color = "blue";

  } else {
    pwSameCheckLabel.innerHTML = "비밀번호가 동일하지 않습니다";
    pwSameCheckLabel.style.color = "red";
  }
})

const nameCheckLabel = document.getElementById("name-check-label");
const nameInput = document.getElementById("name-text-field");
nameInput.addEventListener("input", () => {
  const nameRegex = /^[a-zA-Z가-힣]{2,}$/;
  const nameValue = nameInput.value;

  if (nameValue.length === 0) {
    nameCheckLabel.innerHTML = "이름을 입력해주세요";
    nameCheckLabel.style.color = "black";
    return;
  }

  if (nameRegex.test(nameValue)) {
    nameCheckLabel.innerHTML = "올바른 형식입니다";
    nameCheckLabel.style.color = "blue";

  } else {
    nameCheckLabel.innerHTML = "형식에 맞지 않습니다";
    nameCheckLabel.style.color = "red";
  }
});

const phoneNumberCheckLabel = document.getElementById("phonenumber-check-label");
const phoneNumberInput = document.getElementById("phonenumber-text-field");
phoneNumberInput.addEventListener("input", () => {
  const phoneNumberValue = phoneNumberInput.value;
  const phoneNumberRegx = /^0\d{10}$/;

  if (phoneNumberValue.length === 0) {
    phoneNumberCheckLabel.innerHTML = "전화번호를 입력해주세요";
    phoneNumberCheckLabel.style.color = "black";
    phoneNumberValidateBtn.disabled = true;
    return;
  }

  if (phoneNumberRegx.test(phoneNumberValue)) {
    phoneNumberCheckLabel.innerHTML = "올바른 형식입니다";
    phoneNumberCheckLabel.style.color = "blue";
    phoneNumberValidateBtn.disabled = false;

  } else {
    phoneNumberCheckLabel.innerHTML = "올바른 형식이 아닙니다";
    phoneNumberCheckLabel.style.color = "red";
    phoneNumberValidateBtn.disabled = true;
  }
});

const phoneNumberValidateBtn = document.getElementById("phonenumber-validate-button");
phoneNumberValidateBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const phonenumberValue = phoneNumberInput.value;
  const form = document.createElement("form");
  form.action = "../action/phonenumber-duplicate-check_action.jsp";
  form.style.display = "none";

  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "phonenumber_value";
  input.value = phonenumberValue;
  form.appendChild(input);

  document.body.appendChild(form);
  form.submit();
  phoneNumberValidateFlag = true;
});

function changeFunc(target) {
  positionSelect = target.value;
};

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

  if (nameCheckLabel.style.color === "red") {
    alert("이름 형식을 확인해주세요");
    return false;
  }

  if (phoneNumberCheckLabel.style.color === "red") {
    alert("전화번호 형식을 확인해주세요");
    return false;
  }

  return true;
}