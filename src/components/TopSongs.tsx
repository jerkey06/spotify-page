import React from 'react';
import { Music2, Heart, PlayCircle } from 'lucide-react';
import { Song } from '../types';

const mockSongs: Song[] = [
  { name: 'Canción 1', artist: 'Artista 1', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop', plays: '1.2M' },
  { name: 'Canción 2', artist: 'Artista 2', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop', plays: '980K' },
  { name: 'Canción 3', artist: 'Artista 3', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop', plays: '750K' },
  { name: 'Canción 4', artist: 'Artista 4', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop', plays: '500K' },
  { name: 'Canción 5', artist: 'Artista 5', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop', plays: '350K' },
];

export function TopSongs() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Music2 className="text-green-500" />
        <h2 className="text-2xl font-bold">Canciones Más Escuchadas</h2>
      </div>
      <div className="bg-gray-800/30 rounded-xl p-4">
        {mockSongs.map((song, index) => (
          <SongRow key={index} song={song} position={index + 1} />
        ))}
      </div>
    </section>
  );
}

interface SongRowProps {
  song: Song;
  position: number;
}

function SongRow({ song, position }: SongRowProps) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-700/30 rounded-lg transition-colors">
      <div className="flex items-center gap-4">
        <span className="text-gray-400 w-6">{position}</span>
        <img 
          src={song.image}
          alt={`${song.name} cover`}
          className="w-12 h-12 rounded"
        />
        <div>
          <h3 className="font-medium">{song.name}</h3>
          <p className="text-sm text-gray-400">{song.artist}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-400">{song.plays} reproducciones</span>
        <Heart className="w-5 h-5 text-gray-400 hover:text-green-500 cursor-pointer" />
        <PlayCircle className="w-5 h-5 text-gray-400 hover:text-green-500 cursor-pointer" />
      </div>
    </div>
  );
}