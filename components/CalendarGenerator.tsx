import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Calendar, Check, FileText, RefreshCw } from 'lucide-react';

interface CalendarGeneratorProps {
  onBack: () => void;
  primaryColor?: string;
  templateName?: string;
}

export const CalendarGenerator: React.FC<CalendarGeneratorProps> = ({ 
  onBack, 
  primaryColor = '#ea580c', 
  templateName = 'Social Media Starter' 
}) => {
  const [industry, setIndustry] = useState('');
  const [platforms, setPlatforms] = useState<string[]>(['Instagram', 'TikTok']);
  const [frequency, setFrequency] = useState('');
  const [duration, setDuration] = useState('');
  const [brandVoice, setBrandVoice] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const availablePlatforms = ['Instagram', 'TikTok', 'LinkedIn', 'YouTube', 'Twitter/X', 'Facebook'];

  const togglePlatform = (platform: string) => {
    if (platforms.includes(platform)) {
      setPlatforms(platforms.filter(p => p !== platform));
    } else {
      setPlatforms([...platforms, platform]);
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
        setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="p-8 animate-in fade-in slide-in-from-right-8 duration-500 pb-20">
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-orange-600 font-medium mb-6 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to templates
        </button>
        <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                <Calendar size={24} />
             </div>
             <div>
                <h1 className="text-2xl font-bold text-slate-900">{templateName}</h1>
                <p className="text-slate-500">Create compelling written content with AI</p>
             </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Industry/Niche <span className="text-red-500">*</span></label>
                    <input 
                        type="text"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                        placeholder="General"
                    />
                </div>

                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Platforms <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-2 gap-3">
                        {availablePlatforms.map(platform => {
                            const isSelected = platforms.includes(platform);
                            return (
                                <button
                                    key={platform}
                                    onClick={() => togglePlatform(platform)}
                                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium border transition-all ${
                                        isSelected 
                                        ? 'border-[#8ba856] bg-[#f7fee7] text-[#3f6212]' 
                                        : 'border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                                    }`}
                                >
                                    {isSelected ? <Check size={14} /> : <div className="w-3.5" />}
                                    {platform}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Posting Frequency</label>
                    <input 
                        type="text"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                         className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                    />
                </div>

                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Calendar Duration</label>
                     <input 
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                         className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                    />
                </div>

                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Brand Voice (Optional)</label>
                    <textarea 
                        value={brandVoice}
                        onChange={(e) => setBrandVoice(e.target.value)}
                        className="w-full h-32 p-5 rounded-3xl border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 resize-none placeholder:text-slate-300 text-sm leading-relaxed transition-all"
                        placeholder="Describe your brand's tone and personality..."
                    />
                </div>

            </div>

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
                        <Sparkles size={20} /> Generate Content Calendar
                    </>
                )}
            </button>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 flex flex-col min-h-[800px]">
            <div className="flex items-center gap-2 mb-6 text-slate-800 font-medium">
                <FileText size={18} /> Preview
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center bg-slate-50/50 rounded-3xl m-4 border-2 border-dashed border-slate-100">
                 <div className="w-24 h-24 bg-slate-200 rounded-3xl flex items-center justify-center mb-6 text-white">
                     <Calendar size={48} strokeWidth={2} className="text-white" />
                 </div>
                 <h3 className="text-slate-400 font-medium mb-2 text-lg">Your content calendar will appear here</h3>
                 <p className="text-slate-400/70 text-sm">Fill in the details and click generate</p>
            </div>
        </div>
      </div>
    </div>
  );
};
