import { useEffect, useRef } from "react";
import lottie from "lottie-web";

type LottieAnimationProps = {
  animationData: object;
  size: number;
};

export const LottieAnimation = ({
  animationData,
  size,
}: LottieAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      lottie.destroy();
    };
  }, [animationData]);

  return <div ref={containerRef} style={{ width: size, height: size }} />;
};
