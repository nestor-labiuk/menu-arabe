<h1 align="center">
Proyecto final Rolling Code School
</h1>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS5](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 

El objetivo del proyecto es crear una aplicacion funcional en react que permita realizar un pedido de comida dentro de las opciones que se muestran en el menú.

Imagenes:
imgMD1
imgMD2

## Desarrollo

Primero te tenes que clonar el repositorio del proyecto:
```
git clone https://github.com/nestor-labiuk/menu-arabe.git
```
### Despues tenes que instlar las dependencias: 
```
npm install 
```
### Scripts Disponibles

En este proyecto, los scripts que podes correr (ejecutar) son:

| Script        | Descripción                                         |
| ------------- | --------------------------------------------------- |
| npm star      | Inicia un servidor web local.                       |
| npm run build | Generar la aplicación fina.                         |    
| npm run test  | Inicia los test que trae por defecto react.         |
| npm eject     | Permite revelar toda la del prroyecto configuración para acceder y modificarla. |


## Dependencias Usadas en el Front
 - [react](https://es.react.dev/) Entorno de ejecución necesario para hacer andar la aplicación.
 - [react-dom](https://es.legacy.reactjs.org/) Librería que se encarga de renderizar los componentes de React en el navegador.
 - [react-hook-form](https://react-hook-form.com/) Para manejar el ciclo de vida de los componentes.
 - [react-router-dom](https://reactrouter.com/en/main) Para las rutas de navegación dentro de la aplicación.
 - [react-toastify](https://www.npmjs.com/package/react-toastify) Para mostrar alertas personalizadas.
    
## Dependencias Usadas en el Back

- [bcrypt](https://www.npmjs.com/package/bcrypt) Para encriptar las contraseñas.
- [cors](https://www.npmjs.com/package/cors) Activa el CORS y restringe las solicitudes HTTP de origen cruzado para varias funciones.  
- [dotenv](https://www.npmjs.com/package/dotenv) Carga variables de entorno desde un archivo .env en process.env.
- [express](https://www.npmjs.com/package/express) Para manejar la estructura de peticiones.
- [express-validator](https://www.npmjs.com/package/express-validator) Permite añadir middlewares de validacion.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) Para añavir validaciones de permisos de tipo administrador.
- [mongoose](https://www.npmjs.com/package/mongoose) Para hacer consultas a una base de datos de MongooDB.

## Estructura de carpetas

```
create react app template
├── node_modules
├── public
    └── favico.ico
    └── index.html
    └── manifest.json
    └── robots.txt
└── src
    ├── assets
    ├── components
    ├── pages
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```
    
## Credito / Reconocimientos / Participantes

Menu-Árabe fue creado y cebibe mantenimiento gracias a [Nestor Labiuk](https://github.com/nestor-labiuk), [Cristhian Leal](https://github.com/CristhianLeal), [Gabriela Mansilla](https://github.com/GabrielaMansilla), [Nicolás Córdoba](https://github.com/NicoCordobaDev), [Adrián Esteban Lescano](https://github.com/AdrianMilo), [Federico Leandro Carrizo](https://github.com/FedeLeanCarrizo), [Leandro Herrera](https://github.com/qpmjcv)

