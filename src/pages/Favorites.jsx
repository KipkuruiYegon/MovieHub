import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";

function Favorites() {
    const {favorites} = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
            {movies.map((movie) =>  (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        </div>
            
        );
    }
    return (
    <div className="favorites-empty">
        <h2>No Favorites Movie Yet!!!</h2>
        <p>Start adding to the List</p>
    </div>);
}

export default Favorites