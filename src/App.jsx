import ThemeContextProvider from "./contexts/ThemeContext";
import AppContent from "./AppContent";

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
