import { Loader, Search } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const YourRecipes = () => {
    const {authInfo:{userId}} = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`api/recipe`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        setRecipes(data.filter((recipe) =>
            recipe.author.id===userId
          ));
      } catch (error) {
        console.error(error);
        setError(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div className='flex w-screen h-screen'><Loader className="self-center size-30" /></div>;
  }

  return (
    <div className="sm:p-20 bg-peach h-screen">
      <ToastContainer />
      <div className="bg-papayaWhip rounded-box shadow-md p-4">
        <div className="p-4 pb-2 text-lg opacity-60 tracking-wide">
          Your Recipes
        </div>
        <label className="input flex items-center gap-3 opacity-80 md:mr-80 sm:mr-8 ml-8 my-8">
          <Search className="text-gray-500" />
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            required
            placeholder="Search"
          />
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {filteredRecipes.length !== 0 ? (
            filteredRecipes.map((recipe) => (
              <Card
                key={recipe._id}
                id={recipe._id}
                title={recipe.title}
                author={recipe.author.username}
                image={`http://localhost:5000/api/recipe/getRecipeImage/${recipe.image}`}
                
              />
            ))
          ) : (
            <div>No recipes found</div>
          )}
        </div>
        <Link to="/create-recipe" className="mt-4 btn bg-caribeanCurrent text-white p-2">
          Add Recipe
        </Link>
      </div>
    </div>
  );
};

export default YourRecipes;