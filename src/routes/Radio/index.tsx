import React from "react";
import RadioControl from "../../components/Radio/RadioControl";
import RadioStations from "../../components/Radio/RadioStations";

const Radio = () => {
  return (
    <section className="flex-1 pt-14 mx-5">
      <h2 className="flex justify-center text-2xl">Knuckles Radio</h2>
      <div className="mt-10 flex gap-6 h-2/3 max-h-full">
        <RadioControl />
        <RadioStations />
      </div>
    </section>
  );
};

export default Radio;
