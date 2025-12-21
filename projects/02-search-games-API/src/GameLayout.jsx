import { Outlet, Link, useParams } from "react-router";
import useGames from './hooks/useGames';
import Spinner from "./Spinner";
import backIcon from './assets/arrow.svg';

// TODO:
// - Manejar loading y error states
//   x Mostrar un spinner o mensaje de carga
//   - Mostrar mensaje de error si falla la carga

const GameLayout = () => {
    const { gameId } = useParams();
    const { gameList, getGameById, loading, error } = useGames();

    return (
        <>
            <h1 className="text-center mb-1">
                {gameId ? 
                    (<>
                        <Link to="/">
                            <img className="title-back-btn" title="back"
                                src={backIcon} alt=">" />
                        </Link>
                        Game details
                    </>) 
                    :
                    'Switch Games List'
                }
            </h1>
            
            {loading && <Spinner message="games" />}
            {!loading && error && <p>Error loading games: {error.message}</p>}
            {!loading && !error &&
                <Outlet context={gameId ? getGameById(gameId) : gameList} />
            }
        </>
    );
};

export default GameLayout;
