# Desafio N°7 Refactor a nuestro login

## LEIBLICH Ezequiel Gaston

## Comisión 43345 - Programación Backend


Reestructura de nuestro servidor

Este repositorio contiene el trabajo terminado de la reestructura del servidor, basado en un modelo de capas para una mejor organización y separación de responsabilidades.

Descripción:

El proyecto ha sido reorganizado en diferentes capas, siguiendo las mejores prácticas de desarrollo:

1. Capa de Routing: Encargada de manejar las rutas de la aplicación y la comunicación con el cliente. Aquí se definen los endpoints y se gestionan las peticiones HTTP.

2. Capa de Controlador: Responsable de la lógica de negocio y operaciones. Aquí se realizan las operaciones necesarias para completar las tareas solicitadas, y se comunica con la capa de Persistencia.

3. Capa de DAO (Data Access Object): Encargada de la conexión y gestión de datos en la base de datos o sistema de persistencia. Aquí se accede a los datos y se realizan operaciones CRUD (Crear, Leer, Actualizar, Eliminar) necesarias.

4. Vistas: Las vistas están correctamente separadas y organizadas. Se han implementado modelos de capas para asegurar una correcta delegación de responsabilidades.

Configuración de Variables de Entorno

Todas las partes importantes y datos comprometidos se han movido a un archivo .env para mantenerlos seguros y proteger información sensible. Además, se ha implementado un archivo config.js para leer las variables de entorno y configurar el proyecto adecuadamente.

Instrucciones

Para ejecutar el proyecto, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local.

2. Crea un archivo .env y coloca en él las variables de entorno necesarias, como credenciales de la base de datos o claves de acceso.

3. Configura el archivo config.js para leer las variables de entorno y establecer la configuración del proyecto.

4. Instala las dependencias necesarias ejecutando npm install.

5. Ejecuta el servidor con npm start o el comando que corresponda según tu configuración.

¡Listo! El proyecto se ejecutará con la nueva estructura de capas y las variables de entorno configuradas de manera segura.

¡Gracias por revisar este proyecto reestructurado!