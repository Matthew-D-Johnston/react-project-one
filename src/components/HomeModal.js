import { useState, useEffect } from "react";
import HomeInfoContainer from "./HomeInfoContainer";
import CompatibleLots from "./CompatibleLots";
import { formatAltAtts } from "../helpers/formatAltAtts";
import { API } from "../apiClient";

const HomeModal = ({ home, lots }) => {
  const [compatibleLots, setCompatibleLots] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await API.getCombinations();
      const compatibleLotIds = response
        .filter((obj) => obj.homePlanId === home.homePlanId)
        .map((obj) => obj.lotId);
      const selectedLots = lots.filter(({ lotId }) => {
        return compatibleLotIds.includes(lotId);
      });
      setCompatibleLots(selectedLots);
    })();
  }, [home.homePlanId, lots]);

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
      <CompatibleLots compatibleLots={compatibleLots} />
    </>
  );
};

export default HomeModal;
