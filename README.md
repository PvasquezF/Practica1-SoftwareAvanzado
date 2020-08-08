# Práctica # 2: Seguridad en servicios web
## Nombre: 
201503611 - Pavel Alexander Vásquez
## Instrucciones: 
* Parte 1:

    * Repetir la práctica # 1 agregando credenciales tipo client_credentials y un token Bearer para poder volver a desarrollar el mismo ejercicio anterior (ahora requiere autenticación).  Documentación de client credentials.

    * Usuario / Client ID: sa
    * Client Secret: fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745

* Parte 2:
    * Repetir la misma tarea # 1 utilizando SOAP y autenticación básica.

    * WSDL:   https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap&wsdl 

    * Usuario: sa
    * Contraseña: usac

## Como utilizar
Al ser una simple pagina HTML, solamente es necesario abrir el archivo index.html que se encuentra en cada carpeta

### Boton de mostrar contactos
Despliega todos los contactos asociados al carnet 201503611

### Boton de crear 10 contactos random
Crea 10 contactos con el prefijo 201503611 seguido de un guión bajo y por ultimo de número aleatorio de 0 a 1000. e.g. 201503611_324

### Boton de crear contacto
Contiene un cuadro de texto que permite crear un contacto, para hacerlo visible en la sección de mostrar debe contener el texto "201503611".

### Boton de login
Consulta al servicio para autenticar con el API y asi recibir un token para poder hacer el resto de peticiones.

### Boton de logout
Elimina el token actual, y no deja hacer otras peticiones.

## Estructura 
    -- Parte1
        -- resources 
            |--- css
                ---- styles.css     (Estilos para la pagina)
            |--- js
                ---- index.js       (Logica de botones y datos de la pagina)
        -- app.js                   (Metodos para consultas al API)
        -- index.html               (Pagina principal)
        -- README.md                (Información util de la aplicación)

    -- Parte2
        -- resources 
            |--- css
                ---- styles.css     (Estilos para la pagina)
            |--- js
                ---- index.js       (Logica de botones y datos de la pagina)
                ---- xml2json.js    (Conversor de xml a json)
        -- app.js                   (Metodos para consultas al API)
        -- index.html               (Pagina principal)
        -- README.md                (Información util de la aplicación)

## Herramientas
* Javascript
    * dialecto del estándar ECMAScript. (https://www.ecma-international.org/ecma-262/10.0/index.html#sec-intro)


* HTML
* CSS
* Bootstrap

## Estandares
* https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/
* https://google.github.io/styleguide/jsguide.html

## Contacto
Correo: alexanderpavelv32@gmail.com