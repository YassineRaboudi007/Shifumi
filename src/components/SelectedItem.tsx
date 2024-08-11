import React, { useState, useEffect } from "react";
import "../App.css";

interface SelectedItemProps {
  imgToShow: string;
}

const SelectedItem: React.FC<SelectedItemProps> = ({ imgToShow }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    const timeout = setTimeout(() => {
      setFadeIn(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [imgToShow]);

  return (
    <img
      src={imgToShow}
      className={`animated-image ${fadeIn ? "apply" : ""}`}
    />
  );
};

export default SelectedItem;
