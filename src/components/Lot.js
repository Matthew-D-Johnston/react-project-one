import { Link } from "react-router-dom";

import LotInfoContainer from "./LotInfoContainer";
import { formatAltAtts } from "../helpers/formatAltAtts";

const Lot = ({ lot, setModalItem }) => {
  const street = lot.address.split(",")[0];

  return (
    <Link to={`?lot=${lot.lotId}`} onClick={() => setModalItem(lot)}>
      <div className="cardContainer">
        <div className="cardImageContainer">
          <img src={lot.image} alt={formatAltAtts(street)} />
          <div>
            <button className="favoriteButton" id="false">
              <img src="./images/heart.png" alt="heart icon" />
            </button>
          </div>
        </div>
        <LotInfoContainer lot={lot} />
      </div>
    </Link>
  );
};

export default Lot;
