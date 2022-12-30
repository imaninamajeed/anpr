export default function ImageLP(props) {
  const path = props.path;

  return (
    <img
      src={"http://127.0.0.1:4567/file?partdirectory=" + path}
      className="img-fluid"
      width="128"
      title={path}
    ></img>
  );
}
