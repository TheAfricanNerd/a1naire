// import Container from "../Container";
// import Text from "../Text";
// import Title from "../Title";
import React, { useState } from "react";
import { A1LOGIN, LOGO_BLACK } from "../../assets/images";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { IRegData } from "../../views/Homepage";

interface IAuth {
  handleChange: (s: IRegData) => void;
  handleSubmit: () => void;
  error: boolean;
  loading: boolean;
}
const Auth = ({ handleChange, handleSubmit, error, loading }: IAuth) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const hc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    handleChange({ email, phone, password: e.target.value });
  };

  const handlePhone = (value: string) => {
    if (!/^\d{10}$/.test(value.replace(/\D/g, ""))) {
      // window.alert("please provide a valid phone number");
      return;
    }

    setPhone(value);
    handleChange({ email, phone: value, password });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    handleChange({ email: e.target.value, phone, password });
  };
  return (
    <>
      <div className="w-full mx-auto min-h-screen bg-[#212121]">
        {/*<Title className="text-left">{'Login'}</Title>*/}
        {/* images section */}

        <div className="!block gap-5 md:w-mobile w-full mx-auto">
          <div>
            <img src={A1LOGIN.img} alt={A1LOGIN.alt} width="100%" />
          </div>
          <div className=" w-[90%] mx-auto">
            <>
              <label
                id="passkey-id"
                htmlFor="passkey"
                className={`my-4 block text-white ${error && "text-red-500"}`}
                style={{ marginBottom: "6px" }}
              >
                Password
              </label>
              <input
                style={{ height: "50px", paddingInline: "10px" }}
                className={`border-2 w-full block !min-h-5 bg-[#212121] ${
                  error
                    ? "border-red-500 text-red-500"
                    : "border-white text-white"
                }`}
                id="passkey"
                value={password}
                onChange={(e) => hc(e)}
              />
            </>

            {error && <p className="text-red-500">Passcode incorrect</p>}

            <>
              <label
                id="email-id"
                htmlFor="email"
                className={`my-4 block text-white ${error && "text-red-500"}`}
                style={{ marginBottom: "6px" }}
              >
                Your email
              </label>
              <input
                style={{ height: "50px", paddingInline: "10px" }}
                className={`border-2 w-full block !min-h-5 bg-[#212121] border-white text-white`}
                id="email"
                value={email}
                onChange={(e) => handleEmail(e)}
              />
            </>

            <>
              <label
                id="phone-id"
                htmlFor="phone"
                className={`my-4 block text-white ${error && "text-red-500"}`}
                style={{ marginBottom: "6px" }}
              >
                Your phone number
              </label>

              <PhoneInput
                inputStyle={{
                  height: "50px",
                  width: "100%",
                  backgroundColor: "transparent",
                }}
                containerClass="border-2 w-full block !min-h-5 bg-[#212121] border-white text-white"
                country={"us"}
                value={phone}
                onChange={handlePhone}
              />
              {/* <input
                style={{ height: "50px", paddingInline: "10px" }}
                className={`border-2 w-full block !min-h-5 bg-[#212121] ${
                  error
                    ? "border-red-500 text-red-500"
                    : "border-white text-white"
                }`}
                id="phone"
                value={phone}
                onChange={(e) => handlePhone(e)}
              /> */}
            </>

            <button
              disabled={loading}
              onClick={handleSubmit}
              className="bg-white flex items-center justify-center gap-5 text-black font-black text-xl w-full py-4 rounded-xl my-5"
            >
              {loading ? (
                <>
                  Loading{" "}
                  <img src={LOGO_BLACK.img} alt={LOGO_BLACK.alt} width={50} />{" "}
                </>
              ) : (
                <>
                  Reveal{" "}
                  <img src={LOGO_BLACK.img} alt={LOGO_BLACK.alt} width={50} />{" "}
                  Now
                </>
              )}
            </button>

            <p className="text-white text-center mt-5">
              {" "}
              Kindly do not share this access as you may lose your access{" "}
            </p>
          </div>
        </div>

        {/* text section */}
      </div>
    </>
  );
};

export default Auth;
