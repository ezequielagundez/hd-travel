import React from "react";
import HeroSection from "../../components/ArgentinaPage/HeroSection"
import DestinationsGrid from "../../components/ArgentinaPage/DestinationsGrid"


function Argentina() {
    return(
        <div>
            <HeroSection lugar="Argentina"  descripcion="Componente funcionando"/>
            <DestinationsGrid country="Argentina" />
            
        </div>
    )
}

export default Argentina