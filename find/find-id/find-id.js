function validate() {
  const idValue = document.getElementById("id-text-field").value;
  const nameValue = document.getElementById("name-text-field").value;
  const phoneNumberValue = document.getElementById("phonenumber-text-field").value;

  if (idValue === "" || nameValue === "" || phoneNumberValue === "") {
    alert("입력되지 않은 폼이 있습니다");
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