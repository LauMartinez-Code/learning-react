import { Link } from "react-router";

const Game = ({game, showLink = false}) => {
    return (
        <li>
            <h3>
                {showLink ? <Link to={`/${game?.id}`}>{game?.id}</Link> : game?.id}
                &nbsp;- {game?.name}
            </h3>
            <p>Developer: {game?.developers}</p>
            <p>North America Release Date: {game?.releaseDates?.NorthAmerica}</p>
        </li>
    );
}

export default Game;