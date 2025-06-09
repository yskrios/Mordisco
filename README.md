# 🍽️ App de Recetas - Proyecto para Agente

Este proyecto es una app simple de recetas. Permite ver recetas, buscar por nombre, ver detalles y marcar como favoritas.

---

## 🎯 Objetivo

Practicar desarrollo de componentes, manejo de estado, navegación entre pantallas y persistencia local.

---

## 📁 Estructura básica del proyecto sugerida

```
/src
  /components
    RecipeCard.tsx
    SearchBar.tsx
    CategoryFilter.tsx (opcional)
  /screens
    Home.tsx
    RecipeDetail.tsx
    Favorites.tsx
  /data
    recipes.json (si no se usa API)
  /utils
    filterRecipes.ts
    localStorage.ts
```

---

## ✅ Funcionalidades mínimas

- [ ] Mostrar lista de recetas (nombre + imagen)
- [ ] Crear componente `RecipeCard` reusable
- [ ] Implementar barra de búsqueda (case-insensitive)
- [ ] Mostrar detalle de receta (ingredientes e instrucciones)
- [ ] Agregar/remover favoritos con ícono ⭐
- [ ] Ver pantalla de favoritos
- [ ] Guardar favoritos en localStorage o AsyncStorage

---

## ➕ Funcionalidades extra (opcional)

- [ ] Filtro por categoría (desayuno, almuerzo...)
- [ ] Animaciones suaves (ej: al marcar como favorito)
- [ ] Persistencia avanzada (sincronizar con backend falso)
- [ ] Splash screen o loading al inicio
- [ ] Modo oscuro

---

## 🧪 Datos de prueba

Puedes usar la API de [TheMealDB](https://www.themealdb.com/api.php) o un archivo local `recipes.json` como este:

```json
[
  {
    "id": "1",
    "name": "Spaghetti Carbonara",
    "image": "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    "ingredients": ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    "instructions": "Boil pasta. Fry bacon. Mix with eggs and cheese.",
    "category": "Lunch"
  },
  {
    "id": "2",
    "name": "Pancakes",
    "image": "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
    "ingredients": ["Flour", "Milk", "Eggs", "Baking Powder"],
    "instructions": "Mix all ingredients and cook on a skillet.",
    "category": "Breakfast"
  }
]
```


