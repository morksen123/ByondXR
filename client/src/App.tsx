import { useEffect } from "react";
import Showroom from "./components/Showroom/Showroom";

function App() {
  const handleGlobalEvent = (event: MouseEvent) => {
    switch (event.type) {
      case "click": 
        const targetElement = event.target
        console.log(targetElement)
    }
  };
  
  useEffect(() => {
    document.addEventListener("click", handleGlobalEvent);
    return () => {
      document.removeEventListener("click", handleGlobalEvent);
    };
  }, []);

  return (
    <div>
      <Showroom name="my showroom"/>
    </div>
  );
}

export default App;
