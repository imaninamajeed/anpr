const REACT_APP_BACKEND_FILE_SERVER = process.env.REACT_APP_BACKEND_FILE_SERVER || "http://127.0.0.1:4567/";
console.log("REACT_APP_BACKEND_FILE_SERVER", REACT_APP_BACKEND_FILE_SERVER)

export default function ImageRTSP(props) {
  const path = props.path;

  return (
    <div>
      <h1>Live Result</h1>
      <div className="card text-white bg-dark mb-3">
        <div className="card-body">
          <h5>RTSP Streaming</h5>
          <img
            src={REACT_APP_BACKEND_FILE_SERVER + "file?partdirectory=" + path}
            alt="RTSP Streaming"
            width="1152"
            height="648"
            title={path}
          />
        </div>
      </div>
    </div>
  );
}
