const renderBar = ({
  appElement,
  currentMonth,
  currentYear,
  months,
  renderCalendar
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

  btnPrevMonth.onclick = () => {
    if (currentMonth === 0) {
      currentYear -= 1;
      currentMonth = 11;
      calendarBarTitle.innerHTML = `${months[currentMonth]} ${currentYear}`;
      appElement.removeChild(appElement.childNodes[1]);
      renderCalendar({
        appElement,
        currentMonth,
        currentYear,
        months
      });
    } else {
      currentMonth -= 1;
      calendarBarTitle.innerHTML = `${months[currentMonth]} ${currentYear}`;
      appElement.removeChild(appElement.childNodes[1]);
      renderCalendar({
        appElement,
        currentMonth,
        currentYear,
        months
      });
    }
  };

  btnNextMonth.onclick = () => {
    if (currentMonth === 11) {
      currentYear += 1;
      currentMonth = 0;
      calendarBarTitle.innerHTML = `${months[currentMonth]} ${currentYear}`;
      appElement.removeChild(appElement.childNodes[1]);
      renderCalendar({
        appElement,
        currentMonth,
        currentYear,
        months
      });
    } else {
      currentMonth += 1;
      calendarBarTitle.innerHTML = `${months[currentMonth]} ${currentYear}`;
      appElement.removeChild(appElement.childNodes[1]);
      renderCalendar({
        appElement,
        currentMonth,
        currentYear,
        months
      });
    }
  };


  calendarBarTitle.innerHTML = `${months[currentMonth]} ${currentYear}`;
};



export default renderBar;