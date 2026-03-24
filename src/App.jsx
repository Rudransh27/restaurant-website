import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Features from "./components/Features"
import Gallery from "./components/Gallery"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import MenuBook from "./components/MenuBook"

const App = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <MenuBook />
      <Features />
      <Gallery />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App