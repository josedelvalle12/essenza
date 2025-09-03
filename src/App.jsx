import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from './components/Header/Header';
import TextFeatures from './pages/Home/TextFeatures/TextFeatures';
import './App.css'
import ImagesSection from './pages/Home/ImagesSection/ImagesSection';
import PerfumeSection from './pages/Lattafa/PerfumeSection';
import ExploreSection from './pages/Lattafa/Explore';
import PhraseSection from './pages/Home/PhraseSection/PhraseSection';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <main className="min-h-screen">
        <AppRoutes></AppRoutes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
    
  );
}

