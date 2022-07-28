import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HealthyComponents from "./components/HealthyComponents";
import Menus from "./components/Menus";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div class="parent">
      <div class="section1">
        <NavBar />
      </div>
      <div class="section page-content">
        <header class="section2">
          <Header />
        </header>
        <main >
          <HealthyComponents />
          <Menus />
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
