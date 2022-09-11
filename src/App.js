import { Route, Routes, Navigate } from 'react-router-dom';

import About from './pages/About';
import Faq from './pages/Faq';
import Main from './pages/Main';
import Details from './pages/Details';
import Layout from './components/layout/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
