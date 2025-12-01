import { Outlet, useParams } from "react-router";
import useGames from './hooks/useGames';

// TODO:
// - Manejar loading y error states
//   - Mostrar un spinner o mensaje de carga
//   - Mostrar mensaje de error si falla la carga

const GameLayout = () => {
    const { gameId } = useParams();
    const { gameList, getGameById } = useGames();

    return <Outlet context={gameId ? getGameById(gameId) : gameList} />;
};

export default GameLayout;
