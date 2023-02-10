import Home from "./Home";

const Homes = ({ homes, setModalItem }) => {
  return (
    <div className="homesListContainer">
      <button className="button">Show Saved Homes</button>
      <div className="homesList">
        {homes.map((home) => {
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
