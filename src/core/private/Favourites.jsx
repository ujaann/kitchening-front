import { Loader, Search } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { AuthContext } from "../context/AuthContext";

export const Favourites = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authInfo: { userId } } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFavourites = recipes.filter((favourite) =>
    favourite.recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`/api/rating/user/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [userId]);

  if (loading) {
    return <div className='flex  w-screen h-screen '><Loader className="self-center size-30"/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="sm:p-20 bg-peach h-screen">
      <div className="bg-papayaWhip rounded-box shadow-md p-4">
        <div className="p-4 pb-2 text-lg opacity-60 tracking-wide">
          Favourites
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
          {filteredFavourites.length !== 0 ? (
            filteredFavourites.map((favourite) => (
              <Card
                key={favourite.recipe.id}
                id={favourite.recipe.id}
                title={favourite.recipe.title}
              />
            ))
          ) : (
            <div>No recipes found</div>
          )}
        </div>
      </div>
    </div>
  );
};
