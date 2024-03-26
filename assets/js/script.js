class Propietario {
	constructor(nombre, direccion, telefono) {
		this._nombre = nombre;
		this._direccion = direccion;
		this._telefono = telefono;
	}
	get nombre() {
		return this._nombre;
	}
	set nombre(newNombre) {
		this._nombre = newNombre;
	}
	get direccion() {
		return this._direccion;
	}
	set direccion(newDireccion) {
		this._nombre = newDireccion;
	}
	get telefono() {
		return this._telefono;
	}
	set telefono(newTelefono) {
		this._telefono = newTelefono;
	}
	datosPropietario() {
		return `Nombre Dueño(a): <strong>${this.nombre}</strong>; Domicilio: <strong>${this.direccion}</strong>; Contacto: <strong>${this.telefono}</strong>.`;
	}
}

class Animal extends Propietario {
	constructor(nombre, direccion, telefono, tipo) {
		super(nombre, direccion, telefono);
		this._tipo = tipo;
	}
	get tipo() {
		return this._tipo;
	}
	set tipo(newTipo) {
		this._tipo = newTipo;
	}
}

class Mascota extends Animal {
	constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
		super(nombre, direccion, telefono, tipo);
		this._nombreMascota = nombreMascota;
		this._enfermedad = enfermedad;
	}
	get nombreMascota() {
		return this._nombreMascota;
	}
	set nombreMascota(newNombreMascota) {
		this._nombreMascota = newNombreMascota;
	}
	get enfermedad() {
		return this._enfermedad;
	}
	set enfermedad(newEnfermedad) {
		this._enfermedad = newEnfermedad;
	}
}

let registro = document.getElementById('registrar');
registro.addEventListener('click', function (event) {
	event.preventDefault();
	const perroData = registrando();
	const nombre = perroData.nombre;
	const direccion = perroData.direccion;
	const telefono = perroData.telefono;
	const tipo = perroData.tipo;
	const nombreMascota = perroData.nombreMascota;
	const enfermedad = perroData.enfermedad;

	if (
		nombre != '' &&
		direccion != '' &&
		telefono != '' &&
		tipo != '' &&
		nombreMascota != '' &&
		enfermedad != ''
	) {
		const resultado = document.getElementById('resultado');
		const p = document.createElement('p');
		p.innerHTML = `<ul><li>${perroData.datosPropietario()}</li><li>Tipo de Animal: <strong>${tipo}</strong>; Nombre Mascota: <strong>${nombreMascota}</strong>; Enfermedad: <strong>${enfermedad}</strong>.</li></ul>`;
		resultado.appendChild(p);
	} else {
		alert(`Por favor, completa todos los datos`);
	}
});

function registrando() {
	let nombre = document.getElementById('propietario').value;
	let direccion = document.getElementById('direccion').value;
	let telefono = document.getElementById('telefono').value;
	let tipo = document.getElementById('tipo').value;
	let nombreMascota = document.getElementById('nombreMascota').value;
	let enfermedad = document.getElementById('enfermedad').value;
	let perrito = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
	return perrito;
}

