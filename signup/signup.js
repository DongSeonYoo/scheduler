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
    
  return true;
}

let positionSelect = "";
function changeFunc(target) {
  positionSelect = target.value;
}