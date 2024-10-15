document.addEventListener('DOMContentLoaded', () => {
	const aboutText = document.getElementById('about-text');
	let random = Math.floor(Math.random() * aboutArray.length);
	aboutText.innerHTML = aboutArray[random];
	console.log(aboutArray[random]);
});
// Lógica de la barra de navegación
document.addEventListener('DOMContentLoaded', () => {

	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	const navbarItems = document.querySelectorAll('.ni');
	// Add a click event on each of them
	$navbarBurgers.forEach( el => {
	  el.addEventListener('click', () => {
  
			// Get the target from the "data-target" attribute
			const target = el.dataset.target;
			const $target = document.getElementById(target);
	
			// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
			el.classList.toggle('is-active');
			$target.classList.toggle('is-active');
		});
		
		// Cerrar el menu al hacer click en un item
		navbarItems.forEach( item => {
			item.addEventListener('click', () => {
				document.getElementById(el.dataset.target).classList.toggle('is-active');
				document.getElementsByClassName('navbar-burger')[0].classList.toggle('is-active');
			});
		});
	});
});



// Lógica del botón de go to top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  	document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// Lógica de los modals
document.addEventListener('DOMContentLoaded', () => {
	// Functions to open and close a modal
	function openModal($el) {
	  $el.classList.add('is-active');
	}
  
	function closeModal($el) {
	  $el.classList.remove('is-active');
	}
  
	function closeAllModals() {
	  (document.querySelectorAll('.modal') || []).forEach(($modal) => {
		closeModal($modal);
	  });
	}
  
	// Add a click event on buttons to open a specific modal
	(document.querySelectorAll('#myModal') || []).forEach(($trigger) => {
	  const modal = $trigger.dataset.target;
	  const $target = document.getElementById(modal);
  
	  $trigger.addEventListener('click', () => {
		openModal($target);
	  });
	});
  
	// Add a click event on various child elements to close the parent modal
	(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
	  const $target = $close.closest('.modal');
  
	  $close.addEventListener('click', () => {
		closeModal($target);
	  });
	});
  
	// Add a keyboard event to close all modals
	document.addEventListener('keydown', (event) => {
	  if(event.key === "Escape") {
		closeAllModals();
	  }
	});
  });


  let aboutArray = [
	`¡Hola! Somos un equipo de docentes apasionados por la enseñanza, con experiencia en universidades como Favaloro, UTN, UBA y CAECE.</br> Nos encanta compartir nuestro conocimiento en programación y algoritmos, y nos entusiasma todo lo relacionado con el manejo de datos. Si te apasiona aprender, ¡estás en el lugar correcto!`,
	"Somos un grupo de docentes con amplia trayectoria en instituciones como la Universidad Favaloro, la UTN, la UBA y la Universidad CAECE.</br> Nuestra pasión es enseñar programación y algoritmos de forma práctica y clara. Además, disfrutamos trabajando con datos para transformar información en conocimiento. Si buscas aprender con expertos, ¡estamos aquí para ayudarte!",
	"¿Quieres aprender de los mejores? Somos profesores con años de experiencia en universidades de renombre como Favaloro, UTN, UBA y CAECE.</br> Nos encanta transmitir nuestra pasión por la programación, los algoritmos y el mundo de los datos. ¡Acompáñanos a explorar este fascinante mundo y desbloquear tu potencial!",
	"Con años de experiencia docente en la UBA, UTN, Favaloro y CAECE, sabemos cómo llevarte de lo básico a lo avanzado en programación y manejo de datos.</br> Nos dedicamos a enseñarte algoritmos y técnicas que podrás aplicar de inmediato. Si estás buscando aprender con profesionales comprometidos, ¡aquí estamos para guiarte!"];

