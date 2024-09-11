import React from 'react';

const ArtistCard = ({ item, image, theme }) => {
    return (
        <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg rounded-xl p-4`}>
            <img src={image} alt={item.name} className="w-full h-40 object-cover rounded-t-xl mb-2" />
            <h3 className="text-lg font-medium truncate">{item.name}</h3>
        </div>
    )
}

export default ArtistCard;