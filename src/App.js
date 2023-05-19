import Presentation from './Components/Presentation';
import NavBar from './Components/NavBar';
import About from './Components/About';
import MyStack from './Components/MyStack';
import { useState } from 'react';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {

  
  
  const [isDark, setIsDark] = useState(false);
  return (
    <div className= 'bg-transparent h-screen'>
      <NavBar />
      <Presentation />
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
      {/* <ThemeButton isDark={isDark} setIsDark={setIsDark} /> */}
    </div>
  );
}

export default App;
