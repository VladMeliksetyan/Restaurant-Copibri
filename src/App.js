import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HealthyComponents from "./components/HealthyComponents";
import Menus from "./components/Menus"
import Footer from "./components/Footer";

function App() {
  return (
    <div class="parent">
      <div class="section" contenteditable>
        <NavBar />
      </div>
      <div class="section page-content" contenteditable>
        <header class="section" contenteditable>
          <Header />
          
        </header>
        <main class="section" contenteditable>
          <HealthyComponents />
          <Menus />
        </main>
        <footer class="section" contenteditable>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default App;
