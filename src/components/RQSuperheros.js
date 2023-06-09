import { useQuery } from "react-query";
import axios from "axios";

    const fetchSuperHeros = () => {
        return axios.get('http://localhost:4000/superheros');
    }

function RQSuperherosPage() {

    const  {isLoading, data} = useQuery('superHeros', fetchSuperHeros);

    if(isLoading)
    {
        return <div>Loading...</div>
    }

    else {
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
}

export default RQSuperherosPage;
