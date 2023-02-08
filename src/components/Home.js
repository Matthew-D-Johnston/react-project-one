import { Link } from 'react-router-dom';

import { formatAltAtts } from '../helpers/formatAltAtts';


const Home = ({ home }) => {
  console.log('home component');
  
  return (
    <Link to={`?home=${home.homePlanId}`} >
      <div className="cardContainer">
        <div className="cardImageContainer">
          <img src={home.image} alt={formatAltAtts(home.name, 'home')} />
          <div>
            <button className="favoriteButton" id="true">
              <img src='./images/heart.png' alt="heart icon" />
            </button>
          </div>
        </div>
        <div className="homeInfoContainer">
          <h3>{home.name}</h3>
          <p id="homeDetails">{home.numBeds} beds - {home.numBaths} baths - {home.sqft} sqft</p>
          <div className="tagsContainer">
            {home.tags.map(tag => {
              return <p className="tags">{tag}</p>
            })}
          </div>
          <p className="description">{home.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default Home;