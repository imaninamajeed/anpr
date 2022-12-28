//CSS libraries
// import "../Assets/CSS/LiveResult.css";

//Components
import ImageLP from "../Components/HistoricalData/ImageLP";
import ImageRTSP from "../Components/HistoricalData/ImageRTSP";

export default function LiveResult(props) {
  let data = props.data;
  let vehicleImagePath = data.vehicleImagePath;
  let plateImagePath = data.plateImagePath;
  let plateNum = data.plateNum;
  let confidenceLevel = data.confidenceLevel;
  let createdAt = data.createdAt;

  return (
    <div className="App">
      <h1>Historical Data</h1>
      <ImageRTSP path={vehicleImagePath}></ImageRTSP>
      <ImageLP
        path={plateImagePath}
        plate={plateNum}
        confidenceLevel={confidenceLevel}
        timeStamp={createdAt}
      ></ImageLP>
    </div>
  );
}
