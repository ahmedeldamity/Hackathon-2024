import React, { useEffect, useState } from "react";
// import intro from "../src/assets/SPACE 4K Edit_Trim2n.mp4";

const Intro = ({ setShowIntro, isVideoPlaying, setIsVideoPlaying }) => {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false); // حالة لتحديد ما إذا كان الفيديو قيد التشغيل
  const [showMessage, setShowMessage] = useState(false);

  // تفعيل الرسالة بعد انتهاء الفيديو
  // useEffect(() => {
  //   if (isVideoPlaying) {
  //     const timer = setTimeout(() => {
  //       setShowMessage(true);
  //     }, 3000); // ظهور الرسالة بعد 10 ثواني من بدء الفيديو (تعديل حسب طول الفيديو)

  //     return () => clearTimeout(timer);
  //   }

  //   // return () => clearTimeout(timerd);
  // }, [isVideoPlaying]);

  // وظيفة بدء الفيديو
  // const handleImageClick = () => {
  //   setIsVideoPlaying(true);
  // };

  // وظيفة للانتقال إلى الصفحة الرئيسية
  const handleContinueClick = () => {
    setShowIntro(true); // إخفاء الانترو فقط إذا كان التحميل مكتمل
  };

  return (
    <div style={styles.container} onKeyPress={handleContinueClick} tabIndex="0">
      {!isVideoPlaying ? (
        <div style={styles.startWraper}>
          <p className="team" style={styles.startWraperItem}>
            space navigators Team
          </p>
          <p className="present" style={styles.startWraperItem}>
            Present
          </p>
          <p className="project-name" style={styles.startWraperItem}>
            Space navigators
          </p>
          <p
            className="start"
            onClick={handleContinueClick} // عند الضغط على الصورة، يبدأ الفيديو
            style={{ ...styles.startWraperItem, cursor: "pointer" }}
          >
            Press to start journey
          </p>
          {/* <img
            src="https://i.ebayimg.com/images/g/Uc8AAOSw6mZe5MMF/s-l1200.jpg"
            alt="Intro"
            onClick={handleImageClick} // عند الضغط على الصورة، يبدأ الفيديو
            style={styles.image}
          /> */}
        </div>
      ) : (
        <video
          style={styles.video}
          src={intro}
          autoPlay
          playsInline
          onEnded={() => setShowMessage(true)} // عند انتهاء الفيديو، يتم عرض الرسالة
        />
      )}
      {showMessage && (
        <div
          // className="message"
          onClick={handleContinueClick}
          style={styles.message}
        >
          skip
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  startWraper: {
    position: "relative", // إضافة هذا لجعل العناصر تتداخل
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },

  startWraperItem: {
    position: "absolute", // جعل العناصر تتداخل في نفس الموقع
    top: "50%", // توسيط عموديًا
    left: "50%", // توسيط أفقيًا
    transform: "translate(-50%, -50%)", // لتحريك العنصر إلى المركز تمامًا
    color: "#cecece",
    fontSize: "20px", // يمكن تخصيص الحجم لكل عنصر
    opacity: 0, // جعل العنصر غير مرئي في البداية
  },

  // image: {
  //   width: "18%",
  //   height: "auto",
  //   objectFit: "cover",
  //   cursor: "pointer",
  //   // لتوضيح أن الصورة قابلة للنقر
  // },
  message: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "#fff",
    fontSize: "20px",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Intro;
