import React from 'react';
import { Music2 } from 'lucide-react';

export function Header() {
  return (
    <header className="p-6 flex items-center justify-between bg-black/30">
      <div className="flex items-center gap-2">
        <Music2 className="w-8 h-8 text-green-500" />
        <h1 className="text-2xl font-bold">Spotify Stats</h1>
      </div>
      <div className="flex items-center gap-4">
        <img 
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" 
          alt="Perfil" 
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium">Usuario</span>
      </div>
    </header>
  );
}