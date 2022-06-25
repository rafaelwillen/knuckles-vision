import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CountryChangeFunction,
  RadioContextType,
  StationChangeFunction,
} from "./type";
import { CountryResult, Station } from "radio-browser-api";
import {
  getAllCountries,
  getStationsByCountry,
  initRadioAPI,
} from "../../api/radioBrowser";

const RadioContext = createContext<RadioContextType>({} as RadioContextType);

const RadioProvider: React.FC = ({ children }) => {
  const [countries, setCountries] = useState<CountryResult[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("Angola");
  const [stations, setStations] = useState<Station[]>([]);
  const [isMuted, setMuted] = useState(false);
  const [isPlaying, setPlaying] = useState(true);
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

  const providerValue: RadioContextType = {
    isMuted,
    countries,
    isPlaying,
    onCountryChange,
    stations,
    selectedStation,
    onStationChange,
  };
  return (
    <RadioContext.Provider value={providerValue}>
      {children}
    </RadioContext.Provider>
  );
};

export const useRadio = () => useContext(RadioContext);

export default RadioProvider;
