document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Smooth scrolling para links âncora
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  // 2. Observer para a Linha do Tempo (Timeline)
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );
  timelineItems.forEach((item) => timelineObserver.observe(item));

  // 3. Lógica dos Contadores (Números & Impacto)
  const counters = document.querySelectorAll(".counter");
  const speed = 2000;

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const isDecimal = counter.getAttribute("data-target").includes(".");
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / speed, 1);
      
      // Efeito de desaceleração (Ease Out)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = target * easeProgress;

      if (isDecimal) {
        counter.innerText = currentCount.toFixed(1).replace(".", ",");
      } else {
        counter.innerText = Math.floor(currentCount);
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        // Garante que o número final seja exato
        counter.innerText = isDecimal ? target.toString().replace(".", ",") : target;
      }
    };
    requestAnimationFrame(updateCount);
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 } // Diminuído para 0.1 para ativar mais facilmente
  );

  counters.forEach((counter) => counterObserver.observe(counter));
});