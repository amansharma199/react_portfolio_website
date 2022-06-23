import "./home.css"
import Navbar from "../../Components/navbar/Navbar"
import Header from "../../Components/header/Header"
import About from "../../Components/about/About"
import Services from "../../Components/services/Services"
import Work from "../../Components/works/Work"
import Blogs from "../../Components/myblog/Blogs"
import Contact from "../../Components/contact/Contact"
import Footer from "../../Components/footer/Footer"

export default function Home() {
  return (
      <div className="home">
        <Navbar/>
        <Header/>
        <About/>
        <Services />
        <Work/>
        <Blogs/>
        <Contact id="contact"/>
        <Footer/>
      </div>
  )
}
