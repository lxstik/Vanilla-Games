// Importación necesaria para manejar el modal de Bootstrap
import { Modal } from "bootstrap";
import { ls } from "../componentes/funciones";
import { User } from "../../bd/user";

export const editarPerfil = {
  template: `
  <div
    class="modal fade"
    id="modalEditarPerfil"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <form novalidate id="formularioEditarPerfil" action="">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Edición de perfil
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form border shadow-sm p-3">
              <div class="m-1" style="max-width: 400px">
                <div class="imgPerfil border shadow-sm p-3 mb-3">
                  <div
                    class="imagen mx-auto mb-1 rounded-circle"
                    style="
                      background-image: url(${ls.getUsuario().avatar || 'default_imagen.png'});
                      width: 200px;
                      height: 200px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>

                  <label for="avatar" class="form-label mt-3">URL imagen:</label>
                  <input
                    id="avatar"
                    type="url"
                    class="form-control"
                    value="${ls.getUsuario().avatar || ''}"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>

                <div>
                  <label for="nombrePerfil" class="form-label">Nombre:</label>
                  <input required id="nombrePerfil" type="text" class="form-control" value="${
                    ls.getUsuario().nombre || ''
                  }" />
                  <div class="invalid-feedback">El nombre es requerido</div>

                  <label for="apellidosPerfil" class="form-label">Apellidos:</label>
                  <input id="apellidosPerfil" type="text" class="form-control" value="${
                    ls.getUsuario().apellidos || ''
                  }" />

                  <label for="emailPerfil" class="form-label">Email:</label>
                  <input required id="emailPerfil" type="email" class="form-control" value="${
                    ls.getUsuario().email || ''
                  }" />
                  <div class="invalid-feedback">El formato no es correcto</div>

                  <label for="passPerfil" class="form-label mt-3">Nueva contraseña:</label>
                  <input
                    minlength="6"
                    id="passPerfil"
                    type="password"
                    class="form-control"
                    placeholder="Dejar en blanco para no cambiar"
                  />
                  <div class="invalid-feedback">
                    La contraseña debe ser de 6 caracteres como mínimo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button id="enviarPerfilEditado" type="submit" class="btn btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,

  script: () => {
    console.log("script editar perfil cargado");

    const formulario = document.querySelector("#formularioEditarPerfil");
    formulario.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!formulario.checkValidity()) {
        // Formulario inválido, no hacemos nada
      } else {
        await enviaDatos();
      }
      formulario.classList.add("was-validated");
    });

    async function enviaDatos() {
      const usuario = ls.getUsuario();

      const nuevaPass = document.querySelector("#passPerfil").value;

      const perfilEditado = {
        user_id: usuario.user_id,
        avatar: document.querySelector("#avatar").value.trim(),
        nombre: document.querySelector("#nombrePerfil").value.trim(),
        apellidos: document.querySelector("#apellidosPerfil").value.trim(),
        email: document.querySelector("#emailPerfil").value.trim(),
      };

      if (nuevaPass.length > 0) {
        if (nuevaPass.length < 6) {
          alert("La nueva contraseña debe tener al menos 6 caracteres.");
          return;
        }
        perfilEditado.contraseña = nuevaPass;
      }

      try {
        // Actualizamos en BD
        await User.update(perfilEditado);
        // Actualizamos localStorage
        ls.setUsuario({ ...usuario, ...perfilEditado });

        // Cerramos modal con instancia de Modal importada
        const modalEl = document.querySelector("#modalEditarPerfil");
        const modal = Modal.getInstance(modalEl) || new Modal(modalEl);
        modal.hide();
      } catch (error) {
        alert("Error al actualizar el perfil: " + error.message);
      }
    }
  },
};
