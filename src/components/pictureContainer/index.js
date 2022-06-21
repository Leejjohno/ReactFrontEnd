export const PictureContainer = ({ author, url }) => {
    return (
      <div>
        <h2>{author}</h2>
        <img className="pictureContainer" src={url} alt="random" />
      </div>
    );
  };