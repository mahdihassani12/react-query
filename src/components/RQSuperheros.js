import { useQuery } from "react-query";
import axios from "axios";

    const fetchSuperHeros = () => {
        return axios.get('http://localhost:4000/superheros');
    }

function RQSuperherosPage() {

    const  {isLoading, data, isError, error} = useQuery('superHeros', fetchSuperHeros);

    /*
    * If the user wants to change the cache time for query { cacheTime: milliseconds }
    * If the user wants to change the stale time (after how long the fetch data works in background) {staleTime: milliseconds}
    */ 

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
