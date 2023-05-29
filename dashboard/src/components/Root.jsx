import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";

export const Root = () => {
  return (
    <div id="wrapper" className="home__main__conteiner">
      <SideBar />

      <div id="content-wrapper" className="home__main">
        <div id="content">
          <TopBar />

          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
};
