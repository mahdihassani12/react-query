import { useQuery } from "react-query";
import axios from "axios";

    const fetchSuperHeros = () => {
        return axios.get('http://localhost:4000/superheros');
    }

function RQSuperherosPage() {

    const  {isLoading, data, isError, error} = useQuery('superHeros', fetchSuperHeros,{ cacheTime: 5000 });

    if(isLoading)
    {
        return <div>Loading...</div>
    }

    if(isError){
        return <div>{ error.message }</div>
    }

    return (
        <>
            <h2>React query super heros</h2>
            {
                data?.data.map(hero => {
                    return <div key={hero.id}>{hero.name}</div>
                })
            }
        </>
    )
}

export default RQSuperherosPage;
