
import { ls } from "../componentes/funciones.js";
import { menuRol, menuUsuario } from "./menu.js";
import { editarPerfil } from './editarPerfil.js';

export const header = {
  // html
  template: `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand router-link" href="#/home"
      ><img
        src="/images/logo.svg"
        alt=""
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />

      Vanilla Games</a
    >
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
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#/proyectos">TOP5 Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#/adminVista">A cerca de</a>
        </li>
      </ul>

      <div id="menuRol"></div>
      <div id="menuUsuario"></div>
       <div id="modal"> </div>
    </div>
  </div>
</nav>

  `,

  script: () => {
    console.log("Header cargado");
    document.querySelector('#modal').innerHTML = editarPerfil.template
    const rolUsuario = ls.getUsuario().rol;
    switch (rolUsuario) {
      case "registrado":
        document.querySelector("#menuRol").innerHTML =
          menuRol.templateRegistrado;
        document.querySelector("#menuUsuario").innerHTML =
          menuUsuario.templateRegistrado;
        break;
      case "desarrollador":
        document.querySelector("#menuRol").innerHTML =
          menuRol.templateDesarrollador;
        document.querySelector("#menuUsuario").innerHTML =
          menuUsuario.templateDesarrollador;
        break;
      case "admin":
        document.querySelector("#menuRol").innerHTML = menuRol.templateAdmin;
        document.querySelector("#menuUsuario").innerHTML =
        menuUsuario.templateAdmin;
        break;
      default:
        document.querySelector("#menuRol").innerHTML = menuRol.templateAnonimo;
        break;
    }
  },
};