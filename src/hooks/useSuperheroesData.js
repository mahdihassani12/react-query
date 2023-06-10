import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros");
};

export const useSuperheroesData = (onSuccess, onError) => {
  return useQuery("superHeros", fetchSuperHeros, {
    onSuccess,
    onError,
  });
};
