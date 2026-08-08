// Typing Animation

new Typed("#typing", {
    strings: [
        "Aspiring Software Engineer",
        "Python Developer",
        "AI Enthusiast",
        "Blockchain Learner",
        "Web Developer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Scroll Animations

AOS.init({
    duration: 1200,
    once: false
});

// Particle Background

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1000
            }
        },

        color: {
            value: "#00d9ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5,
            random: true
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#00d9ff",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },

    interactivity: {
        detect_on: "canvas",

        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }
        },

        modes: {
            grab: {
                distance: 180,
                line_linked: {
                    opacity: 1
                }
            },

            push: {
                particles_nb: 5
            }
        }
    },

    retina_detect: true
});

// Navbar Glow on Scroll

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow = "0 0 20px #00d9ff";

    } else {

        nav.style.boxShadow = "none";

    }

});
