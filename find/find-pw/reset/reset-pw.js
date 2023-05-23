function validate() {
  const pwValue = document.getElementById("new-pw-textfield").value;
  const pwCheckValue = document.getElementById("new-pw-check-textfield").value;

  if (pwValue === "" || pwCheckValue === "") {
    alert("입력하지 않은 폼이 있습니다");
    return false;
  }

  if (pwCheckLabel.style.color === "red") {
    alert("비밀번호 형식에 맞지 않습니다");
    return false;
  }

  if (pwSameCheckLabel.style.color === "red") {
    alert("비밀번호가 동일하지 않습니다");
    return false;
  }

  return true;
}

const homebtn = document.getElementById("home-button");
homebtn.addEventListener("click", () => {
  location.href = "/";
})

const pwCheckLabel = document.getElementById("pw-check-label");
const pwSameCheckLabel = document.getElementById("pw-same-check-label");




// const pwCheckLabel = document.getElementById("pw-check-label");
// const phoneNumberInput = document.getElementById("phonenumber-text-field");

// phoneNumberInput.addEventListener("input", () => {
//   const phoneNumberValue = phoneNumberInput.value;
//   const phoneNumberRegx = /^0\d{10}$/;
  
//   if (phoneNumberRegx.test(phoneNumberValue)) {
//     phoneNumberCheckLabel.innerHTML = "올바른 형식입니다";
//     phoneNumberCheckLabel.style.color = "blue";
//   } else {
//     phoneNumberCheckLabel.innerHTML = "올바른 형식이 아닙니다";
//     phoneNumberCheckLabel.style.color = "red";
//   }
// });