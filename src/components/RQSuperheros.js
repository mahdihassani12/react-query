import { useSuperheroesData } from "../hooks/useSuperheroesData";
import { Link } from "react-router-dom";

function RQSuperherosPage() {
  const onSuccess = () => {
    console.log("Perfome side effect after fetching data");
  };

  const onError = () => {
    console.log("Perfom side effect after failing to load data");
  };

  const { isLoading, data, isError, error, refetch } = useSuperheroesData(
    onSuccess,
    onError
  );

  /*
   * If the user wants to change the cache time for query { cacheTime: milliseconds }
   * If the user wants to change the stale time (after how long the fetch data works in background) {staleTime: milliseconds}
   * If the user wants to fetch the api on mount: { refechOnMount: true }
   * If the user wants to keep up to date the UI with remote data: { refetchOnwindowFocus: true }
   * If the user wants to update the data on UI in a interval: { refetchInterval: 2000 } - It only works when the user is on the screen
   * But if the user wants keep the data update even in background { refetchIntervalInBackground: true }
   */

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <h2>React query super heros</h2>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/RQSuperHero/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
}

export default RQSuperherosPage;
