import React from "react";

export default function Footer() {
  const styles = {
    footer: {
      marginTop: "6rem",
      padding: "2.5rem 1.5rem",
      borderTop: "1px solid rgba(255, 255, 255, 0.12)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    copy: {
      fontSize: "0.75rem",
      color: "rgba(255, 255, 255, 0.45)",
      letterSpacing: "0.04em",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.copy}>
        © {new Date().getFullYear()} Shivani Kshirsagar. All rights reserved.
      </div>
    </footer>
  );
}
