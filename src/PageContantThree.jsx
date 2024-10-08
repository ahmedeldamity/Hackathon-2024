const PageContantThree = ({planet}) => {
  // Function to scroll the page up by 100vh
  const scrollToTop = (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للرابط
    window.scrollBy({
      top: window.innerHeight, // التمرير لأسفل بمقدار ارتفاع العرض (100vh)
      behavior: "smooth", // التمرير بسلاسة
    });
  };

  return (
    <div
      id="section-3"
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        color: "#FCFFFF",
        padding: "20px",
        // scrollSnapAlign: "start"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          width: "50%",
          padding: "5px 50px",
          color: "white",
          zIndex: 999999999,
        }}
      >
        <p
          style={{
            fontSize: "20px",
            padding: "15px 0",
            lineHeight: "1.5",
          }}
        >
          <h2>{planet?.data[2]?.dataTitle}</h2>
          <p>{planet?.data[2]?.datadetails}</p>
        </p>
        <a
          href="#"
          onClick={scrollToTop} // Call the scroll function to the top when clicked
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          To free mode
        </a>
      </div>
    </div>
  );
};

export default PageContantThree;
