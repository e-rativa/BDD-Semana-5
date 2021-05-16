# Pruebas Automatizadas - Grupo 4-ywj
---

VRT para entrega semana 6 calificada de pruebas automatizadas MISO.

# Cypress VRT 

Para la generación de reportes VRT utilizando los screenshoots generados de las pruebas con Cypress se debe tener en cuenta la siguiente información.

## Requerimientos

Se necesita instalar mínino la versión 10 de node js, este trae npm necesario para correr las pruebas.

## Screenshoots Ghost v3.3.0

### Instalar las dependencias del proyecto.

Primero navegar a la carpeta CypressBDD_3.3.0/cypress con el comando de navegación por consola

```bash
cd CypressBDD_3.3.0/
```

Para instalar las dependencias del proyecto se corre el siguiente comando:

```bash
npm install
```

### Correr el test de cypress

Para correr el test se ejecuta el siguiente comando para abrir la interfaz gráfica:

```bash
./node_modules/cypress/bin/cypress open
```

### Luego de esto se puebra una lista con cada especificación, **por favor ejecutar una a una**

Al terminar la ejecución de las pruebas se generan los screenshoots especificados que podrán ser accedidos en la ruta:

```bash
CypressBDD_3.3.0/cypress/screenshots/
```
En esta ruta se encontran las carpetas de cada escenario ejecutado con los screenshoot respectivos.


## Screenshoots Ghost v3.42.5

### Instalar las dependencias del proyecto.

Primero navegar a la carpeta CypressBDD_3.42.5/cypress con el comando de navegación por consola

```bash
cd CypressBDD_3.42.5/
```

Para instalar las dependencias del proyecto se corre el siguiente comando:

```bash
npm install
```

### Correr el test de cypress

Para correr el test se ejecuta el siguiente comando para abrir la interfaz gráfica:

```bash
./node_modules/cypress/bin/cypress open
```

### Luego de esto se puebra una lista con cada especificación, **por favor ejecutar una a una**

Al terminar la ejecución de las pruebas se generan los screenshoots especificados que podrán ser accedidos en la ruta:

```bash
CypressBDD_3.42.5/cypress/screenshots/
```
En esta ruta se encontran las carpetas de cada escenario ejecutado con los screenshoot respectivos.

---

# Kraken BDD test

BDD test para entrega semana 6 calificada de pruebas automatizadas MISO.

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
---
# Backstop

## Instalación backstop

Para instalar si aún no lo tiene instalado el backstop correr el siguiente comando.

```bash
npm install -g backstopjs
```

## Configuración del ambiente

Para correr la comparativa de backstop para las pruebas de regresión visuales (vrt) se accede a la carpeta **backstop** y correr el siguiente comando.

```bash
backstop init
```

Esto creará los archivos necesario para crear el reporte y la comparativa de las evidencias, para utilizar la herramienta copiar las 2 carpetas a comparar, igualmente en la carpeta **backstop** 
(e.g.  **backstop/carpeta1** | **backstop/carpeta1**) 

**IMPORTANTE** estás tienen que tener unas carpetas internas donde se evidencien los escenarios y dentro de dichas carpetas las respectivas capturas.

**Correr backstop**

```bash
node executeTest.js carpeta1 carpeta2
```

**Nota**:

Este comando se puede demorar si el número de imagenes es muy grande.

# Resemble JS

## Instalación resemble

Para instalar si aún no lo tiene instalado el resembleJs desplazarse a la carpeta ResembleVRT con el comando 

```bash
cd ResembleVRT
```
Después de esto correr el siguiente comando.

```bash
npm install
```

## Configuración del ambiente

Para correr la comparativa de resemble para las pruebas de regresión visuales (vrt) se accede a la carpeta **ResembleVRT** y correr el siguiente comando.

**IMPORTANTE** estás tienen que tener unas carpetas internas donde se evidencien los escenarios y dentro de dichas carpetas las respectivas capturas, con nombre de las versiones GHOST 3.3.0 y GHOST 3.42.5

**Correr resemble**

```bash
node index.js
```

**Nota**:

Este comando se puede demorar si el número de imágenes es muy grande.
