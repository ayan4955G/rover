import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Fleet from './pages/Fleet';
import Control from './pages/Control';
import Schedule from './pages/Schedule';
import Analytics from './pages/Analytics';
import Maintenance from './pages/Maintenance';
import PathOrientationPage from './pages/PathOrientationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Fleet />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="control" element={<Control />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="path-orientation" element={<PathOrientationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
