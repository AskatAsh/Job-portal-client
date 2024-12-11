import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./index.css";
import AuthProvider from "./firebase/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
