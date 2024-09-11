import { useState, useEffect } from 'react';
import ArtistCard from "./components/ArtistCard.jsx";
import TrackCard from "./components/TrackCard.jsx";
import axios from 'axios';
import './App.css';

function App() {
    const [accessToken, setAccessToken] = useState(null);
    const [topArtists, setTopArtists] = useState({
        long_term: [],
        medium_term: [],
        short_term: []
    });
    const [topTracks, setTopTracks] = useState({
        long_term: [],
        medium_term: [],
        short_term: []
    });
    const [theme, setTheme] = useState('light');

    const timeRanges = [
        { key: 'long_term', label: '1 Año' },
        { key: 'medium_term', label: '6 Meses' },
        { key: 'short_term', label: '4 Semanas' }
    ];

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('access_token');
        if (token) {
            setAccessToken(token);
            fetchAllData(token);
        }

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(darkModeMediaQuery.matches ? 'dark' : 'light');
    }, []);

    const fetchTopData = async (type, timeRange, token) => {
        try {
            const response = await axios.get(`https://api.spotify.com/v1/me/top/${type}`, {
                params: {
                    time_range: timeRange,
                    limit: 10,
                },
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept-Language': 'es-419,es;q=0.9'
                }
            });
            return response.data.items || [];
        } catch (error) {
            console.error(`Error fetching ${type} data for ${timeRange}:`, error);
            return [];
        }
    };

    const fetchAllData = async (token) => {
        for (const range of timeRanges) {
            const artistsData = await fetchTopData('artists', range.key, token);
            const tracksData = await fetchTopData('tracks', range.key, token);

            setTopArtists(prev => ({ ...prev, [range.key]: artistsData }));
            setTopTracks(prev => ({ ...prev, [range.key]: tracksData }));
        }
    };

    const handleLogin = () => {
        window.location = 'http://localhost:5000/login';
    };

    const renderCards = (data, CardComponent, title) => (
        <div className='w-full mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
            {timeRanges.map(range => (
                <div key={range.key} className='mb-6'>
                    <h3 className='text-xl font-medium mb-2'>{range.label}</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {data[range.key].slice(0, 4).map((item) => (
                            <CardComponent
                                key={item.id}
                                item={item}
                                image={item.images?.[0]?.url || item.album?.images?.[0]?.url || 'default_image_url'}
                                theme={theme}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    if (!accessToken) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
                <button
                    onClick={handleLogin}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Iniciar sesión con Spotify
                </button>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className='container mx-auto p-4'>
                <h1 className='text-3xl font-bold mb-8'>Tus Estadísticas de Spotify</h1>
                {renderCards(topArtists, ArtistCard, 'Artistas Top')}
                {renderCards(topTracks, TrackCard, 'Canciones Top')}
            </div>
        </div>
    );
}

export default App;