import React from 'react';
import { Pause, Play } from 'lucide-react';

interface PlayerInterfaceProps {
  currentAlbum: { name: string; artist: string; cover: string } | null;
  isPlaying: boolean;
  progress: number;
  rotation: number;
  isFading: boolean;
  togglePlay: () => void;
  handlePrevious: () => void;
  handleNext: () => void;
  prevAlbum: { name: string; artist: string } | null;
  nextAlbum: { name: string; artist: string } | null;
  handleTooltipEnter: (e: React.MouseEvent<HTMLButtonElement>, content: string) => void;
  handleTooltipLeave: () => void;
}

const SkipBackIcon = ({ size = 19 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 20L9 12l10-8v16z" fill="currentColor" />
    <rect x="5" y="4" width="2" height="16" fill="currentColor" />
  </svg>
)

const SkipForwardIcon = ({ size = 19 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 4l10 8-10 8V4z" fill="currentColor" />
    <rect x="17" y="4" width="2" height="16" fill="currentColor" />
  </svg>
)

export default function PlayerInterface({
  currentAlbum,
  isPlaying,
  progress,
  rotation,
  isFading,
  togglePlay,
  handlePrevious,
  handleNext,
  prevAlbum,
  nextAlbum,
  handleTooltipEnter,
  handleTooltipLeave
}: PlayerInterfaceProps) {
  return (
    <div id="player_interface" className="w-96 h-96 bg-black bg-opacity-60 rounded-full flex items-center justify-center backdrop-blur-md pointer-events-auto shadow-lg" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' }}>
      <div className="w-88 h-88 bg-gray-800 rounded-full flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          dangerouslySetInnerHTML={{ __html: currentAlbum?.cover || '' }}
          style={{ 
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.1s linear'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(#10B981 ${progress}%, transparent ${progress}%)`,
          }}
        ></div>
        <div className="absolute w-5 h-5 bg-black rounded-full z-10"></div>
        <div className={`w-80 h-80 bg-gray-900 bg-opacity-50 rounded-full flex flex-col items-center justify-center z-20 px-4 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          <h2 
            id="player_albumname" 
            className="text-white text-2xl font-bold mb-2 text-center"
            style={{ fontSize: '1.75rem' }}
          >
            {currentAlbum?.name}
          </h2>
          <p 
            id="player_albumartist" 
            className="text-gray-200 text-lg mb-6 text-center"
          >
            {currentAlbum?.artist}
          </p>
          <div className="flex items-center space-x-6">
            <button 
              className="text-white p-2 rounded-full bg-black relative group hover:bg-gray-800 transition-colors duration-300"
              onClick={handlePrevious}
              onMouseEnter={(e) => handleTooltipEnter(e, prevAlbum ? `${prevAlbum.name} - ${prevAlbum.artist}` : 'No previous track')}
              onMouseLeave={handleTooltipLeave}
              aria-label="Previous track"
            >
              <SkipBackIcon />
            </button>
            <button 
              className="text-white p-3 rounded-full bg-green-500 flex items-center justify-center w-12 h-12 hover:bg-green-600 transition-colors duration-300 ease-in-out" 
              onClick={togglePlay} 
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button 
              className="text-white p-2 rounded-full bg-black relative group hover:bg-gray-800 transition-colors duration-300"
              onClick={handleNext}
              onMouseEnter={(e) => handleTooltipEnter(e, nextAlbum ? `${nextAlbum.name} - ${nextAlbum.artist}` : 'No next track')}
              onMouseLeave={handleTooltipLeave}
              aria-label="Next track"
            >
              <SkipForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}