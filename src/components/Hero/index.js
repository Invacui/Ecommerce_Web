import React from 'react'
import backgroundImage from '../../Drawables/1.jpg'; // Import the background image
const Hero = () => {
    return (
        <main
  className="container px-5 py-0 mx-auto"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'auto',
    height: '850px',
    width: 'auto',
    backgroundRepeat: 'no-repeat',
    borderEndEndRadius: '55px',
    borderEndStartRadius: '55px',
    background: `linear-gradient(to right, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%),
            linear-gradient(to left, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%),
            url(${backgroundImage})`,

    
  }}
>
            <header >
                <div className="relative z-20 flex items-center overflow-hidden ">
                    <div className="container relative flex px-8 py-24 mx-auto">
                        <div className="relative z-10 flex flex-col sm:w-2/3 lg:w-2/5">

                            <h1 className="text-red-600 text-9xl font-extrabold ">
                                <i>Shop</i>
                                <br/>
                                <span className="text-9xl sm:text-9xl">
                                <i>Now</i>
                                </span>
                            </h1>
                            <div className="flex mt-8">
                                <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400 toggle-dark font-bold">
                                    Get started
                                </a>
                                <a href="#" className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-pink hover:bg-white-500 hover:text-pink-500 text-md font-bold">
                                    Read more
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </header>

        </main>

    )
}

export default Hero