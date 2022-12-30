//Components
import ImageLP from "../Components/HistoricalData/ImageLP";
import ImageRTSP from "../Components/HistoricalData/ImageRTSP";

let mqttGlobalClientData = [];
export default function LiveResult(props) {
  let data = props.data;

  if (mqttGlobalClientData[0] === "null") {
    mqttGlobalClientData[0] = data;
  } else {
    mqttGlobalClientData.push(data);
  }

  return (
    <div className="App">
      <h1>Historical Data</h1>
      <table className="table table-hover table-secondary">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Timestamp</th>
            <th scope="col">Captured Vehicle</th>
            <th scope="col">Captured Number Plate</th>
            <th scope="col">Detected Plate Number</th>
            <th scope="col">Confidence Level (%)</th>
          </tr>
        </thead>
        <tbody>
          {mqttGlobalClientData.map((mqttData) => (
            <tr>
              <th scope="row" key={mqttData}>
                {mqttData.createdAt}
              </th>
              <td>
                <ImageRTSP path={mqttData.vehicleImagePath}></ImageRTSP>
              </td>
              <td>
                <ImageLP path={mqttData.plateImagePath}></ImageLP>
              </td>
              <td>{mqttData.plateNum}</td>
              <td>{mqttData.confidenceLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
