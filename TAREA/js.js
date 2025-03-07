const pedidos = [];
    const piezas = [];

    function mostrarSeccion(seccion) {
        document.getElementById('pedidos').style.display = 'none';
        document.getElementById('piezas').style.display = 'none';
        document.getElementById(seccion).style.display = 'block';
    }

    function anadirPedido() {
        const numPedido = parseInt(document.getElementById('numPedido').value);
        const cliente = document.getElementById('cliente').value.trim();
        const fechaPedido = document.getElementById('fechaPedido').value;

        if (!numPedido || pedidos.some(p => p.numPedido === numPedido)) {
            alert('Número de pedido inválido o ya existente.');
            return;
        }

        const hoy = new Date().toISOString().split('T')[0];
        if (fechaPedido > hoy) {
            alert('La fecha del pedido no puede ser futura.');
            return;
        }

        pedidos.push({
            numPedido,
            cliente,
            fechaPedido,
            procesado: false,
            servido: false
        });

        actualizarTablaPedidos();
    }

    function modificarPedido() {
        const numPedido = parseInt(document.getElementById('numPedido').value);
        const cliente = document.getElementById('cliente').value.trim();
        const fechaPedido = document.getElementById('fechaPedido').value;

        const pedido = pedidos.find(p => p.numPedido === numPedido);
        if (!pedido) {
            alert('Pedido no encontrado.');
            return;
        }

        pedido.cliente = cliente;
        pedido.fechaPedido = fechaPedido;

        actualizarTablaPedidos();
    }

    function actualizarTablaPedidos() {
        const tabla = document.getElementById('tablaPedidos').querySelector('tbody');
        tabla.innerHTML = '';

        pedidos.forEach(p => {
            const fila = `
                <tr>
                    <td>${p.numPedido}</td>
                    <td>${p.cliente}</td>
                    <td>${p.fechaPedido}</td>
                    <td>${p.procesado}</td>
                    <td>${p.servido}</td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });
    }

    function anadirPieza() {
        const numPieza = parseInt(document.getElementById('numPieza').value);
        const pedidoPieza = parseInt(document.getElementById('pedidoPieza').value);
        const largo = parseFloat(document.getElementById('largo').value);
        const ancho = parseFloat(document.getElementById('ancho').value);
        const grosor = parseFloat(document.getElementById('grosor').value);
        const color = document.getElementById('color').value || 'Natural';
        const ambasCaras = document.getElementById('ambasCaras').checked;

        if (!numPieza || piezas.some(p => p.numPieza === numPieza)) {
            alert('Número de pieza inválido o ya existente.');
            return;
        }

        if (!pedidos.some(p => p.numPedido === pedidoPieza)) {
            alert('El número de pedido no existe.');
            return;
        }

        piezas.push({
            numPieza,
            pedidoPieza,
            largo,
            ancho,
            grosor,
            color,
            ambasCaras,
            cortada: false
        });

        actualizarTablaPiezas();
    }

    function actualizarTablaPiezas() {
        const tabla = document.getElementById('tablaPiezas').querySelector('tbody');
        tabla.innerHTML = '';

        piezas.forEach(p => {
            const fila = `
                <tr>
                    <td>${p.numPieza}</td>
                    <td>${p.pedidoPieza}</td>
                    <td>${p.largo}</td>
                    <td>${p.ancho}</td>
                    <td>${p.grosor}</td>
                    <td>${p.color}</td>
                    <td>${p.ambasCaras}</td>
                    <td>${p.cortada}</td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });
    }
    function nuevatabla(){
        const nuevatabla = document.getElementById('nuevatabla').querySelector('tbody');
        nuevatabla.innerHTML = '';

        piezas.forEach(p => {
            const fila = `
                <tr>
                    <td>${p.numPieza}</td>
                    <td>${p.pedidoPieza}</td>
                    <td>${p.largo}</td>
                    <td>${p.ancho}</td>
                    <td>${p.grosor}</td>
                    <td>${p.color}</td>
                    <td>${p.ambasCaras}</td>
                    <td>${p.cortada}</td>
                </tr>
            `;
            nuevatabla.innerHTML += fila;
        });
    }