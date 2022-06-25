import { CountryResult, Station } from "radio-browser-api";

export type RadioContextType = {
  countries: CountryResult[];
  stations: Station[];
  selectedStation: Station;
  isMuted: boolean;
  isPlaying: boolean;
  onStationChange: StationChangeFunction;
  onCountryChange: CountryChangeFunction;
};

export type CountryChangeFunction = (country: string) => void;

export type StationChangeFunction = (station: Station) => void;
