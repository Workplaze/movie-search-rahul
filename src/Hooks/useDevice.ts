import { useState, useEffect } from "react";

const useDevice = (): boolean => {
  const [isMobileVersion, setIsMobileVersion] = useState(true);

  useEffect(() => {
    const updateMobileView = (): void => {
      if (window.innerWidth >= 800) {
        setIsMobileVersion(false);
      } else {
        setIsMobileVersion(true);
      }
    };

    updateMobileView();

    window.addEventListener("resize", updateMobileView);

    return () => {
      window.removeEventListener("resize", updateMobileView);
    };
  }, []);

  return isMobileVersion;
};

export default useDevice;
