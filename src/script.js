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