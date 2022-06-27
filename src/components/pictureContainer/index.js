export const PictureContainer = ({ author, url }) => {
    return (
      <div className="picWrapper">
        <h2>{author}</h2>
        <img className="pictureContainer" src={url} alt="random" />
        <button className="likePillButton">Like</button>
        <button className="tweetPillButton">Tweet</button>
        <button className="test1PillButton">Test1</button>
        <button className="test2PillButton">Test2</button>
      </div>
    );
  };