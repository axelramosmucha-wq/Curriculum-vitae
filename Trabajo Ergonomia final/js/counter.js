/*====================================================
        COUNTER.JS
        CONTADORES ANIMADOS
====================================================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop = statsSection.offsetTop - window.innerHeight + 150;

    if (window.scrollY >= sectionTop) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.getAttribute("data-target"));

            let current = 0;

            const increment = Math.ceil(target / 120);

            function updateCounter() {

                current += increment;

                if (current >= target) {

                    current = target;

                }

                counter.textContent = current;

                if (current < target) {

                    requestAnimationFrame(updateCounter);

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);
window.addEventListener("load", startCounters);