function submitForm(event) {
    event.preventDefault(); // 기본 동작 방지

    // 사용자명과 비밀번호 가져오기
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 실제로 로그인을 처리하는 코드는 여기에 작성할 수 있습니다.

    // 로그인 성공 후 입력 필드를 비워주는 부분을 추가합니다.
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}