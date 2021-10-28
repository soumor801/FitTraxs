import ReactPlayer from "react-player";
import CSS from "./CSS-Files/TraxsLog.css";
function YoutubeVideo() {
  return (
    <div className="videos">
      <h3>Build a bigger chest!</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=fZ2cz8xBM1E" />
      <hr />
      <h3>How increase your pull ups: From 0 to 10 pull ups!</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=3YvfRx31xDE" />
      <hr />
      <h3>How to unlock you push up strength!</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=Z88Rl5bpnmI" />
      <hr />
      <h3>Bigger arms in just 30 days !</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=lDVEglSUxPg" />
      <hr />
    </div>
  );
}

export default YoutubeVideo;
