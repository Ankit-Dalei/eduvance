import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Select, TextInput, Button } from 'flowbite-react';
import { Country, State, City } from 'country-state-city';
import addUniversity from '../../../Service/addUniversity';
import { toggleFormback } from '../../../Redux/formSlice';

const Adminadduni = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    universityName: '',
    estd: '',
    address: '',
    phone: '',
    landline: '',
    faxNumber: '',
    dateOfJoin: new Date().toISOString().slice(0, 10),
    countries: [],
    states: [],
    cities: []
  });

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      countries: Country.getAllCountries()
    }));
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setFormData(prevFormData => ({
      ...prevFormData,
      country: countryCode,
      states: State.getStatesOfCountry(countryCode),
      cities: []
    }));
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setFormData(prevFormData => ({
      ...prevFormData,
      state: stateCode,
      cities: City.getCitiesOfState(prevFormData.country, stateCode)
    }));
  };

  const handleCityChange = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      city: e.target.value
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.universityName) tempErrors.universityName = 'University Name is required';
    if (!formData.estd || formData.estd.length !== 4) tempErrors.estd = 'Establishment Year is required and should be 4 digits';
    if (!formData.country) tempErrors.country = 'Country is required';
    if (!formData.state) tempErrors.state = 'State is required';
    if (!formData.address) tempErrors.address = 'Address is required';
    if (!formData.phone || formData.phone.length < 10) tempErrors.phone = 'Phone is required and should be at least 10 digits';
    if (!formData.landline || formData.landline.length < 10) tempErrors.landline = 'Landline is required and should be at least 10 digits';
    if (!formData.faxNumber || formData.faxNumber.length < 10) tempErrors.faxNumber = 'Fax Number is required and should be at least 10 digits';
    return tempErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.values(formData).slice(0, -4).every(field => !field)) {
      toast.error('Please fill in all fields');
    } else if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(error => toast.error(error));
    } else {
      try {
        const response = await addUniversity(formData);
        if (response.success) {
          toast.success('University added successfully!');
          setFormData({
            universityName: '',
            estd: '',
            address: '',
            phone: '',
            landline: '',
            faxNumber: '',
            dateOfJoin: new Date().toISOString().slice(0, 10),
            countries: Country.getAllCountries(),
            states: [],
            cities: []
          });
          dispatch(toggleFormback());
        } else {
          toast.error('Failed to add university. Please try again.');
        }
      } catch (error) {
        toast.error('Failed to add university. Please try again.');
      }
    }
  };

  const handleCancel = () => {
    dispatch(toggleFormback());
  };

  return (
    <div className="h-[85%] w-[100%] flex justify-center items-center absolute top-[12%] left-0 z-[2]">
      <div className="h-[100%] w-[65%] sm:h-[95%] sm:w-[55%] lg:h-[100%] lg:w-[29%] p-4 bg-slate-300 rounded-xl flex justify-start items-center flex-col">
        <div className="h-[10%] w-[90%] relative flex justify-center items-center">
          <h1 className="font-semibold text-gray-400 text-2xl font-mono">ADDING UNIVERSITY</h1>
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute right-0 font-semibold hover:text-gray-700 text-gray-400 text-2xl font-mono cursor-pointer"
            onClick={handleCancel}
          />
        </div>
        <form onSubmit={handleSubmit} className="h-[90%] w-full flex justify-around items-center flex-col gap-2 font-serif">
          <input
            type="text"
            name="universityName"
            placeholder="UNIVERSITY NAME"
            className="h-[40px] w-[90%] p-2 rounded-xl"
            value={formData.universityName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="estd"
            placeholder="ESTD"
            className="h-[40px] w-[90%] p-2 rounded-xl"
            value={formData.estd}
            onChange={handleChange}
          />
          <Select
            color={'blue'}
            id="country"
            className="h-[40px] w-[94%] p-2 rounded-xl"
            value={formData.country}
            onChange={handleCountryChange}
          >
            <option value="">Select Country</option>
            {formData.countries.map((country) => (
              <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
            ))}
          </Select>
          <Select
            color={'blue'}
            id="state"
            className="h-[40px] w-[94%] p-2 rounded-xl"
            value={formData.state}
            onChange={handleStateChange}
            disabled={!formData.country}
          >
            <option value="">Select State</option>
            {formData.states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
            ))}
          </Select>
          <Select
            color={'blue'}
            id="city"
            className="h-[40px] w-[94%] p-2 rounded-xl mb-3"
            value={formData.city}
            onChange={handleCityChange}
            disabled={!formData.state}
          >
            <option value="">Select City</option>
            {formData.cities.map((city) => (
              <option key={city.name} value={city.name}>{city.name}</option>
            ))}
          </Select>
          <input
            type="text"
            name="address"
            placeholder="ADDRESS"
            className="h-[40px] w-[90%] p-2 rounded-xl"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="PHONE"
            className="h-[40px] w-[90%] p-2 rounded-xl"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="number"
            name="landline"
            placeholder="LANDLINE"
            className="h-[40px] w-[90%] p-2 rounded-xl"
            value={formData.landline}
            onChange={handleChange}
          />
          <input
            type="number"
            name="faxNumber"
            placeholder="FAX NUMBER"
            className="h-[40px] w-[90%] p-2 rounded-xl"
            value={formData.faxNumber}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateOfJoin"
            placeholder="DATE OF JOIN"
            className="h-[40px] w-[90%] p-2 rounded-xl"
            value={formData.dateOfJoin}
            readOnly
          />
          <button type="submit" className="h-[40px] w-[90%] p-2 bg-blue-500 rounded-xl">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Adminadduni;
