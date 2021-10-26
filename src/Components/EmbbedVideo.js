import ReactPlayer from "react-player";
import CSS from "./CSS-Files/TraxsLog.css"
function YoutubeVideo() {
  return (
    <div className="videos">
      <h3></h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=fZ2cz8xBM1E"  />
      <hr />
      <ReactPlayer url="https://www.youtube.com/watch?v=3YvfRx31xDE" />
      <hr />
      <ReactPlayer url="https://www.youtube.com/watch?v=Z88Rl5bpnmI" />
      <hr />
      <ReactPlayer url="https://www.youtube.com/watch?v=lDVEglSUxPg" />

      <hr />
    </div>
  );
}

export default YoutubeVideo;
