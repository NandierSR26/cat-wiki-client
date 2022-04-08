import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppRouter } from './routes/AppRouter';
import { useState } from 'react';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </>
  )
}

export default App;
