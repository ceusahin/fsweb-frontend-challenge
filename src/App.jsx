import { ThemeContextProvider } from "./contexts/ThemeContext";
import AppContent from "./AppContent";
import { LangContextProvider } from "./contexts/LangContext";

function App() {
  return (
    <ThemeContextProvider>
      <LangContextProvider>
        <AppContent />
      </LangContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
