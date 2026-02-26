import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoute } from './types';
import OnboardingScreen from './components/OnboardingScreen';
import CivicFeedScreen from './components/CivicFeedScreen';
import DecisionDetailScreen from './components/DecisionDetailScreen';
import VisualizationsScreen from './components/VisualizationsScreen';
import CommunityScreen from './components/CommunityScreen';
import SettingsScreen from './components/SettingsScreen';
import Layout from './components/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={AppRoute.ONBOARDING} element={<OnboardingScreen />} />
          <Route path={AppRoute.FEED} element={<CivicFeedScreen />} />
          <Route path={AppRoute.DECISION_DETAIL} element={<DecisionDetailScreen />} />
          <Route path={AppRoute.VISUALIZATIONS} element={<VisualizationsScreen />} />
          <Route path={AppRoute.COMMUNITY} element={<CommunityScreen />} />
          <Route path={AppRoute.SETTINGS} element={<SettingsScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
}
