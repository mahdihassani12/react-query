import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros");
};

const fetchfreinds = () => {
  return axios.get("http://localhost:4000/friends");
};

function ParallelQueries() {

  const { data: heroes } = useQuery('heros', fetchSuperHeros);
  const { data: friends } = useQuery('friends', fetchfreinds);

  return <div>ParallelQueries</div>;
}

export default ParallelQueries;
