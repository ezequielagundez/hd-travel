import React from "react";
import HeroSection from "../../components/ArgentinaPage/HeroSection"
import DestinationsGrid from "../../components/ArgentinaPage/DestinationsGrid"



function Argentina() {
    return(
        <div>

            <HeroSection lugar="Argentina"  descripcion="Paquetes a Argentina"/>
            <DestinationsGrid country="Argentina" />
            
        </div>
    )
}

export default Argentina