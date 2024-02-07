function InfoCard(props) {
  const country = props.data[0];
  const languages = Object.values(country.languages).map((key) => {
    return <li>{key}</li>;
  });
  return (
    <div className="container flex bg-gray-700 rounded justify-center w-1/1 mt-5">
      <div className="container flex w-1/2 justify-end p-5">
        <img className="rounded" src={country.flags.svg} />
      </div>
      <div className="container flex flex-col w-1/2 justify-center text-left p-5 gap-5">
        <h1 className="bold text-5xl">{country.name.common}</h1>
        <h2 className="bold text-2xl">Population: {country.population}</h2>
        <h2 className="bold text-1xl">
          Currency: {Object.keys(country.currencies)}
        </h2>
        <div className="container flex flex-col">
          <h2 className="underline">Languages Spoken</h2>
          {languages}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
