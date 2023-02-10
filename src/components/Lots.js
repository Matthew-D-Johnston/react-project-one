import Lot from "./Lot";

const Lots = ({ lots, setModalItem }) => {
  return (
    <div className="lotsContainer">
      <button className="button">Show Saved Lots</button>
      <div className="lotsList">
        {lots.map((lot) => {
          return <Lot key={lot.lotId} lot={lot} setModalItem={setModalItem} />;
        })}
      </div>
    </div>
  );
};

export default Lots;
