import React from "react";



const Footer = ({ isDark, setIsDark }) => {

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <footer className="footer" style={
      {
        backgroundColor: isDark ? 'black' : 'lightgray'
      }
    }>
    <button className="button" onClick={toggleTheme}>Dark mode</button>
    </footer>
  )
}

export default Footer;