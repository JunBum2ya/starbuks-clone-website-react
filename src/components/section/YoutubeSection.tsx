import YouTube from "react-youtube";
import floating1 from "../../images/floating1.png";
import floating2 from "../../images/floating2.png";
import { Autoplay } from "swiper/modules";

const YoutbueSection = () => {
  return (
    <section className="youtube">
      <div className="youtube__area">
        <YoutubeIFrame videoId="An6LvWQuj_8" classList={["player"]}/>
      </div>
      <div className="youtube__cover">
        <div className="inner">
          <img className="floating floating1" src={floating1} alt="Icon"/>
          <img className="floating floating2" src={floating2} alt="Icon"/>
        </div>
      </div>
    </section>
  );
};

const YoutubeIFrame = (props: YoutubeIFrameProps) => {

  const handleReady = (event: any) => {
    event.target.playVideo();
    event.target.mute();
  } 

  return (
    <YouTube className={props.classList?.join(" ")??""} videoId={props.videoId} onReady={ handleReady } opts={{
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 1, // true 대신에 1을 사용
        loop: 1, // true 대신에 1을 사용
        rel: 0, // false 대신에 0을 사용
        modestbranding: 1, // true 대신에 1을 사용
        playlist: props.videoId,
      },
    }}></YouTube>
  );
};

interface YoutubeIFrameProps {
  videoId: string,
  classList?: string[]
}

export default YoutbueSection;

