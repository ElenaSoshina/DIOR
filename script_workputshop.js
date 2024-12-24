document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const nextArrow = document.querySelector(".right-arrow");
    const prevArrow = document.querySelector(".left-arrow");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close");

    let photos = [
        "images/workshop/1.jpeg",
        "images/workshop/2.jpeg",
        "images/workshop/3.jpeg",
        "images/workshop/4.jpeg",
        "images/workshop/5.jpeg"
    ];

    let currentIndex = 0;

    // Функция для создания слайдов
    function createSlides() {
        slider.innerHTML = ''; // Очищаем слайдер
        photos.forEach(photo => {
            const slide = document.createElement("div");
            slide.className = "slide";
            const img = document.createElement("img");
            img.src = photo;
            slide.appendChild(img);
            slider.appendChild(slide);

            // Добавляем обработчик клика для открытия модального окна
            img.addEventListener("click", () => {
                openModal(photo);
            });
        });
        updateSlider();
    }

    // Функция для обновления слайдера
    function updateSlider() {
        const slides = document.querySelectorAll(".slide");
        const offset = -(currentIndex * (100 / 3)) + "%";
        slider.style.transform = `translateX(${offset})`;

        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            if (index === currentIndex) {
                slide.classList.add("active");
            }
        });

        // Проверяем, является ли текущий слайд последним
        if (currentIndex === photos.length - 1) {
            nextArrow.style.display = 'none'; // Скрываем стрелку "вперед"
        } else {
            nextArrow.style.display = 'block'; // Показываем стрелку "вперед"
        }
    }

    // Обработчики событий для стрелок
    nextArrow.addEventListener("click", () => {
        if (currentIndex < photos.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    // Функция для открытия модального окна
    function openModal(photoSrc) {
        modal.style.display = "block";
        modalImg.src = photoSrc;
    }

    // Функция для закрытия модального окна
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрытие модального окна при клике вне изображения
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Инициализация слайдера
    createSlides();
});
