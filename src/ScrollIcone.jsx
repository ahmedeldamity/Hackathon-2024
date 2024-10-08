import React, { useEffect, useState } from "react";

const ScrollIcone = () => {
//   const [isVisible, setIsVisible] = useState(true); // للتحكم في الظهور
//   const [opacity, setOpacity] = useState(1); // للتحكم في الشفافية

//   useEffect(() => {
//     // ضبط مؤقت لجعل الشفافية تبدأ في الانخفاض بعد 2.5 ثانية
//     const timer = setTimeout(() => {
//       setOpacity(0); // ابدأ في تقليل الشفافية
//     }, 2500);

//     // بعد 3 ثوانٍ من البداية، اختفِ العنصر بالكامل
//     const hideTimer = setTimeout(() => {
//       setIsVisible(false); // إخفاء العنصر تمامًا بعد 3 ثوانٍ
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(hideTimer);
//     };
//   }, []);

  const fieldStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "300px",
    
  };

  const mouseStyle = {
    width: "40px",
    height: "80px",
    border: "3px solid #222222",
    borderRadius: "60px",
    position: "relative",
  };

  const mouseBeforeStyle = {
    content: '""',
    width: "12px",
    height: "12px",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#181818",
    borderRadius: "50%",
    opacity: 1,
    animation: "wheel 2s infinite",
    WebkitAnimation: "wheel 2s infinite",
  };

  return (
    // إظهار العنصر فقط إذا كانت حالة isVisible تساوي true
    // isVisible &&
     (
      <div className="mouse-warper" style={fieldStyle}>
        <div className="mouse" style={mouseStyle}>
          <div style={mouseBeforeStyle}></div>
        </div>
      </div>
    )
  );
};

export default ScrollIcone;
