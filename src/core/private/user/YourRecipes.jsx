import React from 'react';

const YourRecipes = ({ recipes, onAddRecipe, onRemoveRecipe }) => {
    return (
        <div>
            <h2>Your Recipes</h2>
            <ul>
                {/* {recipes.map((recipe, index) => (
                    <li key={index}>
                        {recipe.name}
                        <button onClick={() => onRemoveRecipe(index)}>Remove</button>
                    </li>
                ))} */}
            </ul>
            <button onClick={onAddRecipe}>Add Recipe</button>
        </div>
    );
};

export default YourRecipes;