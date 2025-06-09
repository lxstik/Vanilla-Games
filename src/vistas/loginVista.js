import { ls } from "../componentes/funciones.js";
import { User } from '../../bd/user.js';
import { Perfil } from '../../bd/perfil.js';
import { header } from '../componentes/header.js';

export default {
  template: `
    <div class="container">
        <h1 class="mt-5 text-center">Inicia sesión</h1>
        <div class="m-5 mx-auto" style="max-width: 400px">
            <form id="formulario" novalidate action="" class="form border shadow-sm p-3">
                <!-- Email -->
                <label for="email" class="form-label">Email:</label>
                <input id="email" name="email" value="ejemplo@email.com" required type="email" class="form-control" />
                <div class="invalid-feedback">
                    El formato del email no es correcto
                </div>
                
                <!-- Contraseña -->
                <label for="pass" class="form-label mt-3">Contraseña:</label>
                <input required minlength="6" id="pass" name="password" type="password" class="form-control" />
                <div class="invalid-feedback">
                    La contraseña debe tener como mínimo 6 caracteres
                </div>

                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label class="form-check-label" for="flexCheckChecked">
                        Recordar sesión
                    </label>
                </div>
                <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
                <button type="submit" class="btn btn-primary w-100 mt-3">Iniciar sesión</button>
            </form>
            <a class="d-block mt-5 btn btn-secondary mx-auto" href="registro.html">¿Eres nuevo? Regístrate</a>
        </div>
    </div>
  `,
  script: () => {
    console.log('Vista login cargada');

    const formulario = document.querySelector('#formulario');
    
    if (formulario) {
      formulario.addEventListener('submit', async (event) => {
        event.preventDefault();
        event.stopPropagation();
    
        if (!formulario.checkValidity()) {
          formulario.classList.add('was-validated');
          console.log('Formulario no válido');
          return;
        }
    
        await enviarDatos(formulario);
      });
    }
  }
};

// Función para enviar datos a la BD
async function enviarDatos(formulario) {
  try {
    // 1️⃣ Capturar datos del formulario
    const user = {
      email: formulario.email.value,
      password: formulario.password.value
    };

    // 2️⃣ Cerrar sesión por si hay una sesión activa
    await User.logout();

    // 3️⃣ Iniciar sesión con los datos proporcionados
    const usuarioLogueado = await User.login(user);
    console.log('¡Login correcto!', usuarioLogueado);

    // 4️⃣ Verificar si se obtuvo un usuario válido
    if (!usuarioLogueado || !usuarioLogueado.id) {
      throw new Error('El usuario logueado no tiene un ID válido.');
    }

    // 5️⃣ Obtener el perfil del usuario desde la BD
    const userId = usuarioLogueado.id;
    console.log('userId:', userId);

    const perfilLogueado = await Perfil.getByUserId(userId);
    console.log('Perfil logueado:', perfilLogueado);

    // 6️⃣ Almacenar datos del usuario en localStorage con rol por defecto "registrado"
// Reemplaza esta parte en tu loginVista.js:
const usuario = {
  user_id: usuarioLogueado.id,  // <--- esto faltaba
  email: usuarioLogueado.email,
  rol: perfilLogueado?.rol || "registrado",
  avatar: perfilLogueado?.avatar || "default.png"
};
ls.setUsuario(usuario);


    // 7️⃣ Actualizar el header ANTES de redirigir para que refleje el nuevo usuario
    await header.script();

    // 8️⃣ Redireccionar a la página de proyectos
    window.location = '#/proyectos';

  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    alert('El usuario no existe o la contraseña es incorrecta');
  }
}
