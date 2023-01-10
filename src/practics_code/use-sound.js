import useSound from 'use-sound';

import boopSfx from '../src/sound.mp3';


const App = () => {
  const [play] = useSound(boopSfx);

  return <button onClick={play}>Boop!</button>;
};


export default App;