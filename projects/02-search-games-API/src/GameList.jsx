import { useOutletContext } from "react-router";
import Game from "./Game";

const GameList = () => {
    const gameList = useOutletContext();
    
    return (
        <ul>
            {gameList.length > 0 ? 
                gameList.map(g =>
                    <Game key={g.id} game={g} showLink={gameList?.length > 1}/>
                )
                : <p>No games found :(</p>
            }
        </ul>
    )
}

export default GameList;
