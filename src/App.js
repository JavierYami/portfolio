import Presentation from './Components/Presentation';
import NavBar from './Components/NavBar';
import { useState } from 'react';

function App() {

  //Esto es una prueba
  //otra prueba
  
  const [isDark, setIsDark] = useState(false);
  return (
    <div className= 'bg-transparent h-screen'>
      <NavBar />
      <Presentation />
      {/* <ThemeButton isDark={isDark} setIsDark={setIsDark} /> */}
    </div>
  );
}

export default App;
