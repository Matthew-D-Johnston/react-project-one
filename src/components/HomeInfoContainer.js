const HomeInfoContainer = ({ home }) => {
  return (
    <div className="homeInfoContainer">
      <h3>{home.name}</h3>
      <p id="homeDetails">
        {home.numBeds} beds - {home.numBaths} baths - {home.sqft} sqft
      </p>
      <div className="tagsContainer">
        {home.tags.map((tag) => {
          return (
            <p key={tag} className="tags">
              {tag}
            </p>
          );
        })}
      </div>
      <p className="description">{home.description}</p>
    </div>
  );
};

export default HomeInfoContainer;
