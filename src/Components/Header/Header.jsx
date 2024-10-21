import React from 'react';
import banner1 from '../../assets/banner/banner1.jpg';
import banner2 from '../../assets/banner/banner2.jpg';
import banner3 from '../../assets/banner/banner3.jpg';
import banner4 from '../../assets/banner/banner4.jpg';
import { FaSearch } from "react-icons/fa";


const SlideContent = ({ banner }) => (
    <div
        className="w-full h-full bg-cover bg-center"
        style={{
            backgroundImage: `url(${banner})`,
            height: "500px",
        }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold text-center">
                Find a home in a neighborhood you love.
            </h2>



            {(
                <div className="w-3/4 md:w-2/3 lg:w-1/2 relative">
                    <input
                        type="text"
                        placeholder="Search your home"
                        className="input input-bordered w-full p-4 pl-12 text-lg rounded-lg shadow-lg"
                    />
                    <FaSearch className="cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 text-xl" />
                </div>
            )}
        </div>
    </div>
);

const Header = () => {
    return (
        <div className="carousel w-full">

            {/* Slide 1 */}
            <div id="slide1" className="carousel-item max-h-[500px] relative w-full">


                <SlideContent banner={banner1} />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>


            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item max-h-[500px] relative w-full">
                <SlideContent banner={banner2} />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item max-h-[500px] relative w-full">
                <SlideContent banner={banner3} />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item max-h-[500px] relative w-full">
                <SlideContent banner={banner4} />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Header;
