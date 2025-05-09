document.addEventListener('DOMContentLoaded', function() {
    tsParticles.load("header-home", {
    fullScreen: {
        enable: false,  // This is critical!
        zIndex: -1
    },
      particles: {
        number: {
          value: 150,
          density: { enable: true, value_area: 1000 }
        },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" }
        },
        opacity: {
          value: 0.7,
          random: true
        },
        size: {
          value: 3,
          random: true
        },
        smooth: true,
        move: {
          enable: true,
          speed: 1,
          direction: "bottom",
          random: true,
          straight: false,
          out_mode: "out"
        }
      },
      interactivity: { detect_on: "none", events: { onhover: { enable: false } } },
      retina_detect: true
    });
  });