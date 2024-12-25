import { ThemeContextProvider } from "./contexts/ThemeContext";
import AppContent from "./AppContent";
import { LangContextProvider } from "./contexts/LangContext";
import { DataContextProvider } from "./contexts/DataContext";

function App() {
  return (
    <DataContextProvider>
      <ThemeContextProvider>
        <LangContextProvider>
          <AppContent />
        </LangContextProvider>
      </ThemeContextProvider>
    </DataContextProvider>
  );
}

export default App;
