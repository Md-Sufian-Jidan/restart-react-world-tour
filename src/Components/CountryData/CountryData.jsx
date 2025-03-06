const CountryData = ({ country, handleVisitedCountry, handleVisitedFlag }) => {

    // console.log('inside country data', country, handleVisitedCountry, handleVisitedFlag);
    return (
        <div>
            <h3>Country Data: {country.name.common}</h3>
        </div>
    );
};

export default CountryData;