// 데이터 타입, 연산자 실습
// 데이터 타입
1 + 1;
// 2
1 + "만원";
// '1만원'
1 + "1";
// '11'
1 - "1";
// 0
"코드" + "캠프";
// '코드캠프'
"123" == 123;
// true
"123" === 123;
// false
// and연산자
true && true;
// true
true && false;
// false
// or연산자
false || true;
// true
// not연산자
!false;
// true
!true;
// false

// -------조건문 실습1------

if (1 + 1 === 2) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM532:2 정답입니다
// undefined
if (true) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM545:2 정답입니다
// undefined
if (!true) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM558:4 틀렸습니다
// undefined
// 거짓같은값의 0 이 포함됨으로 거짓
if (0) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM561:4 틀렸습니다

// ------조건문 실습2------
const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};
profile;
// {name: '철수', age: 12, school: '다람쥐초등학교'}
if (profile.age >= 20) {
  console.log("성인입니다");
} else if (profile.age >= 8) {
  console.log("학생입니다");
} else if (profile.age > 0) {
  console.log("어린이입니다");
} else {
  console.log("잘못입력하셨습니다");
}
// VM1205:3 학생입니다
