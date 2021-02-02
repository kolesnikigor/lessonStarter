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
  appElement.prepend(calendarToolbar);
  calendarToolbar.append(calendarBarTitle);
  calendarBarTitle.before(btnPrevMonth);
  calendarBarTitle.after(btnNextMonth);

  calendarBarTitle.innerHTML = currentDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
};

export default renderBar;