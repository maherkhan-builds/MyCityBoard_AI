import { motion } from 'motion/react';
import { Bell, MapPin, ListFilter, User, Info, ChevronRight } from 'lucide-react';

export default function SettingsScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 md:ml-24 lg:ml-28"
    >
      <h2 className="text-3xl font-serif font-bold text-civic-blue">Settings & Preferences</h2>

      {/* General Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-civic-blue mb-4">General</h3>
        <SettingItem icon={MapPin} title="Change City" description="Currently: New York" />
        <SettingItem icon={ListFilter} title="Manage Interests" description="Housing, Transport, Environment" />
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-civic-blue mb-4">Notifications</h3>
        <SettingItem icon={Bell} title="Alerts for Topics" description="Get notified on key issues" />
        <SettingItem icon={Bell} title="Daily Digest" description="Receive a summary of daily civic news" />
      </div>

      {/* Account & About */}
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-civic-blue mb-4">Account & About</h3>
        <SettingItem icon={User} title="Profile" description="Manage your account details" />
        <SettingItem icon={Info} title="About MyCityBoard" description="Version, Legal, Privacy Policy" />
      </div>

      {/* Logout */}
      <button className="w-full py-3 bg-red-600 text-clean-white rounded-xl font-bold hover:bg-red-700 transition-colors">
        Log Out
      </button>
    </motion.div>
  );
}

interface SettingItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const SettingItem = ({ icon: Icon, title, description }: SettingItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex items-center space-x-4">
        <Icon size={24} className="text-teal-accent" />
        <div>
          <p className="text-lg font-medium text-civic-blue">{title}</p>
          <p className="text-sm text-muted-slate/70">{description}</p>
        </div>
      </div>
      <ChevronRight size={20} className="text-muted-slate/50" />
    </div>
  );
};
