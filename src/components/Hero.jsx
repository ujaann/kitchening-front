import React, { Component } from "react";
/**
 * 
 * @param {String} image enter image path or smth
 * @param {String} title enter hero title
 * @param {String} desc enter hero description try to keep it to max 3 lines
 * @param {Function} action somekind of function to call
 * @returns {Component}
 */
export const Hero = ({ image, title, desc, action }) => {
  return (
    <div className="hero bg-base-200 min-h-96">
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
          <p className="py-6">
            {desc}
          </p>
          <button className="btn btn-primary" onClick={action}>Get Started</button>
        </div>
      </div>
    </div>
  );
};
