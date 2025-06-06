import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import { header } from "./componentes/header.js";
import { footer } from "./componentes/footer.js";

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from "./componentes/enrutador";

//Inyectamos el componente header
document.querySelector("header").innerHTML = header.template;
header.script();
document.querySelector("footer").innerHTML = footer.template;
// Cargamos la vista por defecto (home)
enrutador.observadorRutas();
// Cargamos la página home
window.location = "#/home";