//CSS libraries
import "../Assets/CSS/LiveResult.css";

//Components
import ImageRTSP from "../Components/LiveResult/ImageRTSP";
import ImageLP from "../Components/LiveResult/ImageLP";

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
