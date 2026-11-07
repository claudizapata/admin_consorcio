// 1. Configuramos el observador
    const opciones = {
      root: null, // Usa la pantalla del navegador como referencia
      rootMargin: "0px", 
      threshold: 0.2 // El texto debe estar visible al menos un 20% para activarse
    };

    // 2. Creamos la función que reacciona cuando el elemento entra en pantalla
    const observador = new IntersectionObserver((entradas, observador) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          // Añade la clase CSS que hace visible el texto
          entrada.target.classList.add('visible');
          
          // Opcional: deja de observar el elemento si solo quieres que se anime UNA vez
          // observador.unobserve(entrada.target); 
        } else {
          // Opcional: remueve la clase si quieres que vuelva a ocultarse al subir
          entrada.target.classList.remove('visible');
        }
      });
    }, opciones);

    // 3. Seleccionamos todos los textos y los ponemos a escuchar el scroll
    const textos = document.querySelectorAll('.texto-oculto');
    textos.forEach(texto => observador.observe(texto));