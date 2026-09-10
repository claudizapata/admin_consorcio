document.querySelectorAll('.link_nav').forEach(enlace => {
  enlace.addEventListener('click', function(evento) {
    // 1. Evitamos el salto instantáneo por defecto
    evento.preventDefault(); 
    
    // 2. Obtenemos el ID de la sección a la que queremos ir
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    // 3. Aplicamos el retardo (ejemplo: 500 milisegundos = medio segundo)
    setTimeout(() => {
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth', // Hace que el movimiento sea fluido
          block: 'start'      // Alinea la sección al inicio de la pantalla
        });
      }
    }, 700); // Cambia este número para dar más o menos retardo
  });
});
