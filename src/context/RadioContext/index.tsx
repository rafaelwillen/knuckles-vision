import { CountryResult, Station } from "radio-browser-api";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAllCountries,
  getStationsByCountry,
  initRadioAPI,
} from "../../api/radioBrowser";
import {
  CountryChangeFunction,
  MuteStateChangeFunction,
  RadioContextType,
  StationChangeFunction,
} from "./type";

const RadioContext = createContext<RadioContextType>({} as RadioContextType);

const RadioProvider: React.FC = ({ children }) => {
  const [countries, setCountries] = useState<CountryResult[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("Angola");
  const [stations, setStations] = useState<Station[]>([]);
  const [isMuted, setMuted] = useState(false);
  const [selectedStation, setSelectedStation] = useState<Station>(
    {} as Station
  );

  useEffect(() => {
    initRadioAPI();
    getAllCountries().then(setCountries).catch(console.error);
  }, []);

  useEffect(() => {
    getStationsByCountry(selectedCountry)
      .then(setStations)
      .catch(console.error);
  }, [selectedCountry]);

  const onCountryChange: CountryChangeFunction = (country) => {
    setSelectedCountry(country);
  };

  const onStationChange: StationChangeFunction = (station) => {
    setSelectedStation(station);
  };

  const onMuteStateChange: MuteStateChangeFunction = (muted) => {
    setMuted(muted);
  };

  const providerValue: RadioContextType = {
    isMuted,
    countries,
    onCountryChange,
    stations,
    selectedStation,
    onStationChange,
    onMuteStateChange,
  };
  return (
    <RadioContext.Provider value={providerValue}>
      {children}
    </RadioContext.Provider>
  );
};

export const useRadio = () => useContext(RadioContext);

export default RadioProvider;
