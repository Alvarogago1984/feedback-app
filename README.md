# Mentor de Frontend - Aplicación de retroalimentación de productos

¡Bienvenido! 👋

Gracias por adquirir este desafío premium de Frontend Mentor.

Los desafíos de [Frontend Mentor](https://www.frontendmentor.io) te ayudan a mejorar tus habilidades de programación construyendo proyectos realistas. Estos desafíos premium son piezas perfectas para tu portafolio, así que siéntete libre de usar lo que crees en tu portafolio para mostrar a otros.

**Para realizar este desafío, necesitas un sólido entendimiento de HTML, CSS y JavaScript.**

## El desafío

Tu desafío es construir esta aplicación de retroalimentación de productos y lograr que se vea lo más cercano posible al diseño.

Puedes usar cualquier herramienta que te guste para ayudarte a completar el desafío. Así que si tienes algo que te gustaría practicar, siéntete libre de intentarlo.

Proporcionamos los datos en un archivo local `data.json`, así que usa eso para poblar el contenido en la primera carga. Si quieres llevarlo al siguiente nivel, siéntete libre de construir esto como una aplicación completa de pila completa.

Tus usuarios deberían poder:

- Ver la disposición óptima para la aplicación dependiendo del tamaño de pantalla de su dispositivo
- Ver estados de hover para todos los elementos interactivos en la página
- Crear, leer, actualizar y eliminar solicitudes de retroalimentación de productos
- Recibir validaciones de formulario al intentar crear/editar solicitudes de retroalimentación
- Ordenar sugerencias por más/menos votos y más/menos comentarios
- Filtrar sugerencias por categoría
- Añadir comentarios y respuestas a una solicitud de retroalimentación de producto
- Votar a favor de las solicitudes de retroalimentación de productos
- **Bonus**: Mantener un seguimiento de cualquier cambio, incluso después de refrescar el navegador (se podría usar `localStorage` para esto si no estás construyendo una app completa de pila completa)

¿Quieres algún apoyo en el desafío? [Únete a nuestra comunidad de Slack](https://www.frontendmentor.io/slack) y haz preguntas en el canal **#help**.

### Comportamiento esperado

- Página de sugerencias
  - Solo las solicitudes de retroalimentación de productos con un estado de `sugerencia` deben mostrarse en la página de Sugerencias.
- Hoja de ruta
  - Las solicitudes de retroalimentación con un estado de `planeado`, `en progreso`, o `en vivo` deben aparecer en la hoja de ruta, y deben colocarse en la columna correcta basada en su estado.
  - Las columnas deben ordenarse por totales de votos.
- Creando una solicitud de producto
  - Al crear una nueva pieza de retroalimentación, se debe asignar un ID que incremente el ID más alto actual de la solicitud de producto en 1.
  - El estado predeterminado para una nueva pieza de retroalimentación es `sugerencia`. Esto la coloca en la página de Sugerencias.
- Editando retroalimentación
  - Si una pieza de retroalimentación actualiza su estado a `planeado`/`en progreso`/`en vivo` se mueve a través de la hoja de ruta y debe aparecer en la columna correcta basada en su nuevo estado.
- Añadir comentarios/respuestas
  - Usa los datos del objeto `currentUser` en el archivo `data.json` para poblar los datos del usuario para cualquier nuevo comentario o respuesta.
  - Cualquier comentario/respuesta puede tener un máximo de 250 caracteres.

## Dónde encontrar todo

Tu tarea es construir el proyecto según el archivo de diseño proporcionado. Proporcionamos versiones tanto de Sketch como de Figma del diseño, así que puedes elegir la herramienta que prefieras usar. Puedes descargar el archivo de diseño en la plataforma. **Por favor, asegúrate de no compartirlo con nadie más.** La descarga del diseño viene con un archivo `README.md` también para ayudarte a comenzar.

Todos los activos requeridos para este proyecto están en la carpeta `/assets`. Los activos ya están exportados para el tamaño de pantalla correcto y optimizados. Algunas imágenes son reutilizables en múltiples tamaños de pantalla. Por lo tanto, si no ves una imagen en una carpeta específica, típicamente estará en otra carpeta para esa página.

El sistema de diseño en el archivo de diseño te dará más información sobre los diversos colores, fuentes y estilos utilizados en este proyecto.

## Construyendo tu proyecto

Siéntete libre de usar cualquier flujo de trabajo con el que te sientas cómodo. A continuación, se sugiere un proceso, pero no sientas que necesitas seguir estos pasos:

1. Separa el `código-inicial` del resto de este proyecto y renómbralo a algo significativo para ti. Inicializa la base del código como un repositorio público en [GitHub](https://github.com/). Crear un repositorio facilitará compartir tu código con la comunidad si necesitas ayuda. Si no estás seguro de cómo hacer esto, [lee este recurso de Try Git](https://try.github.io/). **⚠️ IMPORTANTE ⚠️: Ya hay un par de archivos `.gitignore` en este proyecto. Por favor, no los elimines ni cambies el contenido de los archivos. Si creas un proyecto completamente nuevo, por favor usa los archivos `.gitignore` proporcionados en tu nueva base de código. Esto es para evitar la subida accidental de los archivos de diseño a GitHub. Con estos desafíos premium, por favor asegúrate de no compartir los archivos de diseño en tu repositorio de GitHub. ¡Gracias!**
2. Configura tu repositorio para publicar tu código en una dirección web. Esto también será útil si necesitas ayuda durante un desafío, ya que puedes compartir la URL de tu proyecto con la URL de tu repositorio. Hay varias maneras de hacer esto, y proporcionamos algunas recomendaciones a continuación.
3. Revisa los diseños para comenzar a planificar cómo abordarás el proyecto. Este paso es crucial para ayudarte a pensar con anticipación en las clases de CSS para crear estilos reutilizables.
4. Antes de añadir cualquier estilo, estructura tu contenido con HTML. Escribir tu HTML primero puede ayudar a enfocar tu atención en crear contenido bien estructurado.
5. Escribe los estilos base para tu proyecto, incluyendo estilos de contenido general, como `font-family` y `font-size`.
6. Comienza añadiendo estilos a la parte superior de la página y trabaja hacia abajo. Solo pasa a la siguiente sección una vez que estés satisfecho de haber completado el área en la que estás trabajando.

## Desplegando tu proyecto

Como se mencionó anteriormente, hay muchas maneras de alojar tu proyecto de forma gratuita. Nuestros anfitriones recomendados son:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

Puedes alojar tu sitio usando una de estas soluciones o cualquiera de nuestros otros proveedores de confianza. [Lee más sobre nuestros anfitriones recomendados y de confianza](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Crear un `README.md` personalizado

Recomendamos encarecidamente reemplazar este `README.md` por uno personalizado. Hemos proporcionado una plantilla dentro del archivo [`README-template.md`](./README-template.md) en este código inicial.

La plantilla proporciona una guía sobre qué añadir. Un `README` personalizado te ayudará a explicar tu proyecto y reflexionar sobre tus aprendizajes. Por favor, siéntete libre de editar nuestra plantilla tanto como quieras.

Una vez que hayas añadido tu información a la plantilla, elimina este archivo y renombra el archivo `README-template.md` a `README.md`. Eso hará que aparezca como el archivo README de tu repositorio.

## Enviando tu solución

Envía tu solución en la plataforma para que el resto de la comunidad pueda verla. Sigue nuestra ["Guía completa para enviar soluciones"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) para consejos sobre cómo hacer esto.

Recuerda, si buscas retroalimentación sobre tu solución, asegúrate de hacer preguntas al enviarla. Cuanto más específico y detallado seas con tus preguntas, mayor será la probabilidad de que recibas retroalimentación valiosa de la comunidad.

**⚠️ IMPORTANTE ⚠️: Con estos desafíos premium, por favor asegúrate de no subir los archivos de diseño a GitHub cuando estés enviando a la plataforma y compartiéndolo. Si has creado un proyecto completamente nuevo, la manera más fácil de hacerlo es copiar el `.gitignore` proporcionado en este proyecto inicial.**

## Compartiendo tu solución

Hay múltiples lugares donde puedes compartir tu solución:

1. Comparte tu página de solución en el canal **#finished-projects** de la [comunidad de Slack](https://www.frontendmentor.io/slack).
2. Tuitea a [@frontendmentor](https://twitter.com/frontendmentor) y menciona a **@frontendmentor**, incluyendo las URLs del repo y en vivo en el tuit. Nos encantaría echar un vistazo a lo que has construido y ayudar a compartirlo.
3. Comparte tu solución en otros canales sociales como LinkedIn.
4. Escribe sobre tu experiencia construyendo tu proyecto. Escribir sobre tu flujo de trabajo, elecciones técnicas y hablar a través de tu código es una brillante manera de reforzar lo que has aprendido. Plataformas excelentes para escribir son [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), y [CodeNewbie](https://community.codenewbie.org/).

Proporcionamos plantillas para ayudarte a compartir tu solución una vez que la hayas enviado en la plataforma. Por favor, edítalas e incluye preguntas específicas cuando busques retroalimentación.

Cuanto más específico seas con tus preguntas, más probable es que otro miembro de la comunidad te dé retroalimentación.

## ¿Tienes retroalimentación para nosotros?

¡Nos encanta recibir retroalimentación! Siempre estamos buscando mejorar nuestros desafíos y nuestra plataforma. Así que si tienes algo que te gustaría mencionar, por favor envía un correo a hi[at]frontendmentor[dot]io.

**¡Diviértete construyendo!** 🚀
