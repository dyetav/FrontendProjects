
const steps = document.querySelectorAll(".step");
console.log(steps);
const title = document.querySelector(".step-title");
const text = document.querySelector(".step-text");

const stepEvent = (ev) => {
    title.innerHTML = ev.target.innerText; 
    text.innerHTML = "Lorem ipsum";
    let currentActiveStep = undefined;
    let previousActiveStep = undefined;
    for (let step of steps) {
        if (step.innerText == ev.target.innerText) currentActiveStep = step;
        if (step.className.includes("active")) previousActiveStep = step;
    }
    previousActiveStep.classList.remove("active");
    currentActiveStep.classList.add("active");
}

for (let step of steps) {
    step.addEventListener("click", stepEvent);
}

const activeStep = document.querySelector(".step.active");
activeStep.click();


