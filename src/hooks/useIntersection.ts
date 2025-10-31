import { useEffect, useRef, useState } from "react";

export const useIntersection = <T extends HTMLElement>(
  options?: IntersectionObserverInit
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return { isVisible, ref };
};
