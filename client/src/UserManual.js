export default function UserManual(props) {
  let data = props.data;
  let topic = props.topic;
  let printplateImagePath;
  let printvehicleImagePath;

  let cameraId = data.cameraId;
  let confidenceLevel = data.confidenceLevel;
  let createdAt = data.createdAt;
  let imageId = data.imageId;
  let location = data.location;
  let plateImagePath = data.plateImagePath;
  let plateNum = data.plateNum;
  let processTime = data.processTime;
  let vehicleImagePath = data.vehicleImagePath;
  let vehicle_id = data.vehicle_id;
  let xmax = data.xmax;
  let xmin = data.xmin;
  let ymax = data.ymax;
  let ymin = data.ymin;

  if (data !== "null") {
    printplateImagePath = "file:///mnt/anpr/" + plateImagePath;
    printvehicleImagePath = "file:///mnt/anpr/" + plateImagePath;
  }

  return (
    <div className="App">
      <h1>User Manual</h1>
      <div>
        <h1>{topic}</h1>
        <table className="table table-dark">
          <tbody>
            <tr>
              <th>Message</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>data</td>
              <td>{JSON.stringify(data)}</td>
            </tr>
            <tr>
              <td>cameraId</td>
              <td>{cameraId}</td>
            </tr>
            <tr>
              <td>confidenceLevel</td>
              <td>{confidenceLevel}</td>
            </tr>
            <tr>
              <td>createdAt</td>
              <td>{createdAt}</td>
            </tr>
            <tr>
              <td>imageId</td>
              <td>{imageId}</td>
            </tr>
            <tr>
              <td>location</td>
              <td>{location}</td>
            </tr>
            <tr>
              <td>plateImagePath</td>
              <td>{plateImagePath}</td>
            </tr>
            <tr>
              <td>printplateImagePath</td>
              <td>{printplateImagePath}</td>
            </tr>
            <tr>
              <td>plateNum</td>
              <td>{plateNum}</td>
            </tr>
            <tr>
              <td>processTime</td>
              <td>{processTime}</td>
            </tr>
            <tr>
              <td>vehicleImagePath</td>
              <td>{vehicleImagePath}</td>
            </tr>
            <tr>
              <td>printvehicleImagePath</td>
              <td>{printvehicleImagePath}</td>
            </tr>
            <tr>
              <td>vehicle_id</td>
              <td>{vehicle_id}</td>
            </tr>
            <tr>
              <td>xmax</td>
              <td>{xmax}</td>
            </tr>
            <tr>
              <td>xmin</td>
              <td>{xmin}</td>
            </tr>
            <tr>
              <td>ymax</td>
              <td>{ymax}</td>
            </tr>
            <tr>
              <td>ymin</td>
              <td>{ymin}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
