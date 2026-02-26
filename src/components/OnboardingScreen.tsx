import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ChevronRight, LayoutDashboard } from 'lucide-react';
import { APP_NAME, CIVIC_CATEGORIES, ILLUSTRATION_CITY_SKYLINE } from '../constants';
import { AppRoute, CivicCategory } from '../types';

export default function OnboardingScreen() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedInterests, setSelectedInterests] = useState<CivicCategory[]>([]);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  const handleInterestToggle = (interest: CivicCategory) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleFinishOnboarding = () => {
    // In a real app, save user preferences (city, interests) to local storage or a backend.
    console.log('Onboarding complete:', { selectedCity, selectedInterests });
    navigate(AppRoute.FEED);
  };

  const isFormValid = selectedCity && selectedInterests.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-clean-white text-muted-slate"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden md:max-w-lg lg:max-w-xl">
        <img
          src={ILLUSTRATION_CITY_SKYLINE}
          alt="Cityscape"
          className="w-full h-48 object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-civic-blue/80 to-transparent"></div>
        <div className="absolute top-4 left-4 right-4 text-clean-white text-center">
          <h1 className="text-4xl font-serif font-bold mb-2">Welcome to {APP_NAME}</h1>
          <p className="text-lg font-medium">Your AI-powered civic transparency board.</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Step 1: Select City */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-civic-blue flex items-center">
              <MapPin className="mr-2" /> Select Your City
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {['New York', 'Los Angeles', 'Chicago', 'Houston'].map((city) => (
                <button
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className={`p-3 rounded-lg border-2 font-medium
                    ${selectedCity === city
                      ? 'bg-teal-accent text-clean-white border-teal-accent'
                      : 'bg-clean-white text-muted-slate border-gray-300 hover:border-civic-blue'}
                    transition-all duration-200`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Interests */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-civic-blue flex items-center">
              <LayoutDashboard className="mr-2" /> What Matters to You?
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {CIVIC_CATEGORIES.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleInterestToggle(category.value)}
                  className={`p-3 rounded-lg border-2 font-medium text-sm
                    ${selectedInterests.includes(category.value)
                      ? 'bg-amber-highlight text-civic-blue border-amber-highlight'
                      : 'bg-clean-white text-muted-slate border-gray-300 hover:border-civic-blue'}
                    transition-all duration-200`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Finish Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleFinishOnboarding}
            disabled={!isFormValid}
            className={`w-full py-3 rounded-xl text-lg font-bold flex items-center justify-center
              ${isFormValid
                ? 'bg-civic-blue text-clean-white hover:bg-civic-blue/90'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
              transition-all duration-200`}
          >
            Get Started <ChevronRight className="ml-2" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
