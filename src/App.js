import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Footer from'./Components/Footer'

function App() {
  return (
    <div className="App  bg-zinc-950">
      <main className="flex min-h-screen min-w-screen flex-col items-center p-6 max-w-[1200px] mx-auto relative">
        <Navbar />
        <Header />
        <AboutMe />
        <Projects />
        <Education />
        <Footer />
      </main>
    </div>
  );
}

export default App;
