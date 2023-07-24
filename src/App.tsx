import { useState } from 'react';
import './app.css';
import CAR_INTERIOR from './assets/images/jpg/car_interior.jpeg';
import LOGO from './assets/images/png/a1naire-logo.png';

function App() {

  return (
    <>
     <section className='w-full relative'>
        {/* end of the text section */}
        <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] absolute'></div>

        {/* text section */}
        <div className='w-full h-full absolute flex items-center justify-center'>
          {/* inner hold */}
          <div className=" text-white flex flex-col gap-10 items-center w-2/3">
              <img alt="A1naire logo" src={LOGO}/>
              <h2 className='text-center font-semibold text-2xl md:w-1/2 w-full'>The world's first and only Ultra Luxurious Ride Hailing Service</h2>
              <p className='text-center'>It's coming...</p>
          </div>
        </div>


        <div className=''>
          <img className="w-full md:h-[100vh] h-[100vh] object-cover " alt="background car image" src={CAR_INTERIOR}/>
        </div>
     </section>
    </>
  )
}

export default App
