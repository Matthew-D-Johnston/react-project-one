const ACRES_TO_SQFT = 43560;

const LotInfoContainer = ({ lot }) => {
  const addressComponents = lot.address.split(",");
  const street = addressComponents[0];
  const cityState = addressComponents.slice(1).join(", ");
  const sqft = Math.ceil(lot.acres * ACRES_TO_SQFT);

  return (
    <div className="lotInfoContainer">
      <h2>{street}</h2>
      <p id="cityState">{cityState}</p>
      <p id="acreage">
        {lot.acres} acres - {sqft} sqft
      </p>
      <p className="lotDescription">{lot.description}</p>
    </div>
  );
};

export default LotInfoContainer;
