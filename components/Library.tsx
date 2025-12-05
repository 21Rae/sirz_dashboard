import React from 'react';
import { Search, ChevronDown, Eye, Download, Trash2, Image as ImageIcon, FileText, Video, Music, Layers } from 'lucide-react';

const LIBRARY_ITEMS = [
  {
    id: 1,
    type: 'IMAGE',
    title: 'Product showcase image',
    description: 'Modern minimalist product on white background',
    time: '5 minutes ago',
    thumbnail: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=60',
    agent: 'Media AI'
  },
  {
    id: 2,
    type: 'TEXT',
    title: 'Marketing copy for homepage',
    description: 'Write compelling homepage copy for a SaaS product',
    time: '1 hour ago',
    icon: FileText,
    agent: 'Content AI'
  },
  {
    id: 3,
    type: 'VIDEO',
    title: 'Product demo video',
    description: 'Create a 30 second product demo video',
    time: '3 hours ago',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-217358c740c0?w=800&auto=format&fit=crop&q=60',
    agent: 'Media AI'
  },
  {
    id: 4,
    type: 'VIDEO',
    title: 'Product demo video',
    description: 'Create a 30 second product demo video',
    time: '3 hours ago',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60',
    agent: 'Media AI'
  },
  {
    id: 5,
    type: 'AUDIO',
    title: 'Podcast intro music',
    description: 'Upbeat intro music for tech podcast',
    time: '1 day ago',
    icon: Music,
    agent: 'Media AI'
  },
  {
    id: 6,
    type: 'IMAGE',
    title: 'Social media graphic',
    description: 'Colorful abstract shapes for Instagram',
    time: '2 days ago',
    thumbnail: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&auto=format&fit=crop&q=60',
    agent: 'Media AI'
  },
  {
    id: 7,
    type: 'TEXT',
    title: 'Blog post about AI',
    description: 'Write a blog post about AI in marketing',
    time: '3 days ago',
    icon: FileText,
    agent: 'Content AI'
  },
  {
    id: 8,
    type: 'TEXT',
    title: 'Blog post about AI',
    description: 'Write a blog post about AI in marketing',
    time: '3 days ago',
    icon: FileText,
    agent: 'Content AI'
  }
];

interface LibraryProps {
    primaryColor: string;
}

export const Library: React.FC<LibraryProps> = ({ primaryColor }) => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Library</h1>
        <p className="text-slate-500">View and manage all your generated content from Media and Content AI agents</p>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="flex gap-4">
           {/* Primary Tabs */}
           <button 
             className="px-6 py-2 rounded-full border border-slate-800 text-slate-800 font-medium bg-transparent hover:bg-slate-50 flex items-center gap-2 shadow-sm"
           >
             <Layers size={16} />
             All
           </button>
           <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 flex items-center gap-2">
             <ImageIcon size={16} /> Media AI
           </button>
           <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 flex items-center gap-2">
             <FileText size={16} /> Content AI
           </button>
        </div>

        {/* Secondary Tags */}
        <div className="flex gap-2 flex-wrap">
          {['All Types', 'Text', 'Images', 'Audio', 'Videos', 'Blog Posts', 'Emails', 'Landing Pages', 'Calendars'].map((tag, i) => (
             <button key={tag} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-[#8ba856] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {tag}
             </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
           <input 
             type="text" 
             placeholder="Search your content..." 
             className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all text-slate-600"
           />
        </div>
        <button className="px-6 py-3 rounded-full border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 flex items-center gap-2 min-w-[160px] justify-between">
           Most recent <ChevronDown size={16} />
        </button>
      </div>

      <p className="text-slate-500 text-sm">Showing 6 of 6 items</p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LIBRARY_ITEMS.slice(0, 8).map((item) => (
           <div key={item.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
              {/* Preview Area */}
              <div className="h-48 bg-slate-50 relative flex items-center justify-center overflow-hidden">
                 {item.thumbnail ? (
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 ) : (
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        item.type === 'AUDIO' ? 'bg-green-50 text-green-500' : 
                        item.type === 'TEXT' ? 'bg-purple-50 text-purple-500' :
                        'bg-slate-100 text-slate-400'
                    }`}>
                        {item.type === 'AUDIO' && <Music size={32} />}
                        {item.type === 'TEXT' && <FileText size={32} />}
                    </div>
                 )}
                 
                 {/* Video Overlay */}
                 {item.type === 'VIDEO' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                            <Video size={20} className="text-slate-900 ml-1" fill="currentColor" />
                        </div>
                    </div>
                 )}
              </div>

              {/* Content Area */}
              <div className="p-5 flex flex-col flex-1">
                 <div className="flex justify-between items-center mb-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase ${
                        item.type === 'IMAGE' ? 'bg-pink-100 text-pink-600' :
                        item.type === 'VIDEO' ? 'bg-purple-100 text-purple-600' :
                        item.type === 'AUDIO' ? 'bg-green-100 text-green-600' :
                        'bg-slate-100 text-slate-600'
                    }`}>
                        {item.type}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                        {item.type === 'IMAGE' && <ImageIcon size={12} />}
                        {item.type === 'VIDEO' && <Video size={12} />}
                        {item.type === 'AUDIO' && <Music size={12} />}
                        {item.type === 'TEXT' && <FileText size={12} />}
                        {item.time}
                    </span>
                 </div>

                 <h3 className="font-semibold text-slate-800 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                 <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">{item.description}</p>

                 <div className="flex items-center gap-2 pt-4 border-t border-slate-50 mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors">
                        <Eye size={16} /> View
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-100 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                        <Download size={16} />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-100 text-slate-400 hover:text-red-500 hover:bg-red-50 hover:border-red-100 transition-colors">
                        <Trash2 size={16} />
                    </button>
                 </div>
              </div>
           </div>
        ))}
      </div>
    </div>
  );
};
