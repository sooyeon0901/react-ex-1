import React from "react";

const Content = ({ isDark }) => {
  return (
    <div className="content" style={
      {
        backgroundColor: isDark ? 'black' : 'lightgray',
        color : isDark ? 'white' : 'black'
      }
    }>
    <h1>쪼은 하루!!</h1>
    </div>
  )
}

export default Content;