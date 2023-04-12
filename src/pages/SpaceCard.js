const SpaceCard = ({ name, source, date, detail, id }) => {
  return (
    <>
      <a href={`/Launches/${id}`}>
        <div className="card">
          <div className="card-container">
            <img
              src={source}
              alt={`Image of the pad for ${name}`}
              className="card-image"
            />
            <h2>{name}</h2>
            <h4>{date}</h4>
            <p>{detail}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default SpaceCard;
