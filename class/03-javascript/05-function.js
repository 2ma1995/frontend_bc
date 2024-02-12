//기본함수
// function auth() {
//   const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   document.getElementById("number").innerText = token;
// }

//화살표함수
let auth = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("number").innerText = token;
  document.getElementById("number").style.color = "#" + token;
};
