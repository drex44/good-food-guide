import { useState, useRef, useEffect } from "react";

// The image starts loading as soon as SSR markup is parsed, so a fast
// failure can resolve before hydration attaches the onError listener.
// Catch that race by checking the already-settled state on mount.
const useImageFallback = () => {
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setHasError(true);
    }
  }, []);

  return { hasError, imgRef, onError: () => setHasError(true) };
};

export default useImageFallback;
