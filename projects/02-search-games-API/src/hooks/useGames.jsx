import { useEffect, useState, useMemo, useCallback } from 'react';

const API_URL = 'https://api.sampleapis.com/switch/games';

const useGames = () => {
    const [gameList, setGameList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ac = new AbortController();
        const fetchGames = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(API_URL, { signal: ac.signal });
                if (!res.ok) throw new Error(`API error: ${res.status}`);
                const data = await res.json();
                setGameList(data || []);
            } catch (err) {
                if (err.name !== 'AbortError') setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
        return () => ac.abort();
    }, []);
    
    function getGameById(id) {
        let game = gameList.find(game => game.id == id);
        return game ? [ game ] : [];
    }

    return { gameList, getGameById, loading, error };
}

export default useGames;