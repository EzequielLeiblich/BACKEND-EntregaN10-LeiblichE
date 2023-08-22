# Desafio N°10 Mocking y Manejo de Errores

## LEIBLICH Ezequiel Gaston

## Comisión 43345 - Programación Backend

-----------------------------------------

Mocking y Manejo de Errores
En este repositorio, hemos implementado un módulo de mocking y un manejador de errores en nuestro servidor actual para mejorar la robustez y la eficiencia del sistema.

Mocking de Productos
He desarrollado un módulo de Mocking que permite que nuestro servidor genere automáticamente 100 productos con el mismo formato que se obtendría mediante una petición a la base de datos MongoDB. Esta funcionalidad está disponible a través del endpoint /mockingproducts.

Manejo de Errores
Para mejorar la experiencia del usuario y garantizar una comunicación clara en el servidor, he creado un manejador de errores personalizado. He diseñado un diccionario que abarca los errores más comunes que pueden surgir durante la creación de productos, la adición al carrito, y otras operaciones importantes.

Instrucciones:

1 - Clona este repositorio en tu máquina local.

2 - Configura las variables de entorno en un archivo .env si es necesario.

3 - Instala las dependencias requeridas utilizando npm install.

4 - Ejecuta el servidor con npm start o el comando correspondiente para tu configuración.

Uso del Mocking de Productos
Puedes acceder al módulo de Mocking de Productos a través del endpoint /mockingproducts. Al acceder a este endpoint, el servidor generará y entregará automáticamente 100 productos en el formato que se obtendría de una petición a MongoDB.

Manejo de Errores
He implementado un manejador de errores personalizado que te proporcionará mensajes claros y específicos para los errores más comunes que puedan surgir al realizar operaciones como crear productos o agregar elementos al carrito.

¡Gracias por revisar este trabajo mejorado el servidor, con mocking y manejo de errores integrados! Si tienes preguntas o necesitas ayuda, no dudes en contactame.
