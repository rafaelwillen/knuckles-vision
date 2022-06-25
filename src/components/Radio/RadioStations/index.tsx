import React from "react";
import { MdPlayCircle } from "react-icons/md";

const RadioStations = () => {
  const stations = [];

  return (
    <article className="flex-1 flex flex-col ">
      <div className="flex flex-col items-center gap-2">
        <label>Selecione o país</label>
        <select
          name="countries"
          className="bg-white text-black rounded-md w-2/3 mx-auto py-2"
        >
          <option value="Angola">Angola</option>
          <option value="USA">USA</option>
          <option value="Portugal">Portugal</option>
          <option value="Brasil">Brasil</option>
          <option value="Moçambique">Moçambique</option>
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
              <p>{station.name}</p>
              <ul className="flex gap-2 mt-2 ">
                {station.tags.map((tag) => (
                  <li className="text-sm bg-grey-900 px-2 rounded-xl">{tag}</li>
                ))}
              </ul>
            </div>
            <MdPlayCircle
              size={35}
              className="hover:text-slate-500 transition cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default RadioStations;
