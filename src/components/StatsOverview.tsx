import React from 'react';
import { Clock3, Mic2, BarChart2 } from 'lucide-react';

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <StatCard
        icon={<Clock3 className="text-green-500" />}
        title="Tiempo Total"
        value="247 horas"
        subtitle="Último mes"
      />
      <StatCard
        icon={<Mic2 className="text-green-500" />}
        title="Artistas Top"
        value="54 artistas"
        subtitle="Escuchados este mes"
      />
      <StatCard
        icon={<BarChart2 className="text-green-500" />}
        title="Género Favorito"
        value="Rock"
        subtitle="45% de reproducciones"
      />
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}

function StatCard({ icon, title, value, subtitle }: StatCardProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  );
}