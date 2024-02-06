import React, { useState, createContext } from "react";
import "./App.css";
import UseContext from "./components/UseContext";

export const ToggleTheme = createContext();

function App() {
  const colors = ["black",  "grey"];
  const [themeIndex, setThemeIndex] = useState(0);
  const [state, setState] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [contentMessage, setContentMessage] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % colors.length);
    setState(!state);
    setExpanded(false); 
  };

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleContent = () => {
    alert("Content Button Clicked");

    if (expanded) {
      setContentMessage("");
      setExpanded(false);
    } else {
      setContentMessage(
        `Unlike other superheroes, Batman possesses no superhuman powers; instead, he relies on his intellect, detective skills, martial arts expertise, and a vast array of technological gadgets to fight crime in the crime-ridden Gotham City. The alter ego of billionaire Bruce Wayne, Batman witnessed his parents' murder as a child, motivating him to dedicate his life to combating crime. The iconic Bat-Signal, a spotlight projecting the Bat symbol into the night sky, serves as a beacon for justice.`
      );
      setExpanded(true);
    }
  };

  return (
    <ToggleTheme.Provider value={state}>
      <div id="toggle" onClick={handleToggle}>
        <button>Toggle</button>
      </div>

      <div
        className={`content ${state ? "plain" : "blur"} ${expanded ? "expanded" : ""}`}
        id="change"
        style={{ backgroundColor: colors[themeIndex] }}
      >
        <UseContext handleLike={handleLike} />
        <div id="message">{contentMessage}</div>
        <button onClick={handleContent}>Content</button>
        <div id="number">{likeCount}</div>
        <button onClick={handleLike}>Like</button>
      </div>
    </ToggleTheme.Provider>
  );
}

export default App;