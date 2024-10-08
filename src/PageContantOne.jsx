import { useLocation } from "react-router-dom";
import ScrollIcon from "./ScrollIcone";
import ScrollIcone from "./ScrollIcone";
import { useEffect } from "react";
import { h2 } from "framer-motion/client";

const PageContantOne = ({ planet }) => {
  // const location = useLocation();
  // const planet = location.state?.planet;

  // Function to scroll the page down by 100vh
  const scrollToNextSection = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    window.scrollTo({
      top: window.innerHeight, // Scroll the page down by the height of the viewport (100vh)
      behavior: "smooth", // Smooth scrolling
    });
  };

  // useEffect(() => {
  //   // Function to hide the scroll icon on first scroll
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       hideScrollIcon(); // استدعاء الدالة لإخفاء الأيقونة
  //       window.removeEventListener("scroll", handleScroll); // إزالة المستمع بعد أول حركة تمرير
  //     }
  //   };

  //   // إضافة مستمع لحدث التمرير
  //   window.addEventListener("scroll", handleScroll);

  //   // تنظيف المستمع عند إلغاء المكون
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [hideScrollIcon]); // الدالة `hideScrollIcon` كاعتماد لتفعيل التأثير

  return (
    <div
      id="section-1"
      className="sectoion"
      style={{
        // scrollSnapAlign: "start",
        position: "relative",
        width: "100%",
        height: `calc(100vh - 70px)`,
        overflow: "hidden",
        color: "#FCFFFF",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          zIndex: 50,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflowY: "auto",
          padding: "10px 15px",
          marginTop: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "5.5rem",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Planet {planet.name}
        </h1>
        {/* <h6
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Hello World From Earth Planet
        </h6> */}
        <p
          style={{
            fontSize: "20px",
            padding: "15px 0",
            lineHeight: "1.5",
          }}
        >
          <h2>{planet?.data[0]?.dataTitle}</h2>
          <p>{planet?.data[0]?.datadetails}</p>
        </p>
        <a
          href="#"
          onClick={scrollToNextSection} // Call the scroll function when clicked
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
        >
          Planet Details
        </a>
      </div>
      {/* {!isScrollIconVisable && <ScrollIcone />} */}
    </div>
  );
};
export default PageContantOne;
