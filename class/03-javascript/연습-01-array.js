let classmate;
// undefined;
let classmates = ["chul", "young", "hun"];
// undefined;
classmates.in;
// undefined;
classmates.push("gang");
// 4;
// classmates(4)[("chul", "young", "hun", "gang")];
classmates.pop();
// ("gang");
// classmates(3)[("chul", "young", "hun")];
let developer = ["워라벨", "연봉", "신분상승", "커리어점프", "개쩌는 개발자"];
let dream = ["커리어점프", "성공", "할수있다"];
// dream을 developer에 집어넣기(dream의 배열을) 하려고 한다.
developer.push(dream);
// 이러한 형태로 집어넣으면 묶음 전체가 다 들어가버려서 실패
developer.pop();
// 다시 dream을 빼줌
developer.concat(dream);
// 이게정답
let result = developer.concat(dream);
// 번외로 result안에 위에 넣었던 값을 넣음
