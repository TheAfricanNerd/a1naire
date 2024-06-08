
import { useSearchParams } from "react-router-dom";
import Auth from "../../components/auth";
import {useState} from "react";
import Header from "../../components/header";
import CarGroup from "../../components/carGroup";
import HowItWorks from "../../components/howItWorks";
import UltraPilots from "../../components/ultraPilots";
import Vibrance from "../../components/Vibrance";
import Arival from "../../components/Arival";
import {NamePlate} from "../../components/NamePlate";
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


const KEY = "a1naire322"
const Homepage = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState(false)
  const offer = searchParams.get("membershipoffer");


  const reference = searchParams.get('ref')

  const handleChange = (e:string) => {

    setError(false)
  setPassword(e)
  }
  const handleSubmit = () => {
    if (password == KEY) {
      setIsLoggedIn(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
<>{
    !isLoggedIn ? <Auth handleChange={handleChange} handleSubmit={handleSubmit} error={error}/> : <>
        <Header/>
        <CarGroup/>
        <HowItWorks/>
        <UltraPilots/>
        <Vibrance/>
        <Arival/>
        <NamePlate/>
        <InnovativeConfigurations/>
        <Productivity/>
        <DynamicFreedom/>
        <BetterThanOwning/>
        <UltraLuxryYouDeserve/>
        <PaparazziMedia/>
        <Music/>
        <LimitedAdditions/>
        {/* bottom section */}
        <MyGallery reference={reference}/>
        {offer && offer == "1" && <MembershipCohort/>}
    </>
}</>
  );
};

export default Homepage;
