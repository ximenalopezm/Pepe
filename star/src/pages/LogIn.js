import "../styles/LogIn.css";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      navigate("/view", { state: { file } });
    }
  };

  const handleButtonFileClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
      Result Skip Results Iframe EDIT ON
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="content">
        <div className="login-form">
          <img className="logoLogin" src={logo} alt="logo" />
          <div className="text">
            <p>
              Let's get working! select a file and STAR will give you
              suggestions
            </p>
          </div>
          <div id="uploader" className="uploader">
            <input
              type="file"
              id="fileInput"
              onChange={handleFileSelect}
              accept=".pdf"
              style={{ display: "none" }}
            />
            <button
              className="btn btn-primary btn-block btn-lg"
              onClick={handleButtonFileClick}
            >
              <span>
                <b>Upload file</b>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
