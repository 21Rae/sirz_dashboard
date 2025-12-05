import React, { useState } from 'react';
import { ArrowLeft, Video, Sparkles, Download, RefreshCw, Play, Pause, Zap } from 'lucide-react';

interface VideoGeneratorProps {
  onBack: () => void;
  primaryColor?: string;
}

export const VideoGenerator: React.FC<VideoGeneratorProps> = ({ onBack, primaryColor = '#ea580c' }) => {
  const [videoType, setVideoType] = useState('Product Demo');
  const [script, setScript] = useState('Create a product demo showing our new skin care and facial products with luxury ingredients to suite your skin');
  const [videoStyle, setVideoStyle] = useState('Professional');
  const [duration, setDuration] = useState('30s');
  const [format, setFormat] = useState('Landscape (16:9)');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<boolean>(true); // Simulating existing content
  const [isPlaying, setIsPlaying] = useState(false);

  const videoTypes = ['Product Demo', 'Explainer Video', 'Social Media Ad', 'Tutorial'];
  const videoStyles = ['Professional', 'Casual', 'Dynamic', 'Minimal'];
  const durations = ['15s', '30s', '60s', '90s'];
  const formats = ['Landscape (16:9)', 'Portrait (9:16)', 'Square (1:1)'];

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
        setIsGenerating(false);
        setGeneratedVideo(true);
    }, 3000);
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
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Video Generator</h1>
          <p className="text-slate-500">Create engaging video content with AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Controls */}
        <div className="space-y-6">
            
            {/* Video Type */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <label className="block text-slate-700 font-medium mb-4">Video Type</label>
                <div className="grid grid-cols-2 gap-3">
                    {videoTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setVideoType(type)}
                            className={`py-3 px-4 rounded-full text-sm font-medium transition-all border ${
                                videoType === type 
                                ? 'border-[#8ba856] bg-[#f7fee7] text-[#3f6212]' 
                                : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Script Input */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <label className="block text-slate-700 font-medium mb-4">Video Description / Script</label>
                <textarea 
                    value={script}
                    onChange={(e) => setScript(e.target.value)}
                    className="w-full h-32 p-4 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 resize-none placeholder:text-slate-400 text-sm leading-relaxed"
                    placeholder="Describe your video..."
                />
            </div>

            {/* Video Style */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <label className="block text-slate-700 font-medium mb-4">Video Style</label>
                <div className="grid grid-cols-2 gap-3">
                    {videoStyles.map((style) => (
                        <button
                            key={style}
                            onClick={() => setVideoStyle(style)}
                            className={`py-3 px-4 rounded-full text-sm font-medium transition-all border ${
                                videoStyle === style 
                                ? 'border-[#8ba856] bg-[#f7fee7] text-[#3f6212]' 
                                : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                        >
                            {style}
                        </button>
                    ))}
                </div>
            </div>

            {/* Duration & Format */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-6">
                
                {/* Duration */}
                <div>
                    <label className="block text-slate-700 font-medium mb-4">Duration</label>
                    <div className="flex flex-wrap gap-3">
                        {durations.map((d) => (
                            <button
                                key={d}
                                onClick={() => setDuration(d)}
                                className={`w-16 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all border ${
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

                {/* Format */}
                <div>
                    <label className="block text-slate-700 font-medium mb-4">Format</label>
                    <div className="space-y-3">
                        {formats.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFormat(f)}
                                className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-all border text-left flex items-center justify-between ${
                                    format === f
                                    ? 'border-[#8ba856] bg-[#f7fee7] text-[#3f6212]' 
                                    : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                            >
                                {f}
                                {format === f && <div className="w-2 h-2 rounded-full bg-[#8ba856]" />}
                            </button>
                        ))}
                    </div>
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
                        <Sparkles size={20} /> Generate Video
                    </>
                )}
            </button>

            {/* Note */}
            <div className="bg-orange-50/50 p-4 rounded-xl flex gap-3">
                <Zap size={20} className="text-orange-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-800">Note:</span> Video generation may take several minutes depending on length and complexity.
                </p>
            </div>
        </div>

        {/* Right Column - Preview */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col h-full min-h-[740px]">
             <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                    <Video size={18} /> Video Preview
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

            {generatedVideo ? (
                <div className="flex-1 flex flex-col">
                    <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 group mb-6">
                        <img 
                            src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=1200&auto=format&fit=crop&q=80" 
                            alt="Video thumbnail" 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                        />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button 
                                onClick={togglePlay}
                                className="w-16 h-16 rounded-full bg-[#c2410c] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                            >
                                {isPlaying ? (
                                    <Pause size={24} fill="currentColor" />
                                ) : (
                                    <Play size={24} fill="currentColor" className="ml-1" />
                                )}
                            </button>
                        </div>

                        {/* Video Controls Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                             <div className="flex items-center gap-3">
                                <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                                     <div className="h-full w-1/3 bg-[#c2410c] rounded-full" />
                                </div>
                                <span className="text-xs text-white font-medium tabular-nums">0:00 / {duration.replace('s', '')}:00</span>
                             </div>
                        </div>
                    </div>

                    {/* Metadata */}
                    <div className="bg-slate-50 rounded-2xl p-6 grid grid-cols-2 gap-y-6">
                        <div>
                            <span className="block text-xs text-slate-400 font-medium mb-1">Type</span>
                            <span className="text-slate-800 font-medium text-sm">{videoType}</span>
                        </div>
                        <div>
                            <span className="block text-xs text-slate-400 font-medium mb-1">Duration</span>
                            <span className="text-slate-800 font-medium text-sm">
                                {duration.replace('s', '')} seconds
                            </span>
                        </div>
                        <div>
                            <span className="block text-xs text-slate-400 font-medium mb-1">Style</span>
                            <span className="text-slate-800 font-medium text-sm">{videoStyle}</span>
                        </div>
                        <div>
                            <span className="block text-xs text-slate-400 font-medium mb-1">Format</span>
                            <span className="text-slate-800 font-medium text-sm">
                                {format.includes('16:9') ? '16:9' : format.includes('9:16') ? '9:16' : '1:1'}
                            </span>
                        </div>
                    </div>

                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-300 shadow-sm">
                        <Video size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-slate-400 font-medium mb-1">Your generated video will appear here</h3>
                    <p className="text-slate-400/70 text-sm">Fill in the fields and click Generate</p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};
