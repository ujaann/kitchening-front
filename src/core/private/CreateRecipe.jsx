import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/logo.svg";
import { AuthContext } from "../context/AuthContext";

export const CreateRecipe = () => {
const { authInfo: { userId, username,token } } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([
    { ingredientName: "", quantity: "", measurement: "" },
  ]);
  const [steps, setSteps] = useState([""]);
  const [cuisine, setCuisine] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);

  const handleCreateRecipe = async () => {
    const recipeData = {
      title,
      cuisine,
      ingredients,
      steps,
      public: isPublic,
      image: imageName,
      author: {
        id: userId,
        username: username,
      },
    };

    const response = await fetch("/api/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    });

    if (response.ok) {
      toast.success("Recipe created successfully.");
    } else {
      toast.error("Failed to create recipe. Please try again.");
    }
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { ingredientName: "", quantity: "", measurement: "" },
    ]);
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const removeStep = (index) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("recipePicture", file);

    const response = await fetch("/api/recipe/uploadImage", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      setImageName(data.file);
      toast.success("Image uploaded successfully.");
    } else {
      toast.error("Failed to upload image. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-peach">
      <ToastContainer />

      <div className=" flex flex-col border-2 p-8 rounded gap-2 shadow-lg mx-14 mt-4 my-14 sm:m-4 bg-papayaWhip">
        <div className="text-lg font-semibold">Create Recipe</div>

        {/* Recipe Title */}
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

        <div className="flex justify-evenly gap-6">
          <div className="flex items-center gap-2">
            Cuisine
            <select
              value={cuisine}
              className="select"
              onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="">Select Cuisine</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option>
              <option value="Thai">Thai</option>
              <option value="American">American</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            Public
            <input
              type="checkbox"
              className="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
          </div>
          <fieldset className="fieldset flex flex-col items-center gap-2">
            <legend className="fieldset-legend">Pick a image</legend>
            <input type="file" className="file-input file-input-warning" onChange={handleImageChange} />
            <label className="fieldset-label">Max size 2MB</label>
          </fieldset>
        </div>

        {/* Ingredients & Steps - Side by Side */}
        <div className="flex flex-nowrap justify-between gap-x-6 mt-4 w-full">
          {/* Ingredients Section */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Ingredient Name"
                  value={ingredient.ingredientName}
                  onChange={(e) =>
                    handleIngredientChange(
                      index,
                      "ingredientName",
                      e.target.value
                    )
                  }
                  className="input input-bordered w-1/3"
                />
                <input
                  type="text"
                  placeholder="Quantity"
                  value={ingredient.quantity}
                  onChange={(e) =>
                    handleIngredientChange(index, "quantity", e.target.value)
                  }
                  className="input input-bordered w-1/4"
                />
                <input
                  type="text"
                  placeholder="Measurement"
                  value={ingredient.measurement}
                  onChange={(e) =>
                    handleIngredientChange(index, "measurement", e.target.value)
                  }
                  className="input input-bordered w-1/4"
                />
                <button
                  onClick={() => removeIngredient(index)}
                  className="btn btn-error"
                >
                  Remove
                </button>
              </div>
            ))}
            <button onClick={addIngredient} className="btn btn-success mt-2">
              Add Ingredient
            </button>
          </div>

          {/* Steps Section */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2">Steps</h2>
            {steps.map((step, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Step ${index + 1}`}
                  value={step}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  className="input input-bordered flex-1"
                />
                <button
                  onClick={() => removeStep(index)}
                  className="btn btn-error"
                >
                  Remove
                </button>
              </div>
            ))}
            <button onClick={addStep} className="btn btn-success mt-2">
              Add Step
            </button>
          </div>
        </div>

        {/* Create Recipe Button */}
        <button
          className="btn bg-caribeanCurrent text-white mt-4"
          onClick={handleCreateRecipe}
        >
          Create Recipe
        </button>
      </div>
    </div>
  );
};
