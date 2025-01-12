import React from 'react';
import { Album } from '../types';

const mockAlbums: Album[] = [
  { name: 'Álbum 1', artist: 'Artista 1', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop', playedAt: 'hace 2 horas' },
  { name: 'Álbum 2', artist: 'Artista 2', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop', playedAt: 'hace 3 horas' },
  { name: 'Álbum 3', artist: 'Artista 3', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop', playedAt: 'hace 4 horas' },
  { name: 'Álbum 4', artist: 'Artista 4', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop', playedAt: 'hace 5 horas' },
];

export function RecentActivity() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Actividad Reciente</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockAlbums.map((album, index) => (
          <AlbumCard key={index} album={album} />
        ))}
      </div>
    </section>
  );
}

interface AlbumCardProps {
  album: Album;
}

function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="bg-gray-800/30 p-4 rounded-xl hover:bg-gray-700/30 transition-colors">
      <img 
        src={album.image}
        alt={`${album.name} cover`}
        className="w-full aspect-square rounded-lg mb-4 object-cover"
      />
      <h3 className="font-medium">{album.name}</h3>
      <p className="text-sm text-gray-400">{album.artist}</p>
      <p className="text-xs text-gray-500 mt-2">Reproducido {album.playedAt}</p>
    </div>
  );
}