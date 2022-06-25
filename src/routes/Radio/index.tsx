import React from "react";
import RadioControl from "../../components/Radio/RadioControl";
import RadioStations from "../../components/Radio/RadioStations";
import RadioProvider from "../../context/RadioContext";

const Radio = () => {
  return (
    <RadioProvider>
      <section className="flex-1 pt-14 mx-5">
        <h2 className="flex justify-center text-2xl">Knuckles Radio</h2>
        <div className="mt-10 flex gap-6 h-2/3 max-h-full">
          <RadioControl />
          <RadioStations />
        </div>
      </section>
    </RadioProvider>
  );
};

export default Radio;
