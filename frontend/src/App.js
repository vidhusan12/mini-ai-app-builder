import './App.css';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Features />
      {/* other sections */}
      <Footer />
    </div>
  );
}

export default App;
