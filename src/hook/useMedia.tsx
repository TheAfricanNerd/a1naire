import { useState, useEffect } from "react";

const N = 768;
export default function useMedia() {
  const [w, setW] = useState<unknown>(window.window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(
    window.window.innerWidth < N ? true : false
  );

  const wAdd = (h: () => void) => window.addEventListener("resize", h);
  const wRmv = (h: () => void) => window.removeEventListener("resize", h);

  function handler() {
    const wn = window.window.innerWidth;

    if (wn < N) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    setW(wn);
  }
  useEffect(() => {
    // window.addEventListener("resize", handler);
    wAdd(handler);
    return () => {
      // window.removeEventListener("resize", handler);
      wRmv(handler);
    };
  }, [w]);

  // set the default width
  return {
    width: w,
    isMobile,
  };
}
