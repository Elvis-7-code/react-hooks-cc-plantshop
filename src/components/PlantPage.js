import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

import { useState } from "react";

function PlantPage() {
  const [search, setSearch] = useState("");
  const [plants, setPlants] = useState([]);
  return (
      <NewPlantForm plants={plants} setplants={setPlants}/>
      <NewPlantForm plants={plants} setplants={setplants}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
