`use strict`;
function changephone1() {
  const phone1 = document.getElementById(`phone1`).value;
  if (phone1.length === 3) {
    document.getElementById(`phone2`).focus();
  }
}

function changephone2() {
  const phone2 = document.getElementById(`phone2`).value;
  if (phone2.length === 4) {
    document.getElementById(`phone3`).focus();
  }
}
function changephone3() {
  const phone1 = document.getElementById(`phone1`).value;
  const phone2 = document.getElementById(`phone2`).value;
  const phone3 = document.getElementById(`phone3`).value;
  if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    document.getElementById(
      `token_button`
    ).style = `background-color:#fffff; color: #0068ff; cursor: pointer;`;
    document.getElementById(`token_button`).removeAttribute(`disabled`);
  }
}
function getToken() {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("token").innerText = token;

  document.getElementById("token_button").style =
    "background-color: #FFFFFF; cursor: default;";
  document.getElementById("token_button").setAttribute("disabled", "true");
  document.getElementById("token_timer_confirm_button").style =
    "background-color: #0068FF; color: #FFFFFF; cursor: pointer;";
  document
    .getElementById("token_timer_confirm_button")
    .removeAttribute("disabled");
  getTokenTimer();
}
