// import Container from "../Container";
// import Text from "../Text";
// import Title from "../Title";
import React, {useState} from "react";
import {A1LOGIN, LOGO_BLACK} from "../../assets/images";


interface IAuth {
  handleChange: (s:string) => void;
  handleSubmit: () => void
  error: boolean
}
const Auth = ({handleChange, handleSubmit, error}:IAuth) => {
  const [val, setVal] = useState('');

  const hc = (e:React.ChangeEvent<HTMLInputElement>) => {

    setVal(e.target.value)
    handleChange(e.target.value)
  }
  return (
    <>

        <div className="w-full mx-auto min-h-screen bg-[#212121]" >
          {/*<Title className="text-left">{'Login'}</Title>*/}
          {/* images section */}

          <div className="!block gap-5 md:w-mobile w-full mx-auto">
            <div>
              <img src={A1LOGIN.img} alt={A1LOGIN.alt} width="100%"/>
            </div>
            <div className=" w-[90%] mx-auto">
              <label id="password-id" htmlFor="password" className={`my-4 block text-white ${error && 'text-red-500'}`}
                     style={{marginBottom: '6px'}}>Password</label>
              <input style={{height: '50px', paddingInline: '10px'}}
                     className={`border-2 w-full block !min-h-5 bg-[#212121] ${error ? 'border-red-500 text-red-500' : 'border-white text-white'}`} id="password" value={val}
                     onChange={e => hc(e)}/>

              {error && <p className='text-red-500'>Password incorrect</p>}

              <button onClick={handleSubmit} className='bg-white flex items-center justify-center gap-5 text-black font-black text-xl w-full py-4 rounded-xl my-5'>Reveal <img src={LOGO_BLACK.img} alt={LOGO_BLACK.alt} width={50}/> Now</button>

              <p className="text-white text-center mt-10"> Kindly do not share this access as you may loose your access </p>
            </div>
          </div>

          {/* text section */}

        </div>

    </>
  );
};

export default Auth;
