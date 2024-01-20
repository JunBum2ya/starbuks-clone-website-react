import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import VisualSection from './components/section/VisualSection';
import NoticeSection from './components/section/NoticeSection';
import RewardsSection from './components/section/RewardsSection';
import YoutbueSection from './components/section/YoutubeSection';
import ReserveCoffeeSection from './components/section/ReserveCoffeeSection';
import SeasonProductSection from './components/section/SeasonProductSection';
import { floatObject } from './util/util';

function App() {
  useEffect(() => {
    floatObject('.floating1', 1, 15);
    floatObject('.floating2', .5, 15);
    floatObject('.floating3', 1.5, 20);
  },[]);
  return (
    <>
      <Header/>
      <VisualSection/>
      <NoticeSection/>
      <RewardsSection/>
      <YoutbueSection/>
      <SeasonProductSection/>
      <ReserveCoffeeSection/>
    </>
  );
}

export default App;
