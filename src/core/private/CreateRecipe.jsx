import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/logo.svg";

export const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [image, setImage] = useState(null);

  const handleCreateRecipe = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("ingredients", ingredients);
    formData.append("cuisine", cuisine);
    formData.append("isPublic", isPublic);
    if (image) {
      formData.append("image", image);
    }

    const response = await fetch("/api/recipe/create", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      toast.success("Recipe created successfully.");
    } else {
      toast.error("Failed to create recipe. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-peach">
      <ToastContainer />
      <div>
        <img src={Logo} className="max-sm:hidden" />
      </div>
      <div className="w-2/5 flex flex-col border-2 p-8 rounded gap-2 shadow-lg mx-14 mt-4 my-14 sm:m-4 bg-papayaWhip">
        <div className="text-lg font-semibold">Create Recipe</div>
        <div>
          Recipe Title
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          Ingredients
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </label>
        </div>
        <div>
          Cuisine
          <label className="input input-bordered flex items-center gap-2">
            <select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="">Select Cuisine</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="Mexican">Mexican</option>
              <option value="Thai">Thai</option>
              <option value="Japanese">Japanese</option>
            </select>
          </label>
        </div>
        <div>
          Public
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
          </label>
        </div>
        <div>
          Image
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>
        <button className="btn bg-caribeanCurrent text-white" onClick={handleCreateRecipe}>
          Create Recipe
        </button>
      </div>
    </div>
  );
};
