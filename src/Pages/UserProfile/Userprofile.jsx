import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Userprofile = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p className='text-center'>Loading...</p>;
    }

    return (
        <div className="flex flex-col items-center mt-10">
            {/* Check if user is available */}
            {user ? (
                <div className=" shadow-md p-6 rounded-lg">
                    {/* Display user avatar */}
                    <div className="mb-4">
                        <img
                            src={user.photoURL || 'https://via.placeholder.com/150'}
                            alt="User Avatar"
                            className="w-32 h-32 rounded-full"
                        />
                    </div>

                    {/* Display user name */}
                    <h2 className="text-2xl font-semibold mb-2">Name: {user.displayName || 'Anonymous User'}</h2>

                    {/* Display user email */}
                    <p className="text-lg text-gray-600">Email: {user.email}</p>

                    {/* Display other information if available */}
                    {user.phoneNumber && (
                        <p className="mt-4 text-gray-600">Phone: {user.phoneNumber}</p>
                    )}

                    {/* Display Logout button or additional controls */}
                    <Link to="/updateProfile" className=" hover:text-black mt-6 btn bg-emerald-500 text-white px-4 py-2 rounded-lg">
                        Edit Profile
                    </Link>
                </div>
            ) : (
                <p className="text-center text-gray-500">No user information available</p>
            )}
        </div>
    );
};

export default Userprofile;
