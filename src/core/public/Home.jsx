import React from "react";
// import Child1 from "./Child1";
import { useForm } from "react-hook-form";

import { Card } from "../../components/Card";
import { Hero } from "../../components/Hero";
// import { InfoContext } from '../context/InfoContext'

export const Home = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("age", data?.age);
    formData.append("file", data?.file[0]);
  };
  return (
    <>
      <div className="p-2 bg-peach">
        <Hero
          image="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          title="Pizza Mozzarella"
          desc="Newest Arrival for ujans food "
        />
        <h1 className="px-4 pt-4 text-2xl font-semibold">Breakfast</h1>
        <div className="flex p-4 gap-6">
          <Card title="Card 1" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" author="Author 1" />
          <Card title="Card 2" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" author="Author 2" />
          <Card title="Card 3" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" author="Author 3" />
        </div>
        <h1 className="px-4 pt-4 text-2xl font-semibold">Community Favourites</h1>
        <div className="flex p-4 gap-6">
          <Card title="Card 4" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" author="Author 4" />
          <Card title="Card 5" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" author="Author 5" />
          <Card title="Card 6" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" author="Author 6" />
        </div>

        <h1 className="px-4 pt-4 text-2xl font-semibold">Your Favourites</h1>
        <div className="flex p-4 gap-6">
          <Card title="Card 7" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" author="Author 7" />
          <Card title="Card 8" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" author="Author 8" />
          <Card title="Card 9" image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" author="Author 9" />
        </div>
      </div>
    </>
  );
};

// <form onSubmit={handleSubmit(submit)}>
//       <div>
//         <label>Name</label>
//         <input type='text' {...register("name")}/>
//       </div>

//       <div>
//         <label>Age</label>
//         <input type='number'{...register("age")}/>
//       </div>
//       <div>
//         <label>File</label>
//         <input type='file'{...register("file")}/>
//       </div>
//       <div>
//         <input type='submit'/>
//       </div>
//     </form>
