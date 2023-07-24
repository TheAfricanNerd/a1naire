import { motion } from 'framer-motion';
import './app.css';
import CAR_INTERIOR from './assets/images/jpg/car_interior.jpeg';
import LOGO from './assets/images/png/a1naire-logo.png';
import { CHILD_ANIMATION, PARENT_ANIMATION } from './utils';

function App() {

  return (
    <>
     <motion.section className='w-full relative'
       variants={PARENT_ANIMATION()}
       initial="hidden"
       animate="visible"
     >
        {/* end of the text section */}
        <motion.div variants={CHILD_ANIMATION()} className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] absolute'></motion.div>

        {/* text section */}
        <div className='w-full h-full absolute flex items-center justify-center'>
          {/* inner hold */}
          <motion.div variants={PARENT_ANIMATION({delayChild: 0.1, staggerChild: 1.2})} className=" text-white flex flex-col gap-6 items-center md:w-2/3 w-[80%]">
              <motion.img variants={CHILD_ANIMATION({delayChild: 1.3})} alt="A1naire logo" src={LOGO}/>
              <motion.h2 variants={CHILD_ANIMATION({delayChild: 1.8})} className='text-center font-semibold text-2xl md:w-1/2 w-full'>The world's first and only Ultra Luxurious Ride Hailing Service</motion.h2>
              <motion.p variants={CHILD_ANIMATION({delayChild: 2})} className='text-center font-semibold text-xl'>It's coming...</motion.p>
          </motion.div>
        </div>


        <div className=''>
          <img className="w-full md:h-[100vh] h-[100vh] object-cover md:object-[50%] object-[85%]" alt="background car image" src={CAR_INTERIOR}/>
        </div>
     </motion.section>
    </>
  )
}

export default App
