import { Link } from "react-router-dom";

import HomeInfoContainer from "./HomeInfoContainer";
import { formatAltAtts } from "../helpers/formatAltAtts";

const Home = ({ home, setModalItem }) => {
  return (
    <>
      <Link to={`?home=${home.homePlanId}`} onClick={() => setModalItem(home)}>
        <div className="cardContainer">
          <div className="cardImageContainer">
            <img src={home.image} alt={formatAltAtts(home.name)} />
            <div>
              <button className="favoriteButton" id="true">
                <img src="./images/heart.png" alt="heart icon" />
              </button>
            </div>
          </div>
          <HomeInfoContainer home={home} />
        </div>
      </Link>
    </>
  );
};

export default Home;
