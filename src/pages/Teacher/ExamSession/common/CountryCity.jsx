import React, { useEffect, useState } from 'react';
import { Select, Spinner } from 'flowbite-react';
import axios from 'axios';

const config = {
  cUrl: 'https://api.countrystatecity.in/v1/countries',
  ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
};

const CountryCity = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = () => {
    setLoadingCountries(true);
    axios.get(config.cUrl, {
      headers: { "X-CSCAPI-KEY": config.ckey }
    })
    .then(response => setCountries(response.data))
    .catch(error => console.error('Error loading countries:', error))
    .finally(() => setLoadingCountries(false));
  };

  const loadStates = (countryCode) => {
    setSelectedCountry(countryCode);
    setStates([]);
    setCities([]);
    if (countryCode) {
      setLoadingStates(true);
      axios.get(`${config.cUrl}/${countryCode}/states`, {
        headers: { "X-CSCAPI-KEY": config.ckey }
      })
      .then(response => setStates(response.data))
      .catch(error => console.error('Error loading states:', error))
      .finally(() => setLoadingStates(false));
    }
  };

  const loadCities = (countryCode, stateCode) => {
    setSelectedState(stateCode);
    setCities([]);
    if (stateCode) {
      setLoadingCities(true);
      axios.get(`${config.cUrl}/${countryCode}/states/${stateCode}/cities`, {
        headers: { "X-CSCAPI-KEY": config.ckey }
      })
      .then(response => setCities(response.data))
      .catch(error => console.error('Error loading cities:', error))
      .finally(() => setLoadingCities(false));
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-2xl font-semibold mb-4">Select Country, State, and City</h3>
      <div className="select_option space-y-4">
        <div className="relative">
          {loadingCountries && <Spinner size="sm" className="absolute right-3 top-3" />}
          <Select
            id="country"
            value={selectedCountry}
            onChange={(e) => loadStates(e.target.value)}
            disabled={loadingCountries}
          >
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country.iso2} value={country.iso2}>{country.name}</option>
            ))}
          </Select>
        </div>
        <div className="relative">
          {loadingStates && <Spinner size="sm" className="absolute right-3 top-3" />}
          <Select
            id="state"
            value={selectedState}
            onChange={(e) => loadCities(selectedCountry, e.target.value)}
            disabled={!selectedCountry || loadingStates}
          >
            <option value="">Select State</option>
            {states.map(state => (
              <option key={state.iso2} value={state.iso2}>{state.name}</option>
            ))}
          </Select>
        </div>
        <div className="relative">
          {loadingCities && <Spinner size="sm" className="absolute right-3 top-3" />}
          <Select
            id="city"
            disabled={!selectedState || loadingCities}
          >
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city.iso2} value={city.iso2}>{city.name}</option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CountryCity;
