import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  return (
    <main>
      <NewPlantForm plants={plants} setplants={setplants}/>
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
