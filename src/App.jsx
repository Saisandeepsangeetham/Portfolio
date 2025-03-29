import {BrowserRouter} from 'react-router-dom';
import {About , Contact, Experience, Feedbacks, Hero, Navbar,Tech, Works, StarsCanvas} from './components';
import HeroBackground from './components/HeroBackground';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <HeroBackground/>
          <Hero/>
        </div>
        <div>
          <About />
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
