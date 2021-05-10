# BDD-Semana-5

## Generalidades

- Para la ejecución de las pruebas se creó una instancia en la URL: https://e61b4ef2fb35.ngrok.io/ghost

## Escenarios de prueba y funcionalidades

### Funcionalidades

- Login
- Recuperar Contraseña
- Crear Post
- Publicar Post
- Crear Pagina
- Crear Tag
- Creación de usuario
- Editar Usuario
- Cambio de contraseña
- Editar información
- Activar sitio privado
- Cambio de diseño página web
- Habilitar miembros
- Logout

### Escenarios de prueba

| **Escenarios** | **Casos de Prueba 1**                    | **Casos de Prueba 2**                      | **Casos de Prueba 3**                            | **Casos de Prueba 4**             | **Casos de Prueba 5**                                        | **Funcionalidad**                                 |
| -------------- | ---------------------------------------- | ------------------------------------------ | ------------------------------------------------ | --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------- |
| Escenario 1    | Comprobacion de datos vacios             | Datos Erroneos                             | Datos Correctos                                  |                                   |                                                              | Login                                             |
| Escenario 2    | Recuperar la contraseña con datos vacíos | Recuperar la contraseña con datos erróneos | Recuperar la contraseña con datos válidos        |                                   |                                                              | Recuperar contraseña                              |
| Escenario 3    | Login con datos correctos                | Llenar post con título                     | Llenar post con contenido                        | Publicar un post inmediatamente   |                                                              | Login-Crear post                                  |
| Escenario 4    | Login con datos correctos                | Crear un post completo                     | Publicar un post agendado                        |                                   |                                                              | Login-Crear post- publicar post agendado          |
| Escenario 5    | Login con datos correctos                | Crear un post completo                     | Ponerle url personalizada                        | Resaltar el post                  | Publicar el post                                             | Login-Crear post- publicar post con url y feature |
| Escenario 6    | Login con datos correctos                | Crear una página sin título                | Crear una página sin descripción                 | Crear una página completa         |                                                              | Login- Crear página                               |
| Escenario 7    | Login con datos correctos                | Crear página completa                      | Publicar un página inmediatamente                |                                   |                                                              | Login-Crear página- Publicar página               |
| Escenario 8    | Login con datos correctos                | Crear página completa                      | Publicar un página agenda                        |                                   |                                                              | Login-Crear página- Publicar página               |
| Escenario 9    | Login con datos correctos                | Crear un tag sin título                    |                                                  |                                   |                                                              | Login-Crear tag                                   |
| Escenario 10   | Login con datos correctos                | Crear un tag con título y descripción      |                                                  |                                   |                                                              | Login-Crear tag                                   |
| Escenario 11   | Login con datos correctos                | Creación de un usuario como administrador  | Creación de un usuario como editor               | Creación de un usuario como autor | Creación de un usuario como contribuidor                     | Login-Creación de usuario                         |
| Escenario 12   | Login con datos correctos                | Creación de un usuario como administrador  | Revocar invitación de usuario                    |                                   |                                                              | Login-Creación de usuario-Revocar usuario         |
| Escenario 13   | Login con datos correctos                | Creación de un usuario como administrador  | Cambiar nombre y rol del usuario                 |                                   |                                                              | Login-Creación de usuario- Editar usuario         |
| Escenario 14   | Login con datos correctos                | Creación de un usuario como administrador  | Cambiar la contraseña con contraseñas diferentes |                                   |                                                              | Login-Creción de usuario-Cambio de contraseña     |
| Escenario 15   | Login con datos correctos                | Creación de un usuario como administrador  | Cambiar la contraseña con contraseñas iguales    |                                   |                                                              | Login-Creción de usuario-Cambio de contraseña     |
| Escenario 16   | Login con datos correctos                | Ir a la pagina de SETTINGS                 | Editar el nombre de la página web                | Guardar cambios                   |                                                              | Login - Editar información general                |
| Escenario 17   | Login con datos correctos                | Ir a la pagina de SETTINGS                 | Activar la página como un sitio privado          | Guardar cambios                   |                                                              | Login - Activar sitio privado                     |
| Escenario 18   | Login con datos correctos                | Ir a la pagina de DESIGN                   | Cambiar el nombre de la página de home           | Guardar cambios                   | Ir a la pagina principal, verificar cambio de nombre de HOME | Login-Cambiar diseño de página web                |
| Escenario 19   | Login con datos correctos                | Ir a las opciones MORE                     | Ir a las opciones LABS                           | Habilitar miembros                | Ir a la pagina de MEMBERS                                    | Login-Habilitar miembros                          |
| Escenario 20   | Login con datos correctos                | Ir a las opciones MORE                     | Ir a opciones de perfil                          | Logout                            |                                                              | Login-logout                                      |

---

# Cypress BDD test

BDD test para entrega semana 5 calificada de pruebas automatizadas MISO.

## Requerimientos

Se necesita instalar mínino la versión 10 de node js, este trae npm necesario para correr las pruebas.

## Instalar las dependencias del proyecto

Primero navegar a la carpeta CypressBDD/cypress con el comando de navegación por consola

```bash
cd CypressBDD/
```

Para instalar las dependencias del proyecto se corre el siguiente comando:

```bash
npm install
```

## Correr el test de cypress

Para correr el test se ejecuta el siguiente comando para abrir la interfaz gráfica:

```bash
./node_modules/cypress/bin/cypress open
```

Luego de esto se puestra una lista con cada especificación, **por favor ejecutar una a una**

---

# Kraken BDD test

BDD test para entrega semana 5 calificada de pruebas automatizadas MISO.

## Requerimientos

Recomendación si no ha trabajado con consola, empiece a familiarizarse con los comandos básicos. Una lista de comandos básicos UNIX los puede encontrar:

https://mally.stanford.edu/~sr/computing/basic-unix.html.

## Instalar las dependencias del proyecto

1​. Creamos una máquina virtual de VirtualBox en cual Kraken esta instalado y funcionando. La puede encontrar en la siguiente url y la clave es "pruebas": https://zenodo.org/record/4739209/files/Ubuntu20Light_copy.vdi?download=1

 1.1. Ejecuten el entorno como Administradores para evitar errores

2​. En caso de querer ejecutar Kraken por su cuenta, se le recomienda usar Windows. Ejecuten el entorno como Administradores para evitar errores

 2​.1. Ejecuten el entorno como Administradores para evitar errores

 2.2. La version de ruby: cualquiera entre 2.2.X y 2.7.2

 2.3. Asegurense de tener un chromium/chrom referenciado en sus variables path (va a fallar en la creacion de carpetas)

 2.4. Para el error too many login attempts en kraken:

  2.4.1. Opción 1: ​Crear un archivo config.development.json en el directorio raíz del proyecto y añadir:

```bash
{
 "spam": {
   "global_block": {
     "freeRetries": 100000000
   },
   "user_login": {
     "freeRetries": 100000000
   }
 }
}
```

  2.4.2. Opción 2: Vaciar la carpeta brute de la db.

3.  En caso de hacer uso de Ubuntu puede seguir los pasos que se encuentran en el siguiente archivo: https://bit.ly/3362dRl Fueron los que seguimos para la creación de la máquina virtual del punto 1.

## Configuración del ambiente

Copiar los archivos **.feature** que se encuentran en la ruta **kraken/\*.feature** en la carpeta del ambiente kraken previamente instalado en la ruta
**/features**.

Kraken necesita reconocer los dispositivos que representan a cada usuario en la prueba que
se va a ejecutar, ya sean dispositivos Android (en caso de que se prueben aplicaciones móviles),
o navegadores web (en caso de que se prueben aplicaciones web).
Para esto, es necesario que se copie el archivo de **llamado kraken_mobile_settings.json** que se encuentra en la ruta
**kraken/llamado kraken_mobile_settings.json**.
Este archivo también se puede generar automáticamente con la utilidad de línea de comandos de kraken-mobile. Ejecute el siguiente comando:

```bash
kraken-mobile setup
```

**Por favor si lo hace por este comando crear 5 usuarios y todos web**

## Correr las pruebas kraken

En el ambiente de kraken previamente configurado por favor correr el siguiente comando:

```bash
bundle exec kraken-mobile run
```

# Pros y contras de herramientas usadas

## Cypress

### Pros

- Es más rápido en la ejecución de todas las pruebas vs Kraken
- Es más rápido, ya que corre en memoria y no requiere de toda la preparación que tienen los navegadores gráficos.
- Se pueden tomar screenshots o vídeos como si fuera una prueba automatizada normal.
- Facilidad para conocer las propiedades de los elementos con el cuál se quiere interactuar con el selector de elementos.

### Contras

- Es complicado interactuar con variables que se procesan por debajo de la aplicación, que no están a la vista.
- No tiene como para guardar un estado previo o un recorrido ya realizado, ya que se debe esperar que se ejecuten las pruebas previas para llegar un punto donde se quiere evaluar con detenimiento.
- Puede ser algo demorado desarrollar las pruebas para un módulo que podría considerarse pequeño, en términos de proporción.

## Kraken

### Pros

- Al tener un lenguaje basado en Gherkin, su comprensión en código es más entendible que en otro lenguaje.
- Es más lento en la ejecución de todas las pruebas vs Cypress.

### Contras

- Falta bastante documentación en la implementación del lenguaje.

# Resultados Obtenidos

## Cypress

Videos de pruebas llevadas ejecutas https://drive.google.com/drive/folders/1EfkVeCj-r-eJhLFG6MXg10zTh_uxOm3h?usp=sharing

## Kraken

Reportes de pruebas llevadas ejecutas https://drive.google.com/drive/folders/1Dz_bIWW4pGVyRGRrt0ZLNEZZWybt--3e?usp=sharing
