import { ThemeProvider } from "@/app/theme-provider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/#home",
        element: <Home />,
      },
      {
        path: "/#about",
        element: <About />,
      },
      {
        path: "/#projects",
        element: <Projects />,
      },
      {
        path: "/#contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
