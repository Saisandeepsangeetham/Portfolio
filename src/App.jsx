import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState, lazy, Suspense } from "react";

import { Navbar, Hero } from "./components";
import HeroBackground from "./components/HeroBackground";
import DevAnimationPreloader from "./components/Preloader/DevAnimationPreloader";

const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const SectionLoader = () => (
  <div className="flex justify-center items-center py-10">
    <div className="w-12 h-12 rounded-full border-4 border-secondary border-t-white animate-spin"></div>
  </div>
);

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const preloadAssets = () => {
      window.addEventListener("load", () => {
      });
    };

    preloadAssets();
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {loading && <DevAnimationPreloader setLoading={setLoading} />}
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <HeroBackground />
            <Hero isMobile={isMobile} />
          </div>
          <div>
            <div className="relative -mt-[300px] sm:-mt-26 md:-mt-20 block">
              <svg
                width="100%"
                height="100%"
                id="svg"
                viewBox="0 0 1440 390"
                xmlns="http://www.w3.org/2000/svg"
                className="transition duration-300 ease-in-out delay-150">
                <path
                  d="M 0,400 L 0,150 C 101.64593301435409,117.66507177033492 203.29186602870817,85.33014354066985 308,81 C 412.70813397129183,76.66985645933015 520.4784688995215,100.34449760765551 618,128 C 715.5215311004785,155.6555023923445 802.7942583732058,187.2918660287081 882,202 C 961.2057416267942,216.7081339712919 1032.3444976076555,214.48803827751198 1124,203 C 1215.6555023923445,191.51196172248802 1327.8277511961724,170.755980861244 1440,150 L 1440,400 L 0,400 Z"
                  stroke="none"
                  strokeWidth="0"
                  fill="#1a1a2e"
                  fillOpacity="1"
                  className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
              </svg>
            </div>
            <div className="absolute z-15 top-50% bg-[#1a1a2e] w-full h-auto sm:h-[300px] md:h-auto md:top-[850px] lg:top-[1000px]">
              <Suspense fallback={<SectionLoader />}>
                <About isMobile={isMobile} />
              </Suspense>

              <div className="relative mt-20 pt-10">
                <Suspense fallback={<SectionLoader />}>
                  <Education />
                </Suspense>
              </div>

              <div className="relative mt-15 pt-10">
                <Suspense fallback={<SectionLoader />}>
                  <Skills />
                </Suspense>
              </div>

              <div className="relative mt-15 pt-10">
                <Suspense fallback={<SectionLoader />}>
                  <Projects />
                </Suspense>
              </div>

              <div className="relative mt-15 pt-10 min-h-screen pb-10">
                <div className="absolute inset-0 overflow-hidden">
                  <Suspense
                    fallback={<div className="h-full w-full bg-primary/50" />}>
                    <StarsCanvas />
                  </Suspense>
                </div>
                <div className="relative z-10">
                  <Suspense fallback={<SectionLoader />}>
                    <Contact />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
