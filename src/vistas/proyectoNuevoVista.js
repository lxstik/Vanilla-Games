import { Proyecto } from "../../bd/proyecto";
import {User} from "../../bd/user"

export default {
  template: `
  <div class="container">
    <h1 class="mt-5">Nuevo proyecto</h1>
    <div class="d-flex justify-content-end">
      <button id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left">
        Volver
      </button>
    </div>

    <div class="row mt-2">
      <div class="col-12 col-md-4 pt-2 mb-3">
        <img src="#" alt="" class="img-fluid" />
        <label class="form-label mt-2" for="urlImagen"><strong>URL imagen: </strong></label>
        <input id="urlImagen" type="text" class="form-control" value="http://enlaceImagen.com" />
      </div>
      <div class="col-12 col-md-8">
        <!-- Formulario nuevo proyecto -->
        <form id="formularioNuevoProyecto" action="" class="form" novalidate>
          <!-- Nombre proyecto -->
          <label class="form-label" for="nombreJuego"><strong>Nombre: </strong></label>
          <input required id="nombreJuego" type="text" class="form-control" placeholder="Escribe aquí el nombre del juego" />
          <!-- Descripción -->
          <label class="form-label mt-2" for="descripcion"><strong>Descripción: </strong></label>
          <textarea id="descripcion" class="form-control" rows="4" placeholder="Descripción del juego"></textarea>
          <!-- Estado -->
          <label class="form-label mt-2" for="estado"><strong>Estado: </strong></label>
          <select required id="estado" class="form-control">
            <option value="En desarrollo">En desarrollo</option>
            <option value="Cerrado">Cerrado</option>
          </select>
          <!-- Fecha -->
          <label class="form-label mt-2" for="fecha"><strong>Fecha: </strong></label>
          <input id="fecha" type="date" class="form-control" value="${
            new Date().toISOString().split("T")[0]
          }" />
          <!-- Enlace al proyecto -->
          <label class="form-label mt-2" for="enlace"><strong>Enlace: </strong></label>
          <input id="enlace" type="url" class="form-control" value="http://enlace.com" />
          <!-- Repositorio -->
          <label class="form-label mt-2" for="repositorio"><strong>Repositorio: </strong></label>
          <input id="repositorio" type="text" class="form-control" value="user.github.com/123456" />
          <!-- Submit -->
          <input type="submit" class="btn btn-success mt-3" value="Subir proyecto" />
        </form>
      </div>
    </div>
  </div>
  `,
  script: () => {
    // Botón volver atrás: previene propagación
    document
      .querySelector("#botonVolver")
      .addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        window.history.back();
      });

    // Validación bootstrap: Listener del formulario con detención de propagación
    const formulario = document.querySelector("#formularioNuevoProyecto");
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (!formulario.checkValidity()) {
        formulario.classList.add("was-validated");
      } else {
        enviaDatos();
      }
    });

    // Función para enviar datos a la base de datos
    async function enviaDatos() {
      try {
        const user = await User.getUser();
        const userId = user.id;
        const proyectoEditado = {
          imagen: document.querySelector("#urlImagen").value,
          nombre: document.querySelector("#nombreJuego").value,
          descripcion: document.querySelector("#descripcion").value,
          created_at: document.querySelector("#fecha").value,
          estado: document.querySelector("#estado").value,
          enlace: document.querySelector("#enlace").value,
          repositorio: document.querySelector("#repositorio").value,
          user_id: userId,
        };
        const proyectoCreado = await Proyecto.create(proyectoEditado);
        alert("Proyecto creado con éxito: " + proyectoCreado.nombre);
        console.log("Enviando a la base de datos ", proyectoCreado);
        window.location = "#/proyectos";
      } catch (error) {
        alert("Error al crear el proyecto: " + error.message);
      }
    }
  },
};