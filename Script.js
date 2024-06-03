window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#A3FFD6';
    } else {
      navbar.style.backgroundColor = '#AD88C6';
    }
  });
  