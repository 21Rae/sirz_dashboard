import React, { useState } from 'react';
import { ArrowLeft, Image as ImageIcon, Sparkles, Download, RefreshCw, Wand2, Lightbulb } from 'lucide-react';

interface ImageGeneratorProps {
  onBack: () => void;
  primaryColor?: string;
}

export const ImageGenerator: React.FC<ImageGeneratorProps> = ({ onBack, primaryColor = '#ea580c' }) => {
  const [prompt, setPrompt] = useState('Graphics for my beauty brand');
  const [style, setStyle] = useState('Realistic');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=60'); 

  const suggestions = [
      "A modern minimalist product on a clean white background",
      "Colorful abstract geometric shapes with gradient colors",
      "Professional business person in a contemporary office",
      "Beautiful sunset landscape with mountains and water"
  ];

  const styles = ['Realistic', 'Artistic', 'Abstract', 'Digital Art', 'Illustration', '3D Render'];
  const ratios = [
      { label: 'Square', value: '1:1' },
      { label: 'Landscape', value: '16:9' },
      { label: 'Portrait', value: '9:16' },
      { label: 'Standard', value: '4:3' }
  ];

  const handleGenerate = () => {
      if (!prompt) return;
      setIsGenerating(true);
      setTimeout(() => {
          setIsGenerating(false);
          // Simulate a new image or just refresh the current one for demo purposes
          setGeneratedImage('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=60'); 
      }, 2000);
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
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Image Generator</h1>
          <p className="text-slate-500">Create stunning visuals with AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-6">
              {/* Prompt Input */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <label className="block text-slate-700 font-medium mb-4">Describe what you want to create</label>
                  <textarea 
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="w-full h-32 p-4 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 resize-none placeholder:text-slate-400 text-sm mb-6"
                      placeholder="Enter your prompt here..."
                  />
                  
                  <p className="text-sm text-slate-500 mb-3">Try these prompts:</p>
                  <div className="space-y-2">
                      {suggestions.map((s, i) => (
                          <button 
                            key={i}
                            onClick={() => setPrompt(s)}
                            className="w-full text-left p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-xs text-slate-600 flex items-start gap-2 group"
                          >
                              <Wand2 size={14} className="mt-0.5 text-orange-500 shrink-0 group-hover:text-orange-600" />
                              <span className="group-hover:text-slate-900">{s}</span>
                          </button>
                      ))}
                  </div>
              </div>

              {/* Style Selection */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <label className="block text-slate-700 font-medium mb-4">Style</label>
                  <div className="grid grid-cols-2 gap-3">
                      {styles.map((s) => (
                          <button
                            key={s}
                            onClick={() => setStyle(s)}
                            className={`py-3 px-4 rounded-full text-sm font-medium transition-all border ${
                                style === s
                                ? 'border-[#a8a29e] bg-[#f5f5f4] text-slate-900'
                                : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                              {s}
                          </button>
                      ))}
                  </div>
              </div>

              {/* Aspect Ratio */}
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <label className="block text-slate-700 font-medium mb-4">Aspect Ratio</label>
                  <div className="grid grid-cols-2 gap-3">
                      {ratios.map((r) => (
                          <button
                            key={r.value}
                            onClick={() => setAspectRatio(r.value)}
                            className={`py-4 rounded-xl text-sm font-medium transition-all border flex flex-col items-center gap-1 ${
                                aspectRatio === r.value
                                ? 'border-[#a8a29e] bg-[#f5f5f4] text-slate-900'
                                : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                              <span className="font-semibold">{r.label}</span>
                              <span className="text-xs opacity-70">{r.value}</span>
                          </button>
                      ))}
                  </div>
              </div>
              
              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !prompt}
                className={`w-full py-4 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${
                    isGenerating || !prompt ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'
                }`}
                style={{ backgroundColor: '#c2410c' }}
            >
                {isGenerating ? (
                    <>
                         <RefreshCw className="animate-spin" size={20} /> Generating...
                    </>
                ) : (
                    <>
                        <Sparkles size={20} /> Generate Image
                    </>
                )}
            </button>

            <div className="bg-orange-50/50 p-4 rounded-xl flex gap-3">
                <Lightbulb size={20} className="text-orange-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-800">Tip:</span> Be specific with your prompts. Include details about colors, mood, style, and composition for best results.
                </p>
            </div>

          </div>

          {/* Preview */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col h-full min-h-[740px]">
               <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <ImageIcon size={18} /> Preview
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

               {generatedImage ? (
                   <div className="space-y-6 animate-in fade-in duration-500">
                       <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-sm bg-slate-100 relative group">
                           <img 
                            src={generatedImage} 
                            alt="Generated content" 
                            className="w-full h-full object-cover" 
                           />
                       </div>
                       
                       <div className="bg-slate-50 rounded-2xl p-6 grid grid-cols-2 gap-y-4 gap-x-8">
                           <div>
                               <label className="text-xs text-slate-400 font-medium block mb-1">Style</label>
                               <p className="text-slate-800 font-medium text-sm">{style}</p>
                           </div>
                           <div>
                               <label className="text-xs text-slate-400 font-medium block mb-1">Aspect Ratio</label>
                               <p className="text-slate-800 font-medium text-sm">{aspectRatio}</p>
                           </div>
                           <div className="col-span-2">
                               <label className="text-xs text-slate-400 font-medium block mb-1">Prompt</label>
                               <p className="text-slate-800 text-sm leading-relaxed">{prompt}</p>
                           </div>
                       </div>
                   </div>
               ) : (
                   <div className="flex-1 flex flex-col items-center justify-center text-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 m-2">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-300 shadow-sm">
                            <ImageIcon size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-slate-400 font-medium mb-1">Your generated image will appear here</h3>
                        <p className="text-slate-400/70 text-sm">Fill in the fields and click Generate</p>
                    </div>
               )}
          </div>
      </div>
    </div>
  );
};
