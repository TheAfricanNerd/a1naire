// import Container from "../Container";
// import Text from "../Text";
// import Title from "../Title";
import React, {useState} from "react";

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
      <div>
        <div className="w-full mx-auto min-h-screen flex items-center justify-center" style={{height: '100svh'}}>
          {/*<Title className="text-left">{'Login'}</Title>*/}
          {/* images section */}
          <div className="!block gap-5 md:w-full w-mobile mx-auto">
            <div className="md:w-1/3 w-[96%] mx-auto">
              <label id="password-id" htmlFor="password" className={`my-4 block ${error && 'text-red-500'}`} style={{ marginBottom: '6px'}}>Password</label>
              <input style={{height: '50px', paddingInline: '10px'}} className={`border-2 w-full block !min-h-5 ${error && 'border-red-500'}`} id="password" value={val}
                      onChange={e => hc(e)}/>

              { error && <p className='text-red-500'>Password incorrect</p>}

              <button onClick={handleSubmit} className='bg-black text-white w-full py-4 rounded-xl my-5'>Login</button>
            </div>
          </div>

          {/* text section */}
          <div>
            {/*<Text>word</Text>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
