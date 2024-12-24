document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    function resetTabs() {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => {
            content.classList.add("hidden");
            const details = content.querySelector(".partner-details");
            if (details) {
                details.classList.remove("expanded");
                details.style.height = "200px";
                const showMoreBtn = content.querySelector(".show-more-btn");
                if (showMoreBtn) {
                    showMoreBtn.innerText = "Подробнее";
                }
            }
        });
    }

    function initFirstTab() {
        const firstTabButton = document.querySelector(".tab-button[data-tab='1']");
        const firstTabContent = document.getElementById("tab-1");

        firstTabButton.classList.add("active");
        firstTabContent.classList.remove("hidden");
        const details = firstTabContent.querySelector(".partner-details");
        if (details) {
            details.style.height = "550px";
        }
    }

    initFirstTab();

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tabNumber = button.getAttribute("data-tab");

            resetTabs();
            button.classList.add("active");
            document.getElementById(`tab-${tabNumber}`).classList.remove("hidden");
        });
    });

    document.querySelectorAll(".show-more-btn").forEach(button => {
        button.addEventListener("click", function() {
            const details = button.closest(".tab-content").querySelector(".partner-details");

            if (details.classList.contains("expanded")) {
                details.classList.remove("expanded");
                details.style.height = "200px";
                button.innerText = "Подробнее";
            } else {
                details.classList.add("expanded");
                details.style.height = "auto";
                // Убираем или меняем scrollIntoView
                // details.scrollIntoView({ block: "nearest", behavior: "smooth" });
                button.innerText = "Свернуть";
            }
        });
    });
});
