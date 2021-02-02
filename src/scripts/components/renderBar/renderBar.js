const renderBar = ({
  appElement,
  currentDate
}) => {
  const calendarToolbar = document.createElement("div");
  const calendarBarTitle = document.createElement("span");
  const btnPrevMonth = document.createElement('button');
  const btnNextMonth = document.createElement('button');
  calendarToolbar.classList.add("calendar-bar");
  calendarBarTitle.classList.add("calendar-bar__title");
  btnPrevMonth.classList.add("calendar-bar__btn-prev");
  btnNextMonth.classList.add("calendar-bar__btn-next");
  btnPrevMonth.innerHTML = "←";
  btnNextMonth.innerHTML = "→";

  console.log(btnNextMonth, btnPrevMonth); // Add class example
  // here toolBar content rendering
  appElement.prepend(calendarToolbar);
  calendarToolbar.append(calendarBarTitle);
  calendarBarTitle.before(btnPrevMonth);
  calendarBarTitle.after(btnNextMonth);
  let DateForShow = currentDate;
  let getYear = DateForShow.getFullYear(); //2017
  let getMonth = DateForShow.toLocaleDateString('en-US', {
    month: 'long',
  });
  console.log(DateForShow);
  console.log(getYear, getMonth);
  // let currentMonth = new Date().toLocaleDateString('en-US', options);
  calendarBarTitle.innerHTML = getMonth + " " + getYear;

  // btnNextMonth.addEventListener('click' () => {
  //   currentMonth = new Date()
  // });
};

export default renderBar;