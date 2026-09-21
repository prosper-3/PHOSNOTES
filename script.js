/* =====================================================
   PHOSNOTES
   Website JavaScript
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("PHOSNOTES website loaded.");


    /* =================================================
       SMOOTH SCROLLING
       ================================================= */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            // Ignore links that only contain "#"
            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =================================================
       HEADER EFFECT
       ================================================= */

    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 4px 20px rgba(0, 0, 0, 0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });


    /* =================================================
       BOOK CARD ANIMATION
       ================================================= */

    const books = document.querySelectorAll(".book-card");

    books.forEach(function (book, index) {

        book.style.opacity = "0";
        book.style.transform = "translateY(30px)";

        setTimeout(function () {

            book.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            book.style.opacity = "1";
            book.style.transform = "translateY(0)";

        }, 300 + (index * 150));

    });


    /* =================================================
       CURRENT YEAR
       ================================================= */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const year = new Date().getFullYear();

        copyright.textContent =
            `© ${year} PHOSNOTES. All rights reserved.`;

    }


    /* =================================================
       CONTACT BUTTON
       ================================================= */

    const contactButton =
        document.querySelector(
            '.contact-section a[href^="mailto:"]'
        );

    if (contactButton) {

        contactButton.addEventListener("click", function () {

            console.log(
                "PHOSNOTES contact button clicked."
            );

        });

    }


    /* =================================================
       WEBSITE READY
       ================================================= */

    console.log(
        "PHOSNOTES JavaScript is running correctly."
    );

});