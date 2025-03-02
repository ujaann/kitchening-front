import { ArrowRight } from 'lucide-react';
import React from 'react';

export const Card = ({ title, image, author,id }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Album" />
            </figure>
            <div className="bg-caribeanCurrent text-white card-body">
                <h2 className="card-title">{title}</h2>
                <p>Made By: {author}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-circle bg-papayaWhip">
                        <ArrowRight/>
                    </button>
                </div>
            </div>
        </div>
    );
};
