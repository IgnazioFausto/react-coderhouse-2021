# Mi Huertapp

//Proyecto CoderHouse 2021 React JS (finalizado 17/11/2021)

Mi Huertapp es un sitio web de tipo SPA con carrito de compras incluído. Los productos en venta son frutas y verduras de procedencia orgánica.
Está creada con create-react-app v 17.0.2 en Node.js v v14.18.1

# Secciones principales

-[Homeview]: Entrada a la página. Se muestran todos los productos. Desde aquí se puede navegar a cualquier producto.
-[Sección-fruta/verdura]: Secciones que muestran los productos filtradas por su category en firestore.
-[Contacto]: Sección de contacto. 
-[Carrito]: Carrito de compras donde se irán sumando los productos seleccionados. Tiene la opción de revisar el pedido o avanzar con la compra hacia un checkout, donde se ingresan los datos para realizar el pedido. Una vez realizada la orden se le brinda un ID al usuario para manejar luego su orden.

# Funcionalidades
 

# Navegabilidad

Pc

<img src="https://github.com/IgnazioFausto/react-coderhouse-2021/blob/3c77ce12dd1e711da7fc565d289401bb4a4ecd52/src/helpers/gifs/Mi%20Huertapp.gif">

Tablet

<img src="https://github.com/IgnazioFausto/react-coderhouse-2021/blob/e6cfb673fad399611bc8737484bc6422670b26c8/src/helpers/gifs/Mi%20Huertapp%20tablet.gif">

Phone

<img src="https://github.com/IgnazioFausto/react-coderhouse-2021/blob/e6cfb673fad399611bc8737484bc6422670b26c8/src/helpers/gifs/Mi%20Huertapp%20phone.gif">


# Dependencias empleadas [DevDependencies]

        "@testing-library/jest-dom": "^5.14.1",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^12.8.3",
        "bootstrap": "^5.1.1",
        "node-sass": "^6.0.1",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-scripts": "4.0.3",
        "web-vitals": "^1.1.2"
        "file-loader": "^6.2.0" (para poder manejar archivos .svg) [https://www.npmjs.com/package/file-loader]
        "styled-components": "^5.3.1", (para estilar los componentes) [https://styled-components.com/]
        "react-icons": "^4.3.1",
        "react-router-dom": "^5.3.0",
        "react-bootstrap": "^2.0.0-rc.0", (para maquetar el sitio)
        "react-image": "^4.0.3", (para configurar un spinner en las img mientras cargan) [https://www.npmjs.com/package/react-image]
        "firebase": "^8.10.0",
        "react-router-nomatch": "^2.0.3", (para contemplar todo url erroneo que se pueda ingresar y redirigir al usuario)[https://www.npmjs.com/package/react-router-nomatch?activeTab=readme]
