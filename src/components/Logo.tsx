import { useEffect, useRef, useState } from "react";
import "./Logo.css"; // Import CSS file for animations

// SVG path drawing animation effect
export function Logo() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Skip animations for users who prefer reduced motion
      setAnimationStarted(true);
      return;
    }

    // Start animation sequence after a small delay
    setTimeout(() => {
      setAnimationStarted(true);
    }, 100);

    // Setup listener for prefers-reduced-motion changes
    const motionMediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const handleMotionChange = () => {
      if (motionMediaQuery.matches) {
        window.location.reload();
      }
    };

    motionMediaQuery.addEventListener("change", handleMotionChange);

    // Cleanup event listener
    return () => {
      motionMediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div
      className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] transition-all duration-1000"
      role="img"
      aria-label="901farm logo featuring geometric shapes in red, yellow, and blue"
    >
      <svg
        ref={svgRef}
        width="4102"
        height="1654"
        viewBox="0 0 4102 1654"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{
          filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.2))",
        }}
      >
        {/* Yellow Square - Animated */}
        <rect
          x="3290"
          y="22"
          width="809"
          height="809"
          className={`square-outline ${
            animationStarted ? "animate-stroke" : ""
          }`}
          fill="none"
          stroke="#FFCD00"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3290"
          y="22"
          width="809"
          height="809"
          className={`square-fill ${animationStarted ? "animate-fill" : ""}`}
          fill="#FFCD00"
        />

        {/* Red Circle - Animated */}
        <circle
          cx="446.5"
          cy="446.5"
          r="443.5"
          className={`circle-outline ${
            animationStarted ? "animate-stroke-delay" : ""
          }`}
          fill="none"
          stroke="#E70C00"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle
          cx="446.5"
          cy="446.5"
          r="443.5"
          className={`circle-fill ${
            animationStarted ? "animate-fill-delay" : ""
          }`}
          fill="#E70C00"
        />

        {/* Blue Triangle */}
        <path
          d="M2387.63 716.529L2387.63 1653.67L1576.04 1185.1L2387.63 716.529Z"
          className={`triangle ${animationStarted ? "animate-triangle" : ""}`}
          fill="#0076DD"
          stroke="#0076DD"
          strokeWidth="4"
        />

        {/* Text Elements */}
        <g
          clipPath="url(#clip0_1_426)"
          className={`text-elements ${animationStarted ? "animate-text" : ""}`}
        >
          <path
            d="M2113.92 728.015V703.298H2040.8V700.564C2040.8 685.53 2049.16 677.329 2064.48 677.329H2113.92V557.732H2022.7C1944.02 557.732 1894.58 604.204 1894.58 679.379V703.298H1831.68V822.894H1894.58V1049.79H2040.8V822.894H2075.15C2080.78 788.155 2094.3 755.92 2113.92 728.072V728.015Z"
            fill="white"
            stroke="white"
            strokeWidth="4"
          />
          <path
            d="M2109.96 859.114C2109.96 744.985 2204.66 658.193 2316.07 658.193C2338.35 658.193 2361.33 661.61 2380.82 668.444H2520.78V1049.79H2380.82C2361.33 1056.62 2338.35 1060.04 2316.07 1060.04C2204.66 1060.04 2109.96 973.243 2109.96 859.114ZM2375.95 859.114C2375.95 826.994 2350.88 801.708 2318.85 801.708C2286.82 801.708 2261.76 826.994 2261.76 859.114C2261.76 891.235 2286.82 916.521 2318.85 916.521C2350.88 916.521 2375.95 891.235 2375.95 859.114Z"
            fill="white"
            stroke="white"
            strokeWidth="4"
          />
          <path
            d="M2556.99 668.444H2699.73V692.363C2719.92 673.911 2748.47 662.977 2778.41 662.977H2802.78V816.06H2771.45C2724.8 816.06 2703.21 837.929 2703.21 876.2V1049.79H2556.99V668.444Z"
            fill="white"
            stroke="white"
            strokeWidth="4"
          />
          <path
            d="M2834.81 668.444H2974.07V687.579C2990.09 670.494 3018.63 658.193 3049.27 658.193C3091.05 658.193 3123.77 671.861 3146.75 696.464C3171.12 673.228 3206.63 658.193 3242.84 658.193C3331.27 658.193 3391.15 716.966 3391.15 804.442V1049.79H3248.41V831.095C3248.41 807.176 3235.88 792.824 3216.38 792.824C3196.89 792.824 3184.35 807.176 3184.35 831.095V1049.79H3041.61V831.095C3041.61 807.176 3029.08 792.824 3009.58 792.824C2990.09 792.824 2977.55 807.176 2977.55 831.095V1049.79H2834.81V668.444Z"
            fill="white"
            stroke="white"
            strokeWidth="4"
          />
          <path
            d="M1132.88 859.114C1132.88 746.352 1224.79 658.193 1341.77 658.193C1458.75 658.193 1550.66 746.352 1550.66 859.114C1550.66 971.877 1458.75 1060.04 1341.77 1060.04C1224.79 1060.04 1132.88 971.877 1132.88 859.114ZM1398.87 859.114C1398.87 826.994 1373.8 801.708 1341.77 801.708C1309.74 801.708 1284.68 826.994 1284.68 859.114C1284.68 891.235 1309.74 916.521 1341.77 916.521C1373.8 916.521 1398.87 891.235 1398.87 859.114Z"
            fill="white"
            stroke="white"
            strokeWidth="4"
          />
          <path
            d="M1130.1 731.318C1130.1 779.156 1114.09 816.743 1081.36 862.532L944.887 1049.79H769.419L878.738 901.486C797.968 880.3 742.96 814.693 742.96 731.318C742.96 626.073 826.516 547.481 936.531 547.481C1046.55 547.481 1130.1 626.073 1130.1 731.318ZM880.827 731.318C880.827 762.071 904.502 786.674 936.531 786.674C968.561 786.674 992.235 762.071 992.235 731.318C992.235 700.564 968.561 675.962 936.531 675.962C904.502 675.962 880.827 700.564 880.827 731.318Z"
            fill="white"
            stroke="white"
            strokeWidth="4"
          />
          <path
            d="M1666.48 557.732L1523.97 699.539C1554.44 730.919 1575.73 770.671 1584.26 815.32L1631.03 767.481V1049.73H1780.04V557.732H1666.54H1666.48Z"
            fill="white"
            stroke="white"
            strokeWidth="4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_426">
            <rect
              width="2648.2"
              height="512.555"
              fill="white"
              transform="translate(742.96 547.481)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
