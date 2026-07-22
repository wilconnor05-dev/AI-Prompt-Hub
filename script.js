/* ========================================
   AI PROMPT HUB
   Main JavaScript
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       SMOOTH SCROLL
    ======================================== */

    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const targetElement =
                document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ========================================
       HEADER SCROLL EFFECT
    ======================================== */

    const header =
        document.querySelector(".header");

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 30) {

            header.classList.add(
                "header-scrolled"
            );

        } else {

            header.classList.remove(
                "header-scrolled"
            );

        }

    }

    window.addEventListener(
        "scroll",
        updateHeader
    );

    updateHeader();


    /* ========================================
       SIMPLE FADE-IN ANIMATION
    ======================================== */

    const animatedElements =
        document.querySelectorAll(
            ".use-card, .benefit, .guide-card"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "is-visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(
            function (element) {

                element.classList.add(
                    "animate-on-scroll"
                );

                observer.observe(
                    element
                );

            }
        );

    }


    /* ========================================
       CURRENT YEAR
    ======================================== */

    const yearElement =
        document.querySelector(
            ".copyright-year"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});