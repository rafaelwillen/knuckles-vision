import { CountryResult, Station } from "radio-browser-api";

export type RadioContextType = {
  countries: CountryResult[];
  stations: Station[];
  selectedStation: Station;
  isMuted: boolean;
  onStationChange: StationChangeFunction;
  onCountryChange: CountryChangeFunction;
  onMuteStateChange: MuteStateChangeFunction;
};

export type CountryChangeFunction = (country: string) => void;

export type StationChangeFunction = (station: Station) => void;

export type MuteStateChangeFunction = (isMute: boolean) => void;
