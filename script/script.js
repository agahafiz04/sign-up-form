const videoEl = document.querySelector("video");

videoEl.playbackRate = 0.75;

const passIconEl = document.querySelectorAll("#password-icon");
const userPassEl = document.querySelector("#user-pass");
const confirmPassEl = document.querySelector("#confirm-pass");
const confirmSpanEl = document.querySelector(".confirm-span");
const buttonEl = document.querySelector(".form-submit");
const spanEl = document.querySelectorAll("span");

const allInputEl = document.querySelectorAll("input");

for (const span of spanEl) {
  span.style.display = "none";
}

for (const input of allInputEl) {
  input.addEventListener("input", function () {
    input.nextElementSibling.style.display = "unset";

    if (input.value == "") {
      input.nextElementSibling.style.display = "none";
    }
  });
}

for (const passIcon of passIconEl) {
  passIcon.addEventListener("click", () => {
    if (passIcon.className === "fa-solid fa-eye") {
      userPassEl.setAttribute("type", "text");
      passIcon.setAttribute("class", "fa-solid fa-eye-slash");
    } else {
      userPassEl.setAttribute("type", "password");
      passIcon.setAttribute("class", "fa-solid fa-eye");
    }
    //
  });
}

buttonEl.addEventListener("click", function (e) {
  if (confirmPassEl.value !== userPassEl.value) {
    e.preventDefault();
  }
});

confirmPassEl.addEventListener("input", verifyPassword);
confirmPassEl.addEventListener("keydown", verifyPassword);
userPassEl.addEventListener("input", verifyPassword);
userPassEl.addEventListener("keydown", verifyPassword);

function verifyPassword() {
  if (userPassEl.value !== confirmPassEl.value) {
    confirmSpanEl.textContent = "Password not matched";
    confirmSpanEl.setAttribute("style", "color: red");
  } else if (userPassEl.value == "" || confirmPassEl.value == "") {
    confirmSpanEl.textContent = "";
    confirmSpanEl.setAttribute("style", "color: white");
  } else {
    confirmSpanEl.textContent = "Password Matched";
    confirmSpanEl.setAttribute("style", "color: rgb(4, 245, 4);");
  }
}
