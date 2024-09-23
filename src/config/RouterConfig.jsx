import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Team from "../pages/Team";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PlayerDetail from "../components/PlayerDetail";
import NewsDetail from "../components/NewDetail"; // Haber detay sayfası
import NotFoundPage from "../pages/NotFoundPage";
import ScrollToTop from "../components/ScrollToTop";

const RouterConfig = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />{" "}
        <Route path="/kadromuz" element={<Team />} />
        <Route path="/kadromuz/:slug" element={<PlayerDetail />} />{" "}
        <Route path="/hakkimizda" element={<About />} />{" "}
        <Route path="/iletisim" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default RouterConfig;
