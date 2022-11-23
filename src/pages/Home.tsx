import React from 'react';
import SongGameCard from '../components/organisms/SongGameCard';
import { http } from '../services/axios/http';

function Home() {
  const minuteInMiliseconds = 1000 * 60;
  const fortyMinutes = minuteInMiliseconds * 40;
  setInterval(async () => {
    await http.get("/")
}, fortyMinutes)
  return (
    <SongGameCard />
  );
}

export default Home;
