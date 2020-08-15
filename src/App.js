import React from "react";
import "./App.css";
import ip from "ip";

function App() {
  console.log(ip.address());
  console.log(ip.isPrivate("201.255.93.245")); // true
  ip.isV4Format("127.0.0.1"); // true
  ip.isV6Format("::ffff:127.0.0.1"); // true

  return (
    <>
      <h1>Ip location app</h1>
    </>
  );
}

export default App;
