import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Download, RefreshCw, Mail, Figma, FileText } from 'lucide-react';

interface EmailGeneratorProps {
  onBack: () => void;
  primaryColor?: string;
  templateName?: string;
}

export const EmailGenerator: React.FC<EmailGeneratorProps> = ({ onBack, primaryColor = '#ea580c', templateName = 'Welcome Email' }) => {
  const [emailType, setEmailType] = useState('Newsletters');
  const [audience, setAudience] = useState('New customers');
  const [purpose, setPurpose] = useState('');
  const [cta, setCta] = useState('Get Started');
  const [tone, setTone] = useState('Friendly');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
        setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="p-8 animate-in fade-in slide-in-from-right-8 duration-500 pb-20">
      {/* Header */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-orange-600 font-medium mb-6 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to templates
        </button>
        <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-[#8ba856]/10 rounded-xl flex items-center justify-center text-[#8ba856]">
                <Mail size={24} />
             </div>
             <div>
                <h1 className="text-2xl font-bold text-slate-900">{templateName}</h1>
                <p className="text-slate-500">Create compelling written content with AI</p>
             </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column - Controls */}
        <div className="space-y-6">
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
                
                {/* Email Type */}
                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Email Type</label>
                    <input 
                        type="text"
                        value={emailType}
                        onChange={(e) => setEmailType(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                        placeholder="e.g. Newsletter"
                    />
                </div>

                {/* Target Audience */}
                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Target Audience</label>
                    <input 
                        type="text"
                        value={audience}
                        onChange={(e) => setAudience(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                        placeholder="e.g. New customers"
                    />
                </div>

                {/* Email Purpose */}
                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">
                        Email Purpose <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="w-full h-32 p-5 rounded-3xl border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 resize-none placeholder:text-slate-300 text-sm leading-relaxed transition-all"
                        placeholder="Describe what this email should accomplish..."
                    />
                </div>

                 {/* Call-to-Action */}
                 <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Call-to-Action Button</label>
                    <input 
                        type="text"
                        value={cta}
                        onChange={(e) => setCta(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                        placeholder="e.g. Get Started"
                    />
                </div>

                 {/* Tone */}
                 <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Tone</label>
                    <input 
                        type="text"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                        placeholder="e.g. Friendly"
                    />
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
                        <Sparkles size={20} /> Generate Email Template
                    </>
                )}
            </button>
        </div>

        {/* Right Column - Preview */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 flex flex-col min-h-[800px]">
            <div className="flex items-center gap-2 mb-6 text-slate-800 font-medium">
                <FileText size={18} /> Preview
            </div>

            {/* Actions Toolbar */}
            <div className="flex flex-wrap gap-3 mb-6">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-orange-200 text-orange-700 text-xs font-medium hover:bg-orange-50 transition-colors">
                    <Download size={14} /> Export HTML
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-orange-200 text-orange-700 text-xs font-medium hover:bg-orange-50 transition-colors">
                    <RefreshCw size={14} /> Regenerate
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-orange-200 text-orange-700 text-xs font-medium hover:bg-orange-50 transition-colors">
                    <Figma size={14} /> Copy to figma
                </button>
            </div>

            {/* Email Preview Container */}
            <div className="flex-1 border border-slate-200 rounded-none overflow-hidden shadow-sm relative group bg-white mx-auto w-full max-w-md">
                <div className="h-full overflow-y-auto custom-scrollbar">
                    {/* Email Header */}
                    <div className="p-10 text-center bg-white">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-12 h-12 border border-[#ea580c] rounded-full p-1">
                                {/* Using a placeholder logo similar to the screenshot */}
                                <div className="w-full h-full rounded-full bg-orange-50 flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.5" className="w-6 h-6">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                                        <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" />
                                        <path d="M9 9H9.01" />
                                        <path d="M15 9H15.01" />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-left leading-none">
                                <span className="block text-[#ea580c] font-serif italic text-xl">Moss &</span>
                                <span className="block text-[#ea580c] font-serif text-xl tracking-wide">Glow Beauty</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Section */}
                    <div className="bg-[#f2f4ef] px-8 py-16 text-center flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif tracking-wide">Your Skin Deserves the Best.</h2>
                        <p className="text-slate-600 text-sm leading-relaxed mb-0 max-w-xs mx-auto">
                            Discover the transformative power of natural ingredients. Our carefully crafted formulas harness nature's bounty to reveal your skin's natural radiance and promote lasting health from within.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 text-center bg-white">
                        <h3 className="text-xs uppercase tracking-widest text-slate-900 font-medium mb-8">Featured This Month</h3>
                        
                        <div className="grid grid-cols-2 gap-4">
                            {/* Left Image */}
                            <div className="aspect-[3/4] rounded-tr-[3rem] overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1544436904-45371302d966?w=600&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                            </div>
                            
                            {/* Right Brand Card */}
                            <div className="aspect-[3/4] rounded-tl-[3rem] overflow-hidden relative bg-[#c2410c] flex items-center justify-center p-4 text-center">
                                <div className="border border-white/20 p-2 w-full h-full flex flex-col items-center justify-center rounded-tl-[2rem]">
                                    <div className="w-10 h-10 rounded-full border border-white mb-3 flex items-center justify-center">
                                        <Sparkles size={16} className="text-white" />
                                    </div>
                                    <div className="text-white font-serif uppercase text-[10px] tracking-widest">Moss & Glow</div>
                                    <div className="text-white font-serif uppercase text-[8px] tracking-[0.3em] mt-1 opacity-80">Beauty</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* More decorative images implied below to match screenshot cutoff */}
                         <div className="grid grid-cols-2 gap-4 mt-4 opacity-50">
                             <div className="h-20 bg-slate-100 rounded-lg"></div>
                             <div className="h-20 bg-slate-100 rounded-lg"></div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
