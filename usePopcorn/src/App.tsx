import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import ListBox from "./components/ListBox";
import MovieList from "./components/MovieList";

const KEY = "30c03942";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=matrix`
      );
      const data = await response.json();
      setMovies(data.Search);
    }
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
          <MovieList movies={movies} />
        </ListBox>
      </Main>
    </>
  );
}
