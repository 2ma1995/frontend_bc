const dateFormMaker = function () {
  const inputYear = document.querySelector(`#target-year-input`).value;
  const inputMonth = document.querySelector(`#target-month-input`).value;
  const inputDate = document.querySelector(`#target-date-input`).value;
  console.log(inputYear, inputMonth, inputDate);
};

const counterMake = function () {
  const nowDate = new Date();
  const targetDate = new Date(`2024-08-15`);
  const remaining = (targetDate - nowDate) / 1000;

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600) % 24;
  const remainingMin = Math.floor(remaining / 60) % 60;
  const remainingsec = Math.floor(remaining) % 60;

  console.log(remainingDate, remainingHours, remainingMin, remainingsec);
};
