import Models from './pages/searchApp';
import ModelSubscription from './pages/SubscriptionForm';
import { Route, Routes, Navigate } from 'react-router-dom';
// ----------------------------------------------------------------------

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/models' />} />
      <Route path='models' element={<Models />} />
      <Route path='models/add' element={<ModelSubscription />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
