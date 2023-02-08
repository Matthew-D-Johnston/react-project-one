import { useState, useEffect } from 'react';
import { API } from '../apiClient';

import Home from './Home';

const Homes = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const getHomes = async () => {
      const response = await API.getHomePlans();
      setHomes(response);
    }

    try {
      getHomes();
    } catch (error) {
      console.error('error');
    }
  }, []);

  return (
      <div className="homesListContainer">
        <button className="button">Show Saved Homes</button>
        <div className="homesList">
            {homes.map(home => {
              return <Home home={home} />;
            })}
        </div>
      </div> 
  );
}

export default Homes;