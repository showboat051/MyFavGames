import React from 'react';
//import nesPic from './images/nes.jpg';
function Nes() {
    return (
        <div>
            <img src={require('../images/nes.jpg')} alt="Nes pic" />
        </div>
        );
}
export default Nes;