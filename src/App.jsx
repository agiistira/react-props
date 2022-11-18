import { Route, Routes } from "react-router-dom";
import {
  LOGIN,
  REGISTER,
  ABOUT,
  ACITIVTY,
  DONATE,
  HOME,
  MEDIA,
} from "./routes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Activity from "./pages/Activity";
import Donate from "./pages/Donate";
import Media from "./pages/Media";
import Navs from "./components/Navs";

const App = () => {
  return (
    <>
      <Navs />

      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<About />} path={ABOUT} />
        <Route element={<Activity />} path={ACITIVTY} />
        <Route element={<Donate />} path={DONATE} />
        <Route element={<Media />} path={MEDIA} />
        <Route element={<Login />} path={LOGIN} />
        <Route element={<Register />} path={REGISTER} />
      </Routes>
    </>
  );
};

export default App;
