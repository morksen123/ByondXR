import { useEffect } from "react";
import ClippedDrawer from "./components/Drawer/ClippedDrawer";

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
      <ClippedDrawer/>
    </div>
  );
}

export default App;
