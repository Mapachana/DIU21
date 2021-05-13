# DIU21
Prácticas Diseño Interfaces de Usuario 2020-21 (Tema: Turismo) 

Grupo: DIU2_Marmotas.  Curso: 2020/21 
Updated: 18/4/2021

Proyecto: 
>>> VisitaGranada

Descripción: 

>>> Aplicación oficial del Ayuntamiento de Granada para planificar viajes y obtener información sobre actividades y estalbecimientos en la ciudad de manera sencilla y accesible en cualquier momento.
De esta forma todo el mundo podrá visitar Granada de forma segura y compartir sus experiencias con los demás. 

Logotipo: 
>>> ![](./P3/img/logo.png)

Miembros
 * :bust_in_silhouette:   Ana Buendía Ruiz-Azuaga 🦝  
 * :bust_in_silhouette:   Juan Antonio Villegas Recio 🐂


# Proceso de Diseño 

## Paso 1. UX Desk Research & Analisis 

![Método UX](img/Competitive.png) 1.a Competitive Analysis
-----

Nuestra página a estudiar es [turgranada.es](https://www.turgranada.es/ ), una página de información turística sobre la ciudad de Granada. Ha sido esta nuestra elección debido a que tras examinar varias alternativas, pensamos que es la opción más completa e intuitiva.

Otras opciones de página web donde informarse es [granadadirect.com](http://www.granadadirect.com/info-practica/oficinas-turismo-granada/) que cuenta con un apartado de opiniones donde el usuario puede consultar las impresiones de otros turistas y dejar la suya propia. También tiene unas secciones específicas destacadas de la Alhambra, el Generalife y alrededores con enlaces directos para la compra de entradas y organización de visitas guiadas a los mismos, destacándolos así como los mayores atractivos turísticos de la ciudad. Sin embargo, no dispone de un buscador, lo que dificulta la planificación del viaje.

También hemos observado [turismo.gal](https://www.turismo.gal/axenda-cultural?langId=es_ES), web sobre turismo en Galicia, donde lo primero a resaltar es que la página no dispone de una traducción al inglés, lo cuál puede ser un problema. Dispone de varios buscadores según distintos criterios y un calendario donde comprobar eventos próximos. Asimismo su información está muy completa con diversos enlaces y recursos, siendo muy intuitiva a la hora de navegar por ella. Finalmente, dispone de redes sociales activas para compartir diversas zonas de interés turístico.

Igualmente [granadatur.com](http://www.granadatur.com/) cuenta con un apartado en el que añadir los planes para planificar tu viaje y luego poder descargarlo cómodamente, además tiene enlaces a sus redes sociales donde anuncian eventos próximos que pueden interesar. Muchos de los enlaces de la página no funcionan.

Finalmente, [es.madrid.com/donde-dormir](https://www.esmadrid.com/donde-dormir) dispone de un apartado para planificar el viaje durante la pandemia indicando qué hoteles y otros servicios de la comunidad están abiertos y sus medidas sanitarias. Cuenta con diversos enlaces a servicios para facilitar el uso de estos. 

Para terminar, todas las páginas tienen versión web disponible también para móviles, de forma que pueden consultarse en cualquier momento.

### 

![Método UX](img/Persona.png) 1.b Persona
-----

En primer lugar hemos creado a Amparo, una señora mayor con poco conocimiento sobre el uso de las tecnologías, lo que le dificulta organizar un viaje por internet.

![](./P1/img/userPersonaAmparo.png)

Asimismo tenemos a Jorge, cuya principal dificultad para llevar a cabo la tarea de organizar un viaje es su falta de presupuesto y la dificultad de encontrar actividades adaptadas para él.

![](./P1/img/userPersonaJorge.png)

![Método UX](img/JourneyMap.png) 1.c User Journey Map
----

Las experiencias de Amparo y Jorge son bastante distintas, pero creemos que son situaciones que se dan con frecuencia.

Para comenzar, Amparo pide ayuda a su hija, que le muestra una página web donde conseguir información para organizar el viaje online, pero Amparo prefiere realizar las reservas por teléfono.

![](./P1/img/journeyMapAmparo.png)

La experiencia de Jorge es muy distinta, pues él no tiene problema en buscar la información y realizar las reservas solo, pero no encuentra nada sobre visitas guiadas que pueda realizar con su discapacidad ni le es fácil realizar búsquedas de alojamiento y actividades de acuerdo a su presupuesto.

![](./P1/img/journeyMapJorge.png)


![Método UX](img/usabilityReview.png) 1.d Usability Review
----
[**Enlace al documento con la Revison de usabilidad**](./P1/Usability-review-template.pdf)

**Valoración final: 76 - Good**

En general la página cumple con la mayor parte de funcionalidades y requisitos que el usuario espera de ella, si bien habría que mejorar las búsquedas para que tengan más posibles criterios, añadir una página de ayuda, hacer más claras las acciones a realizar sobre las actividades y esclarecer para qué colectivos son accesibles las distintas actividades disponibles.


## Paso 2. UX Design  


![Método UX](img/feedback-capture-grid.png) 2.a Feedback Capture Grid
----


Hemos realizado una malla receptora de información basándonos en las experiencias de nuestros usuarios ficticios de la práctica 1. Para ello, nos hemos planteado qué sugerencias podrían tener los usuarios y cuáles tendrían los desarrolladores, aportando así nuestro propio enfoque del problema.

![](./P2/img/feedback_capture_grid.png)



![Método UX](img/ScopeCanvas.png) 2.b ScopeCanvas
----
La aplicación móvil a desarrollar es una plataforma para consultar, organizar y planificar viajes. La plataforma pondrá a disposición del usuario información sobre actividades culturales, hoteles, lugares emblemáticos y monumentos, de forma que pueda realizarse fácilmente un itinerario completo del viaje de una manera sencilla e intuitiva.

![](./P2/img/scope_canvas.png)

![Método UX](img/Sitemap.png) 2.b Tasks analysis 
-----

Una vez recogidas las propuestas de los usuarios y las nuestras propias, clasificamos las tareas principales de la plataforma y su grado de utilización según los distintos perfiles de los usuarios.

|        Funcionalidades        | Usuarios no registrados | Usuarios registrados | Agencias de viajes | Administrador |
| :---------------------------: | ----------------------- | -------------------- | ------------------ | ------------- |
|      Buscar actividades       | Alta                    | Alta                 | Alta               | Baja          |
|    Buscar establecimiento     | Alta                    | Alta                 | Alta               | Baja          |
|     Reservar actividades      | Baja                    | Alta                 | Alta               | Baja          |
|   Reservar establecimiento    | Baja                    | Alta                 | Alta               | Baja          |
|       Cancelar reserva        | Baja                    | Media                | Media              | Baja          |
|   Consultar disponibilidad    | Media                   | Alta                 | Alta               | Baja          |
|   Añadir actividad a viaje    | Baja                    | Alta                 | Alta               | Baja          |
|  Eliminar actividad de viaje  | Baja                    | Alta                 | Alta               | Baja          |
|    Exportar plan de viaje     | Baja                    | Media                | Alta               | Baja          |
|       Añadir comentario       | Baja                    | Media                | Baja               | Baja          |
|     Consultar comentarios     | Media                   | Alta                 | Baja               | Alta          |
|      Eliminar comentario      | Baja                    | Baja                 | Baja               | Media         |
| Contactar con la institución  | Baja                    | Baja                 | Media              | Baja          |
|        Consultar ayuda        | Media                   | Media                | Baja               | Baja          |
|          Registrarse          | Media                   | Baja                 | Baja               | Baja          |
|        Iniciar sesión         | Baja                    | Alta                 | Alta               | Baja          |
|         Cerrar sesión         | Baja                    | Alta                 | Alta               | Baja          |
|         Darse de baja         | Baja                    | Baja                 | Baja               | Baja          |
|        Cambiar idioma         | Media                   | Media                | Baja               | Baja          |
| Consultar mapa en tiempo real | Baja                    | Media                | Baja               | Baja          |
|    Añadir establecimiento     | Baja                    | Baja                 | Baja               | Alta          |
|   Eliminar establecimiento    | Baja                    | Baja                 | Baja               | Alta          |
|   Modificar establecimiento   | Baja                    | Baja                 | Baja               | Alta          |
|       Añadir actividad        | Baja                    | Baja                 | Baja               | Alta          |
|      Eliminar actividad       | Baja                    | Baja                 | Baja               | Alta          |
|      Modificar actividad      | Baja                    | Baja                 | Baja               | Alta          |
|        Banear cuentas         | Baja                    | Baja                 | Baja               | Media         |



![Método UX](img/labelling.png) 2.c IA: Sitemap + Labelling 
----


Desarrollamos el mapa web de la aplicación, indicando en azul las páginas que puede usar cualquier usuario (no registrados, registrados y agencias de viajes), en morado las que solo pueden usar usuarios registrados y agencias de viajes y en rojo el administrador de la aplicación.

![](./P2/img/sitemap.png)

### Labelling

Explicamos la funcionalidad de cada icono y apartado de la página.

| Label             | Scope note                                                   | Icon                                                         |
| :---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Home              | Página inicial de la aplicación                              | <img src="./P2/img/iconos/groundhog.png" style="zoom:25%;" />   |
| Menú              | Menú principal de la aplicación                              | <img src="./P2/img/iconos/menu.png" style="zoom:25%;" />        |
| Accesibilidad     | Indica si una actividad o establecimiento es accesible       | <img src="./P2/img/iconos/discapacitado.png" style="zoom:25%;" /> |
| Imagen            | Representa una imagen                                        | <img src="./P2/img/iconos/picture.png" style="zoom:25%;" />     |
| Idioma            | Apartado para seleccionar el idioma                          | <img src="./P2/img/iconos/translation.png" style="zoom:25%;" /> |
| Mis viajes        | Apartado de los viajes creados del usuario                   | <img src="./P2/img/iconos/airplane.png" style="zoom:25%;" />    |
| Contacto          | Apartado para contactar con mantenimiento                    | <img src="./P2/img/iconos/contact.png" style="zoom:25%;" />     |
| Registrarse/Login | Apartado para iniciar sesión o crearse una cuenta            | <img src="./P2/img/iconos/log-in.png" style="zoom:25%;" />      |
| Logout            | Cerrar sesión actual                                         | <img src="./P2/img/iconos/log-out.png" style="zoom:25%;" />     |
| Ayuda             | Apartado para consultas sobre el uso de la app               | <img src="./P2/img/iconos/information.png" style="zoom:25%;" /> |
| Buscar            | Búsquedas en la aplicación                                   | <img src="./P2/img/iconos/search.png" style="zoom:25%;" />      |
| Añadir            | Crear un nuevo viaje o añadir una actividad o evento a un viaje existente. | <img src="./P2/img/iconos/add.png" style="zoom:25%;" />         |
| Twitter           | Botón para compartir o iniciar sesión con twitter.           | <img src="./P2/img/iconos/gorjeo.png" style="zoom:25%;" />      |
| Instagram         | Botón para compartir en instagram.                           | <img src="./P2/img/iconos/instagram.png" style="zoom:25%;" />   |
| Facebook          | Botón para compartir o iniciar sesión con facebook           | <img src="./P2/img/iconos/facebook.png" style="zoom:25%;" />    |
| Google            | Iniciar sesión con google..                                  | <img src="./P2/img/iconos/google.png" style="zoom:25%;" />      |
| Actividad         | Apartado de actividades.                                     | <img src="./P2/img/iconos/activity.png" style="zoom:25%;" />    |
| Establecimiento   | Apartado de establecimientos.                                | <img src="./P2/img/iconos/museum.png" style="zoom:25%;" />      |
| Comentarios       | Apartado de comentarios de una actividad                     | <img src="./P2/img/iconos/speech-bubble.png" style="zoom:25%;" /> |
| Editar            | Editar una actividad o evento.                               | <img src="./P2/img/iconos/edit-button.png" style="zoom:25%;" /> |
| Borrar            | Borrar un viaje, actividad o evento.                         | <img src="./P2/img/iconos/delete.png" style="zoom:25%;" />      |


![Método UX](img/Wireframes.png) 2.d Wireframes
-----

Hemos realizado un boceto de la aplicación, que se puede consultar [aquí](./P2/wireframe.pdf).


## Paso 3. Mi UX-Case Study (diseño)

![Método UX](img/moodboard.png) 3.a Moodboard
-----

Para comenzar hemos realizado un moodboard, usando imágenes que representan los lugares más emblemáticos, mosaicos y diversos paisajes de Granada. La paleta de colores está inspirada en los colores de la Alhambra y sus mosaicos, colores que hemos usado para la realización del logo, landingpage y aplicación.

Como fuentes hemos elegido `Lobster` para el logo y slogan y `Source Serif Pro` para el resto del texto. 

El logotipo ha sido diseñado usando [esta página](https://www.tailorbrands.com/es/logo-maker), buscando un diseño sencillo, claro y minimalista que sea representativo de nuestra ciudad, así como hemos hecho con los iconos de la aplicación.

![](./P3/moodboard.png)

![](./P3/iconos.png)

![Método UX](img/landing-page.png)  3.b Landing Page
----

También hemos realizado una landingpage del proyecto, usando de nuevo la paletta de colores escogida anteriormente y las fuentes.

Hemos intentado primar la simplicidad del diseño optando por un esquema más visual, transmitiendo el mensaje mediante imágenes y manteniendo el texto al mínimo.

La landing page se puede consultar [aquí](https://github.com/Mapachana/DIU21/blob/master/P3/landingpage.pdf).

![Método UX](img/guidelines.png) 3.c Guidelines
----

Para decidir qué patrones debemos usar en nuestra aplicación, comenzamos analizando las distintas necesidades de los usuarios, qué esperan de nuestra aplicación (para lo cuál hemos recurrido de nuevo a las personas ficticias de la primera práctica) y qué soluciones a estos requisitos se ajustan mejor.

Tras un estudio de los diversos patrones disponibles en la web [ui-patterns.com](http://ui-patterns.com/patterns) los diversos patrones que consideramos en nuestro diseño fueron los a continuación listados:

* [**Calendar picker**](http://ui-patterns.com/patterns/CalendarPicker): Necesario a la hora de filtrar búsquedas según fechas, para poder elegir intervalos de tiempo o días consultando directamente un calendario. Este patrón nos resultará especialmente útil en el buscador de la aplicación.

* [**Input Feedbak**](http://ui-patterns.com/patterns/InputFeedback): Útil cuando un usuario introduce ciertos datos, permitiendo que compruebe por sí mismo y símbolos visuales que los datos introducidos son válidos. Lo usaremos tanto al registrarse como en el apartado de ayuda, que los usuarios pueden usar para contactar.

* [**Input Prompt**](http://ui-patterns.com/patterns/InputPrompt): Utilizado en el buscador para expresar claramente su funcionalidad. De nuevo, será encesario en el buscador y apartado de contacto para esclarecer la infomación que se requiere en cada apartado.

* [**Home Link**](http://ui-patterns.com/patterns/HomeLink): Utilizamos el logo de la aplicación como enlace directo y desde cualquier página a la página principal (Home). Este patrón afecta a toda la aplicación, haciendo siempre accesible el home de la aplicación en cualquier momento.

* [**Vertical Dropdown Menu**](http://ui-patterns.com/patterns/VerticalDropdownMenu): Principalmente utilizado en el menú lateral de la aplicación, accesible desde cualquier ubicación y desplegable, ahorrando espacio de pantalla.

* [**Event Calendar**](http://ui-patterns.com/patterns/EventCalendar): Es intuitivo a la hora de listar actividades con fechas concretas hacerlo siguiendo el orden cronológico que establecen.

* [**Categorization**](http://ui-patterns.com/patterns/categorization): Agrupamos en categorías limitadas y sin ambigüedad el contenido y las distintas posibilidades que ofrece Granada. En nuestro caso, hay dos claros ejemplos de clasificación: actividades y establecimientos.

* [**Continuous Scrolling**](http://ui-patterns.com/patterns/ContinuousScrolling): Las listas de actividades, establecimientos o las preguntas frecuentes (faq) se encuentran en una misma página que las lista, pudiendo acceder a todas ellas haciendo scroll en la página adecuada.

* [**Tagging**](http://ui-patterns.com/patterns/Tag): Las diversas actividades y establecimientos ofertados admiten etiquetas para simplificar las búsquedas según temas.

* [**Frequently Asked Questions (FAQ)**](http://ui-patterns.com/patterns/frequently-asked-questions-faq): Dedicamos una sección de la app a preguntas que suelen repetir los usuarios, de manera que los mismos tengan acceso rápido y sencillo a soluciones frecuentes, facilitando el uso de la aplicación a nuevos usuarios o personas con poco conocimiento en el campo de tecnologías, así como evitamos una saturación del contacto.

* [**Gallery**](http://ui-patterns.com/patterns/Gallery): Utilizamos amplias galerías de imágenes en cada actividad y establecimiento para mostrar los mismos a los diversos usuarios.

* [**Live Filter**](http://ui-patterns.com/patterns/LiveFilter): En el buscador utilizamos varios filtros de distintos tipo para que el usuario haga la búsqueda que más se ajuste a sus necesidades.

* [**Lazy Registration**](http://ui-patterns.com/patterns/LazyRegistration): Permitimos que cualquier usuario que acceda a la app pueda navegar sin ningún problema sin necesidad de registrarse.

![Método UX](img/mockup.png)  3.d Mockup
----

Basándonos en los wireframe que diseñamos en la práctica anterior y utilizando las fuentes, paleta de colores, y logo que hemos creado y estudiado anteriormente, recogemos nuestra propuesta de bocetos Hi-Fi (mockup) en [este documento](https://github.com/Mapachana/DIU21/blob/master/P3/mockup.pdf) .

Este mockup se ha diseñado con Figma y puede consultarse [aquí](https://www.figma.com/file/MLUxVUx6N19gKJSYwIf8Nu/wireframe?node-id=0%3A1), donde puede probarse la simulación del mismo.


![Método UX](img/caseStudy.png) 3.e ¿My UX-Case Study?
-----

### Inspiración

VisitaGranada surge como iniciativa para ofrecer a los usuarios una aplicación oficial con toda la información sobre todas las actividades, visitas y establecimientos que pueden encontrarse en Granada de forma clara, intuitiva y accesible para todos los usuarios.

Primeramente, vemos las experiencias de Amparo y Jorge, dos personas muy diferentes que tuvieron problemas al reservar un viaje a Granada por us circunstancias con las distintas páginas de turismo habituales. Observamos que Amparo tenía dificultades para navegar debido a la complejidad de muchas web ante sus dificultades con las nuevas tecnologías, derivadas de su edad y del hecho de que estaba empezando a perder la vista. Por otro lado, Jorge estaba acostumbrado al uso y manejo de internet y redes, pero sufría de una discapacidad, Jorge era sordo, y siempre intentaba buscar actividades accesibles para él. Sin embargo, la mayoría de las web no ofrecían gran detalle sobre el turismo accesible. Además, su presupuesto era limitado, y muchas páginas no permiten filtrar por precios

![](./P1/img/userPersonaAmparo.png)

![](./P1/img/userPersonaJorge.png)

### Primeros pasos

Gracias a las vivencias de estas dos personas, y también a las nuestras propias, recogimos una serie de ideas y objetivos mediante la malla receptora de información y el Scope Canvas que posteriormente se reflejarían en nuestro propio diseño. Pensamos que los usuarios más probables eran los propios posibles clientes, registrados o sin registrar, agencias de viajes que buscasen actividades que hacer y lugares que visitar y usuarios administradores que se encargaran del mantenimiento de la app. Así, ordenamos las funcionalidades que requería cada tipo de usuario según prioridad.

![](./P2//img/feedback_capture_grid.png)

![](./P2/img/scope_canvas.png)

Con estas premisas creamos nuestros primeros bocetos de aplicación: los 'wireframe', que eran una primera versión muy simplificada de las ideas que en las siguientes fases formalizariamos, el esqueleto de nuestra aplicación, que pueden verse [aquí](https://github.com/Mapachana/DIU21/blob/master/P2/wireframe.pdf).

### Desarrollo de los diseños

Una vez asentada la idea, pensada la funcionalidad y diseñada la estructura de nuestra aplicación, tocaba darle vida al proyecto. Para empezar, creamos un moodboard que recogiera todo lo que queríamos reflejar en el diseño de nuestra página: imágenes, colores representativos, un logo, fuentes que utilizaríamos. Así, dotamos de identidad a VisitaGranada.

![](./P3/moodboard.png)

Diseñamos una landing page que llamara la atención de los posibles usuarios tratando de hacerla simple y atractiva, dándole una gran importancia a la componente visual de la misma y reforzando las ventajas de usar nuestra aplicación.

La landing page se puede consultar [aquí](https://github.com/Mapachana/DIU21/blob/master/P3/landingpage.pdf).

Finalmente, analizamos patrones de diseño que se ajustaran a las necesidades de los usuarios y retomamos los diseños que creamos anteriormente para dotarlos de la identidad de la aplicación.

La apariencia final de la aplicación se ve [aquí](https://github.com/Mapachana/DIU21/blob/master/P3/mockup.pdf).

### Conclusión

Inspirandonos en experiencias de personas ficticias, pudimos desarrollar el diseño completo de una aplicación centrándonos en las necesidades de los usuarios a la par que aprendíamos técnicas de branding para hacer nuestra aplicación atractiva. Así, hemos obtenido una aplicación intuitiva y sencilla que cubre las necesidades básicas de sus usuarios.


## Paso 4. Evaluación 


![Método UX](img/ABtesting.png) 4.a Caso asignado
----


>>> Breve descripción del caso asignado con enlace a  su repositorio Github


![Método UX](img/usability-testing.png) 4.b User Testing
----

>>> Seleccione 4 personas ficticias. Exprese las ideas de posibles situaciones conflictivas de esa persona en las propuestas evaluadas. Asigne dos a Caso A y 2 al caso B


| Usuarios | Sexo/Edad     | Ocupación   |  Exp.TIC    | Personalidad | Plataforma | TestA/B
| ------------- | -------- | ----------- | ----------- | -----------  | ---------- | ----
| User1's name  | H / 18   | Estudiante  | Media       | Introvertido | Web.       | A 
| User2's name  | H / 18   | Estudiante  | Media       | Timido       | Web        | A 
| User3's name  | M / 35   | Abogado     | Baja        | Emocional    | móvil      | B 
| User4's name  | H / 18   | Estudiante  | Media       | Racional     | Web        | B 


![Método UX](img/Survey.png). 4.c Cuestionario SUS
----

>>> Usaremos el **Cuestionario SUS** para valorar la satisfacción de cada usuario con el diseño (A/B) realizado. Para ello usamos la [hoja de cálculo](https://github.com/mgea/DIU19/blob/master/Cuestionario%20SUS%20DIU.xlsx) para calcular resultados sigiendo las pautas para usar la escala SUS e interpretar los resultados
http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/)
Para más información, consultar aquí sobre la [metodología SUS](https://cui.unige.ch/isi/icle-wiki/_media/ipm:test-suschapt.pdf)

>>> Adjuntar captura de imagen con los resultados + Valoración personal 


![Método UX](img/usability-report.png) 4.d Usability Report
----

>> Añadir report de usabilidad para práctica B (la de los compañeros)



>>> Valoración personal 


## Paso 5. Evaluación de Accesibilidad  


![Método UX](img/Accesibility.png)  5.a Accesibility evaluation Report 
----

>>> Indica qué pretendes evaluar (de accesibilidad) sobre qué APP y qué resultados has obtenido 

>>> 5.a) Evaluación de la Accesibilidad (con simuladores o verificación de WACG) 
>>> 5.b) Uso de simuladores de accesibilidad 

>>> (uso de tabla de datos, indicar herramientas usadas) 

>>> 5.c Breve resumen del estudio de accesibilidad (de práctica 1) y puntos fuertes y de mejora de los criterios de accesibilidad de tu diseño propuesto en Práctica 4.



## Conclusión final / Valoración de las prácticas


>>> (90-150 palabras) Opinión del proceso de desarrollo de diseño siguiendo metodología UX y valoración (positiva /negativa) de los resultados obtenidos  













