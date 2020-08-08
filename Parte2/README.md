# Práctica # 1: Conceptos básicos de SOA
## Nombre: 
201503611 - Pavel Alexander Vásquez
## Instrucciones: 
Utilizar api.softwareavanzado.world para desarrollar un cliente de webservice: https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&format=doc
* Listar contactos.
* Crear 10 contactos incluyendo su número de carnet en el nombre.

## Como utilizar
Al ser una simple pagina HTML, se hace uso de github-pages para hostear la pagina, ingresar al siguiente enlace
* https://pvasquezf.github.io/Practica1-SoftwareAvanzado

### Boton de mostrar contactos
Despliega todos los contactos asociados al carnet 201503611

### Boton de crear 10 contactos random
Crea 10 contactos con el prefijo 201503611 seguido de un guión bajo y por ultimo de número aleatorio de 0 a 1000. e.g. 201503611_324

### Boton de crear contacto
Contiene un cuadro de texto que permite crear un contacto, para hacerlo visible en la sección de mostrar debe contener el texto "201503611".

## Estructura 
    -- resources 
        |--- css
            ---- styles.css     (Estilos para la pagina)
        |--- js
            ---- index.js       (Logica de botones y datos de la pagina)
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