import { header } from './componentes/header.js';
import { footer } from './componentes/footer.js';
import { enrutador } from './componentes/enrutador.js';
import 'bootstrap'

import './scss/styles.scss'

document.querySelector('header').innerHTML = header.template;
document.querySelector('footer').innerHTML = footer.template;

enrutador.observadorRutas()
window.location = '#/home'
// async function cargarVista() {
//   const componente = await import('./vistas/ homeVista.js');
//   //const componente = await import('./vistas/registroVista.js') //PARA COMPROBAR MODIFICAR LA LINEA PARA QUE MANTENGA RUTA DE ARCHIVO QUE QUIERO VER
//   //const componente = await import('./vistas/proyectosVista.js');
//   //const componente = await import('./vistas/proyectoNuevoVista.js');
//   //const componente = await import('./vistas/proyectoEditarVista.js');
//   //const componente = await import('./vistas/proyectoDetalleVista.js');
//   //const componente = await import('./vistas/loginVista.js');
//   //const componente = await import('./vistas/adminVista.js');
//   const vista = componente.default;

//   document.querySelector('main').innerHTML = vista.template;
// }



// cargarVista();
