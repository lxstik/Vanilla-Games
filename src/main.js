import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import { header } from "./componentes/header.js";
import { footer } from "./componentes/footer.js";
import { enrutador } from "./componentes/enrutador";

document.querySelector("header").innerHTML = header.template;
header.script();
document.querySelector("footer").innerHTML = footer.template;
enrutador.observadorRutas();
window.location = "#/home";