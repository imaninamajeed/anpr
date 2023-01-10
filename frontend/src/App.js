//Node Package Manager (NPM) libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import mqtt from "mqtt/dist/mqtt";

//Components
import Navigation from "./Layouts/Navigation";
import LiveResult from "./Pages/LiveResult";
import HistoricalData from "./Pages/HistoricalData";
import UserManual from "./Pages/UserManual";
import NotFound from "./Pages/NotFound";

//CSS libraries
import "./Assets/CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // frontend toolkit, install bootstrap before use @terminal: 'npm i bootstrap@5.2.2'
import "@fontsource/poppins";

const REACT_APP_MQTT_SERVER = process.env.REACT_APP_MQTT_SERVER || "ws://172.17.0.216:8080/";
const REACT_APP_MQTT_DATA_TOPIC = process.env.REACT_APP_MQTT_DATA_TOPIC || "offloader/COM143/01/data";
console.log("REACT_APP_MQTT_SERVER", REACT_APP_MQTT_SERVER)
console.log("REACT_APP_MQTT_DATA_TOPIC", REACT_APP_MQTT_DATA_TOPIC)

//connect client:MQTT
const client = mqtt.connect(REACT_APP_MQTT_SERVER);

console.log("Client connected!");
export default function App() {
  const [offloader, setOffloader] = useState("null");
  const [topic, setTopic] = useState("null");
  let msgJSON;
  //fetch data using useEffect
  useEffect(() => {
    client.subscribe(REACT_APP_MQTT_DATA_TOPIC);

    console.log("REACT_APP_MQTT_DATA_TOPIC", REACT_APP_MQTT_DATA_TOPIC);
    client.on("message", function (topic, message) {
      // console.log("Receive message!");
      // console.log("message", message);
      if (topic === REACT_APP_MQTT_DATA_TOPIC) {
        msgJSON = JSON.parse(message);
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
        />{" "}
        <Route
          path="/HistoricalData"
          element={<HistoricalData data={offloader} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
