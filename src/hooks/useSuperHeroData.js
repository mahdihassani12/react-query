import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = (id) => {
  return axios.get(`http://localhost:4000/superheros/${id}`);
};

export const useSuperheroData = (id) => {
  return useQuery(["superHero", id], () => fetchSuperHero(id));
};
