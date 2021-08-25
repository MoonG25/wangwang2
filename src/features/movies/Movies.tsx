import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Movie from "./components/Movie";
import { fetchMovies, moviesSelectors } from "./moviesSlice";

const Movies = () => {
  const dispatch = useAppDispatch();
  const allMovies = useAppSelector(moviesSelectors.selectAll);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <div className="gallery">
      {
        allMovies.map((movie: any, movieIdx) => <Movie key={movieIdx} movie={movie} />)
      }
    </div>
  )
}

export default Movies;