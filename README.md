
# Pizzeria API

Este proyecto es un servicio web que permite personalizar pizzas, seleccionar recetas preestablecidas y realizar pedidos con promociones dependiendo del día de la semana. Las promociones incluyen 2x1 en pizzas los martes y miércoles, y entrega gratuita los jueves.

## Endpoints

### 1. Crear una pizza personalizada

**URL:** `/api/pizzas/customize`  
**Método:** `POST`  
**Parámetros en el cuerpo de la solicitud:**

- `name` (string): Nombre de la pizza.
- `toppings` (array de strings): Ingredientes seleccionados.
- `size` (string): Tamaño de la pizza (`small`, `medium`, `large`).
- `price` (number): Precio de la pizza.

**Ejemplo de solicitud:**

```json
{
  "name": "Custom Pizza",
  "toppings": ["cheese", "pepperoni", "mushrooms"],
  "size": "medium",
  "price": 14.99
}
```

**Respuesta esperada:**

```json
{
  "status": 201,
  "pizza": {
    "name": "Custom Pizza",
    "toppings": ["cheese", "pepperoni", "mushrooms"],
    "size": "medium",
    "price": 14.99,
    "isPremade": false
  }
}
```

### 2. Obtener pizzas preestablecidas

**URL:** `/api/pizzas/premade`  
**Método:** `GET`  

**Respuesta esperada:**

```json
{
  "status": 200,
  "pizzas": [
    {
      "name": "Margherita",
      "toppings": ["cheese", "tomatoes", "basil"],
      "size": "medium",
      "isPremade": true,
      "price": 12.99
    },
    {
      "name": "Pepperoni",
      "toppings": ["cheese", "pepperoni"],
      "size": "large",
      "isPremade": true,
      "price": 15.99
    }
  ]
}
```

### 3. Crear un nuevo pedido

**URL:** `/api/orders/`  
**Método:** `POST`  
**Parámetros en el cuerpo de la solicitud:**

- `pizzas` (array de objetos): Detalles de las pizzas en el pedido basadas en el nombre de la pizza.
- `deliveryAddress` (string): Dirección de entrega.

**Ejemplo de solicitud:**

```json
{
  "pizzas": [
    {
      "name": "Custom Pizza",
      "quantity": 2
    },
    {
      "name": "Margherita",
      "quantity": 1
    }
  ],
  "deliveryAddress": "123 Calle Falsa, Ciudad"
}
```

**Respuesta esperada:**

```json
{
  "status": 201,
  "order": {
    "pizzas": [
      {
        "name": "Custom Pizza",
        "quantity": 2
      },
      {
        "name": "Margherita",
        "quantity": 1
      }
    ],
    "totalPrice": 40.97,
    "deliveryAddress": "123 Calle Falsa, Ciudad",
    "orderDate": "2023-11-20T12:00:00Z",
    "promotionApplied": "2x1"
  }
}
```

### 4. Inicializar pizzas preestablecidas

**URL:** `/api/pizzas/initialize`  
**Método:** `POST`  
**Descripción:** Este endpoint permite inicializar la base de datos con una selección de pizzas preestablecidas. Utiliza el patrón Command para encapsular la operación de inserción de datos, asegurando que el manejo de la lógica de negocio esté bien organizado y sea fácil de mantener conforme a los principios SOLID.

**Uso recomendado:** Ejecutar este endpoint antes de realizar pruebas o demos para asegurar que la base de datos contenga datos consistentes y listos para uso.

**Respuesta esperada:**

```json
{
  "status": 201,
  "message": "Pizzas preestablecidas creadas exitosamente."
}
```
