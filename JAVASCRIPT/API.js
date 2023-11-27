/* // URL de la API
const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";

function getMeals () {
    // Realiza la solicitud con fetch
fetch(apiUrl)
.then(response => {
  // Verifica si la solicitud fue exitosa (código de estado 200)
  if (!response.ok) {
    throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
  }
  // Convierte la respuesta a formato JSON
  return response.json();
})
.then(data => {
  // Trabaja con los datos, por ejemplo, imprime la lista de comidas
  data.meals.forEach(meal => {
    console.log(meal.strMeal);
  });
})
.catch(error => {
  // Maneja cualquier error que pueda ocurrir durante la solicitud
  console.error(`Error: ${error.message}`);
});
}
getMeals();  */

async function fetchAndDisplayData() {
    try {
      // URL de la API
      const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";
  
      // Realiza la solicitud con fetch
      const response = await fetch(apiUrl);
  
      // Verifica si la solicitud fue exitosa (código de estado 200)
      if (!response.ok) {
        throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
      }
  
      // Convierte la respuesta a formato JSON
      const data = await response.json();
  
      // Crea elementos HTML y los inserta en el body
      createAndAppendRecipeElements(data.meals);
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la solicitud
      console.error(`Error: ${error.message}`);
    }
  }

  // API.js

// ... (código para realizar la solicitud a la API)

// Función para crear y agregar elementos HTML con los datos de la API
function createAndAppendRecipeElements(meals) {
    // Obtén el contenedor donde deseas agregar las recetas (puedes ajustar el selector según tu estructura HTML)
    const recipesContainer = document.querySelector('.contenedor_recetas');
    let i=0;
    // Itera sobre las comidas y crea elementos HTML para cada una
    meals.forEach(meal => {
      if(i<9){
        const recipeElement = document.createElement('div');
      recipeElement.classList.add('receta');
  
      // Añade información de la receta al elemento
      recipeElement.innerHTML = `
      <h3 class='nombre_receta' >${meal.strMeal}</h3>
      <img class='imagen_receta' src="${meal.strMealThumb}" alt="${meal.strMeal}" style="height: 13rem;">
      
      
    `;
    
  
      
      
      recipesContainer.appendChild(recipeElement);
      i++;
      }
    });
  }
  
   fetchAndDisplayData();
  
  
/*   function createAndAppendElements(meals) {
    // Obtiene el body del documento
    const body = document.body;
  
    // Crea un contenedor para las comidas
    const mealsContainer = document.createElement('div');
    mealsContainer.classList.add('meals-container');
  
    // Itera sobre las comidas y crea elementos HTML para cada una
    meals.forEach(meal => {
      const mealElement = document.createElement('div');
      mealElement.classList.add('meal');
  
      // Añade información de la comida al elemento
      mealElement.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <p>${meal.strInstructions}</p>
      `;
  
      // Si hay ingredientes y medidas, añádelos también
      if (meal.strIngredient1 && meal.strMeasure1) {
        const ingredientsList = document.createElement('ul');
        ingredientsList.classList.add('ingredients-list');
  
        // Itera sobre los ingredientes y medidas y añádelos a la lista
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
  
          if (ingredient && measure) {
            const listItem = document.createElement('li');
            listItem.textContent = `${ingredient} - ${measure}`;
            ingredientsList.appendChild(listItem);
          }
        }
  
        // Añade la lista de ingredientes al elemento de la comida
        mealElement.appendChild(ingredientsList);
      }
  
      // Añade el elemento de la comida al contenedor principal
      mealsContainer.appendChild(mealElement);
    });
  
    // Añade el contenedor de comidas al body
    body.appendChild(mealsContainer);
  }
   */
  // Llama a la función principal
  
  