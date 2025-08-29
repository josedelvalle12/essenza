import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import TextFeatures from './components/TextFeatures/TextFeatures';
import './App.css'
import ImagesSection from './components/ImagesSection/ImagesSection';
import PerfumeSection from './components/PerfumeSection/PerfumeSection';

export default function App() {
  return (
    <div>
      <Header></Header>
      <TextFeatures></TextFeatures>
      <ImagesSection></ImagesSection>
      <PerfumeSection></PerfumeSection>
    </div>
  );
}

