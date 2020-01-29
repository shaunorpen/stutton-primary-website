import React from 'react';

import Header from './elements/Header';
import Footer from './elements/Footer';

import Home from './pages/Home'

function App() {
  return (
    <div className='max-w-6xl mx-auto text-gray-900'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
