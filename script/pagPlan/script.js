

window.onload = function() {
    const crear = document.getElementById('generar');
    crear.addEventListener('click', crearTabla);
};

function crearTabla() {
    const ancho = parseInt(document.getElementById('ancho').value);
    const alto = parseInt(document.getElementById('largo').value);
    const tabla = document.createElement('table');
    const cuerpoTabla = document.createElement('tbody');

    if (alto <= 15 && ancho<= 15){
        for (let i = 1; i <= alto; i++) {
            const fila = document.createElement('tr');
            for (let j = 1; j <= ancho; j++) {
                const celda = document.createElement('td');
                celda.classList.add('celda')
                celda.textContent = ""; 
                celda.style.border = 'black dashed 1px';  
                celda.addEventListener('click', function() {
                    cambiarColorCelda(celda);
                });
                fila.appendChild(celda);
            }
            cuerpoTabla.appendChild(fila);
        }
    
        tabla.appendChild(cuerpoTabla);
        const contenedorTabla = document.getElementById('Crear_tabla');
        contenedorTabla.innerHTML = ''; 
        contenedorTabla.appendChild(tabla);
    }
    
    
}

function cambiarColorCelda(celda) {
    if (celda.style.backgroundColor === 'rgb(243, 229, 171)') {
        celda.style.backgroundColor = 'white';
    } else {
        celda.style.backgroundColor = '#F3E5AB';
    }
}
