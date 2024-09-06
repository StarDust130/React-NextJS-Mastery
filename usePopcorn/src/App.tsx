/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import ListBox from "./components/ListBox";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";
import ErrorMsg from "./components/ErrorMsg";

const KEY = "30c03942";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://www.odbapi.com/?i=tt3896198&apikey=${KEY}&s=matrix`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          throw new Error(data.Error);
        }
      } catch (error: any) {
        console.error("Error fetching data: ", error);
        setError(error?.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar>
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </Navbar>
      <Main>
        <ListBox>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <ErrorMsg message={error} />
          ) : (
            <MovieList movies={movies} />
          )}
        </ListBox>
      </Main>
    </>
  );
}
