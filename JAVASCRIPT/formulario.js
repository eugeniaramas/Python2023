let header = `
<h2>MAR SIN PLASTICO</h2>
<nav> 
    <a class="boton" href="Tp con grid.html">Inicio</a> 
    <a class="boton" href="quienessomos.html">Quienes somos</a>
    <a class="boton" href="nuestrosobjetivos.html">Nuestros Objetivos</a>
    <a class="boton" href="puntosverdes.html">Puntos Verdes</a>
    <a class="boton" href="contacto.html">Contacto</a>
    <a class="boton" href="Registrate.html">Registrate</a>
    

</nav>
` 
document.getElementById("idheader").innerHTML = header


let footer = `
<a href="mailto:reciclemosjuntos@mail.com" target="_blank"><img src="../IMG/gmail.png" alt="logo email" width="2%">
        </a>
        <a href="https://www.facebook.com" target="_blank"><img src="../IMG/facebook.png" alt="logo email" width="2%">
        </a>
        <a href="https://www.instagram.com" target="_blank"><img src="../IMG/instagram.png" alt="logo email" width="2%">
        </a>
        <a href="https://www.twitter.com" target="_blank"><img src="../IMG/gorjeo.png" alt="logo email" width="2%">
        </a>
        <br>
        <p>Derechos reservados @2023</p>
        <a href="#arriba">🔼</a>
`
document.getElementById("idfooter").innerHTML = footer


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false

}

const validarFormulario = (e) => {
	switch(e.target.name){  

		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
        
        break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
				
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		
		break;

		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
			
	
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i `).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i `).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else{
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i `).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i `).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById ('password');
	const inputPassword2 = document.getElementById ('password2');


	if(inputPassword1.value !== inputPassword2.value){ 

		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i `).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i `).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	}

	else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i `).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i `).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}

  }

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario );
	input.addEventListener('blur', validarFormulario );		
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();

    const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password  && campos.correo && terminos.checked){
		formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');

        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => { 
           icono.classList.remove('formulario__grupo-correcto');
    });

    }
    else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
}); 