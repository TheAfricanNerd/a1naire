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

const index = () => {
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
      <MembershipCohort />
    </>
  );
};

export default index;
