import { useQuery } from '@apollo/client'
import { GET_TEMPERATURE } from '../Graphql/queries'
import { DisplayInfos } from './DisplayInfos'

type GetCityProps = { name: string }

export const GetCity = ({ name }: GetCityProps) => {
    console.log(name)
    const { loading, data } = useQuery(GET_TEMPERATURE, {
        variables: { name }
    })

    return (
        <div>
            {loading ?
                <h2>loading...</h2>
                : <DisplayInfos cityData={data.getCityByName || null} />
            }
        </div>
    )
}