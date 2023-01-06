const REACT_APP_BACKEND_FILE_SERVER = process.env.REACT_APP_BACKEND_FILE_SERVER || "http://127.0.0.1:4567/";
console.log("REACT_APP_BACKEND_FILE_SERVER", REACT_APP_BACKEND_FILE_SERVER)

export default function ImageLP(props) {
  const path = props.path;
  const plate = props.plate;

  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-body-lp">
        <div className="row pb-3">
          <div className="col-md-2">
            <h5 className="card-title">Captured Number Plate</h5>
          </div>
          <div className="col-md-3">
            <img
              src={REACT_APP_BACKEND_FILE_SERVER + "file?partdirectory=" + path}
              className="img-fluid"
              alt="Captured Number Plate"
              width="128"
              title={path}
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <h5 className="card-title justify-content: center;">
              Detected Number Plate
            </h5>
          </div>

          <div className="col-md-2">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control licenseplate"
                  value={plate}
                  disabled
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
