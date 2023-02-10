import { Link } from 'react-router-dom';
import { formatAltAtts } from '../helpers/formatAltAtts';

import LotInfoContainer from './LotInfoContainer';

const CompatibleLots = ({ compatibleLots }) => {
  return (
    <div className="compatibleOptionsContainer">
      <div id="compatibleOptionsTitle">
          <p>Compatible Lots</p>
      </div>
      <div className="compatibleOptionsList">
        {compatibleLots && (
          compatibleLots.map(lot => {
            const street = lot.address.split(',')[0];

            return (
              <Link key={lot.lotId} to={`/lots?lot=${lot.lotId}`}>
                <div className="cardContainer">
                  <div className="cardImageContainer">
                    <img src={lot.image} alt={formatAltAtts(street)} />
                    <div>
                      <button className="favoriteButton" id="false"><img src="../images/heart.png" alt="heart icon" /></button>
                    </div>
                  </div>
                  <LotInfoContainer lot={lot} />
                </div>
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
};

export default CompatibleLots;
