


# Revisión de Proyecto 

Antes que nada, quiero felicitarte por el compromiso que has tenido con el Learning path

> Es más facil escribir código que leerlo.
> -Joel Spolsky (Fundador de Stack Overflow)

Los puntos que voy a tocar aquí son sobre todo para mejorar y reforzar huecos que tenemos en algunas areas.

# HTML

Para la parte de HTML los puntos que hay que recalcar son sobre todo la consistencia.

###  Bueno

- Se tiene una muy buena semantica, es entendible
- Se hizo de una manera muy reducida 
- Se tiene buena identación
- Se hizo un buen uso de las propiedades nativas

### Malo

- Cuando se trabaje con caracteres especiales en HTML, se deben de escapar con referencias de caracteres e.g. Para mostrar "í" usa `&#237;` o `&iacute;` dependiendo de tu código de codificación.
- Pudimos haber utilizado la etiqueta `main` y la etiqueta `article`, pero no lo hicimos

Tenemos unas muy buenas bases pero siempre podemos mejorar.
Te recomiendo checar este repo:
[https://github.com/hail2u/html-best-practices#escape-----and--with-named-character-references](https://github.com/hail2u/html-best-practices#escape-----and--with-named-character-references)

# CSS

Para esta parte lo que hay que tener en cuenta es el escalamiento de un proyecto, la redacción y el uso de las propiedades correctas

### Bueno

- Tenemos una baja especificidad 
- Buena organiación
- Buen uso de redacción de colores

### Malo

- Tenemos unos comentarios en algunas partes que no nos dicen gran cosa
- No tenemos un sistema de diseño
- Todo lo tenemos en un solo archivo
- En algunos casos usamos `px` y en otros no, hay que ser consistentes en esas cosas
- Es recomendable evitar lo más posible `px`, hay más opciones para tamaños 

Esta página es muy buena para practicar este tipo de cosas.
[https://www.w3schools.com/cssref/css_units.asp](https://www.w3schools.com/cssref/css_units.asp)
[https://css-tricks.com/guides/](https://css-tricks.com/guides/)




# JS

### Bueno

- Tenemos una implementación para que se genere de manera dínamica
- Hacemos buen uso de los tipos de variables
- Hacemos buen uso del spread operator
- Buen acomodo de archivos	

### Malo

- **No documentamos nada**
- El HTML que regresas dde tu función, no sigue tus estandares de tu otro HTML.
- Hay buen uso de nombres de variables, pero no el suficiente. O escogo un buen nombre para mi función que la explique o le pongo comentarios, aparte de la documentación


Para la parte de documentación revisa este sitio:
[https://documentjs.com/docs/documentjs.tags.param.html](https://documentjs.com/docs/documentjs.tags.param.html)

# CONCLUSIÓN

En general es una my buena propuesta, pero debemos poder hacerlo, lo más sencillo posible con lo básico. Es una solución muy buena y tenemos un muy buen acomodo de nuestros archivos. 
Pero hay que recordar que con el código queremos comunicar algo, y mientrás más claro sea el mensaje mejor, por eso no hay que descuidar la documentación, **ni siquiera un README hay**.
