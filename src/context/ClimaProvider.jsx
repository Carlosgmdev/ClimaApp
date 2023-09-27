import  { useState, createContext } from 'react';
import axios from 'axios';

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const [resultado, setResultado] = useState({})
    const [noResultado, setNoResultado] = useState(false)
    const [loading, setLoading] = useState(false)

    const consultarClima = async datos => {
        setLoading(true);
        setNoResultado(false);
        try{
            const { ciudad, pais } = datos;
            //const appId = import.meta.env.VITE_APP_KEY;
            const appId = '04eba5138a2858ddadceb91cde8071a0'
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
            const { data } = await axios.get(url);
            const { lat, lon } = data[0];
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const { data: dataClima } = await axios.get(urlClima);
            setResultado(dataClima);
        } catch(error) {
            setNoResultado(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <ClimaContext.Provider value={{
            busqueda,
            datosBusqueda,
            consultarClima,
            resultado,
            loading,
            noResultado
        }}>
            {children}
        </ClimaContext.Provider>
    )
}
export {
    ClimaProvider
}

export default ClimaContext;