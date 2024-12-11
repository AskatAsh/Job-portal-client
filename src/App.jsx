import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./index.css";
import AuthProvider from "./firebase/AuthProvider";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
