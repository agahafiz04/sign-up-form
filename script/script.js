const videoEl = document.querySelector("video");

videoEl.playbackRate = 0.5;

const passIconEl = document.querySelectorAll("#password-icon");
const userPassEl = document.querySelector("#user-pass");
const confirmPassEl = document.querySelector("#confirm-pass");

for (const passIcon of passIconEl) {
  passIcon.addEventListener("click", () => {
    if (passIcon.className === "fa-solid fa-eye") {
      passIcon.setAttribute("class", "fa-solid fa-eye-slash");
    } else {
      passIcon.setAttribute("class", "fa-solid fa-eye");
    }
    //
    console.log(passIcon.className);
  });
}
