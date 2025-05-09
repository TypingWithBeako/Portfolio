AOS.init({
    duration: 800,       // Animation duration in milliseconds
    easing: 'ease-out',  // Animation timing function
    once: false, // Whether animation should happen only once
    offset: 150         
  });
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }