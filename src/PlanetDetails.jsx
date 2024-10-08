import React, { useState, useEffect } from "react";
import My3DModel from "./My3DModel";
import PageContantOne from "./PageContantOne";
import PageContantTwo from "./PageContantTwo";
import PageContantThree from "./PageContantThree";
import TransitionPage from "./TransitionPage";
import PageContantFour from "./PageContantFour";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

const PlanetDetails = () => {
  const location = useLocation();
  const planet = location.state?.planet;
  console.log(planet);
  const [isAppReady, setIsAppReady] = useState(false); // Tracks loading state for all resources

  // // تحميل الصور
  // const loadImage = (src) => {
  //   return new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.src = src;
  //     img.onload = () => resolve();
  //     img.onerror = () => reject();
  //   });
  // };

  // // تحميل النموذج ثلاثي الأبعاد
  // const load3DModel = () => {
  //   return new Promise((resolve, reject) => {
  //     const loader = new GLTFLoader();
  //     loader.load(
  //       "/planets/earth.glb", // استبدل هذا بمسار النموذج الخاص بك
  //       (gltf) => {
  //         setModel(gltf.scene); // حفظ النموذج في الحالة
  //         resolve(); // تم التحميل بنجاح
  //       },
  //       undefined,
  //       (error) => {
  //         console.error("Error loading 3D model:", error);
  //         reject(error); // فشل التحميل
  //       }
  //     );
  //   });
  // };
  // // تحميل كل الموارد
  // const loadResources = async () => {
  //   try {
  //     await Promise.all([
  //       loadImage(wall1), // تحميل الصورة
  //       load3DModel(), // تحميل النموذج ثلاثي الأبعاد
  //       // يمكنك إضافة موارد أخرى هنا مثل ملفات أو أصوات...
  //     ]);
  //     setIsAppReady(true); // تعيين حالة التطبيق إلى جاهز بعد تحميل كل الموارد
  //   } catch (error) {
  //     console.error("Error loading resources:", error);
  //   }
  // };

  // // بدء تحميل الموارد عند بدء تشغيل المكون
  // useEffect(() => {
  //   loadResources();
  // }, []);

  // بعد تحميل كل شيء، عرض محتويات الصفحة
  return (
    <div
      className="planet-details"
      style={{
        backgroundImage: `url(${planet.wallpaper})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // height:"400vh",
        boxShadow: "inset 0px 0px 100px 50px rgba(0, 0, 0, 0.8)", // ظل داخلي بلون أسود
      }}
    >
      {/* نموذج 3D */}
      <div
        style={{
          position: "fixed",
          bottom: "50%",
          left: "50%",
          transform: "translate(-50%, 50%)",
          height: "100vh",
          width: "100%",
          zIndex: 2,
        }}
      >
        <My3DModel planet={planet} isAppReady={isAppReady} />
      </div>
      {/* محتويات الصفحات */}
      <PageContantOne planet={planet} />
      <PageContantTwo planet={planet} />
      <PageContantThree planet={planet} />
      <PageContantFour />
    </div>
  );
};

export default PlanetDetails;
