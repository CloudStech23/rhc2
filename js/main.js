(function () {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            var spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Fixed Navbar
    window.addEventListener('scroll', function () {
        var fixedTop = document.querySelector('.fixed-top');
        if (fixedTop) {
            if (window.innerWidth < 992) {
                if (window.scrollY > 45) {
                    fixedTop.classList.add('bg-dark', 'shadow');
                } else {
                    fixedTop.classList.remove('bg-dark', 'shadow');
                }
            } else {
                if (window.scrollY > 45) {
                    fixedTop.classList.add('bg-dark', 'shadow');
                    fixedTop.style.top = '-45px';
                } else {
                    fixedTop.classList.remove('bg-dark', 'shadow');
                    fixedTop.style.top = '0';
                }
            }
        }
    });

    // Back to top button
    window.addEventListener('scroll', function () {
        var backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        }
    });

    var backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Testimonials carousel
    var testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
        new OwlCarousel(testimonialCarousel, {
            autoplay: false,
            smartSpeed: 1000,
            center: true,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 2 }
            }
        });
    }
})();

document.addEventListener("DOMContentLoaded", function () {
    var isDesktop = window.matchMedia("(min-width: 992px)").matches;

    if (!isDesktop) {
        var nestedDropdowns = document.querySelectorAll(".nested-dropdown");
        console.log('Nested Dropdowns:', nestedDropdowns);

        if (nestedDropdowns.length > 0) {
            nestedDropdowns.forEach(function (item) {
                item.addEventListener("click", function (event) {
                    event.stopPropagation();

                    var target = this.getAttribute("data-bs-target");
                    var dropdownMenu = document.querySelector("[data-bs-toggle='" + target + "']");

                    if (dropdownMenu.classList.contains("show")) {
                        dropdownMenu.classList.remove("show");
                    } else {
                        dropdownMenu.classList.add("show");
                    }
                });
            });

            document.addEventListener('click', function (event) {
                nestedDropdowns.forEach(function (item) {
                    var target = item.getAttribute("data-bs-target");
                    var dropdownMenu = document.querySelector("[data-bs-toggle='" + target + "']");

                    if (!item.contains(event.target) && !dropdownMenu.contains(event.target)) {
                        dropdownMenu.classList.remove("show");
                    }
                });
            });
        } else {
            console.warn('No nested dropdown elements found.');
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var toggleContentButton = document.getElementById('toggleContentButton');
    var additionalContent = document.getElementById('additionalContent');

    if (toggleContentButton && additionalContent) {
        toggleContentButton.addEventListener('click', function () {
            additionalContent.style.display = (additionalContent.style.display === 'none') ? 'block' : 'none';
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var toggleContentButton2 = document.getElementById('toggleContentButton2');
    var additionalContent2 = document.getElementById('additionalContent2');

    if (toggleContentButton2 && additionalContent2) {
        toggleContentButton2.addEventListener('click', function () {
            additionalContent2.style.display = (additionalContent2.style.display === 'none') ? 'block' : 'none';
        });
    }
});
