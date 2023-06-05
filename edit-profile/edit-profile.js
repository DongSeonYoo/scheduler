const userId = userInfoList[0];
const userPosition = userInfoList[1];
const userName = userInfoList[2];
const userPhoneNumber = userInfoList[3];

const userIdInput = document.getElementById("user-id");
const userPositionInput = document.getElementById("user-position");
const userNameInput = document.getElementById("name-text-field");
const phoneNumberInput = document.getElementById("phonenumber-text-field");

initEditProfile();

const nameCheckLabel = document.getElementById("name-check-label");
userNameInput.addEventListener("input", () => {
  const userNameValue = userNameInput.value;
  const userNameRegex = /^[a-zA-Z가-힣]{2,}$/;

  if (userNameValue === "") {
    nameCheckLabel.innerHTML = "이름을 입력해 주세요";
    nameCheckLabel.style.color = "black";
    return;
  }

  if (userNameRegex.test(userNameValue)) {
    nameCheckLabel.innerHTML = "올바른 형식입니다";
    nameCheckLabel.style.color = "blue";

  } else {
    nameCheckLabel.innerHTML = "올바른 형식이 아닙니다";
    nameCheckLabel.style.color = "red";
  }
})


const phoneNumberCheckLabel = document.getElementById("phonenumber-check-label");
phoneNumberInput.addEventListener("input", () => {
  const phoneNumberValue = phoneNumberInput.value;
  const phoneNumberRegx = /^0\d{10}$/;

  if (phoneNumberValue === "") {
    phoneNumberCheckLabel.innerHTML = "전화번호를 입력해 주세요";
    phoneNumberCheckLabel.style.color = "black";
    return;
  }

  if (phoneNumberRegx.test(phoneNumberValue)) {
    phoneNumberCheckLabel.innerHTML = "올바른 형식입니다";
    phoneNumberCheckLabel.style.color = "blue";
  } else {
    phoneNumberCheckLabel.innerHTML = "올바른 형식이 아닙니다";
    phoneNumberCheckLabel.style.color = "red";
  }
});

function initEditProfile() {
  userIdInput.innerHTML = userId;
  userPositionInput.innerHTML = userPosition;
  userNameInput.value = userName;
  phoneNumberInput.value = userPhoneNumber;
}

function validate() {
  const nameValue = userNameInput.value;
  const phonenumberValue = phoneNumberInput.value;

  if (nameValue === "") {
    alert("이름이 입력되지 않았습니다");
    return false;
  }

  if (nameValue.length > 10) {
    alert("이름은 10자 이내로 입력해주세요");
    return false;
  }

  if (nameCheckLabel.style.color === "black") {
    alert("이름을 입력해 주세요");
    return false;
  }

  if (nameCheckLabel.style.color === "red") {
    alert("이름 형식을 확인해주세요");
    return false;
  }

  if (phoneNumberCheckLabel.style.color === "black") {
    alert("전화번호를 입력해주세요");
    return false;
  }

  if (phoneNumberCheckLabel.style.color === "red") {
    alert("전화번호 형식을 확인해주세요");
    return false;
  }

  // 이름 또는 전화번호가 변경되었는지 확인
  let isNameChanged = false;
  let isPhoneNumberChanged = false;

  if (nameValue !== userName) {
    isNameChanged = true;
  }

  if (phonenumberValue !== userPhoneNumber) {
    isPhoneNumberChanged = true;
  }

  if (!(isNameChanged || isPhoneNumberChanged)) {
    alert("이름 또는 전화번호를 변경해주세요");
    return false;
  }

  return true;
}

const prevBtn = document.getElementById("prev-button");
prevBtn.addEventListener("click", () => {
  location.href = "../scheduler/scheduler.jsp";
})