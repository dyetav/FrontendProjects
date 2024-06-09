const button = document.getElementById("calculate");
const dateInput = document.getElementById("datepicker");
const result = document.getElementById("result");

button.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (dateInput.value) {
        result.innerHTML = "You are " + getYears(dateInput.value) + " years old";
    } else {
        alert("NO DATE");
    }
});

function getYears(currentDateString) {
    const currentDate = new Date(currentDateString);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const dayOfMonth = currentDate.getDate();
    const today = new Date();
    let years = today.getFullYear() - year;
    if ((today.getMonth() > month) || (today.getMonth() === month && today.getDate() >= dayOfMonth)) {
        return years;
    } else {
        return --years;
    }
}