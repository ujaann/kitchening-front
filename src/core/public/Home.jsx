import React from "react";
import Child1 from "./Child1";
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
      <div className="p-2">
        <Hero
          image="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          title="Pizza Mozzarella"
          desc="Newest Arrival for ujans food "
        />
        <h1>Breakfast</h1>
        <div className="flex p-4 gap-6">
          <Card />
          <Card />
          <Card />
        </div>
        <h1>Community Favourites</h1>
        <div className="flex p-4 gap-6">
          <Card />
          <Card />
          <Card />
        </div>

        <h1>Your Favourites</h1>
        <div className="flex p-4 gap-6">
          <Card />
          <Card />
          <Card />
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
