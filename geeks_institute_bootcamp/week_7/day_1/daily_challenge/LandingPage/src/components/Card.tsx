const Card = ({ icon, title, description, shaded }) => {
  return (
    <div className={`card-section ${shaded ? "shaded" : ""}`}>
      <div className="card-inner">
        <div className="card-icon">
          <i className={`fa ${icon}`}></i>
        </div>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;