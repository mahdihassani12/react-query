import React from "react";
import { useSuperheroData } from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";

function RQSuperHero() {
  const { id } = useParams();
  const { isLoading, data } = useSuperheroData(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{data?.data.name}</h2>
    </div>
  );
}

export default RQSuperHero;
