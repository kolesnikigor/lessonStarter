const renderCalendar = ({
  appElement,
  currentDate
}) => {
  const calendarContainer = document.createElement("table");
  const calendarHead = document.createElement("thead");
  const calendarBody = document.createElement("tbody");
  const calendarHeadRow = document.createElement("tr");
  const calendarBodyRow = document.createElement("tr");
  calendarContainer.classList.add("calendar-container");
  calendarHead.append(calendarHeadRow);
  calendarBody.append(calendarBodyRow);
  calendarContainer.prepend(calendarHead); // This element must contain tr > th*monthLength > <span>DayName</span> + <span>DayNum</span>
  calendarContainer.append(calendarBody); // This element must contain tr > td*monthLength
  appElement.append(calendarContainer);

  const SECONDS_IN_A_DAY = 86400000;
  let getYear = currentDate.getFullYear(); //2017
  let getMonth = currentDate.getMonth();
  const firstDayMonth = Date.parse(new Date(getYear, getMonth, 1));
  const lastDayMonth = Date.parse(new Date(getYear, getMonth + 1, 0));

  let firstDay = 1;
  for (let i = firstDayMonth; i <= lastDayMonth; i = i + SECONDS_IN_A_DAY) {
    let [DayNum, DayName] = new Date(i).toLocaleDateString("en-US", {
      day: 'numeric',
      weekday: 'short'
    }).toString().split(" ");
    let ThElement = document.createElement("th");
    let TbElement = document.createElement("th");

    ThElement.classList.add("calendar-head__element");
    ThElement.innerHTML = `<span class="calendar-head__week-day">${DayName}</span> <span class="calendar-head__month-day">${DayNum}</span>`;
    calendarHeadRow.append(ThElement);

    TbElement.classList.add("calendar-body__element");
    calendarBodyRow.append(TbElement);

    if (['Sat', 'Sun'].includes(DayName)) {
      ThElement.classList.add('calendar-head__element--day-off');
      TbElement.classList.add('calendar-body__element--day-off');
    }
  };
};

export default renderCalendar;