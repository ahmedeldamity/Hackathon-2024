import { Link } from "react-router-dom";
import logo from "../src/assets/image/logo.png";
const Header = () => {
  // const scrollToNextSection = (e) => {
  //   e.preventDefault(); // Prevent the default behavior of the link
  //   window.scrollTo({
  //     top: window.innerHeight, // Scroll the page down by the height of the screen (100vh)
  //     behavior: "smooth", // Smooth scrolling
  //   });
  // };
  // const scrollToTop = (e) => {
  //   e.preventDefault(); // Prevent the default behavior of the link
  //   window.scrollTo({
  //     top: 0, // Scroll the page to the top (100vh upwards)
  //     behavior: "smooth", // Smooth scrolling
  //   });
  // };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        padding: "5px 20px",
        backgroundColor: "transparent",
        zIndex: 8,
        color: "#FCFFFF",
        gap: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80px",
          // width: "40px",
          height: "80px",
          cursor: "pointer",
        }}
      >
        <Link to="/">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Link to="/share">Share</Link>
        <Link to="/about">ِAbout</Link>
      </div>
    </div>
  );
};

export default Header;
