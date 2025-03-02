import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../../components/Card";
import { Hero } from "../../components/Hero";
import { AuthContext } from "../context/AuthContext";
import { Loader } from "lucide-react";

export const Home = () => {
  const { register, handleSubmit } = useForm();
  const {
    authInfo: { userId },
  } = useContext(AuthContext);
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);
  const [communityFavourites, setCommunityFavourites] = useState([]);
  const [yourFavourites, setYourFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const communtiyResponse = await fetch("/api/recipe");

        if (!communtiyResponse.ok) {
          throw new Error("Network response was not ok");
        }

        if (userId) {
          const yourFavouritesResponse = await fetch(
            `/api/rating/user/${userId}`
          );
          if (!yourFavouritesResponse.ok) {
            throw new Error("Network response was not ok");
          }
          console.log(yourFavouritesResponse);
          const yourFavouritesData = await yourFavouritesResponse.json();
          console.log(yourFavouritesData);
          

          
          setYourFavourites(yourFavouritesData);
        }
        let communityFavouritesData = await communtiyResponse.json();
        const recipeData = communityFavouritesData;
        // Sort community favourites by like count
        recipeData.sort((a, b) => b.likeCount - a.likeCount);
        communityFavouritesData.sort((a, b) => b.likeCount - a.likeCount);
        communityFavouritesData = communityFavouritesData.filter(
          (recipe) => recipe.cuisine === "Italian"
        );

        setBreakfastRecipes(recipeData);
        setCommunityFavourites(communityFavouritesData);

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div className='flex  w-screen h-screen  bg-peach'><Loader className=" self-center size-30"/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="p-2 bg-peach">
        {communityFavourites.length > 0 && (
          <Hero
            image={`http://localhost:5000/api/recipe/getRecipeImage/${communityFavourites[0].image}`}
            title={communityFavourites[0].title}
            desc={` Likes : ${communityFavourites[0].likeCount}`}
            id={communityFavourites[0]._id} // Pass the recipe ID
          />
        )}
        <h1 className="px-4 pt-4 text-2xl font-semibold">Breakfast</h1>
        <div className="flex p-4 gap-6">
          {breakfastRecipes.map((recipe) => (
            <Card
              key={recipe._id}
              id={recipe._id}
              title={recipe.title}
              // author={recipe.author.username}
              image={`http://localhost:5000/api/recipe/getRecipeImage/${recipe.image}`}
            />
          ))}
        </div>
        <h1 className="px-4 pt-4 text-2xl font-semibold">
          Community Favourites
        </h1>
        <div className="flex p-4 gap-6">
          {communityFavourites.map((recipe) => (
            <Card
              key={recipe._id}
              id={recipe._id}
              title={recipe.title}
              // author={recipe.author.username}
              image={`http://localhost:5000/api/recipe/getRecipeImage/${recipe.image}`}
            />
          ))}
        </div>
        {yourFavourites.length > 0 && (
          <>
            <h1 className="px-4 pt-4 text-2xl font-semibold">Your Favourites</h1>
            <div className="flex p-4 gap-6">
              {yourFavourites.map((faborite) => (
                <Card
                  key={faborite.recipe.id}
                  id={faborite.recipe.id}
                  title={faborite.recipe.title}
                  // image={`http://localhost:5000/api/recipe/getRecipeImage/${recipe.image}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
