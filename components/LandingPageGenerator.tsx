import React, { useState } from 'react';
import { ArrowLeft, LayoutTemplate, Sparkles, Download, RefreshCw, Figma, ShoppingBag, Star, Search, User, FileText } from 'lucide-react';

interface LandingPageGeneratorProps {
  onBack: () => void;
  primaryColor?: string;
  templateName?: string;
}

export const LandingPageGenerator: React.FC<LandingPageGeneratorProps> = ({ 
  onBack, 
  primaryColor = '#ea580c', 
  templateName = 'SaaS Product Launch' 
}) => {
  const [productName, setProductName] = useState('Beauty website');
  const [audience, setAudience] = useState('');
  const [valueProp, setValueProp] = useState('');
  const [goal, setGoal] = useState('');
  const [tone, setTone] = useState('');
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
             <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                <LayoutTemplate size={24} />
             </div>
             <div>
                <h1 className="text-2xl font-bold text-slate-900">{templateName}</h1>
                <p className="text-slate-500">Customize your landing page</p>
             </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Inputs */}
        <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
                
                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Product/Service Name</label>
                    <input 
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                        placeholder="Beauty website"
                    />
                </div>

                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Target Audience</label>
                    <input 
                        type="text"
                        value={audience}
                        onChange={(e) => setAudience(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                        placeholder="e.g., Small business owners, marketers"
                    />
                </div>

                <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Value Proposition <span className="text-red-500">*</span></label>
                    <textarea 
                        value={valueProp}
                        onChange={(e) => setValueProp(e.target.value)}
                        className="w-full h-32 p-5 rounded-3xl border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 resize-none placeholder:text-slate-300 text-sm leading-relaxed transition-all"
                        placeholder="What's the main benefit or value you offer?"
                    />
                </div>

                 <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Primary Goal</label>
                    <input 
                        type="text"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
                    />
                </div>

                 <div>
                    <label className="block text-slate-700 font-medium mb-2 text-sm">Tone</label>
                    <input 
                        type="text"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 placeholder:text-slate-300 text-sm transition-all"
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
                        <Sparkles size={20} /> Generate Landing page
                    </>
                )}
            </button>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 flex flex-col min-h-[800px]">
            <div className="flex items-center gap-2 mb-6 text-slate-800 font-medium">
                <FileText size={18} /> Preview
            </div>

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

            {/* Mockup Container */}
            <div className="flex-1 bg-slate-900 rounded-lg overflow-hidden relative group border-[8px] border-slate-800 shadow-xl">
                 {/* Content */}
                 <div className="bg-white h-full overflow-y-auto custom-scrollbar">
                     
                     {/* Nav */}
                     <nav className="flex items-center justify-between px-8 py-6 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full border border-[#ea580c] flex items-center justify-center">
                                <span className="text-[#ea580c] font-serif text-lg">M</span>
                            </div>
                            <div className="leading-tight">
                                <span className="block text-[#ea580c] font-serif text-xs uppercase tracking-widest">Moss &</span>
                                <span className="block text-[#ea580c] font-serif text-xs uppercase tracking-widest">Glow Beauty</span>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-8 text-[10px] font-medium tracking-widest text-slate-500 uppercase">
                            <a href="#" className="text-[#ea580c]">Home</a>
                            <a href="#">Our Shop</a>
                            <a href="#">About Us</a>
                        </div>
                        <div className="flex items-center gap-4 text-slate-400">
                             <Search size={14} />
                             <User size={14} />
                             <ShoppingBag size={14} />
                        </div>
                     </nav>

                     {/* Hero */}
                     <div className="relative h-[400px] w-full bg-stone-100 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1556228720-1918d30e371f?w=1200&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex flex-col justify-center px-12 text-white">
                             <h2 className="font-serif text-4xl max-w-md mb-4 leading-tight">Glow Naturally with Botanical Skincare</h2>
                             <div className="flex items-center gap-2 text-xs font-medium mb-8">
                                 <span>Pure</span> • <span>Natural</span> • <span>Glowing</span> • <span>Just Like You</span>
                             </div>
                             <p className="text-xs opacity-90 max-w-sm mb-8 leading-relaxed">
                                 Experience skincare powered by moss, botanical extracts, and nature's finest ingredients.
                             </p>
                             <button className="px-8 py-3 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-colors w-fit">
                                 Shop Now
                             </button>
                             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                 <div className="w-2 h-2 rounded-full bg-white"></div>
                                 <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                 <div className="w-2 h-2 rounded-full bg-white/50"></div>
                             </div>
                        </div>
                     </div>

                     {/* Best Sellers */}
                     <div className="py-16 px-8 text-center">
                         <h3 className="font-serif text-2xl text-slate-900 mb-2">OUR BEST SELLERS</h3>
                         <div className="flex justify-center gap-2 mb-10">
                             <div className="w-8 h-1 bg-[#8ba856] rounded-full"></div>
                             <div className="w-4 h-1 bg-[#e4e4e7] rounded-full"></div>
                         </div>

                         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                             {[1, 2, 3, 4].map((i) => (
                                 <div key={i} className="group cursor-pointer">
                                     <div className="aspect-[3/4] bg-stone-50 mb-4 overflow-hidden relative">
                                         <img 
                                            src={`https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNraW5jYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&random=${i}`} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                         />
                                     </div>
                                     <h4 className="font-serif text-sm text-slate-900 mb-1">Vitamin C Natural Serum</h4>
                                     <p className="text-xs text-slate-500 mb-2">$50.00 - $70.00</p>
                                     <div className="flex justify-center gap-0.5 text-[#8ba856] mb-3">
                                         {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="currentColor" />)}
                                     </div>
                                     <button className="w-full py-2 bg-[#c2410c] text-white text-[10px] uppercase tracking-wider hover:bg-[#9a3412] transition-colors">
                                         Add to cart
                                     </button>
                                 </div>
                             ))}
                         </div>
                     </div>

                     {/* Promo Banner */}
                     <div className="bg-[#fcfbf7] p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                         <div className="flex-1 z-10">
                             <h3 className="font-serif text-3xl text-slate-900 mb-4">Discover skincare powered by nature—pure, plant-based, and designed for radiant skin.</h3>
                             <button className="px-8 py-3 bg-[#c2410c] text-white text-xs uppercase tracking-widest hover:bg-[#9a3412] transition-colors">
                                 Shop now
                             </button>
                         </div>
                         <div className="flex-1 relative z-10 h-64 w-full">
                             <div className="absolute inset-0 rounded-[4rem] rounded-tr-none overflow-hidden">
                                 <img src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=800&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                             </div>
                         </div>
                         <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#8ba856]/10 rounded-full blur-3xl"></div>
                     </div>

                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};