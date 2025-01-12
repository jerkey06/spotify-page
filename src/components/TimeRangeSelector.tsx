import React from 'react';
import { Calendar } from 'lucide-react';
import { TimeRange } from '../types';

interface TimeRangeSelectorProps {
  timeRange: TimeRange;
  onTimeRangeChange: (range: TimeRange) => void;
}

export function TimeRangeSelector({ timeRange, onTimeRangeChange }: TimeRangeSelectorProps) {
  const timeRangeLabels = {
    '1M': 'Último mes',
    '5M': 'Últimos 5 meses',
    '1Y': 'Último año'
  };

  return (
    <div className="flex items-center gap-4 mb-8">
      <Calendar className="text-green-500" />
      <div className="flex gap-2 bg-gray-800/30 p-1 rounded-lg">
        {(['1M', '5M', '1Y'] as TimeRange[]).map((range) => (
          <button
            key={range}
            onClick={() => onTimeRangeChange(range)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              timeRange === range 
                ? 'bg-green-500 text-black' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {range}
          </button>
        ))}
      </div>
      <span className="text-gray-400">{timeRangeLabels[timeRange]}</span>
    </div>
  );
}