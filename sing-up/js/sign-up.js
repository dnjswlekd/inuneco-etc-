// select-dog or cat
function change_img(e) {
  const btns = document.querySelectorAll(".scale-img");
  btns.forEach(function (img, i) {
    if (e.currentTarget == img) {
      img.classList.add("click-img");
    } else {
      img.classList.remove("click-img");
    }
  });
  // console.log(e.currentTarget);
}

// sign-up-final
function gofinal() {
  addEventListener("click", (e) => {
    location.href = "sing-up-final.html";
  });
}



// 비밀번호 정규식

function chkPW() {
  var pw = $("#password").val();
  var pw2 = $("#password2").val();

  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  var hangulcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  if (false === reg.test(pw)) {
    alert("비밀번호는 8자 이상 ~ 16자 이하, 숫자/대문자/소문자/특수문자를 중 2가지 이상 포함해야 합니다.");
  } else if (/(\w)\1\1\1/.test(pw)) {
    alert("같은 문자를 4번 이상 사용하실 수 없습니다.");
    return false;
    // } else if (pw.search(id) > -1) {
    //   alert("비밀번호를 확인해주세요.");
    //   return false;
  } else if (pw.search(/\s/) != -1) {
    alert("비밀번호는 공백 없이 입력해주세요.");
    return false;
  } else if (hangulcheck.test(pw)) {
    alert("비밀번호에 한글을 사용 할 수 없습니다.");
  } else {
    console.log("통과");
  }

  if (pw != pw2) {
    alert("비밀번호가 일치 하지 않습니다");
    return false;
  } else {
    alert("비밀번호가 일치합니다");
    chkEmail();
  }
}
function chkEmail() {
  //이메일 정규식
  var emailVal = $("#email").val();

  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // 검증에 사용할 정규식 변수 regExp에 저장

  if (emailVal.match(regExp) != null) {
    alert("완료되었습니다!");
    gofinal();
  } else {
    alert("이메일을 확인해주세요");
  }
}

// 전화번호 정규식
// RegExp 오브젝트 생성
const numberRegex = new RegExp("^[0-9]+$");

// 사용자 입력값
const userPhoneNumber = "1231212";

// validation
if (!numberRegex.test(userPhoneNumber)) {
  // setAlert(true, "숫자만 입력해 주세요.")
}

// 비밀번호 보이게
  $(".main i").on("click", function () {
    $("input").toggleClass("active");
    if ($("input").hasClass("active")) {
      $(this).attr("class", "fa fa-eye-slash fa-lg").prev("input").attr("type", "text");
    } else {
      $(this).attr("class", "fa fa-eye fa-lg").prev("input").attr("type", "password");
    }
  });
