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
      We are the world's first ride hailing service that allows you to pick the
      Ultra-Luxury vehicle of your choice for each ride. This allows an
      amazingly distinguished experience of arriving in one Ultra-Luxury vehicle
      and leaving in another. On any given day, you have the opportunity to ride
      at least 15 of the world's most Ultra-Luxurious vehicles,
      <br />
      <Link
        to="https://tunjiafonja.com/execrider/website/100uniquecarexperiences.html"
        className=" text-blue-500"
      >
        With over 100 unique car.
      </Link>
    </p>
  ),
};
