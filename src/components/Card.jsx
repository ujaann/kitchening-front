import { Heart } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = ({ image, title, author }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={title} />
            </figure>
            <div className="card-body bg-caribeanCurrent text-white">
                <h2 className="card-title">{title}</h2>
                <p>Made By: {author}</p>
                <div className="card-actions justify-end">
                    <NavLink to="/some-route">
                        <button className="btn btn-circle bg-papayaWhip">
                            <Heart/>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
