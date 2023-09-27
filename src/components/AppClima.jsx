import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
import useClima from '../hooks/useClima'
import Spinner from './Spinner'

const AppClima = () => {

  const {resultado, loading, noResultado} = useClima()

  return (
    <>
        <div className="dos-columnas">
            <Formulario />
            {
              loading 
                ? <Spinner />
                : noResultado
                  ? <p className="error">No hay resultados</p>
                  : resultado?.name 
                    ? <Resultado />
                    : 'Comienza buscando una ciudad'
            }
        </div>
    </>
  )
}

export default AppClima