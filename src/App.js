import Presentation from './Components/Presentation';
import NavBar from './Components/NavBar';
import About from './Components/About';
import MyStack from './Components/MyStack';
import { useState } from 'react';
import Projects from './Components/Projects';

function App() {

  
  
  const [isDark, setIsDark] = useState(false);
  return (
    <div className= 'bg-transparent h-screen'>
      <NavBar />
      <Presentation />
      <About />
      <Projects/>
      {/* <ThemeButton isDark={isDark} setIsDark={setIsDark} /> */}
    </div>
  );
}

export default App;
