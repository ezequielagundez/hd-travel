import React from "react";
import HeroSection from "../../components/ArgentinaPage/HeroSection"
import DestinationsGrid from "../../components/ArgentinaPage/DestinationsGrid"

function Brasil() {
    return(
        <div>
           <HeroSection lugar="Brasil"  descripcion="Componente funcionando"/>
           <DestinationsGrid country="Brasil" />
        </div>
    )
}

export default Brasil