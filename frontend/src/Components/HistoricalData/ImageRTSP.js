const REACT_APP_BACKEND_FILE_SERVER = process.env.REACT_APP_BACKEND_FILE_SERVER || "http://127.0.0.1:4567/";
console.log("REACT_APP_BACKEND_FILE_SERVER", REACT_APP_BACKEND_FILE_SERVER)

export default function ImageRTSP(props) {
  const path = props.path;

  return (
    <img
      src={REACT_APP_BACKEND_FILE_SERVER + "file?partdirectory=" + path}
      width="576"
      height="324"
      title={path}
    />
  );
}
