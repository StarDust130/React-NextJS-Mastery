/* eslint-disable @typescript-eslint/no-explicit-any */


interface WatchedListProps {
    watched: any;
    }

const WatchedList = ({ watched }: WatchedListProps) => {
  return (
    <>
      <ul className="list">
        {watched.map((movie: any) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default WatchedList