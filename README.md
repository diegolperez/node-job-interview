# Code Challenge

Este proyecto intenta identificar tus habilidades no solo en el aspecto de escribir código, sino también, en la toma de decisiones para resolver los problemas, cuales son tos buenas prácticas, entre otros.

Ten en cuenta que hay un requerimiento obligatorio y multiples requerimientos opcionales. Los requerimientos opcionales no necesitas hacerlos, no te quitarán ni aumentarán puntos porque este code challenge no esta dado por puntos, pero si nos ayudará a conocer mejor tu nivel de conocimiento en multiples áreas. Además nos permitirá darte una retroalimentación.

# Antes de programar

Antes de dar una definición y los requerimientos, es importante que conozcas de manera rápida la estructura de archivos. Aunque es una estructura muy simple, nunca está de más tener información al respecto, ¿Cierto?

## Estructura de archivos


```
├── data/
│   ├── gropo1 /
│   │   ├── datos.yaml
│   ├── gropo2 /
│   │   ├── datos.yaml
├── lib/
│   ├── converter.js
│   ├── file.js
│   ├── filter.js
├── node_modules/
├── test/
├── index.js
├── package.json
├── package-lock.json
├── README.md
```
- `data`: contiene información en archivos YAML y con una estructura bien definida. Cada uno está en una carpeta que contiene el nombre `grupo`. Más adelante se explicará cuál es el propósito.
- `lib`: contienen implementaciones básicas de algunas funcionalidades ya pre-diseñadas
- `node_modules`: es la carpeta de depencias del proyecto. No hay nada que hacer aquí.
- `test`: existen las pruebas unitarias para algunas funcionalidades ya pre-diseñadas.
- `index.js`: es nuestro entrypoint y donde está parte de la lógica del servidor.
- `package.json`: un archivo de configuración para que `npm` pueda gestionar dependencias, scripts de ejecución, entre otros.
- `package-lock.json`: un archivo generado automáticamente por `npm`y el cual permite definir una estructura plana de las dependencias.
- `README.md`: archivo donde se encuentra toda la información para el presente proyecto.

## Algunos comandos importantes
`npm run test`: para ejecutar las pruebas correspondientes
`npm run dev`: para iniciar el proyecto en modo desarrollo

## Antes de comenzar

### requerimientos
- `node >= 12`

### instalar dependencias
- `$ npm install`

### ejecutar aplicación
- `$ npm run dev`

## Cómo probar la aplicación actual
- Si deseas ejecutar las pruebas unitarias, ejecuta el comando `npm run test`. Verás que no pasa y justamente es porque aun no se ha implementado el requerimiento especificado más adelante.

- Si deseas probar vía API utilizando Postman o línea de comandos a través de curl: en ambos casos deberás setear la cabecera de autenticación básica con email y password. Las credenciales con las que puedes realizar las pruebas son:

|  correo electrónico  | contraseña   |
|----------------------|--------------|
|  usuarioA@gmail.com  |  1234567890  |
|  usuarioB@gmail.com  |  1234567890  |
|  usuarioC@gmail.com  |  1234567890  |
|  usuarioA@hotmail.com | 1234567890  |
|  usuarioB@hotmail.com | 1234567890  |
|  usuarioB@yahoo.com | 1234567890  |



# Funcionalidades ya desarrolladas

- [x] Registrar los datos en un archivo YAML segmentando por grupos (cada grupo en una carpeta)
- [x] Definir una estructura YAML estándar en un archivo con nombre `datos`
- [x] Cargar el archivo YAML y convertir la información en un objecto JSON
- [x] Generar un servicior web que soporte autenticación básica a través de correo electrónico y contraseña.

# Requerimientos que debes desarrollar

- [] Se debe implementar la API para filtrar la información basado en el correo electrónico del usuario que se loguea y basado en el tipo de servicio (del mismo usuario logueado). Tomar en cuenta que:
  1. el usuario que se ha logueado, obtendrá toda la información de todos los servicios de los grupos a los que esté asociado.
  2. el usuario que se ha logueado, podrá filtar la información de los servicios en los grupos que esté asociado
  3. el retorno de información será con la misma estructura pero sin el elemento: `allowedEmails`
  4. debes seguir todas las buenas prácticas que conozcas.

# Requerimientos que podrías desarrollar / implementar

  
---

- [x] ¿Consideras que el proyecto debe ser reestructurado? 

Si, el proyecto debería ser reestructurado, sobretodo para facilidad de ubicación y lectura del código. Por ejemplo utilizando el archivo filter.js para los filtros y además he creado otro archivo que lo he nombrado utils.js que tiene funciones que podrían utilizarse en todo el proyecto. Esto permitirá que el archivo index.js no tenga toda la lógica en un solo archivo. En cuanto a la estructura de carpetas me parece correcto.

- [x] ¿Consideras que el proyecto debe tener una arquitectura bien definida?

Si, sobretodo porque estamos manejando filtros a nivel de archivos y no BDD, por lo que obligatoriamente la arquitectura debe mantenerse de la carpeta data,  y la estructura de los archivos de datos YAML, que son la parte fundamental en este proyecto. 

- [x] ¿Consideras que el proyecto necesita más pruebas unitarias? 
Si, se deberían implementarse pruebas unitarias para cada parte de código si es posible, debido al tiempo solamente he realizado pruebas unitarias manualmente, en este caso funciones que he creado, como por ejemplo ByEmailAndService, DeleteStringSpaces, compareRegExp, validateRegExp. Sin embargo es indispensable que se las automatice y se hagan más por parte de una unidad de QA.    

- [x] ¿Consideras que deberías escribir pruebas para implementar el requerimiento obligatorio?

Si, como mencioné en el anterior punto es indispensable automatizarlas, sobretodo de la función principal filter.ByEmailAndService que es la que cumple el requerimiento principal.

- [x] ¿Consideras que deberías seguir alguna estrategia de versionamiento? 

Si, es indispensable seguir un versionamiento. En mi caso he utilizado git para hacerlo, además de subir el repositorio a github.

- [x] ¿Consideras que deberías seguir alguna estrategia de branching? 

Si, sobretodo para tener un control del código que ha pasado las pruebas unitarias, del que no, en mi caso he preparado dos ramas, una master y una develop nada más ya que solamente estaba en el proyecto mi persona. Sin embargo es indispensable hacerlo desde un inicio, puesto que el poryecto podría escalar y tener más desarrolladores.

- [X] ¿Consideras que deberías tener una imagen Docker para el proyecto actual? 

Si, por dos razones, la primera para poder tenerlo empaquetado y que funcione en cualquier servidor independientemente del sistema operativo, y más aún con NodeJS que tiene particularidades y cambios entre el SO que se ejecuta. Y la segunda en el caso de que esta aplicación pueda ser desplegada en un futuro. En mi caso no podré subirla porque ya tengo mi cuenta gratis llena.  

- [X] ¿Consideras que deberías publicar tu contenedor en algún contenedor de registros? (DockerHub, Github Packages, etc.).

En este caso, al ser un proyecto de pruebas no es necesario subirlo a la nube. Pero en caso de que se podría desplegar sería una buena opción.

- [X] ¿Consideras que deberías desplegar la aplicación con o sin contenedor?

Con contenedor, debido a que nodeJS no puede funcionar de la misma forma en los distintos sistemas operativos.

- [X] ¿Te gustaría desplegar esta aplicación en algun servicio en la nube (GCP, AWS, Heroku, etc.)?

Si, siempre lo más lindo es cuando se sube a la nube algo que hemos logrado y que pueda ser accesible para todos. En mi caso lo he subido en Heroku.

En cualquiera de las preguntas anteriores,

- si tu respuesta es si ¿te gustaría hacerlo? recuerda, no importa si haces uno, o todos, o incluso ninguno.
- si tu respuesta es no, no te preocupes eso no te quitará puntos.

En ambos casos, nos gustaría saber tu opinión al respecto de tu decisión cuando nos reunamos para revisar tu código.

> Nota: Si vas a desarrollar alguno, no necesariamente tienes que seguir el orden, puedes empezar por el que prefieras.


## Entendiendo el comportamiento actual de la implementación

cuando ingresas a http://localhost:3000/data (obviamente pasando las credenciales de acceso) obtendrás la siguiente información.

`data/grupo1`

```
[
    {
        "kind": "servicio A",
        "spec": [
            {
                "name": "keyServA1",
                "description": "credenciales del servicio A.",
                "key": "user",
                "value": "password",
                "allowedEmails": [
                    "*@*"
                ]
            },
            {
                "name": "keyServA2",
                "description": "credenciales del servicio A.",
                "key": "user",
                "value": "password",
                "allowedEmails": [
                    "*gmail.com"
                ]
            },
            {
                "name": "keyServA3",
                "description": "credenciales del servicio A",
                "key": "user",
                "value": "password",
                "allowedEmails": [
                    "usuarioA@gmail.com",
                    "usuarioB@gmail.com"
                ]
            },
            {
                "name": "keyServA4",
                "description": "credenciales del servicio A",
                "key": "user",
                "value": "password",
                "allowedEmails": [
                    "usuarioC*gmail.com"
                ]
            }
        ]
    },
    {
        "kind": "servicio B",
        "spec": [
            {
                "name": "keyServB1",
                "description": "credenciales del servicio B.",
                "key": "user",
                "value": "password",
                "allowedEmails": [
                    "*@gmail.com",
                    "*@hotmail.com"
                ]
            },
            {
                "name": "keyServB2",
                "description": "credenciales del servicio B.",
                "key": "user",
                "value": "password",
                "allowedEmails": [
                    "*@hotmail.com"
                ]
            }
        ]
    },
    {
        "kind": "servicio N",
        "spec": [
            {
                "name": "keyServN1",
                "description": "credenciales del servicio N.",
                "key": "user",
                "value": "password",
                "allowedEmails": [
                    "*@yahoo"
                ]
            }
        ]
    }
]
```

Toda esa información es la misma que se encuentra en la ruta `data/grupo1/datos.yaml`. Obviamente, está en formato YAML. Si quieres realizar una transformación de yaml a json puedes usar un [convertidor en línea](https://onlineyamltools.com/convert-yaml-to-json) para ello.

Como te habrás dado cuenta, no se está filtrando la información de ningúna manera y según el requerimiento (puntos 1 y 2). Por lo tanto, el endpoint `/data` no está cumpliendo el requerimiento, entonces habrá que cambiar la funcionaldad.

### Entendiendo el requerimiento 

Según el requerimiento, tenemos dos tipos de filtro: el primero corresponde a los datos que están asociados al correo electrónico, y el segundo, corresponde a datos especificados en un grupo de datos de un servicio.

En el primer caso, por ejemplo, si un usuario provee sus credenciales de acceso (usuarioA@gmail.com, por ejemplo), y quiere acceder a la información del grupo 1, el sistema deberá devolverle la siguiente información a través de una URL (¡si!, también tendrás que definir el segmento de URL para extender la URL actual).

```
[
  {
    "kind": "servicio A",
    "spec": [
      {
        "name": "keyServA1",
        "description": "credenciales del servicio A.",
        "key": "user",
        "value": "password",
      },
      {
        "name": "keyServA2",
        "description": "credenciales del servicio A.",
        "key": "user",
        "value": "password",
      },
      {
        "name": "keyServA3",
        "description": "credenciales del servicio A",
        "key": "user",
        "value": "password",
      }
    ]
  },
  {
    "kind": "servicio B",
    "spec": [
      {
        "name": "keyServB1",
        "description": "credenciales del servicio B.",
        "key": "user",
        "value": "password",
      }
    ]
  }
]
```
Si te das cuenta, tiene la misma estructura pero con ciertas modificaciones (ligeras por cierto). El `array` ahora contiene solo información del usuario cuyo correo electrónico es usuarioA@gmail.com. Esto se debe a que, verificando en cada elemento en `allowedEmails`, o es una expresión regular, una lista de correos electrónicos o un único correo electrónico.


En el segundo caso, si el usuario desea filtrar el contenido por el tipo de servicio (`kind`), por ejemplo `servicio A`, se devolevrá la información como sigue:

```
[
  {
    "kind": "servicio A",
    "spec": [
      {
        "name": "keyServA1",
        "description": "credenciales del servicio A.",
        "key": "user",
        "value": "password",
      },
      {
        "name": "keyServA2",
        "description": "credenciales del servicio A.",
        "key": "user",
        "value": "password",
      },
      {
        "name": "keyServA3",
        "description": "credenciales del servicio A",
        "key": "user",
        "value": "password",
      }s
    ]
  }
]
```
Así mismo, como te habrás dado cuenta, la información solo corresponde al usuario cuyo correo electrónico es `usuarioA@gmail.com`, y cuyo servicio es el especificado `servicio A`

Tu tarea está en generar una api amigable para solventar este filtro a través de http con método `GET` extendiendo el método actual con el segmento de la url `/data`.

# Entregables / Tiempo:
1. Código fuente zipeado y enviado a través del email o el enlace a un repositorio git (cualquier servicio en línea, el repo deberá tener acceso público)
2. Deberás entregar la solución parcial o total en um máximo de 72 horas a partir de que recibas el correo electrónico. En 72 horas no podrás hacerlo todo, ¿Verdad? o ¿Quizás sí? 

Nota: No te compliques la vida solo relájate y disfruta el tiempo de analizar y programar. Recuerda, no es un sistema que se pondrá a producción, por lo tanto no tiene que ser una implementación perfecta ni completa. 

Si tienes alguna duda, escribe a <david.nunez@ppm.com.ec> detallando tu duda y te responderémos lo más pronto posible.

Happy coding ;) 