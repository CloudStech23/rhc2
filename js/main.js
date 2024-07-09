(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
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
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    var isDesktop = window.matchMedia("(min-width: 992px)").matches;

    if (!isDesktop) {
        var nestedDropdowns = document.querySelectorAll(".nested-dropdown");
        console.log('Nested Dropdowns:', nestedDropdowns); // Log the selected elements

        if (nestedDropdowns.length > 0) {
            nestedDropdowns.forEach(function (item) {
                item.addEventListener("click", function (event) {
                    event.stopPropagation(); // Prevent the click event from bubbling up

                    var target = this.getAttribute("data-bs-target");
                    var dropdownMenu = document.querySelector("[data-bs-toggle='" + target + "']");

                    if (dropdownMenu.classList.contains("show")) {
                        dropdownMenu.classList.remove("show");
                    } else {
                        dropdownMenu.classList.add("show");
                    }
                });
            });

            // Close dropdown when clicking outside
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

    // Add event listener to the toggle button
    toggleContentButton.addEventListener('click', function () {
        // Toggle the visibility of additional content
        if (additionalContent.style.display === 'none') {
            additionalContent.style.display = 'block';
        } else {
            additionalContent.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var toggleContentButton = document.getElementById('toggleContentButton2');
    var additionalContent = document.getElementById('additionalContent2');

    // Add event listener to the toggle button
    toggleContentButton.addEventListener('click', function () {
        // Toggle the visibility of additional content
        if (additionalContent.style.display === 'none') {
            additionalContent.style.display = 'block';
        } else {
            additionalContent.style.display = 'none';
        }
    });
});

// Redirect to clean URLs
// if (location.pathname.endsWith('.html')) {
//     var path = location.pathname.replace('.html', '');
//     history.replaceState({}, null, path);
// }
