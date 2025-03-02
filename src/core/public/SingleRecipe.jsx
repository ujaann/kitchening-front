import { Loader } from "lucide-react";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const SingleRecipe = () => {
  const { authInfo } = useContext(AuthContext);
  const { userId, username } = authInfo || {}; // Destructure with fallback
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipe/${recipeId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipe(data);
        setLikeCount(data.likeCount);
      } catch (error) {
        setError(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/rating/recipe/${recipeId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, username }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLikeCount(data.likeCount);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    }
  };

  if (loading) return <div className='flex  w-screen h-screen '><Loader className="self-center size-30"/></div>;
  if (!recipe) return <div>No recipe found</div>;

  return (
    <div className="p-6 bg-papayaWhip shadow-lg rounded-lg h-full">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>
      <p className="text-gray-600">By: {recipe.author.username}</p>

      {/* Image Handling */}
      {recipe.image ? (
        <img
          src={`http://localhost:5000/api/recipe/getRecipeImage/${recipe.image}`}
          alt={recipe.title}
          className="w-full max-w-md my-4 rounded-lg shadow-md"
        />
      ) : (
        <p className="text-gray-500 italic my-4">No image available</p>
      )}

      {/* Ingredients */}
      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc pl-5">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient._id} className="text-gray-700">
            {ingredient.quantity} {ingredient.measurement} {ingredient.item}
          </li>
        ))}
      </ul>

      {/* Instructions */}
      <h2 className="text-xl font-semibold mt-6">Instructions</h2>
      <ol className="list-decimal pl-5 space-y-2">
        {recipe.steps.map((step, index) => (
          <li key={index} className="text-gray-700">
            {step}
          </li>
        ))}
      </ol>

      {/* Likes & Metadata */}
      <p className="mt-6 text-gray-500">Likes: {likeCount}</p>
      <button
        onClick={handleLike}
        className={`mt-2 px-4 py-2 ${userId?"bg-caribeanCurrent":"bg-gray-400"} text-white rounded-lg shadow-md`}
        disabled={!userId} // Disable button if no userId
      >
        Like
      </button>
      <p className="text-gray-400 text-sm">Last updated: {new Date(recipe.updatedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default SingleRecipe;
