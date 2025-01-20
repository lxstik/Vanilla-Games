// Importamos las funciones y componentes necesarios
import { ls } from '../componentes/funciones';
import { menuRol, menuUsuario } from './menus';

export const header = {
  template: // html
  `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#/home">
        <img src="images/logo.svg" alt="Logo Vanilla Games" width="30" height="24" class="d-inline-block align-text-top" />
        Vanilla Games
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Menú común para todos los usuarios -->
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">TOP5 Proyectos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Acerca de</a>
          </li>
        </ul>

        <!-- Contenedor para menús dinámicos -->
        <div id="menuRol"></div>
        <div id="menuUsuario"></div>
      </div>
    </div>
  </nav>
  `,

  script: () => {
    console.log('Header cargado');

    // Función para obtener el contenido de los menús según el rol
    const obtenerMenusPorRol = (rol) => {
      switch (rol) {
        case 'registrado':
          return {
            menuRol: menuRol.templateRegistrado,
            menuUsuario: menuUsuario.templateRegistrado,
          };
        case 'desarrollador':
          return {
            menuRol: menuRol.templateDesarrollador,
            menuUsuario: menuUsuario.templateDesarrollador,
          };
        case 'admin':
          return {
            menuRol: menuRol.templateAdmin,
            menuUsuario: menuUsuario.templateAdmin,
          };
        default:
          return {
            menuRol: menuRol.templateAnonimo,
            menuUsuario: '', // No hay menú de usuario para anónimos
          };
      }
    };

    // Intentamos obtener el usuario actual
    let usuarioActual;
    try {
      usuarioActual = ls.getUsuario();
      if (!usuarioActual || !usuarioActual.rol) {
        console.warn('Usuario no autenticado o sin rol definido. Usando rol por defecto (anónimo).');
        usuarioActual = { rol: 'anonimo' };
      }
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      usuarioActual = { rol: 'anonimo' };
    }

    // Obtenemos los menús según el rol del usuario
    const { menuRol: contenidoMenuRol, menuUsuario: contenidoMenuUsuario } = obtenerMenusPorRol(usuarioActual.rol);

    // Insertamos los menús en los elementos correspondientes
    document.querySelector('#menuRol').innerHTML = contenidoMenuRol;
    document.querySelector('#menuUsuario').innerHTML = contenidoMenuUsuario;

    // Simulación de inicio de sesión (solo para pruebas)
    ls.setUsuario({ email: 'chafardera@gmail.com', rol: 'registrado' });
  },
};
