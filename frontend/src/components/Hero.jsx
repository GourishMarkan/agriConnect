import React from "react";

const Hero = () => {
  const heroStyles = {
    section: {
      minHeight: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      maxWidth: "1700px",
      gap: "12px",
      margin: "auto",
      padding: "20px",
      textAlign: "center",
      boxSizing: "border-box",
    },
    h1: {
      fontSize: "4rem",
      textTransform: "uppercase",
      fontWeight: "bold",
      marginLeft: "10px",
      marginRight: "10px",
      color: "#111",
    },
    h4: {
      fontSize: "1.8rem",
      fontWeight: "500",
      color: "#6c757d",
      marginLeft: "10px",
      marginRight: "10px",
    },
    infoDiv: {
      margin: "0 auto",
      maxWidth: "900px",
      textAlign: "justify", // Changed to justify
      backgroundColor: "#50a83d",
      color: "#fff", // Changed to white
      padding: "20px 30px",
      borderRadius: "25px",
      fontWeight: "500",
      transition: "transform 0.3s ease-in-out",
    },
    infoDivHover: {
      transform: "translateY(-10px)",
    },
  };

  return (
    <section style={heroStyles.section}>
      <h1 style={heroStyles.h1}>NO FARMER NO FOOD</h1>
      <h4 style={heroStyles.h4}>
        Connecting Skill's with opportunity Across the Nation for Every Skill Level
      </h4>
      <div
        style={heroStyles.infoDiv}
        onMouseOver={(e) => {
          e.target.style.transform = heroStyles.infoDivHover.transform;
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "";
        }}
      >
        AgriConnect bridges the gap between farmers and the latest agricultural
        advancements. We provide a comprehensive platform for accessing vital
        information, connecting with experts, and finding resources to optimize
        yields and enhance sustainability. From real-time market data and
        weather forecasts to expert advice on crop management and innovative
        farming techniques, AgriConnect empowers farmers to make informed
        decisions and thrive in today's dynamic agricultural landscape.
      </div>
    </section>
  );
};

export default Hero;
