export const getDarkMode = () => {
    const mode = localStorage.getItem("darkmode");
    return mode ? JSON.parse(mode) : false;
  };
  