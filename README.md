# Repositorio base del Curso de Introducción a React.js en Platzi



Para empezar solo debes clonar este repositorio (`git clone`), instalar sus dependencias (`npm i`) y ejecutar la aplicación (`npm start`).

La rama principal contiene el código con el que eempezamos el curso. En las demás ramas encontrarás el código de las siguientes clases y finalmente el deploy de la aplicación.

¡Mucha suerte aprendiendo React! #NuncaParesDeAprender

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



---


## Conceptos Básicos de React:
## Componentes: 
    En React, todo es un componente. Los componentes son bloques de construcción reutilizables para construir interfaces de usuario.
## Props:  
    Son datos que pasas a un componente desde su componente padre.
    Estado (State): Representa la condición de un componente y puede cambiar con el tiempo debido a las interacciones del usuario.
## Renderización de Elementos:
    Utiliza el método ReactDOM.render() para renderizar elementos en el DOM.
## Manejo de Eventos:
    React utiliza eventos similares a HTML, como onClick y onChange. Debes familiarizarte con el manejo de eventos en React.
## Ciclo de Vida de los Componentes:
    Comprender el ciclo de vida de los componentes te ayudará a realizar acciones en diferentes etapas del ciclo de vida, como la creación, actualización y destrucción de un componente.
## Uso de State y Props:
    Aprende a manejar el estado interno de los componentes y cómo pasar datos entre componentes mediante props.
## Manejo de Formularios en React:
    Entender cómo funcionan los formularios en React es esencial para la mayoría de las aplicaciones web.
## React Router:
    Si estás construyendo una aplicación de una sola página (SPA), React Router te ayudará a manejar la navegación.
## Gestión de Estado Avanzada:
    Para aplicaciones más grandes, es posible que desees utilizar herramientas como Redux o el contexto de React para gestionar el estado de manera más eficiente.
## Estilo en React:
    Aprende sobre cómo manejar estilos en React, ya sea usando hojas de estilo externas, estilos en línea o bibliotecas de estilo como Styled Components.
## Pruebas en React:
    Conoce las mejores prácticas para probar tus componentes en React utilizando herramientas como Jest y React Testing Library.
## Hooks de React:
    Los hooks como useState y useEffect te permiten agregar estado y efectos a los componentes funcionales.

    ---

    
    Componentes => Reciben Propiedades.
     Elementos => Reciben Atributos. ... Hay que tener en cuenta que en JSX, la sintaxis entre atributos y propiedades es muy parecida, ya que escribimos el valor de las props en los componentes como si fueran atributos, pero estos no lo son.. ... Las props son variables que declaramos en nuestro componente como si fueran parámetros de una función, podemos declarar una unica (Prop) o declarar varias Props utilizando la {Desestructuración}. Para luego posteriormente darles un valor como si fueran argumentos, pero utilizando otro tipo de sintaxis, que es muy parecida a la de los atributos de los elementos HTML, con la diferencia que el otorgamos el valor entre {llaves}. ... En cuanto a la propiedad "props.children" esta hace referencia a que React transforma automáticamente a todo lo que se encuentre dentro del componente padre en un elemento "children" , es decir todo lo que se encuentre dentro de una etiqueta de apertura <Component> y una etiqueta de cierre </Component> para React será "Children". .. Por otro lado existe <React.Fragment> o su sintaxis más corta " <> </> " que es un contenedor invisible que tiene como objetivo envolver todos los componentes JSX dentro de un contenedor padre, esto es debido a que React necesita envolver esos componentes para renderizarlos, y asi no crear nodos innecesarios en el DOM. .. Por ultimo, debemos tener en cuenta que podemos renderizar elementos a través de un Array, utilizando en este caso el metodo .map(), y devolviendo el componente "TodoItem" por cada uno de los objetos del array.. Es necesario que le pasemos las props "key={todo.text} text={todo.text}" al componente para que nos muestre un contenido distinto por cada objeto de este array. .. La prop "Key" funciona como un Identificador para objeto del array y es necesaria cuando utilizamos el metodo .map()