import React from 'react';
import Header from './components/Header/Header';
import TextFeatures from './pages/Home/TextFeatures/TextFeatures';
import './App.css'
import ImagesSection from './pages/Home/ImagesSection/ImagesSection';
import PerfumeSection from './pages/Lattafa/PerfumeSection';
import ExploreSection from './pages/Lattafa/Explore';
import PhraseSection from './pages/Home/PhraseSection/PhraseSection'

export default function App() {
  return (
    <div>
      <Header></Header>
      <TextFeatures></TextFeatures>
      <ImagesSection></ImagesSection>
      <PerfumeSection></PerfumeSection>
      <ExploreSection></ExploreSection>
      <PhraseSection></PhraseSection>
      <PerfumeSection 
      name='AL HARAMAIN' 
      description='Step into the world of Al Haramain, where tradition meets modern refinement. Crafted with rare ingredients and boundless passion, these perfumes are more than fragrances — they are expressions of identity, confidence, and unforgettable allure.'
      color='#D2A25D'
      perfume='/public/AlHaramain.glb'
      img1='/src/assets/AlHaramain/AlHaramain-1.png'
      img2='/src/assets/AlHaramain/AlHarmain_AmberMusk.png'
      img3='/src/assets/AlHaramain/AlHaramain_AzlanOud_Charcoal.png'></PerfumeSection>
      <ExploreSection
      color='#D2A25D'></ExploreSection>
    </div>
  );
}

