import { useSearchParams } from "react-router-dom";
import Auth from "../../components/auth";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/header";
import CarGroup from "../../components/carGroup";
import HowItWorks from "../../components/howItWorks";
import UltraPilots from "../../components/ultraPilots";
import Vibrance from "../../components/Vibrance";
import Arival from "../../components/Arival";
import { NamePlate } from "../../components/NamePlate";
import InnovativeConfigurations from "../../components/InnovativeConfigurations";
import Productivity from "../../components/Productivity";
import DynamicFreedom from "../../components/DynamicFreedom";
import BetterThanOwning from "../../components/BetterThanOwning";
import UltraLuxryYouDeserve from "../../components/UltraLuxryYouDeserve";
import PaparazziMedia from "../../components/PaparazziMedia";
import Music from "../../components/Music";
import LimitedAdditions from "../../components/LimitedAdditions";
import MyGallery from "../../components/MyGallery";
import MembershipCohort from "../../components/MembershipCohort";
import { SupaBaseContext } from "../../database";

const KEY = import.meta.env.VITE_KEY;
const Homepage = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const offer = searchParams.get("membershipoffer");

  const { CreateUser, GetUser } = useContext(SupaBaseContext);

  const reference = searchParams.get("ref");

  const handleChange = (data: IRegData) => {
    setError(false);
    setPassword(data.password);
    setEmail(data.email);
    setPhone(data.phone);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const ok = await createUser();
      if (password == KEY && ok) {
        setIsLoggedIn(true);
        setError(false);
      } else if (!ok) {
        window.alert("trouble registering user");
      } else {
        setError(true);
      }
    } catch (err) {
      window.alert("something went wrong...");
    } finally {
      setLoading(false);
    }
  };

  const createUser = async () => {
    if (password !== KEY) return setError(true);
    const { data, error } = await CreateUser({
      email,
      phone,
    });

    if (error) {
      return 0;
    }
    console.log(data);
    return 1;
  };
  useEffect(() => {
    (async () => {
      const { data, error } = await GetUser();
      console.log({ data, error });
    })();
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        <Auth
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
          loading={loading}
        />
      ) : (
        <>
          <Header />
          <CarGroup />
          <HowItWorks />
          <UltraPilots />
          <Vibrance />
          <Arival />
          <NamePlate />
          <InnovativeConfigurations />
          <Productivity />
          <DynamicFreedom />
          <BetterThanOwning />
          <UltraLuxryYouDeserve />
          <PaparazziMedia />
          <Music />
          <LimitedAdditions />
          {/* bottom section */}
          <MyGallery reference={reference} />
          {offer && offer == "1" && <MembershipCohort />}
        </>
      )}
    </>
  );
};

export interface IRegData {
  email: string;
  phone: string;
  password: string;
}

export default Homepage;
