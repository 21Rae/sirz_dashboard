import React, { useState } from 'react';
import { ArrowLeft, FileText, Sparkles, Copy, RefreshCw } from 'lucide-react';

interface TextGeneratorProps {
  onBack: () => void;
  primaryColor?: string;
}

export const TextGenerator: React.FC<TextGeneratorProps> = ({ onBack, primaryColor = '#ea580c' }) => {
  const [contentType, setContentType] = useState('Blog Post');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Professional');
  const [length, setLength] = useState('Medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!topic) return;
    setIsGenerating(true);
    // Simulate AI generation delay
    setTimeout(() => {
        setGeneratedContent(`## ${topic}\n\nHere is a draft for your ${contentType.toLowerCase()}. AI has generated this content based on the ${tone.toLowerCase()} tone you selected.\n\nIntroduction:\nStart with a hook that grabs the reader's attention. This is a placeholder for the actual generated text which would be relevant to "${topic}".\n\nKey Point 1:\nElaborate on the first main idea. Using AI tools can significantly speed up your workflow.\n\nKey Point 2:\nDiscuss the second main idea. Quality and consistency are key when building a brand.\n\nConclusion:\nWrap up the post with a summary and a call to action.`);
        setIsGenerating(false);
    }, 1500);
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
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Text Generator</h1>
          <p className="text-slate-500">Create compelling written content with AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column - Controls */}
        <div className="space-y-6">
            
            {/* Content Type */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <label className="block text-slate-700 font-medium mb-4">Content Type</label>
                <div className="grid grid-cols-2 gap-3">
                    {['Blog Post', 'Product Description', 'Social Media', 'Email Copy', 'Ad Copy'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setContentType(type)}
                            className={`py-3 px-4 rounded-xl text-sm font-medium transition-all border ${
                                contentType === type 
                                ? 'border-[#8ba856] bg-[#f7fee7] text-[#3f6212]' 
                                : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Prompt */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <label className="block text-slate-700 font-medium mb-4">What do you want to write about?</label>
                <textarea 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="E.g., Write a blog post about the benefits of AI in marketing..."
                    className="w-full h-32 p-4 rounded-xl border border-slate-200 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 resize-none placeholder:text-slate-400 text-sm"
                />
            </div>

            {/* Tone & Length */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
                
                {/* Tone */}
                <div>
                    <label className="block text-slate-700 font-medium mb-3">Tone</label>
                    <div className="flex flex-wrap gap-2">
                        {['Professional', 'Casual', 'Friendly', 'Formal', 'Creative', 'Humorous'].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTone(t)}
                                className={`py-2 px-5 rounded-full text-xs font-medium transition-all border ${
                                    tone === t 
                                    ? 'border-purple-500 bg-purple-50 text-purple-700' 
                                    : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Length */}
                <div>
                    <label className="block text-slate-700 font-medium mb-3">Length</label>
                    <div className="flex gap-3">
                         {['Short', 'Medium', 'Long'].map((l) => (
                            <button
                                key={l}
                                onClick={() => setLength(l)}
                                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all border ${
                                    length === l
                                    ? 'border-slate-800 bg-slate-50 text-slate-800'
                                    : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            {/* Generate Button */}
            <button 
                onClick={handleGenerate}
                disabled={isGenerating || !topic}
                className={`w-full py-4 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${
                    isGenerating || !topic ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'
                }`}
                style={{ backgroundColor: '#e09b86' }} 
            >
                {isGenerating ? (
                    <>
                         <RefreshCw className="animate-spin" size={20} /> Generating...
                    </>
                ) : (
                    <>
                        <Sparkles size={20} /> Generate Text
                    </>
                )}
            </button>

        </div>

        {/* Right Column - Preview */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col h-[740px]">
            <div className="flex items-center gap-2 mb-4 text-slate-800 font-medium">
                <FileText size={18} /> Preview
            </div>

            <div className="flex-1 bg-slate-50/50 rounded-xl border border-slate-100/50 p-8 flex flex-col relative overflow-hidden">
                {generatedContent ? (
                    <div className="animate-in fade-in zoom-in-95 duration-500 h-full overflow-y-auto pr-2 custom-scrollbar">
                         <div className="prose prose-slate prose-sm max-w-none text-slate-600 whitespace-pre-line">
                            {generatedContent}
                         </div>
                         <button 
                            className="absolute top-4 right-4 p-2 bg-white rounded-lg shadow-sm text-slate-400 hover:text-slate-700 border border-slate-100 transition-colors"
                            onClick={() => navigator.clipboard.writeText(generatedContent)}
                            title="Copy text"
                         >
                             <Copy size={16} />
                         </button>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-400">
                            <FileText size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-slate-400 font-medium mb-1">Your generated text will appear here</h3>
                        <p className="text-slate-400/70 text-sm">Fill in the fields and click Generate</p>
                    </div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};
