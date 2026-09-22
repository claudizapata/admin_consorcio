// Seleccionamos todos los enlaces del navbar
const links = document.querySelectorAll('.link_nav');

links.forEach(link => {
  link.addEventListener('click', function() {
    // 1. Quitamos la clase 'active' de cualquier otro enlace
    links.forEach(l => l.classList.remove('active'));
    
    // 2. Le agregamos la clase 'active' al enlace que recibió el clic
    this.classList.add('active');
  });
});
