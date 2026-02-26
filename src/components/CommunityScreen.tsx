import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ThumbsUp, ThumbsDown, Send, User } from 'lucide-react';

interface Comment {
  id: string;
  userId: string;
  userName: string;
  text: string;
  likes: number;
  dislikes: number;
  timestamp: string;
}

const mockComments: Comment[] = [
  {
    id: 'c1',
    userId: 'user1',
    userName: 'CivicMindedJane',
    text: 'I think the new housing initiative is a great step forward for our community!',
    likes: 15,
    dislikes: 2,
    timestamp: '2026-02-21T10:30:00Z',
  },
  {
    id: 'c2',
    userId: 'user2',
    userName: 'ConcernedCitizen',
    text: 'While I appreciate the effort, I\'m worried about the impact on local infrastructure. Has anyone considered the increased traffic?',
    likes: 8,
    dislikes: 5,
    timestamp: '2026-02-21T11:45:00Z',
  },
  {
    id: 'c3',
    userId: 'user3',
    userName: 'UrbanPlannerPro',
    text: 'The transit expansion is long overdue. This will significantly improve accessibility for many residents.',
    likes: 20,
    dislikes: 1,
    timestamp: '2026-02-22T09:00:00Z',
  },
];

export default function CommunityScreen() {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(mockComments);

  const handlePostComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: `c${comments.length + 1}`,
        userId: 'currentUser',
        userName: 'You',
        text: newComment.trim(),
        likes: 0,
        dislikes: 0,
        timestamp: new Date().toISOString(),
      };
      setComments((prev) => [comment, ...prev]);
      setNewComment('');
    }
  };

  const handleLike = (id: string) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleDislike = (id: string) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, dislikes: comment.dislikes + 1 } : comment
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 md:ml-24 lg:ml-28"
    >
      <h2 className="text-3xl font-serif font-bold text-civic-blue">Community Engagement</h2>

      {/* Feedback Prompt / New Comment Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-civic-blue flex items-center">
          <MessageSquare className="mr-2" /> Share Your Thoughts
        </h3>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-accent"
          rows={4}
          placeholder="What are your thoughts on recent city decisions? Share your feedback here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          onClick={handlePostComment}
          className="w-full py-3 bg-civic-blue text-clean-white rounded-xl font-bold flex items-center justify-center hover:bg-civic-blue/90 transition-colors"
          disabled={!newComment.trim()}
        >
          Post Comment <Send className="ml-2" size={20} />
        </button>
      </div>

      {/* Community Discussion Feed */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-civic-blue">Recent Discussions</h3>
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm p-4 space-y-2"
          >
            <div className="flex items-center space-x-2 text-sm font-medium text-civic-blue">
              <User size={16} />
              <span>{comment.userName}</span>
              <span className="text-muted-slate/70 text-xs">{new Date(comment.timestamp).toLocaleString()}</span>
            </div>
            <p className="text-muted-slate leading-relaxed">{comment.text}</p>
            <div className="flex items-center space-x-4 text-sm text-muted-slate">
              <button onClick={() => handleLike(comment.id)} className="flex items-center hover:text-teal-accent transition-colors">
                <ThumbsUp size={16} className="mr-1" /> {comment.likes}
              </button>
              <button onClick={() => handleDislike(comment.id)} className="flex items-center hover:text-amber-highlight transition-colors">
                <ThumbsDown size={16} className="mr-1" /> {comment.dislikes}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
