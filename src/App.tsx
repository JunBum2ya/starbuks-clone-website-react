import React from 'react';
import './App.css';
import Header from './components/header/Header';
import VisualSection from './components/section/VisualSection';
import NoticeSection from './components/section/NoticeSection';
import RewardsSection from './components/section/RewardsSection';

function App() {
  return (
    <>
      <Header/>
      <VisualSection/>
      <NoticeSection/>
      <RewardsSection/>
    </>
  );
}

export default App;
