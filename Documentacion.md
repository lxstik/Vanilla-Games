<h1>!Definiendo el proyecto 'Vanilla Games'¡</h1>

<h2>Escenario del proyecto</h2>

Vanilla Games S.L. es una empresa de desarrollo de minijuegos para navegadores web, creados con vanillaJS, es decir, desarrollados exclusivamente con Javascript como lenguaje de programación (sin frameworks)

En esta empresa trabajan 10 desarrolladores y, habitualmente, suelen tener a tres alumnos/as en prácticas, de los cuales, al menos uno, tendrá muchas posibilidades de formar parte del equipo de desarrollo al acabar su etapa de formación.

El método de trabajo que se utiliza en dicha empresa consiste en proponer a cada uno de los miembros del equipo el desarrollo de un minijuego que, al acabar, deberán compartir con el resto de sus compañeros. Estos, a su vez, deben comentar y valorar cada una de las propuestas. Finalmente, en la empresa hay un equipo responsable de seleccionar aquellas propuestas que muestran un mayor potencial, para ser desarrolladas de manera definitiva por todo el equipo de trabajo, con el fin de crear una aplicación para su posterior comercialización.

Hasta la fecha, para el proceso de publicación de proyectos, comentarios y valoración utilizaban algunas herramientas ofimáticas, tipo hoja de cálculo de google. Actualmente pretenden crear una aplicación web tipo intranet para llevar a cabo este propósito.

Como alumno en prácticas, tu trabajo consiste en crear una aplicación web que permitirá a los desarrolladores de Vanilla Games, publicar sus propuestas de minijuegos, de manera que el resto de compañeros podrá hacer comentarios y emitir una valoración de cada proyecto publicado en esta plataforma.

<h2>Requisitos del proyecto y casos de uso general</h2>

Los casos de uso son una técnica de modelado utilizada en el desarrollo de software para describir las interacciones entre un sistema y sus usuarios. En términos simples, los casos de uso describen cómo los usuarios interactúan con un sistema y qué resultados esperan obtener de él.


<h2>Casos de uso general</h2>

Esta aplicación web debe permitir a un usuario registrarse (con su nombre, apellidos, email y contraseña) y posteriormente iniciar y cerrar sesión. Un usuario registrado debe poder ver un listado de proyectos publicados por los desarrolladores. También podrá editar su perfil y subir una imagen de tipo avatar.

Si el usuario registrado tiene el perfil de ‘desarrollador’ , además, debe poder publicar proyectos con información del tipo: nombre de proyecto, una descripción, una imagen representativa y dos enlaces, el del proyecto desplegado en un servidor de pruebas y el del repositorio del código correspondiente, el estado del proyecto, etc. También debe poder eliminar o editar sus proyectos.

Por otro lado, el perfil desarrollador debería poder realizar comentarios de cada uno de los proyectos publicados y añadir una valoración en forma de estrellas.

Finalmente, habrá un administrador que podrá adminstrar el perfil de cada uno de los usuarios registrados en la plataforma (editar, borrar, etc) así como modificar el rol de cada uno de estos. También tendrá control total sobre los comentarios y valoraciones.

<h2>Fases de desarrollo</h2>

Necesitamos organizarnos un poco. Vamos a planificar como vamos a llevar a cabo las diferentes fases para cumplir con nuestros objetivos:

    1. Definición del proyecto y requisitos básicos: En primer lugar debemos tener muy claro qué se espera de nuestra aplicación, por lo que anotaremos cada funcionalidad teniendo en cuanta los diferentes actores (roles de acceso). Esto es lo hemos hecho en el apartado anterior.

    2. Definición de las versiones: Una vez conocemos los requisitos del proyecto, dividiremos el trabajo en diferentes versiones, de manera que todas ellas serán operativas, aunque cada una ampliando las funcionalidades.

    3. Planificación del proyecto: Basandonos en la metodología Agile devidiremos todo el proceso en diferentes historias/tareas (para cada una de las versiones definidas) que: agruparemos, temporizaremos y representaremos mediante diagramas.

    4. Diseño de la interficie: Basandonos en el diseño centrado en el usuario (DCU):
        i. Realizaremos un Benchmarking (para copiarnos de la competencia)
        ii. Crearemos un modelo de usuarios
        iii. Diseñaremos los prototipos de bajo nivel(bocetos, wireframes)
        iv. Diseñaremos el mockup (prototipo de alto nivel) junto a la guía de estilos (usaremos la aplicación Figma)
        v. Haremos pruebas de usabilidad y rediseñaremos los prototipos.
    
    5. Programación del frontend (html/css/js):Maquetaremos los prototipos (html/css) y diseñaremos la lógica de validación de cliente

    6. Programación del backend: Utilizaremos un backend como servicio (SUPABASE) para:
        i. Crear las bases de datos
        ii. Diseñar consultas sql y funciones postgres
        iii. Programaremos un ORM en javascript para el mapping de la bd
    
    7. Integración de frontend y backend en la aplicación:
        i. Programaremos la SPA a partir de los prototipos
        ii. Programaremos la lógica de acceso a la bd empleando el ORM
        iii. Programaremos el resto de funcionalidades (sesiones y roles de acceso, etc)

    8. Analisis usabilidad II: Haremos pruebas de usabilidad (test de usuarios) y solucionaremos los posibles conflictos detectados.

    9. Testing y despliegue en producción:
        i. Diseñaremos un sistema de testing para crear tests unitarios
        ii. Configuraremos un entorno DevOps para trabajar con Integración continua y despliegue continuo (CI/CD)
        iii. Desplegaremos en producción cada una de las versiones.
        
<h2>Versiones</h2>

Vamos a dividir el desarrollo del proyecto en diferentes versiones a partir de las funcionalidades que podrá realizar:

<ul>
    <li>VERSIÓN 1.0: Implementación de la publicación de proyectos</li>
    <li>VERSIÓN 2.0: Implementación de los comentarios de los proyectos</li>
    <li>VERSIÓN 3.0: Implementación del sistema de valoración mediante estrellas</li>
    <li>VERSIÓN 4.0: Implementación del sistema de valoración basado en rúbricas o criterios de valoración.</li>
</ul>

<h2>Arquitectura y tecnologías</h2>

A la hora de decidir la arquitectura a implementar en el desarrollo de nuestro proyecto debemos tener en cuenta una serie de consideraciones previas, como la velocidad de carga inicial, el SEO, la experiencia de usuario, etc. pero también debemos considerar aspectos técnicos

<h2>¿Que arquitectura vamos a utilizar en nuestro proyecto?</h2>

En nuestro caso nos basaremos en CSR, es decir, renderizamos todo el código html en el navegador. El cliente solo se encargará de responder a las peticiones devolviendo los datos solicitados (en formato json). De esta manera podemos dividir la implementación del proyecto en FRONTEND y BACKEND, separando cada funcionalidad y desarrollándola de manera independiente.

<h2>¿Como diseñaremos nuestro FrontEnd ?</h2>

<h3>Diseño de la interficie</h3>

En primer lugar, para el diseño de la interficie, crearemos los bocetos de nuestra aplicación (con papel y lapiz, como se ha hecho siempre).

Más tarde, éstos evolucionarán hacia el Wireframe (Diseño de alambres carente de estilo) que finalmente se convertirá en un Mockup (diseño con colores y tipografías definitivas). Para el diseño de este último y para implementación de la guía de estilos utilizaremos la herramienta FIGMA.

<h3>Maquetación del frontend</h3>

En primer lugar crearemos los prototipos utilizando html5, css3 y el framework Bootstrap 5. Utilizaremos una plantilla Bootswatch que adaptaremos a nuestro diseño mediante SASS.

Una vez tenemos los prototipos html creados, los integraremos en la SPA e implementaremos la lógica de programación utilizando VanillaJS , es decir, con Javascript puro (ES6, sin usar frameworks)

<h2>¿Como implementaremos las funcionalidades del BackEnd?</h2>

Usaremos SUPABASE como servicio de Backend
En el lado del backend utilizaremos Supabase como servicio backend.

Este servicio nos permite almacenar la información en bases de datos relacionales en un entorno basado en postgreSQL.

También nos ofrece, entre otros:

<ul>
    <li>Un sistema de autenticación basado en proveedores como google, github, etc.</li>
    <li>Un sistema de control de accesos según roles a través de las políticas de permisos.</li>
    <li>Un storage de almacenamiento de archivos (para las imágenes) en los buckets que nos permite configurar.</li>
    <li>Una API en javascript para las peticiones más frecuentes que atacan a las tablas de la bd (CRUD) así como un sistema de funciones personalizadas (con sus correspondiente api en js) para hacer consultas específicas (por ejemplo, consultas multitabla)</li>
</ul>

<h2>Nuestro entorno de desarrollo: VSCODE</h2>

En el entorno de desarrollo tendremos a VSCode trabajando sobre Nodejs y su gestor de paquetes npm.

Configuraremos el IDE con los plugins necesarios para facilitar un buen flujo de trabajo.

Formatearemos el código siguiendo el estándar 'Standard' mediante herramientas de verificación de código como 'Eslint'.

Para el control de versiones trabajaremos con un repositorio Git que sincronizaremos con una cuenta de Github.

En el proceso de desarrollo emplearemos el flujo de trabajo ‘Flujo de rama de funcionalidad’. Es decir, crearemos ramas específicas para cada funcionalidad que integraremos en la rama principal una vez testadas las funcionalidades. Así, nuestro repositorio reflejará todo el proceso de trabajo, las diferentes versiones, etc.

<h2>Y para el despliegue de nuestras aplicaciones</h2>

Desplegaremos el proyecto en github pages (en la fase de pruebas) y utilizaremos un servicio como por ejemplo RailWay, Netlify, etc para el despliegue en producción.


















<h1>Requesitos y diagrama de casos de uso</h1>

En la introducción de esta documentación, en la sección El proyecto Vanilla Games, en concreto en el apartado Requisitos del proyecto y casos de uso general, hemos definido qué se espera de nuestra aplicación web, a partir de los 'Casos de uso general'.

También hemos dividido todo el trabajo de desarrollo en diferentes versiones, con la intención de que nuestro proyecto esté operativo desde el inicio de su implementación, de manera que conforme evolucione a posteriores versiones, aumentaremos su nivel de funcionalidad.



<h2>Casos de uso para la V1.0 - Definición básica</h2>

<ul>
    <li>Registrar usuario: Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contraseña.</li>
    <li>Recuperar contraseña: Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un correo electrónico con las instrucciones para restablecer su contraseña.</li>
    <li>Iniciar sesión: Un usuario registrado puede iniciar sesión en la plataforma proporcionando su email y contraseña.</li>
    <li>Cerrar sesión: Un usuario puede cerrar su sesión en la plataforma en cualquier momento.</li>
    <li>Editar perfil: Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contraseña.</li>
    <li>Ver proyectos: Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.</li>
    <li>Publicar proyecto: Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando información como nombre, descripción, imagen representativa, enlaces a servidor de pruebas y repositorio de código, estado del proyecto, etc.</li>
    <li>Editar proyecto: Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.</li>
    <li>Eliminar proyecto: Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente.</li>
    <li>Ver/Editar usuarios: Un adminsrador puede ver una tabla con todos los usuarios que hay registrados y editar la información, incluido el ROL de usuario.</li>
    <li>Eliminar usuario: Un administrador puede eliminar cualquier usuario registrado en la plataforma.</li>
</ul>

<h2>Diagrama de casos de uso</h2>

<h3>Diagrma de casos de uso para la versión 1.0</h3>

<img src="casosDeUsoIMGS/casos de uso.png">









<h1>Casos de uso específicos y diagramas de flujo</h1>

En el primer apartado 'Requisitos y diagrama de casos de uso' para esta versión 1.0, hemos definido de manera general los casos de uso que se contemplan para cada actor y los hemos reflejado en un diagrama de casos de uso.

Es el momento de ser más concretos y detenernos a reflexionar en cada uno de los procesos que se realizarán para cada tarea, incluyendo los posibles errores cometidos por el usuario o el propio sistema.

<h2>Casos de uso específicos</h2>

<h3>1. Registrar usuario</h3>

Actores: Usuario no registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

    1. El usuario navega a la página de registro.

    2. El usuario introduce su nombre, apellidos, email y contraseña.

    3. El sistema valida que los campos estén completos y que el email no esté registrado previamente.

    4. El sistema crea un nuevo usuario con los datos proporcionados.

    5. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de inicio.

Flujos alternativos:

<ul>
    <li>3a. El sistema detecta que el email ya está registrado: muestra un mensaje de error y no crea la cuenta.</li>
</ul>

<h3>2. Recuperar contraseña</h3>

Actores: Usuario registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

    1. El usuario navega a la página de registro.

    2. El usuario selecciona la opción 'Recuperar contraseña'

    3. El sistema valida que el campo 'email' esté completo y que el email esté registrado previamente.

    4. El sistema muestra un mensaje de confirmación de envio del mail para la recuperación de contraseña y redirige al usuario a la página de inicio.

Flujos alternativos:

<ul>
    <li>3a. El sistema detecta que el email no está registrado: muestra un mensaje de error y no envia el mail.</li>
</ul>

<h3>3. Iniciar sesión</h3>

Actores: Usuario registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

    1. El usuario navega a la página de inicio de sesión.

    2. El usuario introduce su email y contraseña.

    3. El sistema valida las credenciales y crea una sesión para el usuario.

    4. El sistema redirige al usuario a la página principal de la aplicación.

Flujos alternativos:

<ul>
    <li>3a. Las credenciales son incorrectas: el sistema muestra un mensaje de error y no crea la sesión.</li>
</ul>

<h3>4. Cerrar sesión</h3>

Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

    1. El usuario hace clic en el botón de "cerrar sesión".

    2. El sistema cierra la sesión del usuario.

    3. El sistema redirige al usuario a la página de inicio.

<h3>5. Ver/Editar perfil</h3>

Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

    1. El usuario navega a la página de edición de perfil.

    2. El usuario edita su nombre, apellidos y contraseña.

    3. El sistema valida los campos y actualiza el perfil del usuario.
    
    4. El sistema muestra un mensaje de confirmación.

Flujos alternativos:

<ul>
    <li>3a. El usuario intenta cambiar su email: el sistema valida que el email no esté registrado previamente.</li>
</ul>

<h3>6. Ver proyectos</h3>

Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

    1. El usuario navega a la página de proyectos.

    2. El sistema muestra una lista de proyectos publicados por desarrolladores.

    3. El usuario puede hacer clic en un proyecto para ver más detalles.

    4. El usuario puede mostrar/filtrar los proyectos a partir de un buscador

<h3>7. Publicar proyecto</h3>

Actores: Usuario registrado con perfil de desarrollador.

Precondiciones: El usuario ha iniciado sesión y su perfil es de desarrollador.

Flujo básico:

    1. El usuario navega a la página de publicación de proyecto.

    2. El usuario introduce el nombre, descripción, imagen representativa, enlaces de servidor y repositorio, estado y otra información relevante del proyecto.

    3. El sistema valida los campos y crea un nuevo proyecto.

    4. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de proyectos.

Flujos alternativos:

<ul>
    <li>2a. El desarrollador decide no publicar el proyecto y selecciona la opción de cancelar.</li>
    <li>El sistema descarta la información ingresada en el formulario.</li>
    <li>El sistema muestra un mensaje de confirmación al desarrollador.</li>
</ul>

<h3>8. Editar proyecto:</h3>

Actor principal: Desarrollador

Objetivo: Editar la información de un proyecto previamente creado.

Precondiciones: El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

Flujo principal:

    1. El usuario selecciona la opción de "Editar proyecto".

    2. El sistema muestra la lista de proyectos previamente creados por el usuario.

    3. El usuario selecciona el proyecto que desea editar.
    
    4. El sistema muestra el formulario de edición del proyecto con la información actual del mismo.

    5. El usuario realiza los cambios necesarios en la información del proyecto y guarda los cambios.

    6. El sistema valida la información ingresada por el usuario y actualiza la información del proyecto en la base de datos.

    7. El sistema muestra una confirmación de que la información del proyecto ha sido actualizada correctamente.


<h3>9. Eliminar proyecto:</h3>

Actor principal: Desarrollador

Objetivo: Eliminar un proyecto previamente creado.

Precondiciones: El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

Flujo principal:

    1. El usuario selecciona la opción de "Ver usuarios".

    2. El sistema muestra una tabla con 'inputs' con los datos de los usuarios.

    3. El administrador realiza los cambios necesarios en la información de los usuarios (incluido el rol y el estado) y guarda los cambios.

    4. El sistema valida la información ingresada por el usuario y actualiza la información del usuario en la base de datos.

    5. El sistema muestra una confirmación de que la información del perfil ha sido actualizada correctamente.

<h3>10. Eliminar usuario:</h3>

Vamos a repasar los diferentes casos de uso analizando el flujo principal y añadiendo los flujos alternativos para contemplar los posibles errores del sistema. Puedes considerar los siguientes mensajes:

<ul>
    <li>Error de conexión: El servidor no puede establecer una conexión con la base de datos, lo que impide que se puedan realizar operaciones en la plataforma. El sistema debería mostrar un mensaje de error indicando que no se pudo conectar con la base de datos y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.</li>
    <li>Error de validación: Cuando el sistema recibe información del usuario, debe validarla para asegurarse de que cumple con los requisitos de formato y contenido necesarios. Si la información no es válida, el sistema debería mostrar un mensaje de error indicando el problema específico, como "El campo de correo electrónico debe ser una dirección de correo válida".</li>
    <li>Error de autenticación: Si un usuario intenta acceder a una página o realizar una acción que requiere autenticación, pero no ha iniciado sesión o sus credenciales son incorrectas, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de iniciar sesión o recuperar la contraseña.</li>
    <li>Error de autorización: Si un usuario intenta realizar una acción que no está autorizada para realizar debido a su rol, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de volver a la página anterior.</li>
    <li>Error de servidor: En caso de que se produzca un error interno en el servidor, como una excepción no controlada, el sistema debería mostrar un mensaje de error genérico indicando que se produjo un error y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.</li>
</ul>


<h2>Errores</h2>
Vamos a repasar los diferentes casos de uso analizando el flujo principal y añadiendo los flujos alternativos para contemplar los posibles errores del sistema. Puedes considerar los siguientes mensajes:

**Error de conexión:** El servidor no puede establecer una conexión con la base de datos, lo que impide que se puedan realizar operaciones en la plataforma. **El sistema debería mostrar un mensaje de error indicando que no se pudo conectar con la base de datos** y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

**Error de validación:** Cuando el sistema recibe información del usuario, debe validarla para asegurarse de que cumple con los requisitos de formato y contenido necesarios. Si la información no es válida, **el sistema debería mostrar un mensaje de error indicando el problema específico**, como "El campo de correo electrónico debe ser una dirección de correo válida".

**Error de autenticación:** Si un usuario intenta acceder a una página o realizar una acción que requiere autenticación, pero no ha iniciado sesión o sus credenciales son incorrectas, **el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada** y ofrecer la posibilidad de iniciar sesión o recuperar la contraseña.

**Error de autorización:** Si un usuario intenta realizar una acción que no está autorizada para realizar debido a su rol, **el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada **y ofrecer la posibilidad de volver a la página anterior.

**Error de servidor:** En caso de que se produzca un error interno en el servidor, como una excepción no controlada, **el sistema debería mostrar un mensaje de error genérico indicando que se produjo un error** y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.




<h1>Diseño de la interfaz. Bocetos</h1>

<h2>Diseño de Bocetos</h2>
<h3>Home y menus de usuario</h3>
Hemos didivido la interficie en 3 zonas, el encabezado (header), el cuerpo principal (main) y el pie de página (footer).
![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508218-79dad6473fd7d571d5f73e96f893af7f.jpg)
En el **header** vamos a alojar una barra superior fija con: el **logo** y nombre de la web (que hará las veces de link a la página principal), un **menú central genérico** (para acceder a páginas públicas), un **menú central específico**  (que será diferente en función del rol de usuario logueado), y un icono (avatar) que permitirá ver la imagen del usuario logueado y que hará de botón para desplegar otro menú, el menú de usuario (que tendrá diferentes items dependiendo de si la sesió está abierta o no y del tipo de rol que tenga el usuario logueado).
El **cuerpo** (main) albergará el contenido de las páginas. Será la sección que vaya cambiando dependiendo de la página que carguemos. En la página home simplemente aparece una imagen de fondo y el nombre de la web.
El **Footer** será meramente informativo.

<h3>Registro de un usuario</h3>

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508212-88f1ed0a8c53df9f791872b3b03519d8.jpg)

<h3>Iniciar Sesion</h3>

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508205-edba4a097ae58ec58f1bb07dc4b7e5e1.jpg)

<h3>Editar mi perfil</h3>

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508198-5b5eff368d5421682a834f3ed67af5bd.jpg)

Editar perfil será una ventana modal, es decir, se mostrará la ventana y el fondo se volverá oscuro.

Esta ventana de edición permitirá, además de modificar los datos del usuario, **añadir una imagen de avatar**. Por el momento, en esta primera versión, podremos añadir el link de una imagen que esté alojada en un servidor. En la siguiente versión (versión 1.1) actualizaremos esta ventana para que puedan **subirse archivos** (imágenes) al servidor.

<h3>Listado de TODOS los proyectos</h3>

En esta página podemos ver, en la pestaña izquierda, todos los proyectos en forma de tabla. La pestaña derecha mostrará solo los proyectos que ha subido el usuario que ha iniciado la sesión.

Al hacer clic en cualquier parte de la fila se accede al detalle del proyecto.

También tenemos un buscador que permite buscar proyectos por palabras clave en el nombre o descripción.

Las celdas de encabezado de las tablas incluyen un icono (flecha hacia arriba o hacia abajo) que permitirá ordenar la tabla por la columna en concreto.

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508192-6b771260fe99faccc760b23f71f02406.jpg)

<h3>Listado de MIS Proyectos</h3>

En esta pestaña podemos ver los trabajos pertenecientes al usuario logueado. En cada fila aparece, además, un icono para editar y borrar el proyecto correspondiente. Por otro lado tenemos la opción de subir un nuevo proyecto.

<em>Habría que valorar si es mejor crear un único buscador para el nombre y descripción del proyecto o dos barras de busqueda, una para cada sección, tal y como se muestra en el boceto anterior.</em>

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508186-f38d99164909a0783d2040ce646e928a.jpg)

<h3>Detalle de un proyecto</h3>

Si el usuario que está viendo la información de un proyecto en concreto es el autor de dicho proyecto, aparecerá un icono para la edición del mismo.

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508178-ed1f5e41681a1dcee1edac19f807c239.jpg)

<h3>Nuevo proyecto/ Editar Proyecto</h3>

Esta vista sirve tanto para crear un nuevo proyecto como para editarlo.

Si el proyecto es nuevo, el botón mostrará el texto <em>ENVIAR</em>, pero si estamos editándolo aparecerá el texto <em>ACTUALIZAR</em>. Al crear o actualizar el proyecto, la web nos reenvía a la vista 'Detalle de proyecto'.

<h3>Panel de administracion de proyectos</h3>

Si tienes el rol '**administrador**' aparecerá el item '<em>Panel administración</em>' en el **menú superior específico**. Este item nos permite cargar la vista '**Panel administración de proyectos**'. Desde esta vista también podemos acceder al '<em>Panel administración de usuarios</em>'.

Esta vista permite **editar o borrar** cualquier proyecto haciendo click en los iconos correspondientes. La opción editar nos llevará a la vista '<em>Editar proyecto</em>'

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508161-c9cfd413730d67ea74b43e48fedea5ec.jpg)

<h3>Panel de administracion de usuarios</h3>

Esta vista permite **editar los datos de los usuarios**. Por supuesto es solo accesible para los administradores.

En esta vista, el método para editar la información es diferentes. Aquí los datos **aparecen sobre 'inputs'**, de manera que al hacer clic sobre ellos, aparecerá el cursor de edición. Se pueden modificar todos los datos (en especial el '<em>estado</em>' y el '<em>rol</em>' del usuario) excepto el email.

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508152-04e98cfb1faeecf2a53ea921bdd63ebe.jpg)

<h1>Test de Usuarios inicial</h1>
<h2>Primer Test de Usabilidad</h2>

Tal y como hemos comentado en el apartado '<em>Diseño centrado en el usuario</em>', una de las premisas de esta metodología consiste en realizar evaluaciones constantes para detectar los posibles problemas de usabilidad cuanto antes mejor. Por lo que una buena idea es realizar un primer test de usabilidad.

Por el momento os adelanto que la técnica más utilizada par evaluar la usabilidad son los '**tests de usuario**'.

Estos consisten en crear una bateria de acciones que el usuario debe realizar, para detectar si existe algún problema en la interación con la aplicación. A continuación vamos pidiendo a un usuario focal (una persona que esté dentro del target de usuarios a quien va dirigida la app) que realice cada tarea, mostrandole los bocetos que aparecerán en cada interacción. Por ejemplo, si hace clic sobre el item de menú 'login' le mostraremos el boceto de la página 'login'.

Para este primer test hemos preparado las siguientes acciones:

-   Suponiendo que eres un **usuario no registrado**:

    -   Accede a la información general 'A cerca de' de esta web.
    -   Regístrate.
    -   Logueate.
    -   Modifica tu perfil añadiendo una imagen de avatar.
    -   Busca un proyecto llamado 'Tetris'.
    -   Accede al detalle de este proyecto.
    -   Cierra sesión.
-   Suponiendo que eres un usuario con rol 'Desarrollador':

    -   Crea un proyecto nuevo.
    -   Accede a la lista de tus proyectos.
    -   Muestra el detalle de tu nuevo proyecto.
    -   Edita tu proyecto cambiando la descripción.
    -   Borra tu proyecto.
-   Suponiendo que eres un usuario con rol 'Administrador':

    -   Muestra la lista de proyectos.
    -   Borra un proyecto.
    -   Modifica el nombre de un proyecto.
    -   Muestra la listra de todos los usuarios registrados.
    -   Canvia el rol de uno de ellos.
    -   Modifica la imagen de su avatar.
<h2>Conclusiones y modificaciones</h2>

De este primer test de usuario se desprenden las siguientes conclusiones:

-   La vista de proyectos en forma de **tabla no es muy atractiva**.
-   El usuario ha tenido **dificultades a la hora de intentar modificar la imagen** avatar de un usuario.

Para mejorar estos pequeños problemas de usabilidad vamos a tomar las siguientes acciones:

-   En la vista de proyectos vamos crear un par de botones para poder alternar entre ver los proyectos en forma de **tabla** o en forma de **tarjetas**.

-   En la vista de administración de usuarios, añadir un pequeño icono (un **lápiz**) sobre la imagen del avatar del usuario para que se intuya que, al hacer clic sobre la imagen, se accede a la ventana de modificación de perfil.

Estos serían los bocetos actualizados:

<h2>Vista de proyectyos</h2>

<h2>Vista del Panel de administracion de usuarios</h2>

Ahora que tenemos los bocetos creados y testeados, es el momento de pasar al siguiente nivel: **El diseño de los wireframes**.

<h1>Wireframe, mockup y guia de estilos</h1>

En el apartado anterior hemos diseñado y testeado los bocetos para la versión 1.0 de nuestro proyecto.

El siguiente paso, si nos basamos en el DCU (Diseño centrado en el usuario), sería diseñar los wireframes y, una vez tenemos los wireframes, los mockups junto a la guía de estilos.

Un proyecto de mayor envergadura requeriría de un equipo de trabajo con más de un perfil. La tarea de diseñar la interficie corresponde, por un lado, al **arquitecto de la información** y por otro, a un **diseñador gráfico**.

<h1>y nosotros, ¿necesitamos wireframe? ¿y mockup? ¿y guia de estilos?</h1>

En nuestro caso, como el proyecto es muy básico, no nos vamos a centrar en aquellas tareas que corresponderían a un arquitecto de la información ni a un diseñador gráfico.

El mapa web de nuestra aplicación se limita a dar acceso a los proyectos y la administración de los usuarios. Sería tan sencillo com este:

En cuanto al diseño gráfico, aunque es una misión emocionante, nos vamos a limitar a trabajar con un **tema de bootstrap** utilizando **Bootswatch**, respetando, a priori, su paleta de colores y modificando, solo en algunos casos, algunos detalles como *la fuente para los títulos*.

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/bootswatch-5cfb41f7af4e39535489cba274c60968.png)

