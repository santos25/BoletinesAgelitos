import React from 'react';
import firma from '../FirmaMadre.jpg';

const Firmas = (props) => {

  return (
    <div className="firmas">
      <div className="firmaDirectora">
        <img className="firmaMadre"  src={firma} alt="Escudo"></img><br/>
        _____________________________ <br/>
        <label>Rectora</label>  <br/> <br/><br/> <br/>
         <div>
           _____________________________ <br/>
           <label>Directora de grupo</label>

         </div>
      </div>

    </div>
  )
}

export default Firmas;
