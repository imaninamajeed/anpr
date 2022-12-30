export default function ImageRTSP(props) {
  const path = props.path;

  return (
    <img
      src={"http://127.0.0.1:4567/file?partdirectory=" + path}
      width="576"
      height="324"
      title={path}
    />
  );
}
