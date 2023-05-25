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
    
  return true;
}