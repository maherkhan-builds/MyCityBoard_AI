import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../types';
import { Home, LayoutDashboard, BarChart2, Users, Settings, BellRing } from 'lucide-react';
import { APP_NAME, ILLUSTRATION_CITY_SKYLINE } from '../constants';

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: AppRoute.FEED, icon: Home, label: 'Feed' },
  { path: AppRoute.VISUALIZATIONS, icon: BarChart2, label: 'Data' },
  { path: AppRoute.COMMUNITY, icon: Users, label: 'Community' },
  { path: AppRoute.SETTINGS, icon: Settings, label: 'Settings' },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Don't show layout (header/nav) on onboarding screen
  if (location.pathname === AppRoute.ONBOARDING) {
    return <main className="min-h-screen bg-clean-white text-muted-slate">{children}</main>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-clean-white text-muted-slate">
      {/* Header */}
      <header className="relative w-full h-48 md:h-64 overflow-hidden shadow-md">
        <img
          src={ILLUSTRATION_CITY_SKYLINE}
          alt="City Skyline"
          className="absolute inset-0 w-full h-full object-cover filter brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
          <h1 className="text-3xl font-serif font-bold text-clean-white">
            {APP_NAME}
          </h1>
          <Link to={AppRoute.SETTINGS} className="text-clean-white hover:text-amber-highlight transition-colors">
            <BellRing size={24} />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-10">
          <h2 className="text-xl font-semibold text-clean-white">Your City, Your Board</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
        {children}
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-civic-blue text-clean-white shadow-lg md:hidden z-50">
        <ul className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex flex-col items-center justify-center p-2 text-xs font-medium
                  ${location.pathname === item.path ? 'text-amber-highlight' : 'text-clean-white hover:text-teal-accent'}
                  transition-colors duration-200`}
              >
                <item.icon size={20} className="mb-1" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full bg-civic-blue text-clean-white shadow-lg hidden md:flex flex-col w-20 lg:w-24 z-40 pt-20">
        <ul className="flex flex-col items-center py-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.path} className="w-full">
              <Link
                to={item.path}
                className={`flex flex-col items-center justify-center p-3 text-xs font-medium group
                  ${location.pathname === item.path ? 'bg-civic-blue/70 text-amber-highlight' : 'text-clean-white hover:bg-civic-blue/50 hover:text-teal-accent'}
                  transition-colors duration-200`}
              >
                <item.icon size={24} className="mb-1" />
                <span className="mt-1 hidden lg:block">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
