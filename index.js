function validate() {
  const idValue = document.getElementById("id-text-field").value;
  const pwValue = document.getElementById("pw-text-field").value;

  if (idValue === "" || pwValue === "") {
    alert("아이디 또는 비밀번호를 입력해주세요");
    return false;
  }

  return true;
}