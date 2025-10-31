import { useEffect, useRef, useState } from "react";

export const useIntersection = <T extends HTMLElement>(
  options?: IntersectionObserverInit
) => {
  const [isVisible, setIsVisible] = useState(false);
  const intersectionRef = useRef<T | null>(null);

  useEffect(() => {
    if (!intersectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );

    observer.observe(intersectionRef.current);
    return () => observer.disconnect();
  }, [intersectionRef, options]);

  return { isVisible, intersectionRef };
};
