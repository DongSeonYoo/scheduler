function validate() {
  const idValue = document.getElementById("id-text-field").value;
  if (idValue === "") {
    alert("아이디가 입력되지 않았습니다");
    return false;
  }

  return true;
}