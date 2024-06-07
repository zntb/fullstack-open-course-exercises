const Country = ({ country }) => {
  const { name, capital, area, languages, flags } = country;

  return (
    <div>
      <h2>{name.common}</h2>
      <div>capital {capital}</div>
      <div>area: {area}</div>

      <h3>languages: </h3>

      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flags.svg} alt={`Flag of ${name.common}`} width="150" />
    </div>
  );
};

export default Country;
