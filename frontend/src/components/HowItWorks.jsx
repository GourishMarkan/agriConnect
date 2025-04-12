import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  const styles = {
    section: {
      padding: "40px 20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      gap: "40px",
      width: "100%",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "700",
      textTransform: "uppercase",
      color: "#111",
      textAlign: "center",
    },
    cardsContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      gap: "20px",
      flexWrap: "wrap",
    },
    card: {
      padding: "25px",
      backgroundColor: "#50a83d",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      borderRadius: "12px",
      width: "300px",
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      color: "#fff", // White text
    },
    iconContainer: {
      margin: "0 auto",
    },
    icon: {
      fontSize: "40px",
      color: "#fff", // White icons
    },
    text: {
      fontSize: "20px",
      fontWeight: "600",
      margin: "0",
      color: "#fff", // White text
    },
    description: {
      fontSize: "15px",
      color: "#fff", // White text
      margin: "0",
      textAlign: "justify",
    },
  };

  return (
    <section style={styles.section}>
      <h3 style={styles.heading}>How does it work?</h3>
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <div style={styles.iconContainer}>
            <LuUserPlus style={styles.icon} />
          </div>
          <h4 style={styles.text}>Create An Account</h4>
          <p style={styles.description}>
            Sign up for a free account as a Farmer or Arthiyas. Set up your
            profile in minutes to start selling or buying the crops directly
            from the farmers.
          </p>
        </div>
        <div style={styles.card}>
          <div style={styles.iconContainer}>
            <VscTasklist style={styles.icon} />
          </div>
          <h4 style={styles.text}>Buy or Sell Crops</h4>
          <p style={styles.description}>
            Farmers can post detailed crops descriptions, and Arthiyas can
            browse a comprehensive list of available crops. Utilize filters to
            find crops that match your preferences.
          </p>
        </div>
        <div style={styles.card}>
          <div style={styles.iconContainer}>
            <BiSolidLike style={styles.icon} />
          </div>
          <h4 style={styles.text}>Weather Forcast</h4>
          <p style={styles.description}>
          Weather forecasting helps farmers plan better by predicting rain, storms, and temperature, reducing crop loss and improving yield.
          It also helps them use water and other resources more efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
