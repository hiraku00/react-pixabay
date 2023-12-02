import "./ImageGallery.css";

interface ImageData {
  id: string;
  largeImageURL: string;
  pageURL: string;
}

interface ImageGalleryProps {
  fetchData: ImageData[] | null;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ fetchData }) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchData?.map((data) => (
          <div className="image" key={data.id}>
            <a href={data.pageURL} target="_blank">
              <img src={data.largeImageURL} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
