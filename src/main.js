import { header } from './componentes/header';
import { footer } from './componentes/footer';

import './scss/styles.scss';

// Importamos la vista de inicio de sesión
async function cargarVista() {
  const componente = await import('./vistas/loginVista'); // Cambia la ruta si es necesario
  const vista = componente.default;

  // Inyectamos la vista de inicio de sesión en el main
  document.querySelector('main').innerHTML = vista.template;

  // Ejecutamos la lógica de la vista (script de inicio de sesión)
  vista.script();
}
cargarVista();

// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template;
//Inyecto el header.script
header.script();

// Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template;


// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template


// Importamos y configuramos el enrutador para manejar las rutas
import { enrutador } from './componentes/enrutador';
enrutador.observadorRutas();


// Redirigimos a la página inicial
window.location = '#/home';
