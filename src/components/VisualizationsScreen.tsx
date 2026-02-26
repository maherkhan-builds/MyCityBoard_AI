import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { MOCK_BUDGET_DATA, MOCK_VOTING_DATA, MOCK_TIMELINE_EVENTS } from '../data/mockCivicData';
import { CalendarDays, DollarSign, Vote } from 'lucide-react';

const COLORS = ['#1E3A8A', '#14B8A6', '#FBBF24', '#334155', '#64748B'];

export default function VisualizationsScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 md:ml-24 lg:ml-28"
    >
      <h2 className="text-3xl font-serif font-bold text-civic-blue">Civic Impact Dashboard</h2>

      {/* Budget Breakdown Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-civic-blue flex items-center mb-4">
          <DollarSign size={24} className="mr-2" /> Budget Breakdown
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={MOCK_BUDGET_DATA}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="amount"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {MOCK_BUDGET_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 text-sm text-muted-slate">
          <p>Total Budget: ${MOCK_BUDGET_DATA.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}</p>
          <p className="text-xs text-muted-slate/70">*Data represents a simplified mock budget allocation.</p>
        </div>
      </div>

      {/* Voting Results Visualization */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-civic-blue flex items-center mb-4">
          <Vote size={24} className="mr-2" /> Voting Outcomes
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={MOCK_VOTING_DATA}
            margin={{
              top: 20, right: 30, left: 20, bottom: 5,
            }}
          >
            <XAxis dataKey="issue" tickFormatter={(value) => value.split(' ').slice(0,2).join(' ')} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="for" stackId="a" fill="#14B8A6" name="For" />
            <Bar dataKey="against" stackId="a" fill="#FBBF24" name="Against" />
            <Bar dataKey="abstain" stackId="a" fill="#64748B" name="Abstain" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-muted-slate/70 mt-4">*Displays mock voting results for recent council decisions.</p>
      </div>

      {/* Timeline of Upcoming Decisions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-civic-blue flex items-center mb-4">
          <CalendarDays size={24} className="mr-2" /> Upcoming Decisions Timeline
        </h3>
        <div className="relative pl-8">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-civic-blue rounded-full"></div>
          {MOCK_TIMELINE_EVENTS.map((event, index) => (
            <div key={event.id} className="mb-8 flex items-start last:mb-0">
              <div className="absolute left-1 w-6 h-6 bg-teal-accent rounded-full flex items-center justify-center text-clean-white text-sm font-bold z-10">
                {index + 1}
              </div>
              <div className="ml-8 p-4 bg-gray-50 rounded-lg shadow-sm w-full">
                <p className="text-xs text-muted-slate/70">{event.date}</p>
                <h4 className="text-lg font-semibold text-civic-blue mb-1">{event.title}</h4>
                <p className="text-sm text-muted-slate">{event.description}</p>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-civic-blue/10 text-civic-blue mt-2 inline-block">
                  {event.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-slate/70 mt-4">*Future events are illustrative and based on mock data.</p>
      </div>
    </motion.div>
  );
}
