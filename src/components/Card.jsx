import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Card = ({ title, image, author, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${id}`);
    };

    return (
        <div className="card lg:card-side bg-papayaWhip shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Album" />
            </figure>
            <div className="bg-caribeanCurrent text-white card-body">
                <h2 className="card-title">{title}</h2>
                <p>Made By: {author}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-circle bg-papayaWhip" onClick={handleClick}>
                        <ArrowRight/>
                    </button>
                </div>
            </div>
        </div>
    );
};
