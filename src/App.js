import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";
import { API } from "./apiClient";
import "./App.css";

import SideBar from "./components/SideBar";
import Homes from "./components/Homes";
import Lots from "./components/Lots";
import Modal from "./components/Modal";

function App() {
  const [homes, setHomes] = useState([]);
  const [favoriteHomes, setFavoriteHomes] = useState([]);
  const [lots, setLots] = useState([]);
  const [params] = useSearchParams();
  const [combinations, setCombinations] = useState([])
  // const [modalItem, setModalItem] = useState();
  // const [items, setItems] = useState([]);

  useEffect(() => {
    const getHomes = async () => {
      const response = await API.getHomePlans();
      setHomes(response);
    };

    try {
      getHomes();
    } catch (error) {
      console.error("error");
    }
  }, []);

  useEffect(() => {
    const getLots = async () => {
      const response = await API.getLots();
      setLots(response);
    };

    try {
      getLots();
    } catch (error) {
      console.error("error");
    }
  }, []);

  useEffect(() => {
    const getCombinations = async () => {
      const response = await API.getCombinations();
      setCombinations(response);
    };

    try {
      getCombinations();
    } catch (error) {
      console.error("error");
    }
  }, []);

  const modalId  = params.get("home") || params.get("lot");

  let isHome;

  if (params.get("home")) {
    isHome = true
  } else {
    isHome = false;
  }

  // useEffect(() => {
  //   if (modalItem && modalItem.homePlanId) {
  //     setItems(lots);
  //   } else if (modalItem && modalItem.lotId) {
  //     setItems(homes);
  //   }
  // }, [modalItem, homes, lots]);

  return (
    <>
      <div className="App">
        <SideBar />
        <Routes>
          <Route
            path="/homes/*"
            element={<Homes
              homes={homes}
              // setModalItem={setModalItem}
              favoriteHomes={favoriteHomes}
              setFavoriteHomes={setFavoriteHomes}
            />}
          />
          <Route
            path="/lots"
            element={<Lots lots={lots}  />}
          />
        </Routes>
      </div>
      {modalId ? (
        <Modal
          isHome={isHome}
          homes={homes}
          combinations = {combinations}
          lots={lots}
          id={modalId}
          // favoriteHomes={favoriteHomes}
          // setFavoriteHomes={setFavoriteHomes}
        />
      ) : null}
</>
  );
}

export default App;
