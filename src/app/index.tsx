import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";

const router = createBrowserRouter([
  {
    element: <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" children={undefined}/>
    children: [
      {
        path: "/",
        element: <HomePage />,
        
      },

    ],
  },
  
]);

function App() {
  return (
    <>
        <RouterProvider router={router}/>

    </>
  );
}

export default App;
