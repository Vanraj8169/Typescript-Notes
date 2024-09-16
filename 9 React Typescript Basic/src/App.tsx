import { createContext, ReactNode, useState } from "react";
import Box from "./components/Box";

type themeType = "light" | "dark";

interface ThemeContextType {
  theme: themeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<themeType>("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme: "light", toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};
function App() {
  return (
    <ThemeProvider>
      <Box />
    </ThemeProvider>
  );
}

export default App;
