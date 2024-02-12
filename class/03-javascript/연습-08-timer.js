// let time = 10;
// // undefined
// setInterval(function () {
//   if (time >= 0) {
//     console.log(time);
//     time = time - 1;
//   }
// }, 1000);
// 2
// VM778:3 10
// VM778:3 9
// VM778:3 8
// VM778:3 7
// VM778:3 6
// VM778:3 5
// VM778:3 4
// VM778:3 3
// VM778:3 2
// VM778:3 1
// VM778:3 0

let time = 180;
undefined;
setInterval(function () {
  if (time >= 0) {
    let min = Math.floor(time / 60);
    let sec = String(time % 60).padStart(2, "0");
    console.log(min + ":" + sec);
    time = time - 1;
  }
}, 1000);
