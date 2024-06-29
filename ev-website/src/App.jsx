import { useEffect, useState } from 'react';
import Background from './Background/Background'
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';

function App() {
  let heroData = [
    {text1: "Dive into", text2: "What you love"},
    {text1: "Indulge", text2: "Your passions"},
    {text1: "Give in to", text2: "your passions"},
    // state vaiable
  ]
  let [heroCount, setHeroCount] = useState(0);
  let [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
  setInterval(() => {
  setHeroCount((count)=> {return count===2?0:count+1})   
  }, 3000);
  },[])

  return (
    <div>
      <Background playStatus = {playStatus} heroCount={heroCount}> </Background>
      <Navbar> </Navbar>
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData = {heroData[heroCount]}
      heroCount = {heroCount}
      setHeroCount = {setHeroCount}
      playStatus = {playStatus}
      />
    
    </div>
  )
}
export default App;