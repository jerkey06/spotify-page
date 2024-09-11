import React from 'react';

const TrackCard = ({ item, image, theme }) => {
    return (
        <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg rounded-xl p-4`}>
            <img src={image} alt={item.name} className="w-full h-40 object-cover rounded-t-xl mb-2" />
            <h3 className="text-lg font-medium truncate">{item.name}</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} truncate`}>{item.artists[0].name}</p>
        </div>
    )
}

export default TrackCard;