# API 1 - Catálogo de Productos

## Descripción

API REST desarrollada con MongoDB, Express y Node.js (MEN Stack) para la gestión de productos. Permite realizar operaciones CRUD (Crear, Consultar, Actualizar y Eliminar) sobre un catálogo de productos, incorporando controles básicos de seguridad y validación de datos.

## Objetivo

Desarrollar una API segura para la administración de productos aplicando buenas prácticas de programación, validación de datos y control de versiones mediante Git y GitHub.

---

## Tecnologías Utilizadas

* Node.js
* Express.js
* MongoDB
* Mongoose
* Express Validator
* Git
* GitHub
* Thunder Client

---

## Estructura del Proyecto

```text
api1-catalogo-productos
│
├── src
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── config
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` basado en `.env.example`.

Ejemplo:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/api1-catalogo-productos
```

### 4. Ejecutar el proyecto

```bash
node server.js
```

Servidor:

```text
http://localhost:3000
```

---

## Modelo Producto

```json
{
  "nombre": "Laptop Lenovo",
  "categoria": "Tecnologia",
  "precio": 15000,
  "descripcion": "Laptop para desarrollo web"
}
```

---

## Endpoints

### Obtener todos los productos

**GET**

```http
/api/productos
```

### Obtener producto por ID

**GET**

```http
/api/productos/:id
```

### Crear producto

**POST**

```http
/api/productos
```

Body:

```json
{
  "nombre": "Laptop Lenovo",
  "categoria": "Tecnologia",
  "precio": 15000,
  "descripcion": "Laptop para desarrollo web"
}
```

### Actualizar producto

**PUT**

```http
/api/productos/:id
```

### Eliminar producto

**DELETE**

```http
/api/productos/:id
```

---

## Controles de Seguridad Implementados

### Validación de tipos de datos

Se valida que:

* El nombre sea obligatorio.
* La categoría sea obligatoria.
* El precio sea numérico y mayor a cero.

### Validación de ObjectId

Se verifica que los identificadores enviados en las rutas cumplan con el formato ObjectId de MongoDB.

Ejemplo:

```json
{
  "mensaje": "ID de MongoDB inválido"
}
```

### Sanitización de cadenas

Se utilizan los métodos:

```javascript
.trim()
.escape()
```

para limpiar y sanitizar entradas de texto.

### Manejo de errores

La API devuelve mensajes claros cuando los datos enviados no cumplen las reglas establecidas.

---

## Evidencia de Desarrollo por Sprints

### Sprint 1

* Configuración inicial del proyecto MEN.
* Configuración de Git y GitHub.
* Conexión a MongoDB.

### Sprint 2

* Creación del modelo Producto.
* Implementación de endpoints GET y POST.

### Sprint 3

* Validaciones con Express Validator.

### Sprint 4

* Implementación de PUT y DELETE.
* CRUD completo.

### Sprint 5

* Validación de ObjectId.
* Sanitización de entradas.
* Controles de seguridad adicionales.

---

## Autor

Rosario Briones Vela

Universidad Tecnológica de la Riviera Nayarit

Materia: Seguridad en Aplicaciones Web
