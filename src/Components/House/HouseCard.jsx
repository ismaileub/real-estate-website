import React from 'react';
import { Link } from 'react-router-dom';


const HouseCard = ({ item }) => {

    const { id, image, estate_title, description } = item;

    return (
        <div>

            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img className='w-full h-60'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <div className="card-actions  justify-end">
                        <Link to={`/houseDetails/${id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;