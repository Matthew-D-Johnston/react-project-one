import { Link } from 'react-router-dom';

import { formatAltAtts } from '../helpers/formatAltAtts';
import HomeInfoContainer from './HomeInfoContainer';

const CompatibleHomes = ({ compatibleHomes }) => {
  return (
    <div className="compatibleOptionsContainer">
      <div id="compatibleOptionsTitle">
          <p>Compatible Homes</p>
      </div>
      <div className="compatibleOptionsList">
        {compatibleHomes && (
          compatibleHomes.map(home => {
            return (
              <Link key={home.homePlanId} to={`/homes?home=${home.homePlanId}`}>
                <div className="cardContainer">
                  <div className="cardImageContainer">
                    <img src={home.image} alt={formatAltAtts(home.name)} />
                    <div>
                      <button className="favoriteButton" id="true"><img src="../images/heart.png" alt="heart icon" /></button>
                    </div>
                  </div>
                  <HomeInfoContainer home={home} />
                </div>
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
}

export default CompatibleHomes;