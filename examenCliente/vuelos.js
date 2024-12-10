
class Vuelo {
    constructor(codigo, nplazas, importe) {
        this.codigo = codigo;
        this.nplazas =parseInt(nplazas);
        this.importe =parseFloat(importe);
    }

    calcularIngreso() {
        return this.nplazas * this.importe;
    }
}

class VueloMuyRentable {
    constructor(codigo, ingresoEstimado) {
        this.codigo =codigo;
        this.ingresoEstimado =ingresoEstimado;
    }
}

const vuelos = [];
const vuelosRentables = [];

function anadirVuelo() {
    const codigo = document.getElementById('codigo').value.trim();
    const nplazas = parseInt(document.getElementById('nplazas').value);
    const importe = parseFloat(document.getElementById('importe').value);

    if (!codigo || isNaN(nplazas) || isNaN(importe) || nplazas < 1 || importe < 0) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    if (vuelos.some(v => v.codigo ===codigo)) {
        alert('El vuelo ya existe. Usa la opción Modificar para cambiar sus datos.');
        return;
    }

    const nuevoVuelo = new Vuelo(codigo, nplazas, importe);
    vuelos.push(nuevoVuelo);

    const ingresoEstimado =nuevoVuelo.calcularIngreso();
    if (ingresoEstimado >20000) {
        const nuevoVueloRentable = new VueloMuyRentable(codigo, ingresoEstimado);
        vuelosRentables.push(nuevoVueloRentable);
    }
    actualizarTabla();
    actualizarTablaMuyRentables();
    limpiarCampos();
}

function modificarVuelo() {
    const codigo = document.getElementById('codigo').value.trim();
    const nplazas = parseInt(document.getElementById('nplazas').value);
    const importe = parseFloat(document.getElementById('importe').value);

    if (!codigo || isNaN(nplazas) || isNaN(importe) || nplazas < 1 || importe < 0) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    const vuelo = vuelos.find(v => v.codigo=== codigo);
    if (!vuelo) {
        alert('El vuelo no está registrado.');
        return;
    }

    vuelo.nplazas =nplazas;
    vuelo.importe =importe;

    actualizarTabla();
    limpiarCampos();
}

function calcularVuelo() {
    const codigo = document.getElementById('codigo').value.trim();

    if (!codigo) {
        alert('Por favor, ingresa el código del vuelo.');
        return;
    }

    const vuelo = vuelos.find(v => v.codigo === codigo);
    if (!vuelo) {
        alert('El vuelo no está registrado.');
        return;
    }

    const ingresoEstimado = vuelo.calcularIngreso();
    let categoria = '';
    if (ingresoEstimado < 10000) {
        categoria = 'Poco rentable';
    } else if (ingresoEstimado >= 10000 && ingresoEstimado <= 20000) {
        categoria = 'Rentable';
    } else {
        categoria = 'Muy rentable';
    }

    alert(`El vuelo ${codigo} tiene un ingreso estimado de ${ingresoEstimado.toFixed(2)}€ y es ${categoria}.`);
}

function actualizarTabla() {
    const tabla = document.getElementById('vuelos').querySelector('tbody');
    tabla.innerHTML = '';

    vuelos.forEach(vuelo => {
        const fila = `
            <tr>
            <td>${vuelo.codigo}</td>    
            <td>${vuelo.nplazas}</td>
            <td>${vuelo.importe.toFixed(2)}</td>
            <td>${vuelo.calcularIngreso().toFixed(2)}</td>
            <td>${vuelo.categoria}</td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });
}

function actualizarTablaMuyRentables() {
    const lista = document.getElementById('VuelosRentables');
    lista.innerHTML = '';

    vuelosRentables.forEach(vuelo => {
        const item = `<li>Código: ${vuelo.codigo}, Ingreso Estimado: ${vuelo.ingresoEstimado.toFixed(2)}€</li>`;
        lista.innerHTML += item;
    });
}

function limpiarCampos() {
    document.getElementById('codigo').value = '';
    document.getElementById('nplazas').value = '';
    document.getElementById('importe').value = '';
}
