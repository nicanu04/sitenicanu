document.addEventListener("DOMContentLoaded", function() {
  const destinations = document.querySelectorAll('.destination');

  destinations.forEach(destination => {
    destination.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });

    destination.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});