
import './Footer.css'
import { FaLinkedin,FaTwitter, FaYoutube,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <section className='footer-section'>
      <section>
      <h1>Unleash Next.js</h1>
      <p>Deploy Next.js on Vercel and unlock its full potential.</p>
      </section>
      <button>Try Next.js + Vercel Free</button>
    </section>

    <hr />

    <footer style={{display:'flex',justifyContent:'space-around',width:800}}>
   <section>
   <h4>Products</h4>
     <h5>AI</h5>
     <h5>Enterprise</h5>
     <h5>Next.js</h5>
     <h5>Observability</h5>
     <h5>Previews</h5>
     <h5>Rendering</h5>
     <h5>Security</h5>

   </section>
   <section>
   <h4>Resourse</h4>
     <h5>Community</h5>
     <h5>Docus</h5>
     <h5>Experts</h5>
     <h5>Guides</h5>
     <h5>Help</h5>
     <h5>Integration</h5>
     <h5>Resources</h5>

   </section>
   <section>
   <h4>Company</h4>
     <h5>About</h5>
     <h5>Blog</h5>
     <h5>Careers</h5>
     <h5>Changelog</h5>
     <h5>Contact us</h5>
     <h5>Customers</h5>
     <h5>Partners</h5>

   </section>

   <section>
    <h4>Social</h4>

     <h5><FaGithub/> GitHub</h5>
     <h5><FaLinkedin/> Linkin</h5>
     <h5><FaTwitter/> Twitter</h5>
     <h5>< FaYoutube/> You Tube</h5>
   </section>
   </footer>
    
    </>
  )
}

export default Footer