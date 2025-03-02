import { Heart } from "lucide-react";
import React from "react";
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @param {String} image enter image path or smth
 * @param {String} title enter hero title
 * @param {String} desc enter hero description try to keep it to max 3 lines
 * @param {String} id enter recipe id
 * @returns {Component}
 */
export const Hero = ({ image, title, desc, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="hero bg-papayaWhip min-h-96">
      <div className="hero-content flex-col lg:flex-row z-auto">
        <div className="w-[50%] lg:w-full">
        <img
          src={image}
          alt="hero"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          className="rounded-lg shadow-2xl"
        />

        </div>
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6 flex text-lg font-semibold items-center gap-3">
            {desc} <Heart className="size-10"/>
          </p>
          <button className="btn bg-caribeanCurrent text-white" onClick={handleClick}>Get Started</button>
        </div>
      </div>
    </div>
  );
};
