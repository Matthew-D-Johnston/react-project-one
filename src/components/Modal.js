import HomeModal from "./HomeModal";
import LotModal from "./LotModal";

const Modal = ({ modalItem, setModalItem, compatibleItems }) => {
  return (
    <div id="modal-container">
      <div className="screen" onClick={() => setModalItem(null)}></div>
      <div id="modal">
        <div className="modalContainer">
          <div className="selectedCardContainer">
            {modalItem.homePlanId ? (
              <HomeModal home={modalItem} lots={compatibleItems} />
            ) : (
              <LotModal lot={modalItem} homes={compatibleItems} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
