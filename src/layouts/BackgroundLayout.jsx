import React, { useEffect, useState } from "react";

export default function BackgroundLayout({ children }) {
  const [scrollBlur, setScrollBlur] = useState(6);

  useEffect(() => {
    const handleScroll = () => {
      const blur = Math.min(window.scrollY / 120,6);
      setScrollBlur(blur);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background Image */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url(${require("../images/mepfp.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: `blur(${scrollBlur}px)`,
          transform: "scale(1.12)",
          transition: "filter 0.15s ease-out",
          zIndex: -2,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(10, 10, 20, 0.2)",
          zIndex: -1,
        }}
      />

      {/* Page Content */}
      {children}
    </div>
  );
}
