import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

function App() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const elements = svgRef.current?.querySelectorAll('rect, circle, path');
    elements?.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.6s ease-out';
      
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="sr-only">Visual Spark Rebrand 2025</h1>
        
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8">
          <div className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] transition-all duration-1000 hover:scale-105"
               role="img"
               aria-label="Visual Spark new brand logo featuring geometric shapes in red, yellow, and blue">
            <svg
              ref={svgRef}
              viewBox="0 0 4303 1789"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <g clipPath="url(#clip0_4007_397)">
                <rect width="4303" height="1789" fill="black"/>
                <rect x="3384" y="108" width="815" height="815" fill="#FFCD00"/>
                <circle cx="543.5" cy="535.5" r="446.5" fill="#E70C00"/>
                <path d="M2484.63 805.529L2484.63 1742.67L1673.04 1274.1L2484.63 805.529Z" fill="#0076DD"/>
                <g clipPath="url(#clip1_4007_397)">
                  <path d="M2210.92 817.015V792.298H2137.8V789.564C2137.8 774.53 2146.16 766.329 2161.48 766.329H2210.92V646.732H2119.7C2041.02 646.732 1991.58 693.204 1991.58 768.379V792.298H1928.68V911.894H1991.58V1138.79H2137.8V911.894H2172.15C2177.78 877.155 2191.3 844.92 2210.92 817.072V817.015Z" fill="white"/>
                  <path d="M2206.96 948.114C2206.96 833.985 2301.66 747.193 2413.07 747.193C2435.35 747.193 2458.33 750.61 2477.82 757.444H2617.78V1138.79H2477.82C2458.33 1145.62 2435.35 1149.04 2413.07 1149.04C2301.66 1149.04 2206.96 1062.24 2206.96 948.114ZM2472.95 948.114C2472.95 915.994 2447.88 890.708 2415.85 890.708C2383.82 890.708 2358.76 915.994 2358.76 948.114C2358.76 980.235 2383.82 1005.52 2415.85 1005.52C2447.88 1005.52 2472.95 980.235 2472.95 948.114Z" fill="white"/>
                  <path d="M2653.99 757.444H2796.73V781.363C2816.92 762.911 2845.47 751.977 2875.41 751.977H2899.78V905.06H2868.45C2821.8 905.06 2800.21 926.929 2800.21 965.2V1138.79H2653.99V757.444Z" fill="white"/>
                  <path d="M2931.81 757.444H3071.07V776.579C3087.09 759.494 3115.63 747.193 3146.27 747.193C3188.05 747.193 3220.77 760.861 3243.75 785.464C3268.12 762.228 3303.63 747.193 3339.84 747.193C3428.27 747.193 3488.15 805.966 3488.15 893.442V1138.79H3345.41V920.095C3345.41 896.176 3332.88 881.824 3313.38 881.824C3293.89 881.824 3281.35 896.176 3281.35 920.095V1138.79H3138.61V920.095C3138.61 896.176 3126.08 881.824 3106.58 881.824C3087.09 881.824 3074.55 896.176 3074.55 920.095V1138.79H2931.81V757.444Z" fill="white"/>
                  <path d="M1229.88 948.114C1229.88 835.352 1321.79 747.193 1438.77 747.193C1555.75 747.193 1647.66 835.352 1647.66 948.114C1647.66 1060.88 1555.75 1149.04 1438.77 1149.04C1321.79 1149.04 1229.88 1060.88 1229.88 948.114ZM1495.87 948.114C1495.87 915.994 1470.8 890.708 1438.77 890.708C1406.74 890.708 1381.68 915.994 1381.68 948.114C1381.68 980.235 1406.74 1005.52 1438.77 1005.52C1470.8 1005.52 1495.87 980.235 1495.87 948.114Z" fill="white"/>
                  <path d="M1227.1 820.318C1227.1 868.156 1211.09 905.743 1178.36 951.532L1041.89 1138.79H866.419L975.738 990.486C894.968 969.3 839.96 903.693 839.96 820.318C839.96 715.073 923.516 636.481 1033.53 636.481C1143.55 636.481 1227.1 715.073 1227.1 820.318ZM977.827 820.318C977.827 851.071 1001.5 875.674 1033.53 875.674C1065.56 875.674 1089.24 851.071 1089.24 820.318C1089.24 789.564 1065.56 764.962 1033.53 764.962C1001.5 764.962 977.827 789.564 977.827 820.318Z" fill="white"/>
                  <path d="M1763.48 646.732L1620.97 788.539C1651.44 819.919 1672.73 859.671 1681.26 904.32L1728.03 856.481V1138.73H1877.04V646.732H1763.54H1763.48Z" fill="white"/>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_4007_397">
                  <rect width="4303" height="1789" fill="white"/>
                </clipPath>
                <clipPath id="clip1_4007_397">
                  <rect width="2648.2" height="512.555" fill="white" transform="translate(839.96 636.481)"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="text-center space-y-6 opacity-0 animate-fade-in">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
              A New Era Begins
            </p>
            <p className="text-lg md:text-xl text-gray-400">
              Coming Spring 2025
            </p>
            <a
              href="#notify"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300 group"
            >
              Get Notified
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Notification Form */}
      <section id="notify" className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Stay Updated</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;