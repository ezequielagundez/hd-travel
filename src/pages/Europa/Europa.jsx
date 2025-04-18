import React from "react";
import HeroSection from "../../components/ArgentinaPage/HeroSection"
import DestinationsGrid from "../../components/ArgentinaPage/DestinationsGrid"

function Europa() {
  return (
    <div>
        <HeroSection lugar="Europa"  descripcion="Componente funcionando"/>
        <DestinationsGrid country="Europa" />
    </div>
  );
}

export default Europa;