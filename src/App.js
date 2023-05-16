import Presentation from './Components/Presentation';
import NavBar from './Components/NavBar';
import { useState } from 'react';
import Projects from './Components/Projects';

function App() {

  
  
  const [isDark, setIsDark] = useState(false);
  return (
    <div className= 'bg-transparent h-screen'>
      <NavBar />
      <Presentation />
      <Projects/>
      {/* <ThemeButton isDark={isDark} setIsDark={setIsDark} /> */}
    </div>
  );
}

export default App;
