import { FormEvent, useRef, useState } from "react";
import "./App.css";
import ImageGallery from "./ImageGallery";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ref.current?.value);

    // API URL
    const endpointURL = `https://pixabay.com/api/?key=${
      import.meta.env.VITE_PIXABAY_API_KEY
    }&q=${ref.current?.value}}&image_type=photo`;
    // APIを叩く(データフェッチング)
    try {
      const res = await fetch(endpointURL);
      const data = await res.json();
      console.log(data.hits);
      setFetchData(data.hits);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  return (
    <>
      <div className="container">
        <h2>My Pixabay</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="画像を探す" ref={ref} />
        </form>
        <ImageGallery fetchData={fetchData} />
      </div>
    </>
  );
}

export default App;
