# BDD-Semana-5

| **Escenarios** | **Casos de Prueba 1**                    | **Casos de Prueba 2**                      | **Casos de Prueba 3**                            | **Casos de Prueba 4**             | **Casos de Prueba 5**                                        | **Funcionalidad**                                 |
| -------------- | ---------------------------------------- | ------------------------------------------ | ------------------------------------------------ | --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------- |
| Escenario 1    | Comprobación de datos vacíos             | Datos Erróneos                             | Datos Correctos                                  |                                   |                                                              | Login                                             |
| Escenario 2    | Recuperar la contraseña con datos vacíos | Recuperar la contraseña con datos erróneos | Recuperar la contraseña con datos válidos        |                                   |                                                              | Recuperar contraseña                              |
| Escenario 3    | Login con datos correctos                | Llenar post con título                     | Llenar post con contenido                        | Publicar un post inmediatamente   |                                                              | Login-Crear post                                  |
| Escenario 4    | Login con datos correctos                | Crear un post completo                     | Publicar un post agendado                        |                                   |                                                              | Login-Crear post- publicar post agendado          |
| Escenario 5    | Login con datos correctos                | Crear un post completo                     | Ponerle url personalizada                        | Resaltar el post                  | Publicar el post                                             | Login-Crear post- publicar post con url y feature |
| Escenario 6    | Login con datos correctos                | Crear una página sin título                | Crear una página sin descripción                 | Crear una página completa         |                                                              | Login- Crear página                               |
| Escenario 7    | Login con datos correctos                | Crear página completa                      | Publicar una página inmediatamente               |                                   |                                                              | Login-Crear página- Publicar página               |
| Escenario 8    | Login con datos correctos                | Crear página completa                      | Publicar una página agenda                       |                                   |                                                              | Login-Crear página- Publicar página               |
| Escenario 9    | Login con datos correctos                | Crear un tag sin título                    |                                                  |                                   |                                                              | Login-Crear tag                                   |
| Escenario 10   | Login con datos correctos                | Crear un tag con título y descripción      |                                                  |                                   |                                                              | Login-Crear tag                                   |
| Escenario 11   | Login con datos correctos                | Creación de un usuario como administrador  | Creación de un usuario como editor               | Creación de un usuario como autor | Creación de un usuario como contribuidor                     | Login-Creación de usuario                         |
| Escenario 12   | Login con datos correctos                | Creación de un usuario como administrador  | Revocar invitación de usuario                    |                                   |                                                              | Login-Creación de usuario-Revocar usuario         |
| Escenario 13   | Login con datos correctos                | Creación de un usuario como administrador  | Cambiar nombre y rol del usuario                 |                                   |                                                              | Login-Creación de usuario- Editar usuario         |
| Escenario 14   | Login con datos correctos                | Creación de un usuario como administrador  | Cambiar la contraseña con contraseñas diferentes |                                   |                                                              | Login-Creación de usuario-Cambio de contraseña    |
| Escenario 15   | Login con datos correctos                | Creación de un usuario como administrador  | Cambiar la contraseña con contraseñas iguales    |                                   |                                                              | Login-Creación de usuario-Cambio de contraseña    |
| Escenario 16   | Login con datos correctos                | Ir a la página de SETTINGS                 | Editar el nombre de la página web                | Guardar cambios                   |                                                              | Login - Editar información general                |
| Escenario 17   | Login con datos correctos                | Ir a la página de SETTINGS                 | Activar la página como un sitio privado          | Guardar cambios                   |                                                              | Login - Activar sitio privado                     |
| Escenario 18   | Login con datos correctos                | Ir a la página de DESIGN                   | Cambiar el nombre de la página de home           | Guardar cambios                   | Ir a la página principal, verificar cambio de nombre de HOME | Login-Cambiar diseño de página web                |
| Escenario 19   | Login con datos correctos                | Ir a las opciones MORE                     | Ir a las opciones LABS                           | Habilitar miembros                | Ir a la página de MEMBERS                                    | Login-Habilitar miembros                          |
| Escenario 20   | Login con datos correctos                | Ir a las opciones MORE                     | Ir a opciones de perfil                          | Logout                            |                                                              | Login-logout                                      |

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

Para correr el test se ejecuta el siguiente comando si se requiere una consola gráfica:

```bash
./node_modules/cypress/bin/cypress open
```

Y para correrlo sin consola gráfica:

```bash
./node_modules/cypress/bin/cypress run --headless
```
