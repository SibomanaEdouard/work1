import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkmode, setDarkmode] = useState(localStorage.getItem("darkmode") === "true");

  useEffect(() => {
    document.body.style.backgroundColor = darkmode ? "#0D0E17" : "#DEDEDE";
    document.body.style.color = darkmode ? "white" : "black";
    localStorage.setItem("darkmode", darkmode);
  }, [darkmode]);

  return [darkmode, setDarkmode];
};

export default useDarkMode;
