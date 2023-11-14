import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import Education from './Components/Education'
import ContactMe from './Components/ContactMe';
import Footer from'./Components/Footer'

function App() {
  return (
    <div className="p-0 m-0 App bg-[#171A22]">
      <main className="relative flex flex-col items-center w-full min-h-screen mx-auto min-w-screen">
        <Navbar />
        <Header />
        <AboutMe />
        <Projects />
        <Education />
        <ContactMe />
        <Footer />
      </main>
    </div>
  );
}

export default App;
