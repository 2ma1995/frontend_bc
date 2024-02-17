const messageContainer = document.querySelector(`#d-day-message`);
//textContent는 해당태그 내부에 직접적으로 텍스트를 적을수있음
messageContainer.textContent = `D-Day를 입력해 주세요!`;

const dateFormMaker = function () {
  const inputYear = document.querySelector(`#target-year-input`).value;
  const inputMonth = document.querySelector(`#target-month-input`).value;
  const inputDate = document.querySelector(`#target-date-input`).value;

  // const dateFormat = inputYear + `-` + inputMonth + `-` + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  // console.log(inputYear, inputMonth, inputDate);
  return dateFormat;
};

const counterMake = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  //종료되어야댐
  if (remaining <= 0) {
    // 만약, remaining 0이라면, 타이머가 종료 되었습니다.
    console.log(`timer is runout`);
  } else if (isNaN(remaining)) {
    // 만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다.
    console.log(`유효한시간대가 아닙니다.`);
  }

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600) % 24;
  const remainingMin = Math.floor(remaining / 60) % 60;
  const remainingsec = Math.floor(remaining) % 60;

  console.log(remainingDate, remainingHours, remainingMin, remainingsec);
};
/**
 *
 */
