function InfoCard(props) {
  const country = props.data[0];
  return (
    <div className="country-info-container">
      <div className="images-container">
        <img src={country.flags.svg} />
        <img src={country.coatOfArms.png} />
      </div>

      <div className="info-container">
        <h1>{country.name.common}</h1>
        <h2>Population: {country.population}</h2>
        <h3>Currency: {Object.keys(country.currencies)}</h3>
      </div>
      <div className="google-map-container"></div>
    </div>
  );
}

export default InfoCard;
