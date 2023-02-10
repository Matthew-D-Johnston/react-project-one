import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { API } from '../apiClient';
import CompatibleLots from "./CompatibleLots";
import CompatibleHomes from "./CompatibleHomes";
import HomeModal from "./HomeModal";
import LotModal from "./LotModal";

const Modal = ({ isHome, homes, lots, id, combinations }) => {
  
  const navigate = useNavigate();

  let item;
  let compatibleItems = [];

  if (isHome) {
    item = homes.find(h => h.homePlanId === +id);
      const compatibleLotIds = combinations
          .filter((obj) => obj.homePlanId === +id)
          .map((obj) => obj.lotId);
          compatibleItems = lots.filter((lot) => {
          return compatibleLotIds.includes(lot.lotId);
        });
  } else {
    item = lots.find(l => l.id === +id);
            const compatibleHomeIds = combinations
          .filter((obj) => obj.lotId === +id)
          .map((obj) => obj.lotId);
        compatibleItems = homes.filter((home) => {
          return compatibleHomeIds.includes(home.homePlanId);
        });
  }

  if (!item) return null;

  // useEffect(() => {
  //   if (modalItem.homePlanId) {
  //     (async () => {
  //       const response = await API.getCombinations();
  //       const compatibleLotIds = response
  //         .filter((obj) => obj.homePlanId === modalItem.homePlanId)
  //         .map((obj) => obj.lotId);
  //       const selectedLots = items.filter((lot) => {
  //         return compatibleLotIds.includes(lot.lotId);
  //       });
  //       setCompatibleItems(selectedLots);
  //     })();
  //   } else {
  //     (async () => {
  //       const response = await API.getCombinations();
  //       const compatibleHomeIds = response
  //         .filter((obj) => obj.lotId === modalItem.lotId)
  //         .map((obj) => obj.lotId);
  //       const selectedHomes = items.filter((home) => {
  //         return compatibleHomeIds.includes(home.homePlanId);
  //       });
  //       setCompatibleItems(selectedHomes);
  //     })();
  //   }
  // }, [items, modalItem.homePlanId, modalItem.lotId]);

  // const handleModalBackgroundClick = () => {
  //   setModalItem(null);
  //   navigate(-1);
  // }

  const handleBlur = () => {
    if (isHome) {
      navigate("/homes")
    } else {
      navigate("/lots")
    }
  } 
  return (
    <div id="modal-container">
      <div className="screen" onClick={handleBlur}></div>
      <div id="modal">
        <div className="modalContainer">
          <div className="selectedCardContainer">
            {isHome ? (
              <HomeModal home={item} />
            ) : (
              <LotModal lot={item} />
            )}
          </div>
            {isHome ? (
              <CompatibleLots compatibleLots={compatibleItems} />
            ) : (
              <CompatibleHomes compatibleHomes={compatibleItems} />
            )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
