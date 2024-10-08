import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function PageContantFour() {
  // دالة التمرير لأعلى بمقدار 100vh
  const scrollToNextSection = (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للرابط
    window.scrollBy({
      top: -window.innerHeight, // التمرير لأعلى بمقدار 100vh
      behavior: "smooth", // تمرير سلس
    });
  };

  return (
    <div
      id="section-4"
      style={{
        width: "100%",
        position: "relative",
        width: "100%",
        height: `100vh`,
        overflow: "hidden",
        color: "#FCFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        // zIndex: 50,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 88888,
          padding: "10px",
        }}
      >
        <Link to="/">
          <h6 style={{ fontSize: "18px" }}>Back</h6>
        </Link>
        <h6 style={{ fontSize: "18px",alignSelf:"center" }}>Free mode</h6>
        <h1></h1>
        {/* <a
          // href="#section-3"
          onClick={scrollToNextSection} // Call the scroll function to the top when clicked
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Top
        </a> */}
      </div>
    </div>
  );
}
export default PageContantFour;
