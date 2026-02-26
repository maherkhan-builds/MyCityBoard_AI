import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MOCK_CIVIC_DATA } from '../data/mockCivicData';
import { ChevronLeft, Bookmark, Share2, MessageCircle, Lightbulb } from 'lucide-react';
import { AppRoute } from '../types';

export default function DecisionDetailScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const decision = MOCK_CIVIC_DATA.find((item) => item.id === id);

  if (!decision) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4 text-center text-red-600 md:ml-24 lg:ml-28"
      >
        Decision not found.
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 md:ml-24 lg:ml-28"
    >
      <button
        onClick={() => navigate(AppRoute.FEED)}
        className="flex items-center text-civic-blue hover:text-teal-accent transition-colors font-medium mb-4"
      >
        <ChevronLeft size={20} className="mr-1" /> Back to Feed
      </button>

      {decision.imageUrl && (
        <img
          src={decision.imageUrl}
          alt={decision.title}
          className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
          referrerPolicy="no-referrer"
        />
      )}

      <h2 className="text-4xl font-serif font-bold text-civic-blue mb-2">{decision.title}</h2>
      <p className="text-muted-slate/70 text-sm mb-4">Published: {decision.date} | Category: {decision.category}</p>

      {/* AI Summary */}
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-civic-blue">AI Summary: 1-Minute Read</h3>
        <p className="text-muted-slate leading-relaxed">{decision.summary}</p>
      </div>

      {/* What This Means For You */}
      <div className="bg-amber-highlight/10 border-l-4 border-amber-highlight rounded-xl p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-amber-highlight flex items-center">
          <Lightbulb size={24} className="mr-2" /> What This Means for You
        </h3>
        <p className="text-muted-slate leading-relaxed">{decision.impact}</p>
      </div>

      {/* Deeper Dive */}
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-civic-blue">Deeper Dive: Full Details</h3>
        <p className="text-muted-slate leading-relaxed">{decision.fullText}</p>
      </div>

      {/* Engagement Actions */}
      <div className="flex justify-around items-center bg-white rounded-xl shadow-lg p-4 mt-6">
        <button className="flex flex-col items-center text-civic-blue hover:text-teal-accent transition-colors p-2">
          <Bookmark size={24} />
          <span className="text-xs mt-1">Save</span>
        </button>
        <button className="flex flex-col items-center text-civic-blue hover:text-teal-accent transition-colors p-2">
          <Share2 size={24} />
          <span className="text-xs mt-1">Share</span>
        </button>
        <button className="flex flex-col items-center text-civic-blue hover:text-teal-accent transition-colors p-2">
          <MessageCircle size={24} />
          <span className="text-xs mt-1">Discuss</span>
        </button>
      </div>
    </motion.div>
  );
}
