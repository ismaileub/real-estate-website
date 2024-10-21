import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const HouseDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const item = data.find(n => n.id === parseInt(id));

    if (!item) {
        return <div>House not found</div>;
    }

    // Destructure the necessary fields from the item
    const { image, estate_title, description, price, status, area, location, facilities } = item;

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="hero border bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto">

                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img
                        src={image}
                        alt={estate_title}
                        className="lg:max-w-xl rounded-lg shadow-2xl object-cover" />

                    <div className="space-y-4">

                        <h2 className="text-3xl font-bold text-gray-800">{estate_title}</h2>


                        <p className="text-lg text-gray-600">{description}</p>


                        <p className="text-xl font-semibold text-green-600">Price: {price}</p>


                        <p className={`text-lg font-semibold ${status === 'sale' ? 'text-blue-500' : 'text-yellow-500'}`}>
                            Status: {status.charAt(0).toUpperCase() + status.slice(1)}
                        </p>


                        <p className="text-lg text-gray-600">Area: {area}</p>


                        <p className="text-lg text-gray-600">Location: {location}</p>


                        <div>
                            <h4 className="text-lg font-bold text-gray-800">Facilities:</h4>
                            <ul className="list-disc ml-6 text-gray-600">
                                {facilities.map((facility, index) => (
                                    <li key={index}>{facility}</li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseDetails;
