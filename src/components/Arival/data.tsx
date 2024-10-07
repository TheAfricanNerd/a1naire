import { Link } from "react-router-dom";
import { ARIVE_MAY, LEAVE_FERR } from "../../assets/images";

export default {
  title: (
    <span className="block">
      A Unique Arrival <br />
      and Departure
    </span>
  ),
  images: [ARIVE_MAY, LEAVE_FERR],
  text: (
    <p>
      Our upcoming ride hailing service allows you to pick the Ultra-Luxury
      vehicle of your choice for each ride, a world’s first. This allows an
      amazingly distinguished experience of arriving in one Ultra-Luxury vehicle
      and leaving in another. Once at scale, you will have the opportunity to
      ride at least 15 of the world's most Ultra-Luxurious vehicles,{" "}
      <Link to="/car-experience" className=" text-blue-500">
        {/* <Link
        to="https://tunjiafonja.com/execrider/website/100uniquecarexperiences.html"
        className=" text-blue-500"
      > */}
        with over 50 unique car experiences on any given day.
      </Link>
    </p>
  ),
};
