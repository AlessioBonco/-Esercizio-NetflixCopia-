document.addEventListener("DOMContentLoaded", function () {

    const cardsRows = document.querySelectorAll("#cards");
  

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.2, 
      }
    );

    cardsRows.forEach((row) => observer.observe(row));
  });