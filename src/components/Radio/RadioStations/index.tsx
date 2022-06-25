import { Station } from "radio-browser-api";
import React from "react";
import { MdPlayCircle } from "react-icons/md";
import { useRadio } from "../../../context/RadioContext";

const RadioStations = () => {
  const {
    countries,
    stations,
    onCountryChange,
    onStationChange,
    selectedStation,
  } = useRadio();

  const MAX_NUMBER_TAGS = 4;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCountryChange(e.target.value);
  };

  const handleStationPlay = (station: Station) => {
    onStationChange(station);
  };

  return (
    <article className="flex-1 flex flex-col ">
      <div className="flex flex-col items-center gap-2">
        <label>Selecione o país</label>
        <select
          defaultValue="Angola"
          onChange={handleSelectChange}
          name="countries"
          className="bg-white text-black rounded-md w-2/3 mx-auto py-2"
        >
          {countries
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((country, index) => (
              <option key={country.name + index} value={country.name}>
                {country.name}
              </option>
            ))}
        </select>
      </div>
      <h3 className="text-center text-xl mt-5 mb-1">
        Estações Encontradas: {stations.length}
      </h3>

      <ul className="flex flex-col gap-2 bg-dark-700 p-4 rounded-md overflow-y-auto max-h-96 cursor-default">
        {stations.map((station, index) => (
          <li
            key={index}
            className="flex border-b p-2 border-dark-600 items-center"
          >
            <div className="flex-1">
              {selectedStation.id == station.id ? (
                <p className="text-green-600">{station.name}</p>
              ) : (
                <p>{station.name}</p>
              )}
              <ul className="flex gap-2 mt-2">
                {station.tags
                  .filter((_, index) => index < MAX_NUMBER_TAGS)
                  .map((tag) => (
                    <li className="text-sm bg-grey-900 px-2 rounded-xl">
                      {tag}
                    </li>
                  ))}
              </ul>
            </div>
            {selectedStation.id != station.id && (
              <MdPlayCircle
                onClick={() => handleStationPlay(station)}
                size={35}
                className="hover:text-slate-500 transition cursor-pointer"
              />
            )}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default RadioStations;
