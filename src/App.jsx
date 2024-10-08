import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import PlanetDetails from "./PlanetDetails";
import NotAvailable from "./NotAvailable";
import Intro from "./Intro";
import "./App.css";
import TransitionPage from "./TransitionPage";
import { AnimatePresence } from "framer-motion";
import PageContantFour from "./PageContantFour";
// import background from "../src/assets/fantasy.jpg";
import transitionBackGround1 from "../src/assets/image/trans/trans1.jpg";
// import transitionBackGround2 from "../src/assets/image/trans/wall3.jpg";
import transitionBackGround3 from "../src/assets/image/trans/trans3.jpg";
import wall1 from "../src/assets/image/wall1.jpg";
import Share from "./Share";

function App() {
  const [showIntro, setShowIntro] = useState(false); // Controls showing or hiding the Intro component
  const [isAppReady, setIsAppReady] = useState(false); // Tracks loading state
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // حالة لتحديد ما إذا كان الفيديو قيد التشغيل
  const location = useLocation();
  const [isScrollIconVisable, setIsScrollIconVisable] = useState(false); // حالة لتحديد ما إذا كان الفيديو قيد التشغيل

  const hideScrollIcon = () => {
    setIsScrollIconVisable(true);
  };

  // change transition backgroud
  const images = [
    transitionBackGround1,
    // transitionBackGround2,
    // transitionBackGround3,
  ];

  const [currentBackground, setCurrentBackground] = useState("");

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useEffect(() => {
    const randomImage = getRandomImage();
    setCurrentBackground(randomImage);
  }, []);

  // دالة لتغيير الخلفية عند الضغط على الزر
  const changeBackground = () => {
    const newRandomImage = getRandomImage();
    setCurrentBackground(newRandomImage);
  };

  const sliderItems = [
    {
      name: "kepler_-_452b",
      data: [
        {
          dataTitle: " Have you ever heard of a planet called Kepler-452b?",
          datadetails:
            "Kepler-452b, known as Earth’s cousin, was discovered on July 23, 2015. It’s a rocky planet about 1,400 light-years away in the Cygnus constellation. What makes it special is its orbit in the habitable zone around a sun-like star, where liquid water might exist, meaning it could support life. Kepler-452b is 60% larger than Earth, five times heavier, and has twice the gravity. It orbits its star at a similar distance to Earth’s orbit from the sun, taking 385 days to complete a year. While it receives 10% more energy, the temperature depends on whether it has an atmosphere like Earth’s.",
        },
        {
          dataTitle: "Discovery and Challenges & Habitable Zone",
          datadetails:
            "Kepler-452b is important because it's located in the habitable zone around a star similar to our sun, potentially holding water—a key ingredient for life. NASA discovered it using the Kepler Space Telescope and the transit method, where a planet passing in front of a star dims its light, revealing details like size and orbit. The challenge in studying Kepler-452b is its distance—1,400 light-years away, making it impossible to reach with current technology. We can’t study it closely, but it might have water. However, if its atmosphere is too thick, like Venus, it could be too hot for life.",
        },
        {
          dataTitle: "Future Research & Conclusion",
          datadetails:
            "Q: What’s next for studying Kepler-452b? Scientists want to learn more about Kepler-452b because it’s very similar to Earth. Future missions, like using the James Webb Space Telescope, might help us study planets like Kepler-452b to see if there are signs of life or to find out what its atmosphere is made of. In the end, Kepler-452b gives us hope that we might find life outside Earth, but we don’t know for sure. Its star is older and bigger than the sun, and one day it might expand so much that it swallows the planet! Exploring space is super exciting, and there are many adventures ahead. But to explore planets like Kepler-452b, we’ll need better technology and a lot of planning. Who knows what we’ll discover next!",
        },
      ],
      description:
        "Kepler-452b: The Mysterious Exoplanet Sparking Curiosity About the Possibility of Life Beyond Earth, With Its Earth-Like Characteristics and Position in the Habitable Zone.",
      path: "/planets/model/kepler_-_452b_planet.glb",
      scale: 1.5,
      fovPercentage: 2.5,
      wallpaper: wall1,
    },
    {
      name: "kepler_22_b",
      description:
        "Kepler-22b: The Fascinating Exoplanet That Captivates Scientists with Its Earth-Like Traits and Location in the Habitable Zone of a Sun-Like Star, Opening New Possibilities for Life Beyond Our Planet",
      data: [
        {
          dataTitle: "Have you ever heard of a planet called Kepler-22b ?",
          datadetails:
            " It’s a super exciting planet that was discovered on December 5, 2011, and it’s located about 620 light-years away from us in a group of stars called Cygnus This planet is a bit special because its in the habitable zone which means it might have conditions that could support life! Kepler-22b is larger than Earth, about 2.4 times bigger, and it orbits a star similar to our sun. Imagine a big, friendly giant! Scientists think that it could have liquid water on its surface, making it a great place for living things to exist. However, we still don’t know if it has a cozy atmosphere like Earth does, or if it’s covered in oceans, mountains, or even alien cities",
        },
        {
          dataTitle: "Discovery, Challenges, and the Habitable Zone",
          datadetails:
            "Kepler-22b is very important to scientists because it gives us hope for finding life in space. Scientists discovered this planet using the Kepler Telescope, which can see the light from distant stars. When Kepler-22b passes in front of its star, it causes a tiny dip in the light, and that’s how scientists know it’s there. This method is called the transit method. wever, studying Kepler-22b is quite challenging! Even though it’s not the farthest planet from us, 620 light-years is still a super long distance! Our current technology doesn’t allow us to travel there or see all the tiny details. It’s like trying to spot a small toy in a huge playground from really far away; we can see it, but we can’t know everything about it.",
        },
        {
          dataTitle: "Future Research & Conclusion",
          datadetails:
            "Scientists are very curious about Kepler-22b and want to learn more about it. They hope to use new telescopes, like the James Webb Telescope, to gather more information about this fascinating planet and search for signs of life or water in its atmosphere! Kepler-22b is a planet that sparks our imagination and excitement about life beyond Earth. While we still have many questions and things to discover, it’s a reminder that our universe is full of amazing possibilities. Who knows what secrets Kepler-22b holds? Maybe one day, we’ll find out that it’s a wonderful place where life thrives, and we might even meet new friends from another world!",
        },
      ],

      path: "/planets/model4k/kepler_22_b.glb",
      scale: 0.003,
      fovPercentage: 1.6,
      wallpaper: transitionBackGround3,
    },
    {
      name: "Proxima_b",
      description:
        "Proxima Centauri b is an exoplanet located in the habitable zone of the red dwarf star Proxima Centauri. It is considered one of the best candidates for potential habitability due to its Earth-like size and distance from its star.",
      data: [
        {
          dataTitle: "introduction & Characteristics",
          datadetails:
            " Have you ever heard of a planet called Proxima Centauri b? It's the closest known planet to our solar system, just a tiny hop away at about 4.24 light-years! This planet was discovered in 2016 and orbits a star called Proxima Centauri, which is a small, cool star that’s part of a group of stars called the Alpha Centauri system.Proxima Centauri b is about the same size as Earth, and it is located in what scientists call the habitable zone. This means it could have liquid water, just like our oceans and rivers! Imagine having fun splashing in water on another planet! The planet takes about 11.2 Earth days to go around its star, so a year there is much shorter than ours. Scientists think the climate could be right for life, but we still don’t know if it has a cozy atmosphere like Earth does.",
        },
        {
          dataTitle: "Discovery, Challenges, and the Habitable Zone",
          datadetails:
            "Proxima Centauri b is super exciting because it might have conditions similar to those on Earth. Scientists discovered this planet using advanced technology that tracks how stars move. When Proxima Centauri b passes in front of its star, it causes the star's light to dim just a little. This method is also called the transit method, and it helps scientists find planets hiding in the vast space. However, studying Proxima Centauri b is not easy! Even though it's the closest planet to us, it’s still really far away, and our current technology can't take us there. We know just a bit about this planet and can't see tiny details, like whether it has water or clouds in the sky. It’s like trying to look at a tiny ant from far away without a magnifying glass!",
        },
        {
          dataTitle: "Future Research & Conclusion",
          datadetails:
            "Scientists are very curious about Proxima Centauri b because it gives us hope for finding life beyond Earth. They are excitedly using the new James Webb Telescope to watch this planet and search for signs of water or even life! Proxima Centauri b is a fascinating planet, but we still have many questions. We don't know for sure if it has water or if it could support life. It’s also possible that one day its star might get bigger and change everything for Proxima Centauri b. Exploring space is like going on an incredible adventure, and we need new technology and clever plans to uncover the secrets of planets like Proxima Centauri b.",
        },
      ],

      path: "/planets/model4k/Proxima_b_1_13776.glb",
      scale: 0.007,
      fovPercentage: 2.5,
      wallpaper: transitionBackGround3,
    },
    {
      name: "kepler-186 b",
      data: [
        {
          dataTitle: "introduction & Characteristics",
          datadetails:
            " Have you ever heard of a planet called Kepler-186f? This planet is really special because it was discovered on April 17, 2014, and it's located about 500 light-years away from us in a group of stars known as Cygnus. What makes Kepler-186f so exciting is that it is the first Earth-sized planet found in the habitable zone of another star! Kepler-186f is almost the same size as Earth, making it a great candidate for supporting life. Imagine a planet where the weather is just right for plants to grow and water to flow! Scientists believe that Kepler-186f could have liquid water on its surface, which is super important for life as we know it. However, we still don’t know if it has an atmosphere like our planet or what its surface looks like..",
        },
        {
          dataTitle: "Discovery, Challenges, and the Habitable Zone",
          datadetails:
            "Proxima Centauri b is super exciting because it might have conditions similar to those on Earth. Scientists discovered this planet using advanced technology that tracks how stars move. When Proxima Centauri b passes in front of its star, it causes the star's light to dim just a little. This method is also called the transit method, and it helps scientists find planets hiding in the vast space. However, studying Proxima Centauri b is not easy! Even though it's the closest planet to us, it’s still really far away, and our current technology can't take us there. We know just a bit about this planet and can't see tiny details, like whether it has water or clouds in the sky. It’s like trying to look at a tiny ant from far away without a magnifying glass!",
        },
        {
          dataTitle: "Future Research & Conclusion",
          datadetails:
            "Kepler-186f is important to scientists because it gives us hope for finding life beyond Earth. The planet was discovered using the Kepler Telescope, which looks for tiny dips in the light from stars. When Kepler-186f passes in front of its star, it causes the star’s light to dim just a little, which is how scientists know there’s a planet there. This method is called the transit method.But studying Kepler-186f is a bit tricky! Even though it’s relatively closer than some other planets, 500 light-years is still a huge distance. Our current technology can’t take us there or show us the tiny details we want to know. It’s like trying to read a book title from across a big room; you can see it’s there, but you can’t read the words.",
        },
      ],

      description:
        "Kepler-186b: The Groundbreaking Exoplanet That Redefines Our Understanding of Earth-Like Worlds, Orbiting a Red Dwarf Star in the Habitable Zone and Offering Exciting Possibilities for Alien Life",
      path: "/planets/model/kepler-186f.glb",
      scale: 3.5,
      fovPercentage: 2.1,
      // texturePath: "https://example.com/path/to/texture.jpg",
      texturePath: "/NewProject.png",
      wallpaper: wall1,
    },
    {
      name: "gliese_581_d",
      data: [
        {
          dataTitle: "introduction & Characteristics",
          datadetails:
            " Have you ever heard of a planet called Gliese 581b? It’s a really interesting planet discovered on April 24, 2007, and it’s located about 20.3 light-years away from us in the constellation called Libra. What makes Gliese 581b special is that it’s one of the first planets found in the habitable zone of another star system! Gliese 581b is a bit larger than Earth, about 1.5 times its size. Imagine a planet that is slightly bigger than our home! Scientists think it’s a rocky planet, which means it might have a solid surface like Earth. However, it orbits a star that is much cooler than our sun, so the temperatures on Gliese 581b might be quite different. We’re not sure if it has liquid water or an atmosphere, but it could have conditions that make it interesting for life!.",
        },
        {
          dataTitle: "Discovery, Challenges, and the Habitable Zone",
          datadetails:
            "Gliese 581b is important for scientists because it could help us understand more about planets that might support life. Scientists discovered this planet using a method called radial velocity, which means they observed how the planet's gravity affects its star. When the planet moves, it pulls on the star, causing it to wobble a little. By watching this wobble, scientists can tell that there is a planet nearby! However, studying Gliese 581b is quite challenging! Even though it’s relatively close in cosmic terms, 20.3 light-years is still a very long distance. Our current technology can’t take us there, and we don’t know much about its details. It’s like trying to guess what’s inside a box without opening it; we can see it from far away, but we can’t know for sure what’s inside!",
        },
        {
          dataTitle: "Future Research & Conclusion",
          datadetails:
            "Scientists are very excited to learn more about Gliese 581b because it might have conditions suitable for life. They hope to use new telescopes, like the James Webb Telescope, to study this fascinating planet further and search for signs of water or any indications that life could exist there! Gliese 581b represents a thrilling possibility for discovering new worlds beyond our own. Although we still have many questions and things to explore, it reminds us that the universe is full of surprises. Who knows what amazing secrets Gliese 581b holds? Maybe one day, we’ll find out it’s a fantastic place where life might thrive, and we could even make new friends among the stars!.",
        },
      ],

      description:
        "Gliese 581d: The Intriguing Exoplanet That Raises Excitement Among Scientists for Its Potential Habitability, Located in the Habitable Zone of a Red Dwarf Star and Featuring Earth-Like Conditions for Life",
      path: "/planets/model4k/gliese_581_d.glb",
      scale: 0.003,
      fovPercentage: 2.2,
      wallpaper: transitionBackGround3,
    },
    {
      name: "hd_85512_b",
      data: [
        {
          dataTitle: "introduction & Characteristics",
          datadetails:
            " Have you ever heard of a planet called HD 85512b? This planet is quite fascinating and was discovered on September 30, 2011. It’s located about 36 light-years away from us in a star system known as Vulpecula. What makes HD 85512b really special is that it’s one of the many exoplanets that scientists believe could possibly support life! HD 85512b is a bit larger than Earth, with a size about 1.4 times that of our planet. Imagine a world that’s a little bigger than the one we live on! Scientists think it could be a rocky planet, which means it might have solid land like mountains and valleys. The exciting part is that HD 85512b lies within its star’s habitable zone, where conditions might be just right for liquid water to exist. This is super important because water is essential for life as we know it!",
        },
        {
          dataTitle: "Discovery, Challenges, and the Habitable Zone",
          datadetails:
            "HD 85512b is important to scientists because it provides clues about where we might find life beyond Earth. Scientists discovered this planet using the radial velocity method, where they measured the tiny wobbles of its star caused by the planet’s gravity. When HD 85512b orbits its star, it pulls on the star slightly, making it move. By observing these movements, scientists can tell that there’s a planet nearby! However, studying HD 85512b has its challenges! Even though it’s relatively close in astronomical terms, 36 light-years is still a long distance. Our current technology can’t take us there, and we don’t know a lot about what’s on the planet. It’s like seeing a distant island from the beach; you can see it, but you can’t explore it!",
        },
        {
          dataTitle: "Future Research & Conclusion",
          datadetails:
            "Scientists are very eager to learn more about HD 85512b because it may hold clues about the possibility of life elsewhere in the universe. They plan to use powerful telescopes, like the James Webb Telescope, to investigate this intriguing planet and search for signs of water or an atmosphere that might support life! HD 85512b represents a thrilling opportunity for discovering new worlds. Even though we have many questions and much to learn, it reminds us that the universe is vast and full of possibilities. Who knows what amazing secrets HD 85512b might reveal? Maybe one day, we’ll discover that it’s a wonderful place where life can thrive, and we might even find new friends among the stars!",
        },
      ],

      description:
        "HD 85512b: The Enigmatic Exoplanet That Captivates Astronomers with Its Earth-Like Qualities, Positioned in the Habitable Zone of a Sun-Like Star, Sparking Hopes for Discovering Life Beyond Our Solar System",
      path: "/planets/model/hd_85512_b.glb",
      scale: 0.003,
      fovPercentage: 2.1,
      wallpaper: wall1,
    },
  ];

  // useEffect(() => {
  //   if (isVideoPlaying) {
  //     const timerd = setTimeout(() => {
  //       setShowIntro(true);
  //     }, 16000); // ظهور الرسالة بعد 10 ثواني من بدء الفيديو (تعديل حسب طول الفيديو)

  //     return () => clearTimeout(timerd);
  //   }
  // }, [setShowIntro, isVideoPlaying]);
  return (
    <>
      {!showIntro ? (
        <Intro
          setShowIntro={setShowIntro}
          isVideoPlaying={isVideoPlaying}
          setIsVideoPlaying={setIsVideoPlaying}
        />
      ) : (
        <div
          className="Home"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // minHeight: "100vh",
            width: "100%",
            backgroundColor: "#000 !mportant",
            boxShadow: "inset 0px 0px 100px 50px rgba(0, 0, 0, 0.8)",
            overflow: "hidden",
            background: "#000000",
            backgroundImage: `url(${currentBackground})`,
            backgroundSize: "100vw 100vh",
            backgroundPosition: "center ",
            backgroundRepeat: "no-repeat",
            // zIndex: 99999999999,
          }}
        >
          <Header />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/share"
                element={
                  <TransitionPage>
                    <Share />
                  </TransitionPage>
                }
              />
              <Route
                path="/"
                element={
                  <TransitionPage>
                    <HomePage
                      sliderItems={sliderItems}
                      changeBackground={changeBackground}
                      isScrollIconVisable={isScrollIconVisable}
                      hideScrollIcon={hideScrollIcon}
                    />
                  </TransitionPage>
                }
              />
              <Route
                path="/details"
                element={
                  <TransitionPage>
                    <PlanetDetails />
                  </TransitionPage>
                }
              />
              <Route
                path="/about"
                element={
                  <TransitionPage>
                    <AboutPage />
                  </TransitionPage>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      )}
      {/* <NotAvailable /> */}
    </>
  );
}

export default App;
