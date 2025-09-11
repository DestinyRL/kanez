document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if(target) {
        window.scrollTo({
          top: target.offsetTop - 70, 
          behavior: 'smooth'
        });
      }
    });
  });
  function fadeInOnScroll() {
    const fadeEls = document.querySelectorAll('.fade-in');
    const triggerBottom = window.innerHeight * 0.9;
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', fadeInOnScroll);
  window.addEventListener('load', fadeInOnScroll);
  window.onscroll = function() {
    let backToTopBtn = document.getElementById('backToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  };
  window.onload = function() {
    let backToTopBtn = document.getElementById('backToTop');
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  };
  const counters = document.querySelectorAll('.counter');
  let started = false;
  function animateCounters() {
    const statsSection = document.getElementById('stats');
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if (!started && sectionPos < screenPos) {
      started = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        let count = 0;
        function updateCount() {
          count += increment;
          if (count < target) {
            counter.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target;
          }
        }
        updateCount();
      });
    }
  }
  window.addEventListener('scroll', animateCounters);
  setTimeout(() => {;
    document.getElementById('hero-heading').textContent = 'Building Your Future with Quality & Trust'
  }, 3000);
  const heroVideo = document.querySelector('.hero-video');
  heroVideo.play().catch(() => {
    console.log('Autoplay prevented, user interaction required');
  });
  const hamburger = document.getElementById("hamburger");
  const navlinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
  });
  