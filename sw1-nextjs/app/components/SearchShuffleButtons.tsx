import React from 'react';
import { Search, Shuffle } from 'lucide-react';

interface SearchShuffleButtonsProps {
  toggleSearch: () => void;
  shuffleAndReload: () => void;
  handleTooltipEnter: (e: React.MouseEvent<HTMLButtonElement>, content: string) => void;
  handleTooltipLeave: () => void;
}

export default function SearchShuffleButtons({
  toggleSearch,
  shuffleAndReload,
  handleTooltipEnter,
  handleTooltipLeave
}: SearchShuffleButtonsProps) {
  return (
    <div id="search_shuffle_buttons" className="fixed top-4 left-4 z-30 flex space-x-4">
      <button
        onClick={toggleSearch}
        className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-green-500 hover:text-white transition-colors duration-300 ease-in-out"
        onMouseEnter={(e) => handleTooltipEnter(e, 'Search')}
        onMouseLeave={handleTooltipLeave}
        aria-label="Toggle search"
      >
        <Search size={24} />
      </button>
      <button
        onClick={shuffleAndReload}
        className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-green-500 hover:text-white transition-colors duration-300 ease-in-out"
        onMouseEnter={(e) => handleTooltipEnter(e, 'Shuffle albums')}
        onMouseLeave={handleTooltipLeave}
        aria-label="Shuffle and reload"
      >
        <Shuffle size={24} />
      </button>
    </div>
  );
}