import React from 'react'
import useClima from '../hooks/useClima'

const Resultado = () => {

    const { resultado } = useClima();
    const { name, main } = resultado
    const kelvin = 273.15

    return (
        <div className="contenedor clima">
            <h2>El clima de {name} es</h2>
            <p>
                {parseInt(main?.temp - kelvin)} <span>&#x2103;</span>
            </p>
            <div className="temp_min_max">
                <p>
                    Min {parseInt(main?.temp_min - kelvin)} <span>&#x2103;</span>
                </p>
                <p>
                    Max {parseInt(main?.temp_max - kelvin)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    )
}

export default Resultado