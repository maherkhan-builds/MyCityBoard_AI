import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Bookmark, Share2, MessageCircle, TrendingUp, Filter } from 'lucide-react';
import { MOCK_CIVIC_DATA } from '../data/mockCivicData';
import { AppRoute, CivicCategory, CivicDataItem } from '../types';
import { CIVIC_CATEGORIES } from '../constants';

const CivicCard = ({ item }: { item: CivicDataItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
    >
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-48 object-cover"
          referrerPolicy="no-referrer"
        />
      )}
      <div className="p-4 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-accent/20 text-teal-accent">
            {item.category}
          </span>
          <span className="text-xs text-muted-slate/70">{item.date}</span>
        </div>
        <Link to={AppRoute.DECISION_DETAIL.replace(':id', item.id)}>
          <h3 className="text-lg font-semibold text-civic-blue hover:text-teal-accent transition-colors mb-2 cursor-pointer">
            {item.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-slate leading-relaxed mb-4 flex-grow">
          {item.summary}
        </p>
        <div className="flex justify-between items-center text-muted-slate text-sm">
          <div className="flex space-x-3">
            <button className="flex items-center hover:text-civic-blue transition-colors">
              <Bookmark size={16} className="mr-1" /> Save
            </button>
            <button className="flex items-center hover:text-civic-blue transition-colors">
              <Share2 size={16} className="mr-1" /> Share
            </button>
          </div>
          <button className="flex items-center hover:text-civic-blue transition-colors">
            <MessageCircle size={16} className="mr-1" /> Discuss
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function CivicFeedScreen() {
  const [filteredData, setFilteredData] = useState<CivicDataItem[]>(MOCK_CIVIC_DATA);
  const [activeCategory, setActiveCategory] = useState<CivicCategory | 'All'>('All');

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredData(MOCK_CIVIC_DATA);
    } else {
      setFilteredData(MOCK_CIVIC_DATA.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 md:ml-24 lg:ml-28"
    >
      <h2 className="text-3xl font-serif font-bold text-civic-blue">Your Civic Feed</h2>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 rounded-full text-sm font-medium
            ${activeCategory === 'All' ? 'bg-civic-blue text-clean-white' : 'bg-gray-200 text-muted-slate hover:bg-gray-300'}
            transition-colors duration-200`}
        >
          All
        </button>
        {CIVIC_CATEGORIES.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium
              ${activeCategory === category.value ? 'bg-civic-blue text-clean-white' : 'bg-gray-200 text-muted-slate hover:bg-gray-300'}
              transition-colors duration-200`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Trending Local Issues */}
      <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-3 mb-6">
        <TrendingUp size={24} className="text-amber-highlight" />
        <p className="text-lg font-semibold text-muted-slate">Trending: <span className="text-civic-blue">#AffordableHousing</span>, <span className="text-teal-accent">#TransitExpansion</span></p>
      </div>

      {/* Civic News Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <CivicCard key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
}
