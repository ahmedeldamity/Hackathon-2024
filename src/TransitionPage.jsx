import { motion } from "framer-motion";
// import background from "../src/assets/fantasy.jpg";

const TransitionPage = ({ children }) => {
  return (
    <motion.div
      className="slide-in"
      initial={{ opacity: 0 }} // يبدأ العنصر مخفيًا
      animate={{
        opacity: 1,
        transition: { duration: 0.5, ease: "circOut" },
      }} // يظهر تدريجيًا
      exit={{
        opacity: 0,
      transition: { duration: 0.5, ease: "circIn" },
      }} // يختفي تدريجيًا
      // style={{
      //   // backgroundImage: `url(${background})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center ",
      //   minHeight: "100vh", // تأكد من تغطية الصفحة بالكامل
      //   width: "100%",
      //   position: "relative", // ضمان أن العنصر مرئي بشكل صحيح
      // }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionPage;
