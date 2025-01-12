import React from 'react';
import { Trophy, PlayCircle } from 'lucide-react';
import { Artist } from '../types';

const mockArtists: Artist[] = [
  { name: 'Artista 1', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop', plays: '2.5M' },
  { name: 'Artista 2', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop', plays: '1.8M' },
  { name: 'Artista 3', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop', plays: '900K' },
  { name: 'Artista 4', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop', plays: '750K' },
  { name: 'Artista 5', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop', plays: '500K' },
];

export function TopArtists() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="text-green-500" />
        <h2 className="text-2xl font-bold">Artistas Más Escuchados</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {mockArtists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </section>
  );
}

interface ArtistCardProps {
  artist: Artist;
}

function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div className="bg-gray-800/30 p-4 rounded-xl hover:bg-gray-700/30 transition-colors group">
      <div className="relative mb-4">
        <img 
          src={artist.image}
          alt={artist.name}
          className="w-full aspect-square rounded-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <PlayCircle className="w-12 h-12 text-green-500" />
        </div>
      </div>
      <h3 className="font-medium text-center">{artist.name}</h3>
      <p className="text-sm text-gray-400 text-center">{artist.plays} reproducciones</p>
    </div>
  );
}