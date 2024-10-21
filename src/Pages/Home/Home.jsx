import React from 'react';
import Header from '../../Components/Header/Header';
import { useLoaderData } from 'react-router-dom';
import HouseCard from '../../Components/House/HouseCard';
import NavBar from '../../Components/NavBar/NavBar';

const Home = () => {
    const data = useLoaderData();


    return (
        <div>

            <Header></Header>

            <div className='mt-10'>

                <h1 className='text-5xl text-center mb-10'>Our Houses</h1>


                <div className='grid grid-cols-1 md:grid-rows-2 lg:grid-cols-3 gap-4'>
                    {
                        data.map(item => <HouseCard
                            key={item.id}
                            item={item}
                        >

                        </HouseCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;