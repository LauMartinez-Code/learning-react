import { useEffect, useState, } from 'react';

const API_URL = 'https://api.sampleapis.com/switch/games';

const useGames = () => {
    const [gameList, setGameList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const ac = new AbortController();
        setLoading(true);
        setError(null);
        
        const fetchGames = async () => {
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
    
    const getGameById = id => gameList.find(game => game.id == id);

    return { gameList, getGameById, loading, error };
}

export default useGames;