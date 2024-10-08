const PageContantTwo = ({ planet }) => {
  // Function to scroll the page up by 100vh
  const scrollToNextSection = (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للرابط
    window.scrollBy({
      top: window.innerHeight, // التمرير لأسفل بمقدار ارتفاع العرض (100vh)
      behavior: "smooth", // التمرير بسلاسة
    });
  };

  return (
    <div
      id="section-2"
      className="sectoion"
      style={{
        // scrollSnapAlign: "start",

        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        color: "#FCFFFF",
        // scrollSnapAlign: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          padding: "5px 50px",
          height: "100%",
          width: "100%",
          color: "white",
          zIndex: 50,
          gap: "30px",
        }}
      >
        {/* <h6
          style={{
            fontSize: "45px",
            fontWeight: "bold",
          }}
        >
          Hello World From Earth Planet
        </h6> */}
        <p
          style={{
            padding: "10px 0",
            lineHeight: "2",
            fontSize: "17px",
          }}
        >
          <h2>{planet?.data[1]?.dataTitle}</h2>
          <p>{planet?.data[1]?.datadetails}</p>
        </p>
        <a
          href="#"
          onClick={scrollToNextSection} // Call the scroll function to the top when clicked
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          To Next
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default PageContantTwo;
