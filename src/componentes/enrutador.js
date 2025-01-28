export const enrutador = {
  rutas: {
    home: import('../vistas/homeVista.js'),
    admin: import('../vistas/adminVista.js'),
    registro: import('../vistas/registroVista.js'),
    login: import('../vistas/loginVista.js'),
    proyectos: import('../vistas/proyectosVista.js'),
    proyectoNuevo: import('../vistas/proyectoNuevoVista.js'),
    proyectoEditar: import('../vistas/proyectoEditarVista.js'),
    proyectoDetalle: import('../vistas/proyectoDetalleVista.js'),
    404: import('../vistas/404.js')
  },

  router: async () => {
    const pathCompleto = window.location.hash
    const path = pathCompleto.split('/')[1]
    const parametro = pathCompleto.split('/')[2]
    const componenteVista = await enrutador.rutas[path]
    if (componenteVista) {
      const vista = await componenteVista.default
      document.querySelector('main').innerHTML = vista.template
      vista.script(parametro)
    }  else {
      window.location = '#/404'
    }
  },

  observadorRutas: () => {
    document.body.addEventListener('click', event => {
      const link = event.target
      if (link.classList.contains('router-link')) {
        console.log('router-link')
        event.preventDefault()
        const href = link.getAttribute('href')
        window.history.pushState({ path: href }, '', href)
        enrutador.router()
      }
    })
    window.addEventListener('popstate', (e) => {
      console.log('evento popstate - Te estás moviendo por el historial')
      enrutador.router()
    })
  }
}