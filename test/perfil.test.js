import { expect } from 'chai';
import { Proyectos } from '../bd/proyecto.js'; // Asegúrate de que la clase esté correctamente importada
import { supabase } from '../bd/supabase.js';

// Datos de ejemplo
const proyectoEjemplo = {
  nombre: 'Proyecto de Gestión de Inventario',
  descripcion: 'Este proyecto permite gestionar el inventario de una empresa',
  imagen: 'https://imagen.com/gestion-inventario.jpg',
  enlace: 'https://enlace.com/gestion-inventario',
  repositorio: 'https://github.com/proyecto-gestion-inventario',
  estado: 'Activo'
};

// Limpiar la tabla de proyectos antes de cada test
beforeEach(async function() {
  try {
    await supabase.from('proyectos').delete().neq('id', null); // Asegúrate de eliminar los proyectos existentes antes de empezar
  } catch (error) {
    console.error(error);
  }
});

// Tests para la clase Proyectos
describe('************** Clase Proyectos', function() {

  describe('getAll()', function() {
    it('debería devolver un array vacío si no hay proyectos', async function() {
      const proyectos = await Proyectos.getAll();
      expect(proyectos).to.be.an('array');
      expect(proyectos.length).to.equal(0);
    });
  });

  describe('create()', function() {
    it('debería crear un nuevo proyecto en la tabla "proyectos"', async function() {
      // Crear un nuevo proyecto
      await Proyectos.create(proyectoEjemplo);

      // Leer todos los proyectos
      const proyectos = await Proyectos.getAll();

      // Verificar que se ha creado el proyecto correctamente
      expect(proyectos.length).to.equal(1);
      expect(proyectos[0]).to.include({
        nombre: 'Proyecto de Gestión de Inventario',
        descripcion: 'Este proyecto permite gestionar el inventario de una empresa',
        estado: 'Activo'
      });
    });
  });

  describe('getById()', function() {
    it('debería devolver el proyecto con el ID correspondiente', async function() {
      // Crear un proyecto
      await Proyectos.create(proyectoEjemplo);

      // Obtener el proyecto creado
      const proyectos = await Proyectos.getAll();
      const proyectoId = proyectos[0].id;

      // Obtener el proyecto por ID
      const proyecto = await Proyectos.getById(proyectoId);
      expect(proyecto).to.include({
        nombre: 'Proyecto de Gestión de Inventario'
      });
    });
  });

  describe('update()', function() {
    it('debería actualizar un proyecto', async function() {
      // Crear un proyecto
      await Proyectos.create(proyectoEjemplo);

      // Obtener el ID del proyecto creado
      const proyectos = await Proyectos.getAll();
      const proyectoId = proyectos[0].id;

      // Obtener el proyecto por ID
      let proyecto = await Proyectos.getById(proyectoId);
      expect(proyecto.estado).to.equal('Activo'); // Comprobar estado inicial

      // Actualizar el estado del proyecto
      proyecto.estado = 'Inactivo';
      await proyecto.update();

      // Obtener el proyecto actualizado
      proyecto = await Proyectos.getById(proyectoId);
      expect(proyecto.estado).to.equal('Inactivo'); // Comprobar si el estado fue actualizado
    });
  });

  describe('delete()', function() {
    it('debería eliminar un proyecto', async function() {
      // Crear un proyecto
      await Proyectos.create(proyectoEjemplo);

      // Obtener el ID del proyecto creado
      const proyectos = await Proyectos.getAll();
      const proyectoId = proyectos[0].id;

      // Eliminar el proyecto
      const borrado = await Proyectos.delete(proyectoId);
      expect(borrado).to.equal(true); // Verificar que el borrado fue exitoso

      // Verificar que ya no hay proyectos en la base de datos
      const proyectosRestantes = await Proyectos.getAll();
      expect(proyectosRestantes.length).to.equal(0); // Asegurarse que el proyecto fue borrado
    });
  });
});