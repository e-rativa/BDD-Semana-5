# Pruebas Automatizadas - Grupo 4-ywj
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

## Luego de esto se puebra una lista con cada especificación, **por favor ejecutar una a una**

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

