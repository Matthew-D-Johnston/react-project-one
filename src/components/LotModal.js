import LotInfoContainer from "./LotInfoContainer";
import { formatAltAtts } from "../helpers/formatAltAtts";


const LotModal = ({ lot }) => {
  const street = lot.address.split(',')[0];

  return (
    <>
      <div className="modalImageContainer">
        <img src={lot.image} alt={formatAltAtts(street)} />
      </div>
      <div className="modalInformationContainer">
        <LotInfoContainer lot={lot} />
        <div>
          <button className="favoriteButton" id="false">
            <img src="../images/heart.png" alt="heart icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LotModal;
