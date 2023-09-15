// Function to fetch weather data from OpenWeatherMap API
async function fetchWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=YourCity&appid=YourAPIKey');
        const data = await response.json();
        const weatherDescription = data.weather[0].description;
        document.getElementById('weather-info').textContent = `Current Weather: ${weatherDescription}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').textContent = 'Failed to fetch weather data';
    }
}

// Function to update the date and time
function updateTime() {
    const now = new Date();
    const dateInfo = `Today's Date: ${now.toLocaleDateString()}`;
    const timeInfo = `Current Time: ${now.toLocaleTimeString()}`;
    document.getElementById('date-info').textContent = dateInfo;
    document.getElementById('time-info').textContent = timeInfo;
}

// Fetch weather data on page load
fetchWeather();

// Update date and time every second
updateTime();
setInterval(updateTime, 1000);


// Function to show/hide content based on page number
function showPagee(pageNumber) {
    // Hide all content containers
    const contentContainers = document.querySelectorAll('.content-container');
    contentContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Show the selected page's content container
    const selectedPage = document.getElementById(`page${pageNumber}`);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

// Show page 1 by default
showPagee(1);


    // Get references to the previous and next buttons and content containers
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const contentContainers = document.querySelectorAll(".content-container");

    let currentPage = 1; // Current page is initially set to 1

    // Function to show the current page and hide others
    function showPage(pageNumber) {
        for (let i = 0; i < contentContainers.length; i++) {
            if (i + 1 === pageNumber) {
                contentContainers[i].style.display = "block";
            } else {
                contentContainers[i].style.display = "none";
            }
        }
    }

    // Initialize the page to display
    showPage(currentPage);

    // Event listener for the previous button
    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    // Event listener for the next button
    nextButton.addEventListener("click", () => {
        if (currentPage < contentContainers.length) {
            currentPage++;
            showPage(currentPage);
        }
    });



document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".custom-slide");
    const buttons = document.querySelectorAll(".custom-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const slideNumber = parseInt(button.getAttribute("data-slide"));

            slides.forEach((slide, index) => {
                if (index + 1 === slideNumber) {
                    slide.classList.add("active");
                } else {
                    slide.classList.remove("active");
                }
            });

            buttons.forEach((btn) => {
                btn.classList.remove("active");
            });

            button.classList.add("active");
        });
    });

    // Automatically start with the first slide
    buttons[0].click();
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".custom-slide");
    const buttons = document.querySelectorAll(".custom-btn");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const slider = document.querySelector(".custom-slider");
    let currentIndex = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;

        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });
        buttons[index].classList.add("active");
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            showSlide(index);
        });
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Automatic sliding
    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    let interval = setInterval(autoSlide, 5000); // Change the interval time (in milliseconds) as needed

    // Stop automatic sliding when hovering over the carousel
    const carouselContainer = document.querySelector(".custom-carousel");
    carouselContainer.addEventListener("mouseenter", () => {
        clearInterval(interval);
    });

    // Resume automatic sliding when leaving the carousel
    carouselContainer.addEventListener("mouseleave", () => {
        interval = setInterval(autoSlide, 5000); // Change the interval time (in milliseconds) as needed
    });

    // Automatically start with the first slide
    buttons[0].click();
});













