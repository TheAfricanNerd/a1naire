import Header from "../../components/header";
import CarGroup from "../../components/carGroup";
import HowItWorks from "../../components/howItWorks";
import UltraPilots from "../../components/ultraPilots";
import Vibrance from "../../components/Vibrance";
import Arival from "../../components/Arival";
import InnovativeConfigurations from "../../components/InnovativeConfigurations";
import Productivity from "../../components/Productivity";
import DynamicFreedom from "../../components/DynamicFreedom";
import BetterThanOwning from "../../components/BetterThanOwning";
import PaparazziMedia from "../../components/PaparazziMedia";
import LimitedAdditions from "../../components/LimitedAdditions";
import UltraLuxryYouDeserve from "../../components/UltraLuxryYouDeserve";
import MembershipCohort from "../../components/MembershipCohort";
import MyGallery from "../../components/MyGallery";
import { NamePlate } from "../../components/NamePlate";
import { useSearchParams } from "react-router-dom";

const Homepage = () => {
  const [searchParams] = useSearchParams();
  const offer = searchParams.get("membershipoffer");

  return (
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
      <LimitedAdditions />
      {/* bottom section */}
      <MyGallery />
      {offer && offer == "1" && <MembershipCohort />}
    </>
  );
};

export default Homepage;
