import React from "react";







function App() {

  setInterval(updateTime, 1000);

   
  const now = new Date().toLocaleTimeString("en-GB");

const [time, setTime] = React.useState(now);


function updateTime() {

  const newTime = new Date().toLocaleTimeString("en-GB");

 setTime(newTime);
}


  return (
    <div className="container">
      <h1>{time}</h1>

      <button onClick = {updateTime}>Get Time</button>
    </div>
  );
}

export default App;
