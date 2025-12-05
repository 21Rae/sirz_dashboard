import React, { useState } from 'react';
import { ArrowLeft, FileText, Sparkles, Copy, Download, RefreshCw } from 'lucide-react';

interface BlogGeneratorProps {
  onBack: () => void;
  primaryColor?: string;
}

export const BlogGenerator: React.FC<BlogGeneratorProps> = ({ onBack, primaryColor = '#ea580c' }) => {
  const [topic, setTopic] = useState('');
  const [audience, setAudience] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState('');
  const [contentLength, setContentLength] = useState(50);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
        setIsGenerating(false);
        setGeneratedContent({
            title: "The Ultimate Guide to Content Marketing Strategies For 2026",
            metaDescription: "Discover everything you need to know about Content Marketing Strategies For 2026. Expert insights, practical tips, and actionable strategies for success.",
            outline: [
                "1. Introduction: Why This Matters",
                "2. Understanding the Basics",
                "3. Key Strategies and Best Practices",
                "4. Common Mistakes to Avoid",
                "5. Advanced Tips and Techniques",
                "6. Real-World Examples and Case Studies",
                "7. Conclusion and Next Steps"
            ],
            fullContent: [
                "# Content Marketing Strategies For 2026: A Comprehensive Guide",
                "## Introduction: Why This Matters",
                "In today's fast-paced digital landscape, understanding Content Marketing Strategies For 2026 is more crucial than ever. Whether you're a professional looking to stay ahead of the curve or simply curious about this important subject, this guide will provide you with everything you need to know.",
                "## Understanding the Basics",
                "Before diving deep, let's establish a solid foundation. Content Marketing Strategies For 2026 encompasses several key concepts that are essential to grasp...",
                "## Key Strategies and Best Practices",
                "Now that we've covered the fundamentals, let's explore proven strategies that can help you succeed...",
                "[Content continues...]"
            ]
        });
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
             <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <FileText size={24} />
             </div>
             <div>
                <h1 className="text-2xl font-bold text-slate-900">SEO Blog Post Generator</h1>
                <p className="text-slate-500">Create optimized blog content</p>
             </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Input Column */}
        <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
                
                {/* Topic */}
                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Blog Topic <span className="text-red-500">*</span></label>
                    <input 
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                        placeholder="e.g., Content Marketing Strategies for 2024"
                    />
                </div>

                {/* Audience */}
                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Target Audience</label>
                    <input 
                        type="text"
                        value={audience}
                        onChange={(e) => setAudience(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                        placeholder="e.g., Marketing professionals"
                    />
                </div>

                {/* Keywords */}
                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">SEO Keywords</label>
                    <div className="relative">
                        <input 
                            type="text"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                            className="w-full pl-5 pr-24 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                            placeholder="Add keywords..."
                        />
                        <button 
                            className="absolute right-2 top-2 bottom-2 px-6 rounded-full text-white text-xs font-medium hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: primaryColor }}
                        >
                            Add
                        </button>
                    </div>
                </div>

                {/* Tone */}
                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Tone</label>
                    <input 
                        type="text"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                    />
                </div>

                {/* Length */}
                <div>
                    <label className="block text-slate-700 font-medium mb-4 text-sm">Content Length: {contentLength}%</label>
                    <input 
                        type="range"
                        min="0"
                        max="100"
                        value={contentLength}
                        onChange={(e) => setContentLength(Number(e.target.value))}
                        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-orange-600"
                        style={{ accentColor: primaryColor }}
                    />
                    <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
                        <span>Short</span>
                        <span>Long-form</span>
                    </div>
                </div>

            </div>

            <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className={`w-full py-4 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${
                    isGenerating ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'
                }`}
                style={{ backgroundColor: primaryColor }} 
            >
                {isGenerating ? (
                    <>
                         <RefreshCw className="animate-spin" size={20} /> Generating...
                    </>
                ) : (
                    <>
                        <Sparkles size={20} /> Generate Blog post
                    </>
                )}
            </button>
        </div>

        {/* Output Column */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 flex flex-col min-h-[800px]">
             
             {generatedContent ? (
                 <>
                    <div className="flex flex-wrap gap-3 mb-8">
                         <button className="flex-1 py-2.5 rounded-full border border-orange-200 text-orange-600 text-sm font-medium hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
                            <Copy size={16} /> Copy
                         </button>
                         <button className="flex-1 py-2.5 rounded-full border border-orange-200 text-orange-600 text-sm font-medium hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
                            <Download size={16} /> Download
                         </button>
                         <button className="flex-1 py-2.5 rounded-full border border-orange-200 text-orange-600 text-sm font-medium hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
                            <RefreshCw size={16} /> Regenerate
                         </button>
                    </div>

                    <div className="space-y-6 h-full overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-bottom-2 duration-500">
                        {/* Title */}
                        <div className="bg-slate-50 rounded-2xl p-6 relative group">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 block">Title</span>
                            <h3 className="text-lg font-bold text-slate-900">{generatedContent.title}</h3>
                            <button className="absolute top-4 right-4 text-slate-300 hover:text-slate-500">
                                <Copy size={14} />
                            </button>
                        </div>

                        {/* Meta */}
                        <div className="bg-slate-50 rounded-2xl p-6 relative group">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 block">Meta Description</span>
                            <p className="text-sm text-slate-600 leading-relaxed">{generatedContent.metaDescription}</p>
                            <button className="absolute top-4 right-4 text-slate-300 hover:text-slate-500">
                                <Copy size={14} />
                            </button>
                        </div>

                        {/* Outline */}
                        <div className="bg-slate-50 rounded-2xl p-6">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3 block">Outline</span>
                            <ul className="space-y-2.5">
                                {generatedContent.outline.map((item: string, i: number) => (
                                    <li key={i} className="text-sm text-slate-700">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Full Article */}
                        <div className="bg-slate-50 rounded-2xl p-6">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3 block">Full Article</span>
                            <div className="space-y-4">
                                {generatedContent.fullContent.map((para: string, i: number) => (
                                    <p key={i} className={`text-sm ${para.startsWith('#') ? 'font-bold text-slate-900' : 'text-slate-600 leading-relaxed'}`}>
                                        {para.replace(/^#+ /, '')}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                 </>
             ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center bg-slate-50/50 rounded-3xl m-4 border-2 border-dashed border-slate-100">
                     <div className="w-20 h-20 bg-slate-200 rounded-3xl flex items-center justify-center mb-6 text-white">
                         <FileText size={40} strokeWidth={2} className="text-white" />
                     </div>
                     <h3 className="text-slate-400 font-medium mb-2 text-lg">Your blog post will appear here</h3>
                     <p className="text-slate-400/70 text-sm">Fill in the details and click generate</p>
                </div>
             )}
        </div>
      </div>
    </div>
  );
};
