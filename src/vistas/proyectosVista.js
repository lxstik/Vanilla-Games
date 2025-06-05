import { Proyecto } from "../../bd/proyecto.js";
import { User } from "../../bd/user.js";
import { ls } from "../componentes/funciones.js";

export default {
  template: `
  <div class="container">
    <h1 class="mt-5">Proyectos</h1>
    <div class="row mt-5">
      <div class="col-12">
        <ul class="nav nav-tabs">
          <li class="nav-item w-50">
            <button class="selectorFicha fichaProyectos nav-link w-100 active">
              Todos los proyectos
            </button>
          </li>
          <li id="pestanyaMisProyectos" class="nav-item w-50">
            <button class="selectorFicha fichaMisProyectos nav-link w-100">
              Mis proyectos
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="border border-top-0 p-3">
      <div class="row">
        <div class="col-12 col-sm-4 mb-3">
          <a id="botonSubirProyecto" href="#/proyectoNuevo" class="btn btn-primary w-100 router-link">Subir proyecto</a>
        </div>
        <div class="d-flex col-12 col-sm-8 mb-3">
          <button class="btn btn-secondary me-2 bi bi-grid-3x3-gap vistaTabla btn-success"></button>
          <button class="btn btn-secondary me-2 bi bi-list vistaTarjetas"></button>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping"><i class="bi bi-search"></i></span>
            <input id="inputBusqueda" type="text" class="form-control" placeholder="Buscador" aria-label="Username" aria-describedby="addon-wrapping"/>
            <span class="input-group-text" id="borrarBuscador"><i class="bi bi-x"></i></span>
          </div>
        </div>
      </div>
      <div id="tabTabla" class="col-12 d-block" style="overflow-x: auto">
        <table class="table table-hover align-middle mt-3" style="min-width: 1000px">
          <thead>
            <tr>
              <th></th>
              <th>Nombre <span><i class="bi bi-caret-down"></i></span></th>
              <th>Descripción <span><i class="bi bi-caret-up"></i></span></th>
              <th>Enlace <span><i class="bi bi-caret-up"></i></span></th>
              <th>Repositorio</th>
              <th>Autor <span><i class="bi bi-caret-up"></i></span></th>
              <th>Fecha <span><i class="bi bi-caret-up"></i></span></th>
              <th>Estado <span><i class="bi bi-caret-up"></i></span></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody id="tbodyProyectos"></tbody>
        </table>
      </div>
      <div id="tabTarjetas" class="d-none row"></div>
    </div>
  </div>
  `,
  script: async () => {
    const datosBd = await Proyecto.getAll();
    const usuario = ls.getUsuario();
    const userId = usuario?.user_id;

    // Formatear fechas
    const datos = datosBd.map(dato => {
      const fecha = dato.created_at.split("T")[0];
      const [yyyy, mm, dd] = fecha.split("-");
      return { ...dato, created_at: `${dd}/${mm}/${yyyy}` };
    });

    let misProyectos = false;

    const pintaTabla = (proyectosFiltrados) => {
      if (misProyectos) {
        proyectosFiltrados = proyectosFiltrados.filter(p => p.user_id === userId);
      }
      let tbodyProyectos = "";
      proyectosFiltrados.forEach(proyecto => {
        let botones = "";
        if (userId === proyecto.user_id) {
          botones = `
            <td><a data-id="${proyecto.id}" class="botonAdmin botonEditar d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"></a></td>
            <td><a data-id="${proyecto.id}" class="botonAdmin botonBorrar d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"></a></td>`;
        }
        tbodyProyectos += `
          <tr data-id="${proyecto.id}" class="verDetalle">
            <td><div class="containerImagen"><img class="verDetalle" data-id="${proyecto.id}" width="200px" src="${proyecto.imagen || "images/imagenVacia.png"}" alt="imagen proyecto"/></div></td>
            <td>${proyecto.nombre}</td>
            <td>${proyecto.descripcion}</td>
            <td><a href="${proyecto.enlace}" target="_blank"><i class="bi bi-link fs-4"></i></a></td>
            <td><a href="${proyecto.repositorio}" target="_blank"><i class="bi bi-folder-symlink fs-4"></i></a></td>
            <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
            <td>${proyecto.created_at}</td>
            <td>${proyecto.estado}</td>
            ${botones}
          </tr>`;
      });
      document.querySelector("#tbodyProyectos").innerHTML = tbodyProyectos;

      // Añadir eventos a botones dentro de la tabla
      document.querySelectorAll(".botonEditar").forEach(boton => {
        boton.addEventListener("click", (e) => {
          e.stopPropagation();
          const idProyecto = e.currentTarget.dataset.id;
          window.location = `#/proyectoEditar/${idProyecto}`;
        });
      });
      document.querySelectorAll(".botonBorrar").forEach(boton => {
        boton.addEventListener("click", async (e) => {
          e.stopPropagation();
          const idProyecto = e.currentTarget.dataset.id;
          if (confirm("¿Estás seguro de eliminar este proyecto?")) {
            try {
              await Proyecto.delete(idProyecto);
              alert("Proyecto eliminado correctamente.");
              window.location.reload();
            } catch (error) {
              alert("Error eliminando el proyecto: " + error.message);
            }
          }
        });
      });
    };

    const pintaTarjetas = (proyectosFiltrados) => {
      if (misProyectos) {
        proyectosFiltrados = proyectosFiltrados.filter(p => p.user_id === userId);
      }
      let tarjetasProyectos = "";
      proyectosFiltrados.forEach(proyecto => {
        let botones = "";
        if (userId === proyecto.user_id) {
          botones = `
            <a data-id="${proyecto.id}" class="botonAdmin botonEditar d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"></a>
            <a data-id="${proyecto.id}" class="botonAdmin botonBorrar d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"></a>`;
        }
        tarjetasProyectos += `
          <div class="col-12 col-lg-6">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-4 verDetalle" data-id="${proyecto.id}" style="background-image: url(${proyecto.imagen || "images/imagenVacia.png"}); background-position: center; background-size: cover;"></div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">${proyecto.nombre}</h5>
                    <p class="card-text">${proyecto.descripcion}</p>
                    <p class="small m-0 text-end text-italic">Autor: ${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</p>
                    <p class="small text-end text-italic">Fecha: ${proyecto.created_at}</p>
                    <a class="btn btn-sm btn-outline-primary" href="${proyecto.enlace}" target="_blank"><i class="bi bi-link"></i></a>
                    <a class="btn btn-sm btn-outline-primary" href="${proyecto.repositorio}" target="_blank"><i class="bi bi-folder-symlink"></i></a>
                    <button class="btn btn-sm btn-success">${proyecto.estado}</button>
                    ${botones}
                  </div>
                </div>
              </div>
            </div>
          </div>`;
      });
      document.querySelector("#tabTarjetas").innerHTML = tarjetasProyectos;

      // Añadir eventos a botones dentro de las tarjetas
      document.querySelectorAll(".botonEditar").forEach(boton => {
        boton.addEventListener("click", (e) => {
          e.stopPropagation();
          const idProyecto = e.currentTarget.dataset.id;
          window.location = `#/proyectoEditar/${idProyecto}`;
        });
      });
      document.querySelectorAll(".botonBorrar").forEach(boton => {
        boton.addEventListener("click", async (e) => {
          e.stopPropagation();
          const idProyecto = e.currentTarget.dataset.id;
          if (confirm("¿Estás seguro de eliminar este proyecto?")) {
            try {
              await Proyecto.delete(idProyecto);
              alert("Proyecto eliminado correctamente.");
              window.location.reload();
            } catch (error) {
              alert("Error eliminando el proyecto: " + error.message);
            }
          }
        });
      });
    };

    pintaTabla(datos);
    pintaTarjetas(datos);

    // Cambiar vista tabla/tarjetas
    document.querySelector(".vistaTabla").addEventListener("click", e => {
      e.target.classList.add("btn-success");
      document.querySelector(".vistaTarjetas").classList.remove("btn-success");
      document.querySelector("#tabTabla").classList.replace("d-none", "d-block");
      document.querySelector("#tabTarjetas").classList.add("d-none");
    });
    document.querySelector(".vistaTarjetas").addEventListener("click", e => {
      e.target.classList.add("btn-success");
      document.querySelector(".vistaTabla").classList.remove("btn-success");
      document.querySelector("#tabTabla").classList.replace("d-block", "d-none");
      document.querySelector("#tabTarjetas").classList.remove("d-none");
    });

    // Buscador
    const inputBusqueda = document.getElementById("inputBusqueda");
    inputBusqueda.addEventListener("input", () => {
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
      const proyectosFiltrados = datos.filter(proyecto => {
        for (const key in proyecto) {
          if (typeof proyecto[key] === "string" && proyecto[key].toLowerCase().includes(textoBusqueda)) {
            return true;
          }
        }
        return false;
      });
      pintaTabla(proyectosFiltrados);
      pintaTarjetas(proyectosFiltrados);
    });

    document.querySelector("#borrarBuscador").addEventListener("click", () => {
      inputBusqueda.value = "";
      pintaTabla(datos);
      pintaTarjetas(datos);
    });

    // Pestañas "Todos" y "Mis proyectos"
    const fichaProyectos = document.querySelector(".fichaProyectos");
    const fichaMisProyectos = document.querySelector(".fichaMisProyectos");
    fichaProyectos.addEventListener("click", () => {
      misProyectos = false;
      fichaProyectos.classList.add("active");
      fichaMisProyectos.classList.remove("active");
      pintaTabla(datos);
      pintaTarjetas(datos);
    });
    fichaMisProyectos.addEventListener("click", () => {
      misProyectos = true;
      fichaMisProyectos.classList.add("active");
      fichaProyectos.classList.remove("active");
      pintaTabla(datos);
      pintaTarjetas(datos);
    });
  }
};
