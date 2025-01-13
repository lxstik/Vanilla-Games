import { header } from './componentes/header.js';
import { footer } from './componentes/footer.js';
// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'


// Función para cargar la vista principal (home)
async function cargarVista() {
  const componente = await import('./vistas/ homeVista.js'); // Asegúrate de que esta ruta sea correcta
  //const componente = await import('./vistas/loginVista') PARA COMPROBAR MODIFICAR LA LINEA PARA QUE MANTENGA RUTA DE ARCHIVO QUE QUIERO VER
  const vista = componente.default;

  // Inyectar la vista en el elemento <main>
  document.querySelector('main').innerHTML = vista.template;
}

// Inyectar el header y el footer
document.querySelector('header').innerHTML = header.template;
document.querySelector('footer').innerHTML = footer.template;

// Cargar la vista principal
cargarVista();
