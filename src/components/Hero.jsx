import {useState, useEffect} from 'react'
import { styles } from '../styles.js';
import { ComputersCanvas } from './canvas';
import { TypeAnimation } from 'react-type-animation';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackCanvas from './canvas/ErrorFallbackCanvas.jsx';



const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(true);
  },[])
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[130px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Saisandeep</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <TypeAnimation sequence={[
              'Full Stack Developer',
              1000,
              'Flutter Developer',
              1000,
              'ReactJs Developer',
              1000,
              'AI/ML Enthusiast',
              1000,
              'Problem Solver',
              1000
            ]}
            wrapper='span'
            cursor={true}
            repeat={Infinity}
            />
          </p>
        </div>
      </div>

      <ErrorBoundary FallbackComponent = {ErrorFallbackCanvas}
        onReset={() =>{
          window.location.reload();
        }}
      >      
      <ComputersCanvas isMobile={isMobile}/>
      </ErrorBoundary>
    </section>
  )
}

export default Hero