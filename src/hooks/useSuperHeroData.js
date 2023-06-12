import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = (id) => {
  return axios.get(`http://localhost:4000/superheros/${id}`);
};

export const useSuperheroData = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["superHero", id], () => fetchSuperHero(id), {
    initialData: () => {
      const hero = queryClient
        .getQueryData("superHero")
        ?.data?.find((hero) => hero.id === parseInt(id));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
