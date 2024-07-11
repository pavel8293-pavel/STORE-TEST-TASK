import { ToastContainer } from "react-toastify";
import ApplicationRouter from "./routes/ApplicationRouter";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <ApplicationRouter />
    </>
  )
};

export default App;