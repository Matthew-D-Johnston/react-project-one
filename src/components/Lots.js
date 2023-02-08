import { useState, useEffect } from 'react';
import { API } from '../apiClient';

import Lot from './Lot';

const Lots = () => {
  const [lots, setLots] = useState([]);

  useEffect(() => {
    const getLots = async () => {
      const response = await API.getLots();
      setLots(response);
    }

    try {
      getLots();
    } catch (error) {
      console.error('error');
    }
  }, []);

  return (
      <div className="lotsContainer">
        <button className="button">Show Saved Lots</button>
        <div className="lotsList">
            {lots.map(lot => {
              return <Lot lot={lot} />;
            })}
        </div>
      </div>
  );
}

export default Lots;