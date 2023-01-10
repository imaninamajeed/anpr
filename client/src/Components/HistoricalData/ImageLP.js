const REACT_APP_BACKEND_FILE_SERVER = process.env.REACT_APP_BACKEND_FILE_SERVER || "http://127.0.0.1:4567/";
console.log("REACT_APP_BACKEND_FILE_SERVER", REACT_APP_BACKEND_FILE_SERVER)

export default function ImageLP(props) {
  const path = props.path;

  return (
    <img
      src={REACT_APP_BACKEND_FILE_SERVER + "file?partdirectory=" + path}
      className="img-fluid"
      width="128"
      title={path}
    ></img>
  );
}
