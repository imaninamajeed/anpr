import ImageRTSP from "./ImageRTSP";
import ImageLP from "./ImageLP";
export default function LiveResult(props) {
  let data = props.data;
  let vehicleImagePath = data.vehicleImagePath;
  let plateImagePath = data.plateImagePath;
  let plateNum = data.plateNum;

  return (
    <div className="App">
      <ImageRTSP path={vehicleImagePath}></ImageRTSP>
      <ImageLP path={plateImagePath} plate={plateNum}></ImageLP>
    </div>
  );
}
