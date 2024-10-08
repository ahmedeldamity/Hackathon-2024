import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import AddShareModal from "./AddShareModal";

const Share = () => {
  const [team, setTeam] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setModal(true);
    // console.log(modal);
  };

  const fetchData = () => {
    setLoading(true);
    fetch(
      "https://nasaspaceapps.azurewebsites.net/api/Contribution/contributions"
    )
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.log(err));
    setLoading(false);
  };

  console.log("share", team);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        // fontSize: "2rem",
        marginTop: "70px",
      }}
    >
      <button
        onClick={() => openModal()}
        style={{
          padding: "8px 20px",
          border: "none",
          borderRadius: "25px",
          backgroundColor: "#A99797",
          fontSize: "1.5rem",
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        {modal ? "close x" : "Add +"}
      </button>

      <div
        style={{
          display: "flex",
          //   gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          flexWrap: "wrap",
          // width: "100%",
          marginTop: "30px",
          padding: "20px",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        className="shares-wraper"
      >
        {team?.map((teamMember, index) => {
          return (
            <div
              style={{
                // position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "300px",
                // height: "300px",
                margin: "10px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                backgroundColor: "white",
                color: "black",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              key={index}
            >
              <img
                src={teamMember?.imageUrl}
                alt={teamMember?.name}
                style={{
                  display: "flex",
                  //   flexDirection: "column",
                  //   justifyContent: "flex-start",
                  //   alignItems: "flex-start",
                  //   textAlign: "start",
                  width: "100%",
                  height: "250px",
                }}
                // className="card-img"
              />
              <div
                style={{
                  display: "flex",
                  //   position: "absolute",
                  bottom: "0%",
                  width: "100%",
                  height: "100%",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "5px ",
                  justifyContent: "center",
                  gap: "10px",
                  color: "black",
                }}
              >
                <h1
                  style={{
                    justifySelf: "center",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {teamMember?.name}
                </h1>
                <p> favorite Planet: {teamMember?.favoritePlanet}</p>
                <p> score : {teamMember?.score}</p>
                {/* <a
                  href={teamMember.linkedInUrl}
                  target="_blank"
                  className="link-a"
                >
                  LinkedIn
                </a> */}
              </div>
            </div>
          );
        })}
      </div>

      {modal && <AddShareModal fetchData={fetchData} setModal={setModal} />}
    </div>
  );
};

export default Share;
