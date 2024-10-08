import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Model3D from "./Model3D";
import { TextureLoader } from "three";
import ScrollIcone from "./ScrollIcone";

const HomePgaeSlider = ({
  sliderItems,
  setIsAppReady,
  changeBackground,
  isScrollIconVisable,
  hideScrollIcon,
}) => {
  const navigate = useNavigate();
  const sliderContainerStyle = {
    width: "100vw",
    height: "100vh",
    paddingTop: "30px",
    margin: "auto",
    position: "relative",
  };

  const sliderItemsStyle = {
    height: "45vw",
    margin: "50px 0 0",
    position: "relative",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
  };

  const sliderItemStyle = {
    position: "absolute",
    width: "30%",
    height: "100%",
    top: "15%",
    // left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Ensure centering
    transition: "transform 1.8s cubic-bezier(0.19, 1, 0.22, 1)",
  };
  const imgStyle = {
    width: "100%",
    height: "auto",
    marginTop: "55%",
    transition: "0.25s",
    transform: "scale(1.3)",
  };

  const [selectedItem, setSelectedItem] = useState(0);
  // const [selectedPlanet, setSelectedPlanet] = useState(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     hideScrollIcon(); // استدعاء الدالة لإخفاء الأيقونة
  //     window.removeEventListener("scroll", handleScroll); // إزالة المستمع بعد أول حركة تمرير
  //   };

  //   // إضافة مستمع لحدث التمرير
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [hideScrollIcon]);

  const handleNext = () => {
    setSelectedItem(
      (prevSelectedItem) => (prevSelectedItem + 1) % sliderItems.length
    );
  };

  const handlePrev = () => {
    // hideScrollIcon()
    setSelectedItem(
      (prevSelectedItem) =>
        (prevSelectedItem - 1 + sliderItems.length) % sliderItems.length
    );
  };

  const handleScroll = (event) => {
    hideScrollIcon();
    if (event.deltaY > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const getTransformStyle = (index) => {
    const totalItems = sliderItems.length;
    const offset = (index - selectedItem + totalItems) % totalItems;

    if (offset === 0) {
      // First item: front and enlarged
      return {
        ...sliderItemStyle,
        zIndex: 2,
        transform: "scale(1.5) translateX(-40%) translate3d(0, 0, 0)",
      };
    } else if (offset === 1 || offset === totalItems - 1) {
      // Second and last item: smaller, next to the first
      return {
        ...sliderItemStyle,
        zIndex: 1,
        transform: `scale(0.7) translateX(-50%) translate3d(${
          offset === 1 ? 240 : -240
        }%, -10%, 0)`,
      };
    } else if (offset === 2 || offset === totalItems - 2) {
      // Third and fourth item: even smaller, farther back
      return {
        ...sliderItemStyle,
        zIndex: 0,
        transform: `scale(0.5) translateX(-50%) translate3d(${
          offset === 2 ? 180 : -180
        }%, -31%, 0)`,
      };
    } else if (offset === 3 || offset === totalItems - 2) {
      // Third and fourth item: even smaller, farther back
      return {
        ...sliderItemStyle,
        zIndex: 0,
        transform: `scale(0.3) translateX(-60%) translate3d(${
          offset === 3 ? 0 : -180
        }%, -31%, 0)`,
      };
    } else if (offset === totalItems - 1) {
      // Special case for the sixth element: position it in the circular pattern
      const angle = (offset / totalItems) * 2 * Math.PI; // Calculate angle in radians
      const radius = 300; // Adjust this for the circle size
      const x = Math.cos(angle) * radius; // X position based on the angle
      const y = Math.sin(angle) * radius; // Y position based on the angle
      return {
        ...sliderItemStyle,
        zIndex: -1, // Push it behind other elements
        transform: `scale(0.5) translate(${x}px, ${y}px) translate3d(0, 0, -50px)`,
      };
    }
    return sliderItemStyle;
  };

  // const handelVist = (planet) => {
  //   setSelectedPlanet(planet);  // تخزين الكوكب الذي تم اختياره
  //   navigae(`/details/${planet.name}`);  // التنقل إلى صفحة التفاصيل
  // };

  const handleVisitPlanet = (planet) => {
    navigate("/details", { state: { planet } });
    changeBackground();
  };

  return (
    <div style={sliderContainerStyle}>
      <ul style={sliderItemsStyle}>
        {sliderItems.map((item, index) => (
          <div key={index}>
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                userSelect: "none",
                // backgroundColor: "white",
                width: "100%", // Adjust width as needed
                height: "100%", // Ensure it takes full height of the container
                ...getTransformStyle(index),
              }}
            >
              {/* <h5 style={{ color: "white" }}>planet</h5> */}
              <h1 style={{ color: "#eff0cd" }}>
                {item.name}
                {/* {index} */}
              </h1>
              <h5
                className="planet-description"
                style={{ color: "#ffffff", fontWeight: "300" }}
              >
                {item.description}
              </h5>
              <button
                style={{
                  padding: "5px 17px",
                  border: "none",
                  borderRadius: "25px",
                  backgroundColor: "#a997978d",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginTop: "5px",
                }}
                onClick={() => handleVisitPlanet(item)}
              >
                Visit {item.name}
              </button>
              <Model3D
                texturePath={item.texturePath}
                fovPercentage={item.fovPercentage}
                path={item.path}
              />
            </li>
          </div>
        ))}
      </ul>
      <div className="btns-waper">
        <button className="swiper-btn next" onClick={() => handleNext()}>
          next
        </button>
        <button className="swiper-btn prev" onClick={() => handlePrev()}>
          prev
        </button>
      </div>
      {!isScrollIconVisable && <ScrollIcone />}
    </div>
  );
};

export default HomePgaeSlider;
