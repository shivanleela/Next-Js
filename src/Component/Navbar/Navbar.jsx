import vercel from "/React_Folder/chat-app/client/src/assets/vercel1868.jpg";
import "./Navbar.css";
// import { IoIosArrowUp } from "react-icons/io";
// import { VscPreview } from "react-icons/vsc";
// import { AiFillAppstore } from "react-icons/ai";

function Navbar() {
  return (
    <nav>
      <div>
        <img src={vercel} alt="" style={{ width: 90, height: 52 }} />
      </div>
      <ul className="navbar">
        <li>
          <a href="#">Products</a>
          {/* <ul className="submenu">
            <div>
            <div className="submenu-li">
              <p className="icon-img"><VscPreview /></p>
                <div className="text-li" >
                  <h3 >Previews</h3>
                  <p>Helping teams ship </p>
                </div>
            </div>
            <div className="submenu-li">
              <p className="icon-img"><AiFillAppstore  /></p>
                <div className="text-li" >
                  <h3 >Previews</h3>
                  <p>Helping teams ship </p>
                </div>
            </div>
            </div>
            <div>
            <div className="submenu-li">
              <p className="icon-img"><AiFillAppstore  /></p>
                <div className="text-li" >
                  <h3 >Previews</h3>
                  <p>Helping teams ship </p>
                </div>
            </div>
            <div className="submenu-li">
              <p className="icon-img"><AiFillAppstore  /></p>
                <div className="text-li" >
                  <h3 >Previews</h3>
                  <p>Helping teams ship </p>
                </div>
            </div>
            <div className="submenu-li">
              <p className="icon-img"><AiFillAppstore  /></p>
                <div className="text-li" >
                  <h3 >Previews</h3>
                  <p>Helping teams ship </p>
                </div>
            </div>
            </div>
            <div>
            <div className="submenu-li">
              <p className="icon-img"><AiFillAppstore  /></p>
                <div className="text-li" >
                  <h3 >Previews</h3>
                  <p>Helping teams ship </p>
                </div>
            </div>
            <div className="submenu-li">
              <p className="icon-img"><AiFillAppstore  /></p>
                <div className="text-li" >
                  <h3 >Previews</h3>
                  <p>Helping teams ship </p>
                </div>
            </div>
            <div className="submenu-li">
              <p className="icon-img"><AiFillAppstore  /></p>
                <div className="text-li" >
                  <h3 >Previews</h3>
                  <p>Helping teams ship </p>
                </div>
            </div>
            </div>
          </ul> */}
        </li>

        <li>
          <a href="#">Solutions</a>
          {/* <ul className="submenu">
            <li>
              <a href="">Matrial</a>
            </li>
            <li>
              <a href="">Matrial</a>
            </li>
            <li>
              <a href="">Matrial</a>
            </li>
            <li>
              <a href="">Matrial</a>
            </li>
          </ul> */}
        </li>

        <li>
          <a href="#">Resources</a>
          {/* <ul className="submenu">
            <li>
              <a href="">Matrial</a>
            </li>
            <li>
              <a href="">Matrial</a>
            </li>
            <li>
              <a href="">Matrial</a>
            </li>
            <li>
              <a href="">Matrial</a>
            </li>
          </ul> */}
        </li>

        <li>
          <a href="#">Enterprise</a>
        </li>
        <li>
          <a href="#">Docs</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>
      <section className="links">
        <a href="#" className="pad">
          Log In
        </a>
        <a href="#" className="white">
          Contact
        </a>
        <a href="#" className="black">
          Sign Up
        </a>
      </section>

      <section className="hamburger">
        <section className="menuline"></section>
        <section className="menuline"></section>
        <section className="menuline"></section>
      </section>
    </nav>
  );
}

export default Navbar;
