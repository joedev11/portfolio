import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import Education from './Components/Education'
import Footer from'./Components/Footer'

function App() {
  return (
    <div className="App  bg-black">
      <main className="flex min-h-screen min-w-screen flex-col items-center p-6 max-w-[1200px] mx-auto relative">
        <Navbar />
        <Header />
        <AboutMe />
        <Education />
        <Footer />
      </main>
    </div>
  );
}

export default App;
