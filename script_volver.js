
        // Script para el botón de volver arriba
        const btnVolverArriba = document.getElementById('btnVolverArriba');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnVolverArriba.classList.add('mostrar');
            } else {
                btnVolverArriba.classList.remove('mostrar');
            }
        });

        btnVolverArriba.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });