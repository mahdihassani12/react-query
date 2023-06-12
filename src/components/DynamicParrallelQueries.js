import React from "react";
import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheros/${heroId}`);
};

function DynamicParrallelQueries({ heroIds }) {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["superHero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

    console.log({queryResult})
    
  return <div>Dynamic query</div>;
}

export default DynamicParrallelQueries;
