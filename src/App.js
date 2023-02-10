import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { API } from "./apiClient";
import "./App.css";

import SideBar from "./components/SideBar";
import Homes from "./components/Homes";
import Lots from "./components/Lots";
import Modal from "./components/Modal";

function App() {
  const [homes, setHomes] = useState([]);
  const [lots, setLots] = useState([]);
  const [modalItem, setModalItem] = useState();
  const [compatibleItems, setCompatibleItems] = useState([]);

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
    if (modalItem && modalItem.homePlanId) {
      setCompatibleItems(homes);
    } else if (modalItem && modalItem.lotId) {
      setCompatibleItems(lots);
    }
  }, [modalItem, homes, lots]);

  return (
    <Router>
      <div className="App">
        <SideBar />
        <Routes>
          <Route
            path="/homes/*"
            element={<Homes homes={homes} setModalItem={setModalItem} />}
          />
          <Route
            path="/lots"
            element={<Lots lots={lots} setModalItem={setModalItem} />}
          />
        </Routes>
      </div>
      {modalItem ? (
        <Modal
          modalItem={modalItem}
          setModalItem={setModalItem}
          compatibleItems={compatibleItems}
        />
      ) : null}
    </Router>
  );
}

export default App;
