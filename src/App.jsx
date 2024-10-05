import Footer from "./components/Footer";
import Header from "./components/Header";
import LiveScore from "./components/LiveScore";
import RouterConfig from "./config/RouterConfig";
import PageContainer from "./container/PageContainer";

const App = () => {
  return (
    <div>
      <Header />
      <LiveScore />
      <PageContainer>
        <RouterConfig />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default App;
