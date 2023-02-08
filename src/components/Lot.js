import { Link } from 'react-router-dom';

import { formatAltAtts } from '../helpers/formatAltAtts';

const Lot = ({ lot }) => {
  return (
    <Link to={`?lot=${lot.lotId}`}>
      <div className="cardContainer">
        <div className="cardImageContainer">
          <img src={lot.image} alt={formatAltAtts(lot.address, 'lot')} />
          <div>
            <button class="favoriteButton" id="false">
              <img src="./images/heart.png" alt="heart icon" />
            </button>
          </div>
        </div>
        <div className="lotInfoContainer">
          <h2></h2>
          <p id="cityState"></p>
          <p id="acreage">{lot.acres} acres - </p>
          <p className="lotDescription">{lot.description}</p>
        </div>
        
      </div>
    </Link>
  )
}

export default Lot;