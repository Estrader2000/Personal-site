import { ThemeProvider } from "@/app/theme-provider";
import RootLayout from "./RootLayout";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RootLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
