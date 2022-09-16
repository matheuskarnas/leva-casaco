

type CityData = {
    name: string
    country: string
    weather: {
        temperature: {
            actual: number;
        }
    }
}
type DisplayInfosProps = {
    cityData: CityData | null
}


export const DisplayInfos = ({ cityData }: DisplayInfosProps) => {

    function getCelsius() {
        if (!cityData) { return }
        const celsius = cityData.weather.temperature.actual - 273.15

        if (celsius < 18) {
            return `Leve casaco pois a temperatura é de ${(celsius).toFixed(1)} ºC 🥶`
        }
        return `Não precisa levar casaco, a temperatura atual é ${(celsius).toFixed(1)} ºC 🥵`
    }

    if (cityData) {
        return (
            <>
                <h2>Caso pretenda ir para {cityData.name} {cityData.country}</h2>
                <h2>{getCelsius()}</h2>
            </>
        )
    }

    return <h1>Cidade não encontrada</h1>


}