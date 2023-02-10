import HomeInfoContainer from "./HomeInfoContainer";
import { formatAltAtts } from "../helpers/formatAltAtts";


const HomeModal = ({ home }) => {
  return (
    <>
      <div className="modalImageContainer">
        <img src={home.image} alt={formatAltAtts(home.name)} />
      </div>
      <div className="modalInformationContainer">
        <HomeInfoContainer home={home} />
        <div>
          <button className="favoriteButton" id="true">
            <img src="../images/heart.png" alt="heart icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeModal;
