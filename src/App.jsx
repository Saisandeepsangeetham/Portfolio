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
        <div className="relative -mt-32 sm:-mt-20">
          <svg
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#1a1a2e" // Adjust the color to match your design
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,96C672,96,768,128,864,144C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
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
