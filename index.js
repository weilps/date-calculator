// ************* TODAY ************
// Convert Today date to input format (not compulsory on all navigators)
const today1 = new Date(); // works on Safari 03/23, not Chrome.
const todayISO = today1.toISOString();
const today2 = todayISO.split("T")[0];
start_date.value = today2; // works on Chrome
start_date.min = today2;

// ************* TOMORROW ************
// Tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// Convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

// ************* FUNCTION ************
const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  ); // timestamp in seconds

  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  total.textContent = diffDays * nightPrice.textContent;
};

// ************* EVENTS ************

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  if (end_date.value > start_date.value) day.setDate(day.getDate() + 1);
  let tomorrowFormat = day.toISOString().split("T")[0];
  end_date.value = tomorrowFormat;
});

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() - 1);
  if (end_date.value < start_date.value)
    start_date.value = day.toISOString().split("T")[0];
});

start_date.addEventListener("change", bookingCalc);

end_date.addEventListener("change", bookingCalc);

bookingCalc();
