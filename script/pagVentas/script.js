
                // Variables para llevar un seguimiento de las unidades y el total
                const unidades = {
                    producto1: 0,
                    producto2: 0,
                    producto3: 0,
                    producto4: 0,
                    producto5: 0
                };
            
                const precios = {
                    producto1: 500,
                    producto2: 1000,
                    producto3: 750,
                    producto4: 1200,
                    producto5: 900
                };
            
                let total = 0;
            
                // Función para agregar unidades de un producto
                function agregar(precio, producto) {
                    unidades[producto]++;
                    total += precio;
                    actualizarPantalla();
                }
            
                // Función para quitar unidades de un producto
                function quitar(precio, producto) {
                    if (unidades[producto] > 0) {
                        unidades[producto]--;
                        total -= precio;
                        actualizarPantalla();
                    }
                }
            
                // Función para actualizar la pantalla con los valores actuales
                function actualizarPantalla() {
                    for (const producto in unidades) {
                        document.getElementById(producto).textContent = unidades[producto];
                    }
                    document.getElementById('total').textContent =  total + '€';
                }
