import { useOutletContext } from "react-router";

const Game = () => {
    const game = useOutletContext();

    if (!game) {
        return <p>Game not found ¯\_(ツ)_/¯</p>;
    }

    return (
        <>
            <h2 className="mb-1">{game?.name}</h2>
            <p>
                <span className="fw-bold">Genres: </span>
                {game?.genre}
            </p>
            <p>
                <span className="fw-bold">
                    Developer{game?.developers?.length > 1 && 's'}:&nbsp;
                </span>
                {game?.developers?.join(", ")}
            </p>
            <p>
                <span className="fw-bold">
                    Publisher{game?.publishers?.length > 1 && 's'}:&nbsp;
                </span>
                {game?.publishers?.join(", ")}
            </p>
            <p><span className="fw-bold">Release Dates</span></p>
            <ul className="game-detail__release-date-list">
                <li>Japan: {game?.releaseDates?.Japan}</li>
                <li>North America: {game?.releaseDates?.NorthAmerica}</li>
                <li>Europe: {game?.releaseDates?.Europe}</li>
                <li>Australia: {game?.releaseDates?.Australia}</li>
            </ul>
        </>
    );
}

export default Game;