function validate() {
  const idValue = document.getElementById("id-text-field").value;
  const pwValue = document.getElementById("pw-text-field").value;

  if (idValue === "" || pwValue === "") {
    alert("아이디 또는 비밀번호를 입력해주세요");
    return false;
  }

  if (idValue.length >= 14 || pwValue.length >= 18) {
    alert("아이디 또는 비밀번호의 길이가 너무 깁니다");
    return false;
  }

  return true;
}