/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import ListBox from "./components/ListBox";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";
import ErrorMsg from "./components/ErrorMsg";
import Search from "./components/Search";

const KEY = "30c03942";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("batman");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce the query to reduce re-renders and excessive API calls
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // Adjust debounce delay as needed (500ms in this case)

    return () => {
      clearTimeout(timerId); // Clean up the timer on unmount or query change
    };
  }, [query]);

  // Fetch movies based on debounced query
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError("");
        setError(null); // Reset error before each request
        const response = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${debouncedQuery}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        if (data.Response === "False") {
          throw new Error("Movie not found!");
        }

        setMovies(data.Search);
      } catch (error: any) {
        console.error("Error fetching data: ", error);
        setError(error?.message || "Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };

    if (!debouncedQuery.length) {
      setMovies([]);
      setError("");
    }

    if (debouncedQuery) {
      fetchData();
    }
  }, [debouncedQuery]);

  return (
    <>
      <Navbar query={query} setQuery={setQuery}>
        <Search query={query} setQuery={setQuery} />
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
