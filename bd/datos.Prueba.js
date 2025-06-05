export const perfiles = {
  data: [
    {
      id: 1,
      created_at: '2024-01-10',
      user_id: 'fa932b50-6a21-4efc-9280-1c55a0b9fabc',
      nombre: 'Laura',
      apellidos: 'Gómez Ruiz',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      estado: 'Activo',
      rol: 'admin',
      email: 'laura.gomez@example.com',
      contraseña: '123456'
    },
    {
      id: 2,
      created_at: '2024-02-05',
      user_id: '4cb0d030-6b6b-4f3b-8bc5-91d3b0f7d001',
      nombre: 'Diego',
      apellidos: 'Fernández López',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      estado: 'Inactivo',
      rol: 'registrado',
      email: 'diego.fernandez@example.com',
      contraseña: '123456'
    },
    {
      id: 3,
      created_at: '2024-03-12',
      user_id: '9ab43c75-8cf1-4f9a-bc19-9d3d2d7f9821',
      nombre: 'Isabel',
      apellidos: 'Morales Pardo',
      avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
      estado: 'Activo',
      rol: 'desarrollador',
      email: 'isabel.morales@example.com',
      contraseña: '123456'
    },
    {
      id: 4,
      created_at: '2024-04-20',
      user_id: 'ab17a0ef-3294-4457-ae3e-f6cb4578fa09',
      nombre: 'Carlos',
      apellidos: 'Núñez Torres',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
      estado: 'Activo',
      rol: 'desarrollador',
      email: 'carlos.nunez@example.com',
      contraseña: '123456'
    },
    {
      id: 5,
      created_at: '2024-05-08',
      user_id: '612bf31f-bf69-42ff-a899-76e25b144f7f',
      nombre: 'Elena',
      apellidos: 'Castro Molina',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      estado: 'Inactivo',
      rol: 'registrado',
      email: 'elena.castro@example.com',
      contraseña: '123456'
    }
  ],

  // Método para obtener los perfiles
  async getAll() {
    return this.data;
  }
};



export const proyectos = [
  {
    id: 1,
    created_at: '2024-02-10T09:30:00Z',
    user_id: '4cb0d030-6b6b-4f3b-8bc5-91d3b0f7d001',
    nombre: 'Mundo Submarino',
    descripcion: 'Juego de exploración en un océano misterioso lleno de criaturas',
    imagen: 'https://cdn-icons-png.flaticon.com/512/861/861512.png',
    enlace: 'https://mundo-submarino.com',
    repositorio: 'https://github.com/usuario/mundo-submarino',
    estado: 'En desarrollo',
    nombre_usuario: 'Diego',
    apellidos_usuario: 'Fernández López'
  },
  {
    id: 2,
    created_at: '2024-02-20T12:00:00Z',
    user_id: '9ab43c75-8cf1-4f9a-bc19-9d3d2d7f9821',
    nombre: 'Ciudad Fantasma',
    descripcion: 'Juego de aventuras en una ciudad abandonada llena de secretos',
    imagen: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png',
    enlace: 'https://ciudad-fantasma.com',
    repositorio: 'https://github.com/usuario/ciudad-fantasma',
    estado: 'En desarrollo',
    nombre_usuario: 'Isabel',
    apellidos_usuario: 'Morales Pardo'
  },
  {
    id: 3,
    created_at: '2024-03-01T14:45:00Z',
    user_id: 'ab17a0ef-3294-4457-ae3e-f6cb4578fa09',
    nombre: 'Batalla Medieval',
    descripcion: 'Juego de estrategia por turnos en una era de caballeros y castillos',
    imagen: 'https://cdn-icons-png.flaticon.com/512/1400/1400471.png',
    enlace: 'https://batalla-medieval.com',
    repositorio: 'https://github.com/usuario/batalla-medieval',
    estado: 'Finalizado',
    nombre_usuario: 'Carlos',
    apellidos_usuario: 'Núñez Torres'
  },
  {
    id: 4,
    created_at: '2024-03-15T17:20:00Z',
    user_id: 'fa932b50-6a21-4efc-9280-1c55a0b9fabc',
    nombre: 'Cocina Exprés',
    descripcion: 'Juego de cocina rápida con niveles contrarreloj y recetas locas',
    imagen: 'https://cdn-icons-png.flaticon.com/512/1046/1046795.png',
    enlace: 'https://cocina-expres.com',
    repositorio: 'https://github.com/usuario/cocina-expres',
    estado: 'En desarrollo',
    nombre_usuario: 'Laura',
    apellidos_usuario: 'Gómez Ruiz'
  },
  {
    id: 5,
    created_at: '2024-04-01T10:00:00Z',
    user_id: '612bf31f-bf69-42ff-a899-76e25b144f7f',
    nombre: 'Viaje al Futuro',
    descripcion: 'Corre por ciudades futuristas y evita obstáculos tecnológicos',
    imagen: 'https://cdn-icons-png.flaticon.com/512/733/733291.png',
    enlace: 'https://viaje-al-futuro.com',
    repositorio: 'https://github.com/usuario/viaje-al-futuro',
    estado: 'En desarrollo',
    nombre_usuario: 'Elena',
    apellidos_usuario: 'Castro Molina'
  }
];
