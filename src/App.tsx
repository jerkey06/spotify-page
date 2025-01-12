import React, { useState } from 'react';
import { TimeRange } from './types';
import { Header } from './components/Header';
import { StatsOverview } from './components/StatsOverview';
import { TimeRangeSelector } from './components/TimeRangeSelector';
import { TopArtists } from './components/TopArtists';
import { TopSongs } from './components/TopSongs';
import { RecentActivity } from './components/RecentActivity';

function App() {
  const [timeRange, setTimeRange] = useState<TimeRange>('1M');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <StatsOverview />
        <TimeRangeSelector 
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />
        <TopArtists />
        <TopSongs />
        <RecentActivity />
      </main>
    </div>
  );
}

export default App;