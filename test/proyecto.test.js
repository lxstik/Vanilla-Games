// Cargamos la librería de testing
import { expect } from 'chai';

// Cargamos la librería de supabase
import { supabase } from '../bd/supabase.js';
// Cargamos la clase Proyectos
import { Proyecto } from '../bd/proyecto.js';

// Datos para los nuevos proyectos
const proyectosArray = [
  {
    nombre: 'Proyecto Alpha',
    descripcion: 'Primer proyecto de prueba',
    estado: 'activo'
  },
  {
    nombre: 'Proyecto Beta',
    descripcion: 'Segundo proyecto de prueba',
    estado: 'en progreso'
  },
  {
    nombre: 'Proyecto Gamma',
    descripcion: 'Tercer proyecto de prueba',
    estado: 'completado'
  }
];

// Limpiamos la tabla proyectos antes de iniciar las pruebas
try {
  await supabase.from('proyectos').delete().is('id', null);
} catch (error) {
  console.error(error);
}

describe('************** Pruebas para la clase Proyecto **************', function () {
  describe('getAll()', function () {
    it('debería devolver un array vacío inicialmente', async function () {
      const proyectos = await Proyecto.getAll();
      expect(proyectos).to.be.an('array');
      expect(proyectos.length).to.equal(0);
    });
  });

  describe('create()', function () {
    it('debería crear nuevos proyectos en la tabla "proyectos"', async function () {
      for (const proyecto of proyectosArray) {
        await Proyecto.create(proyecto);
      }

      const proyectos = await Proyecto.getAll();
      expect(proyectos).to.be.an('array');
      expect(proyectos.length).to.equal(3);
    });
  });

  describe('getById()', function () {
    it('debería devolver el proyecto con el ID correspondiente', async function () {
      const proyectos = await Proyecto.getAll();
      const ultimoProyecto = proyectos[proyectos.length - 1];
      const proyectoObtenido = await Proyecto.getById(ultimoProyecto.id);

      expect(proyectoObtenido).to.be.an.instanceof(Proyecto);
      expect(proyectoObtenido.nombre).to.equal(ultimoProyecto.nombre);
    });
  });

  describe('update()', function () {
    it('debería actualizar el nombre y estado del proyecto', async function () {
      const proyectos = await Proyecto.getAll();
      const ultimoProyecto = proyectos[proyectos.length - 1];
      const proyecto = await Proyecto.getById(ultimoProyecto.id);

      proyecto.nombre = 'Proyecto Modificado';
      proyecto.estado = 'en revisión';
      await proyecto.update();

      const proyectoActualizado = await Proyecto.getById(ultimoProyecto.id);
      expect(proyectoActualizado.nombre).to.equal('Proyecto Modificado');
      expect(proyectoActualizado.estado).to.equal('en revisión');
    });
  });

  describe('delete()', function () {
    it('debería borrar el último proyecto creado', async function () {
      let proyectos = await Proyecto.getAll();
      const ultimoProyecto = proyectos[proyectos.length - 1];
      const eliminado = await Proyecto.delete(ultimoProyecto.id);

      expect(eliminado).to.equal(true);
      proyectos = await Proyecto.getAll();
      expect(proyectos.length).to.equal(2);
    });
  });
});