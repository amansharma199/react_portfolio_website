import BlogFullPage from "../../Components/blogFullPage/BlogFullPage"
import Footer from "../../Components/footer/Footer"
import Navbar from "../../Components/navbar/Navbar"
import "./posts.css"

export default function Posts() {
  return (
    <div className='posts'>
      <Navbar/>
      <BlogFullPage/>
      <Footer/>
    </div>
  )
}
