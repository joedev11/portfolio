import Header from '../src/Components/Header'
import AboutMe from '../src/Components/AboutMe'
import Projects from '../src/Components/Projects'
import ContactMe from '../src/Components/ContactMe'
import Footer from '../src/Components/Footer'

export default function Home() {
  return (
    <main className="p-0 m-0 bg-[#171A22] relative flex flex-col items-center w-full min-h-screen mx-auto overflow-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[10%] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#FF7A5C] opacity-[0.04] blur-[120px]" />
        <div className="absolute top-[30%] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#FF7A5C] opacity-[0.04] blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-[#FF7A5C] opacity-[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <Header />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </main>
  )
}
