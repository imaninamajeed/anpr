import "./LiveResult.css";
export default function ImageRTSP(props) {
  const path = props.path;

  return (
    <div className="LiveResult">
      <h1>Live Result</h1>
      <div className="card text-white bg-dark mb-3">
        <div className="card-body">
          <h5>RTSP Streaming</h5>
          <img
            src={"http://127.0.0.1:4567/file?partdirectory=" + path}
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
