document.querySelectorAll('.nav-right .navA').forEach(link => {
    link.addEventListener('click', () => {
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle) {
            menuToggle.checked = false;
        }
    });
});
const softwareButton = document.querySelector(".selectButtonSoftware");
const hardwareButton = document.querySelector(".selectButtonHardware");

const softwareElements = document.querySelectorAll(".softwareP");
const hardwareElements = document.querySelectorAll(".hardwareP"); 


let activeFilter = null;

softwareButton.addEventListener("click", () => {
    if (activeFilter === "software") {
        softwareElements.forEach((element) => {
            element.classList.remove("hidden");
        });

        hardwareElements.forEach((element) => {
            element.classList.remove("hidden");
        });

        activeFilter = null;
    } else {
  
        softwareElements.forEach((element) => {
            element.classList.remove("hidden");
        });

        hardwareElements.forEach((element) => {
            element.classList.add("hidden");
        });

        activeFilter = "software";
    }
});

hardwareButton.addEventListener("click", () => {
    if (activeFilter === "hardware") {
  
        softwareElements.forEach((element) => {
            element.classList.remove("hidden");
        });

        hardwareElements.forEach((element) => {
            element.classList.remove("hidden");
        });

        activeFilter = null;
    } else {
        hardwareElements.forEach((element) => {
            element.classList.remove("hidden");
        });

        softwareElements.forEach((element) => {
            element.classList.add("hidden");
        });

        activeFilter = "hardware";
    }
});