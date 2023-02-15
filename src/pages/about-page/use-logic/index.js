import { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
const useLogic = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const [scrollDir, setScrollDir] = useState("scrolling up");
  const [currentPage, setCurrentPage] = useState('');
  useEffect(() => {
    console.log(location.pathname);
    setCurrentPage(location.pathname);
  }, [ location ])
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    // console.log(scrollDir);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollDir]);
  //   console.log(scrollDir);


  return {
    scrollDir,
    navigator,
    currentPage
  };
};
export default useLogic;
