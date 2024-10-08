import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./Loading";
import { TextureLoader } from "three";
import { useLocation } from "react-router-dom";
import * as THREE from "three";

// تسجيل ScrollTrigger مع GSAP
gsap.registerPlugin(ScrollTrigger);

function Model() {
  const location = useLocation();
  const planet = location.state?.planet;
  console.log("3d model ", planet);

  const { scene } = useGLTF(planet.path);
  // const texture = useLoader(TextureLoader, "/planets/textures/download.jpg");

  // scene.traverse((child) => {
  //   if (child.isMesh) {
  //     child.material.map = texture; // إضافة الـ Texture إلى المادة
  //   }
  // });

  return <primitive object={scene} scale={1} />;
}

function AnimatedModel({ planet }) {
  const modelRef = useRef(); // نستخدم useRef للتحكم في المجموعة
  const [scale, setScale] = useState(planet?.scale);
  const orbitControlsRef = useRef(); // للتحكم في OrbitControls
  const { camera } = useThree();

  // useEffect(() => {
  //   if (modelRef.current) {
  //     const box = new THREE.Box3().setFromObject(modelRef.current);
  //     const size = new THREE.Vector3();
  //     box.getSize(size);

  //     const maxDim = Math.max(size.x, size.y, size.z);
  //     const fov = camera.fov * (Math.PI / 180);
  //     let distance = Math.abs(
  //       maxDim / (2 * Math.tan(fov / planet.fovPercentage))
  //     );
  //     distance *= 1.2;

  //     camera.position.set(0, 0, distance);
  //     camera.updateProjectionMatrix();
  //   }
  // }, [modelRef, camera]);

  useEffect(() => {
    if (!modelRef.current) return;
    // تحريك العنصر بنصفه في البداية (section 1)
    gsap.set(modelRef.current?.position, { y: -2 }); // تظهر نصف النموذج فقط

    // إعداد الرسوم المتحركة باستخدام ScrollTrigger
    ScrollTrigger.create({
      trigger: "#section-1",
      start: "top top",
      end: "bottom top",
      scrub: true, // للتفاعل السلس
      toggleActions: "paly paly reverse play",
      onEnter: () => {
        gsap.to(modelRef.current?.position, { y: 0, duration: 1 });
      },
      onEnterBack: () => {
        gsap.to(modelRef.current?.position, { y: -2, x: 0, duration: 1 });
        gsap.to(modelRef.current?.scale, {
          x: scale, // تصغير الحجم إلى النصف
          y: scale,
          z: scale,
          duration: 1,
        });
        gsap.to(modelRef.current?.rotation, {
          y: 10, // دوران الموديل حول محوره
          duration: 1,
          ease: "power1.inOut",
        });
      },
    });

    // تحريك العنصر لليمين وتصغير الحجم مع الدوران في section 2
    ScrollTrigger.create({
      trigger: "#section-2",
      start: "-25% top",
      end: "bottom top",
      scrub: true, // للتفاعل السلس
      toggleActions: "play reverse play reverse", // لتطبيق الحركات العكسية عند التمرير لأعلى

      onEnter: () => {
        gsap.to(modelRef.current?.position, { x: 3, duration: 1 }); // الانتقال لليمين
        gsap.to(modelRef.current?.scale, {
          x: scale / 2, // تصغير الحجم إلى النصف
          y: scale / 2,
          z: scale / 2,
          duration: 1,
        });
        gsap.to(modelRef.current?.rotation, {
          y: 10, // دوران الموديل حول محوره
          duration: 5,
          // ease: "power1.inOut",
        });
      },
      onEnterBack: () => {
        gsap.to(modelRef.current?.position, { x: 3, duration: 1 }); // الانتقال لليسار
        gsap.to(modelRef.current?.scale, {
          x: scale / 2, // تصغير الحجم إلى النصف
          y: scale / 2,
          z: scale / 2,
          duration: 1,
        });
        gsap.to(modelRef.current?.rotation, {
          // y: 10, // دوران الموديل حول محوره
          duration: 5,
          // ease: "power1.inOut",
        });
      },
    });

    // تكبير العنصر ليصبح خلفية في section 3
    ScrollTrigger.create({
      trigger: "#section-3",
      start: "-50% top",
      end: "bottom bottom",
      scrub: true,
      toggleActions: "play reverse play reverse", // لتطبيق الحركات العكسية عند التمرير لأعلى

      onEnter: () => {
        gsap.to(modelRef.current?.position, {
          x: scale,
          y: 0,
          // z: -1,
          duration: 2,
          ease: "power1.inOut",
        });
        gsap.to(modelRef.current?.scale, {
          x: scale,
          y: scale,
          z: scale,
          duration: 2,
        });
      },
    });

    // دوران حر في section 4
    ScrollTrigger.create({
      trigger: "#section-4",
      start: "top center",
      end: "bottom center",
      scrub: true,
      toggleActions: "play reverse play reverse",
      onEnter: () => {
        gsap.to(modelRef.current?.position, { x: 0, y: 0, z: 0, duration: 1 }); // إعادة الموديل للوسط
        gsap.to(modelRef.current?.scale, {
          x: scale / 2,
          y: scale / 2,
          z: scale / 2,
          duration: 2,
        });
        gsap.to(modelRef.current?.rotation, {
          y: "+=6", // دوران حر مع التمرير
          duration: 3,
        });
        if (orbitControlsRef.current) {
          orbitControlsRef.current.enabled = true; // تفعيل التحكم بالدوران
        }
      },
      onLeaveBack: () => {
        gsap.to(modelRef.current?.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: "power1.inOut",
        });
        gsap.to(modelRef.current?.scale, {
          x: scale,
          y: scale,
          z: scale,
          duration: 2,
        });
        if (orbitControlsRef.current) {
          orbitControlsRef.current.enabled = false;
        }
      },
    });
  }, [scale]);

  return (
    <>
      <group ref={modelRef} scale={scale}>
        <Model />
      </group>
      <OrbitControls ref={orbitControlsRef} enabled={false} />{" "}
      {/* تمكين/تعطيل التحكم بناءً على القسم */}
    </>
  );
}

export default function My3DModel({ planet }) {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 10]} intensity={1} />
      <Suspense fallback={<Loading />}>
        <AnimatedModel planet={planet} />
      </Suspense>
    </Canvas>
  );
}
