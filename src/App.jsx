import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Router from "./routes";
function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <Router />
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
