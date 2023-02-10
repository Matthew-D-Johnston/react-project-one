import { useState } from 'react';
import Home from "./Home";

const Homes = ({ homes, setModalItem, favoriteHomes, setFavoriteHomes }) => {
  const [showAllHomes, setShowAllHomes] = useState(true);

  const handleButtonClick = () => {
    setShowAllHomes(!showAllHomes);
  }

  let displayedHomes;
  if (showAllHomes) {
    displayedHomes = homes;
  } else {
    displayedHomes = favoriteHomes;
  }

  return (
    <div className="homesListContainer">
      <button className="button" onClick={handleButtonClick}>{showAllHomes ? 'Show Saved Homes' : 'Show All Homes'}</button>
      <div className="homesList">
        {displayedHomes.map((home) => {
          return (
            <Home
              key={home.homePlanId}
              home={home}
              setModalItem={setModalItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Homes;
