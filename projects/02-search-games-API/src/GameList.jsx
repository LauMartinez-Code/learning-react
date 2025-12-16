import { Link, useOutletContext } from "react-router";

const GameList = () => {
    const gameList = useOutletContext();
    
    return (
        <ul>
            {gameList.length > 0 ? 
                gameList.map(game =>
                    (<li key={game.id}>
                        <h3 className="game-list__title">
                            <Link to={`/${game?.id}`}>
                                {game?.id} <span className="text-primary">- {game?.name}</span>
                            </Link>
                        </h3>
                        <p className="game-list__subtitle" title="developer">
                            {game?.developers?.join(", ")}
                        </p>
                    </li>)
                )
                : <li>No games found :(</li>
            }
        </ul>
    )
}

export default GameList;
