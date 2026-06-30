import { Outlet } from "react-router-dom";
import { Header, Footer } from "./Components/index";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
