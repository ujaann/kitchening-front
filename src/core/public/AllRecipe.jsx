import { Search } from "lucide-react";
import React from "react";
import { Card } from "../../components/Card";
import { use } from "react";
import { useParams } from "react-router-dom";

export const AllRecipe = () => {
    const {cuisine}=useParams();
    console.log(cuisine);
    
  return (
    <div className="sm:p-20 bg-peach h-full">
      <div className="bg-papayaWhip rounded-box shadow-md p-4">
        <div className="p-4 pb-2 text-lg opacity-60 tracking-wide">
          All Recipes
        </div>
        <label className="input flex items-center gap-3 opacity-80 md:mr-80 sm:mr-8 ml-8 my-8">
          <Search className="text-gray-500" />
          <input type="search" required placeholder="Search" />
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <Card title="Food" author="Ujan Sthapit" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"/>
          <Card title="Food" author="Ujan Sthapit" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"/>
          <Card title="Food" author="Ujan Sthapit" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"/>
          <Card title="Food" author="Ujan Sthapit" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"/>
          <Card title="Food" author="Ujan Sthapit" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"/>
          <Card title="Food" author="Ujan Sthapit" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"/>
        </div>
      </div>
    </div>
  );
};
