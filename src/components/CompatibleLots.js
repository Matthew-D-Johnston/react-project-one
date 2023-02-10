import { Link } from 'react-router-dom';
import { formatAtlAtts } from '../helpers/formatAltAtts';

const CompatibleLots = ({ compatibleLots }) => {
  return (
    <div className="compatibleOptionsContainer">
        <div id="compatibleOptionsTitle">
            <p>Compatible Lots</p>
        </div>
    {compatibleLots && (
      compatibleLots.map(lot => {
        const street = lot.address.split(',')[0];

        return (
          <div className="compatibleOptionsList">
          <Link to={`/lots?lot=${lot.lotId}`}>
          <div className="cardContainer">
          <div className="cardImageContainer"><img src={lot.image} alt={formatAltAtts(street)} />
          <div><button className="favoriteButton" id="false"><img src="../images/heart.png" alt="heart icon" /></button></div>
          </div>
          <div className="lotInfoContainer">
          <h2>123 Example Ln</h2>
          <p id="cityState"> Charlotte, NC</p>
          <p id="acreage">1.6 acres - 69,696 sqft</p>
          <p className="lotDescription">This sprawling lot is located on the outskirts of Charlotte, with nearby
          boat access to Example Lake and a straight shot to downtown Charlotte via Example Highway.</p>
          </div>

        )
      })
    )}
    </div>

  )
};

export default CompatibleLots;
