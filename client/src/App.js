//JavaScript libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import mqtt from "mqtt/dist/mqtt";

//Components
import Navigation from "./Navigation";
import LiveResult from "./LiveResult";
import UserManual from "./UserManual";
import NotFound from "./NotFound";

//CSS libraries
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // frontend toolkit, install bootstrap before use @terminal: 'npm i bootstrap@5.2.2'
import "@fontsource/poppins";

//connect client:MQTT
const client = mqtt.connect("ws://172.17.0.216:8080/");

export default function App() {
  const [offloader, setOffloader] = useState("null");
  const [topic, setTopic] = useState("null");
  let msg, msgJSON;
  //fetch data using useEffect
  useEffect(() => {
    client.subscribe("offloader/COM143/01/data");
    client.on("message", function (topic, message) {
      if (topic === "offloader/COM143/01/data") {
        setOffloader(message);
        msg = message.toString();
        msgJSON = JSON.parse(msg);
        setOffloader(msgJSON);
        setTopic(topic);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<LiveResult data={offloader} />} />
        <Route
          path="/UserManual"
          element={<UserManual data={offloader} topic={topic} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
