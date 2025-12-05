import React, { useState } from 'react';
import { ArrowLeft, Music, Sparkles, Download, RefreshCw, Play, Volume2, Pause } from 'lucide-react';

interface AudioGeneratorProps {
  onBack: () => void;
  primaryColor?: string;
}

export const AudioGenerator: React.FC<AudioGeneratorProps> = ({ onBack, primaryColor = '#ea580c' }) => {
  const [audioType, setAudioType] = useState('Voice-over');
  const [script, setScript] = useState("Welcome to our product demo. Today we'll show you how to use Moss beauty products for effective skin care and a glowing skin. Lets start by unboxing our product, we are doing the product reveal now, so everyone get ready!");
  const [voiceStyle, setVoiceStyle] = useState('Professional Male');
  const [duration, setDuration] = useState('30s');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAudio, setGeneratedAudio] = useState<boolean>(true); // Simulating existing content
  const [isPlaying, setIsPlaying] = useState(false);

  const audioTypes = ['Voice-over', 'Music', 'Sound Effect', 'Podcast Intro'];
  const voiceStyles = ['Professional Male', 'Professional Female', 'Casual Male', 'Casual Female', 'Energetic', 'Calm & Soothing'];
  const durations = ['15s', '30s', '60s', '90s', '120s'];

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
        setIsGenerating(false);
        setGeneratedAudio(true);
    }, 2000);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-8 animate-in fade-in slide-in-from-right-8 duration-500 pb-20">
       {/* Header */}
      <div className="mb-8">
          <button 
            onClick={onBack}
            className="flex items-center text-orange-600 font-medium mb-4 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back
          </button>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Audio Generator</h1>
          <p className="text-slate-500">Create voice-overs, music, and sound effects</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Controls */}
        <div className="space-y-6">
            
            {/* Audio Type */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <label className="block text-slate-700 font-medium mb-4">Audio Type</label>
                <div className="grid grid-cols-2 gap-3">
                    {audioTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setAudioType(type)}
                            className={`py-3 px-4 rounded-full text-sm font-medium transition-all border ${
                                audioType === type 
                                ? 'border-[#8ba856] bg-[#f7fee7] text-[#3f6212]' 
                                : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Script Input (Visible for Voice-over and Podcast Intro) */}
            {(audioType === 'Voice-over' || audioType === 'Podcast Intro') && (
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <label className="block text-slate-700 font-medium mb-4">Script</label>
                    <textarea 
                        value={script}
                        onChange={(e) => setScript(e.target.value)}
                        className="w-full h-32 p-4 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 resize-none placeholder:text-slate-400 text-sm leading-relaxed"
                        placeholder="Enter your script here..."
                    />
                </div>
            )}

            {/* Voice Style (Visible for Voice-over) */}
             {(audioType === 'Voice-over' || audioType === 'Podcast Intro') && (
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <label className="block text-slate-700 font-medium mb-4">Voice Style</label>
                    <div className="grid grid-cols-2 gap-3">
                        {voiceStyles.map((style) => (
                            <button
                                key={style}
                                onClick={() => setVoiceStyle(style)}
                                className={`py-3 px-4 rounded-full text-sm font-medium transition-all border ${
                                    voiceStyle === style 
                                    ? 'border-[#8ba856] bg-[#f7fee7] text-[#3f6212]' 
                                    : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                            >
                                {style}
                            </button>
                        ))}
                    </div>
                </div>
             )}

            {/* Duration */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <label className="block text-slate-700 font-medium mb-4">Duration (seconds)</label>
                <div className="flex flex-wrap gap-3">
                    {durations.map((d) => (
                        <button
                            key={d}
                            onClick={() => setDuration(d)}
                            className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-medium transition-all border ${
                                duration === d
                                ? 'border-[#8ba856] bg-[#f7fee7] text-[#3f6212]' 
                                : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                        >
                            {d}
                        </button>
                    ))}
                </div>
            </div>

            {/* Generate Button */}
            <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className={`w-full py-4 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${
                    isGenerating ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'
                }`}
                style={{ backgroundColor: '#c2410c' }}
            >
                {isGenerating ? (
                    <>
                         <RefreshCw className="animate-spin" size={20} /> Generating...
                    </>
                ) : (
                    <>
                        <Sparkles size={20} /> Generate Audio
                    </>
                )}
            </button>
        </div>

        {/* Right Column - Preview */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col h-full min-h-[600px]">
             <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                    <Music size={18} /> Audio Player
                </div>
                <div className="flex gap-2">
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                        <Download size={18} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                        <RefreshCw size={18} />
                        </button>
                </div>
            </div>

            {generatedAudio ? (
                <div className="bg-slate-50 rounded-3xl p-8 flex-1 flex flex-col items-center justify-center relative overflow-hidden">
                    
                    {/* Visualizer Simulation */}
                    <div className="flex items-center justify-center gap-1 h-32 w-full mb-12 px-8">
                        {Array.from({ length: 40 }).map((_, i) => {
                            // Generate pseudo-random heights that look like a waveform
                            const height = Math.max(20, Math.random() * 100); 
                            return (
                                <div 
                                    key={i} 
                                    className="w-1.5 bg-[#c2410c] rounded-full transition-all duration-300"
                                    style={{ 
                                        height: `${height}%`,
                                        opacity: Math.random() > 0.5 ? 1 : 0.7
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* Controls */}
                    <div className="w-full max-w-md space-y-6">
                        
                        {/* Play Button */}
                        <div className="flex justify-center">
                            <button 
                                onClick={togglePlay}
                                className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
                                style={{ backgroundColor: '#c2410c' }}
                            >
                                {isPlaying ? (
                                    <Pause size={24} fill="currentColor" />
                                ) : (
                                    <Play size={24} fill="currentColor" className="ml-1" />
                                )}
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                             <div className="h-1.5 bg-slate-200 rounded-full w-full overflow-hidden">
                                 <div className="h-full w-1/3 bg-[#c2410c] rounded-full" />
                             </div>
                             <div className="flex justify-between text-xs text-slate-400 font-medium font-mono">
                                 <span>0:00</span>
                                 <span>{parseInt(duration) < 60 ? `0:${parseInt(duration)}` : '1:00'}</span>
                             </div>
                        </div>

                        {/* Volume Icon */}
                        <div className="flex justify-center text-slate-400">
                             <Volume2 size={20} />
                        </div>
                    </div>

                    {/* Metadata Card */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <div className="grid grid-cols-2 gap-y-4">
                            <div>
                                <span className="block text-xs text-slate-400 font-medium mb-1">Type</span>
                                <span className="text-slate-800 font-medium text-sm">{audioType}</span>
                            </div>
                            <div>
                                <span className="block text-xs text-slate-400 font-medium mb-1">Duration</span>
                                <span className="text-slate-800 font-medium text-sm">{duration}</span>
                            </div>
                            <div className="col-span-2">
                                <span className="block text-xs text-slate-400 font-medium mb-1">Voice</span>
                                <span className="text-slate-800 font-medium text-sm">{voiceStyle}</span>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-300 shadow-sm">
                        <Music size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-slate-400 font-medium mb-1">Your generated audio will appear here</h3>
                    <p className="text-slate-400/70 text-sm">Fill in the fields and click Generate</p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};
