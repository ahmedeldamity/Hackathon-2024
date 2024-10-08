import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

const AboutPage = () => {
  // Could be GET or POST/PUT/PATCH/DELETE
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("https://nasaspaceapps.azurewebsites.net/api/Account/team-members")
      .then((res) => res.json())
      .then((data) => setTeam(data.value))
      .catch((err) => console.log(err));
  }, []);
  // console.log("team",team)
  /* { status: 'ok', method: 'GET' } */
  return (
    <div
      className="about-page"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundImage:
          "url(https://web.whatsapp.com/2d4b24ba-fa60-4d64-a3ef-b62367b68e38)",
      }}
    >
      <div
        className="about-page-team-section"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "10px",
          // width: "100%",
          marginTop: "70px",
          padding: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {team.map((teamMember, index) => {
          return (
            <div key={index} className="card">
              <img
                src={teamMember?.pictureUrl}
                alt={teamMember?.name}
                className="card-img"
              />
              <div className="overlay">
                <h1 className="text-h1">{teamMember?.name}</h1>
                <p className="text-p">{teamMember?.position}</p>
                {teamMember.linkedInUrl && (
                  <a
                    href={teamMember?.linkedInUrl}
                    target="_blank"
                    className="link-a"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Media Query for screens less than 700px */}
    </div>
  );
};

export default AboutPage;
