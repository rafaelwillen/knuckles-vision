import { RadioBrowserApi } from "radio-browser-api";

let radioApi: RadioBrowserApi | null = null;

export function initRadioAPI() {
  radioApi = new RadioBrowserApi("Knuckles Vision");
}

export async function getAllCountries() {
  if (!radioApi) throw new Error("Radio API is not instantiated");
  const countries = await radioApi.getCountries();
  return countries;
}

export async function getStationsByCountry(country: string) {
  if (!radioApi) throw new Error("Radio API is not instantiated");
  const stations = await radioApi.searchStations({
    country,
    hideBroken: true,
  });
  return stations;
}
