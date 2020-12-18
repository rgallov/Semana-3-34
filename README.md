# Proyecto MINTIC - UTP - Ciclo 3 - Semana3 - Grupo 34

## Descripción

Elaborar un login

## Colaboradores
Rodrigo Gallo - Full Stack developer
Harvy Santiago Rosero - Full Stack developer
Juan Sebastian Franco - Full Stack developer

### Contenido

## Requerimiento Secciones Iniciales

- Para el proyecto de la semana los estudiantes deberán construir tanto el frontend como el backend del módulo de inicio de sesión.
- La interfaz debe contar con un campo para el nombre de usuario, otro campo para contraseña y un botón realizar la acción de inicio de sesión, al ingresar deberá mostrar un escritorio para el usuario en donde se visualicen su nombre y correo. 
- En caso de fallar, se debe indicar que hubo un error en el inicio de sesión.

## Estructura Frontend

- /public
  - index.html
- /src
  - /assets
  - /components
    - /auth
      - Login.vue
    - TheHome.vue
    - UserData.vue
  - /router
    - index.js
  - /views 
    - Home.vue
    - Login.vue
  - App.vue
  - main.js

## Estructura Backend

- /config
  - config.json
- /controllers
  - authController.js
  - productController.js
- /migrations
- /models
  - index.js
  - user.js
  - /routes
    - /api
      - auth.js
    - index.js
  - /secret
    - config.js
  - /seeders
  - /test
  - server.js

## Project setup
En ambos proyectos se debe correr:

```
npm install
```

### Compiles and hot-reloads for development of Forntend
```
npm run serve
```

### Compiles and hot-reloads for development of Backend
```
node server
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Proceso GIT

1. Crear repositorio GitHub 
   1. Ubicacion de github : https://github.com/
2. Crear branches de control de código
   1. Master o Main : Solo para Releases
   2. dev :  rama de desarrollo usada para controlar los pull requests de funcionaldiades subidas
3. Crear carpeta local 
   1. En windows con el comando 
   ```
   MD Directorio
   ```
   o
   ```
   MKDIR Directorioo 
   ```
4. Clonar repositorio 
   ```
   git clone repositorio
   ```
   ```
   git remote add origin URL_repositorio
   ```
5. Crear branch de trabajo 
   ```
   git checkout -b newbranch
   ```
6. Realizar sitio - Creado en VSCode (https://code.visualstudio.com/)
7. Guardar cambios en repositorio local 
   ```
   git add .
   ```
   ```
   git commit -m "Mensaje de commit"
   ```
8. Subir cambios a repositorio como branch nuevo
   ```
   git push origin newbranch
   ```
9.  Realizar pull request en github
   1. Usar funcionalidad  web en github
10. Hacer pull request en sitio local para actualizar
    ```
    git pull origin dev
    ```
12. Repetir desde el paso 4 hasta tener el sitio release listo


&copy; Copyright 2020 

