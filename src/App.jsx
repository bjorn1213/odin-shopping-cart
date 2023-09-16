import "./App.css";
import PageHeader from "./components/PageHeader";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <PageHeader>
        <NavBar />
      </PageHeader>
      <Outlet />
    </>
  );
}

export default App;
