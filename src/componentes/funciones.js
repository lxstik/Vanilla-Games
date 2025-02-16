export const ls = {
  getUsuario: () => {
    let usuario = {
      email: "anónimo",
      rol: "no logueado",
      avatar: "",
    };
    const usuarioJSON = localStorage.getItem("usuarioVanilla");
    if (usuarioJSON) {
      usuario = JSON.parse(usuarioJSON);
    }
    return usuario;
  },
  setUsuario: (usuario) => {
    const usuarioJSON = JSON.stringify(usuario);
    localStorage.setItem("usuarioVanilla", usuarioJSON);
  },
};
ls.setUsuario({ email: "fal@gmial.com", rol: "admin" });