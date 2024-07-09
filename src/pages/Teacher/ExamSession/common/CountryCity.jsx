import React, { useState, useEffect } from 'react';
import { Select } from 'flowbite-react';
import { Country, State, City } from 'country-state-city';

const CountryCity = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    setStates(State.getStatesOfCountry(countryCode));
    setCities([]);
    setSelectedState('');
  };

  const handleStateChange = (stateCode) => {
    setSelectedState(stateCode);
    setCities(City.getCitiesOfState(selectedCountry, stateCode));
  };

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-2xl font-semibold mb-4">Select Country, State, and City</h3>
      <div className="select_option space-y-4">
        <Select
          id="country"
          value={selectedCountry}
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
          ))}
        </Select>
        <Select
          id="state"
          value={selectedState}
          onChange={(e) => handleStateChange(e.target.value)}
          disabled={!selectedCountry}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
          ))}
        </Select>
        <Select
          id="city"
          disabled={!selectedState}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>{city.name}</option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CountryCity;
