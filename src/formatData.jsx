import { useState, useEffect } from "react";
import getData from "./data.js";

function App() {
  const [url, changeUrl] = useState(null);
  const [title, changeTitle] = useState("");
  const [discription, changeDiscription] = useState("waiting for data");
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        changeUrl(data["url"]);
        changeTitle(data["title"]);
        changeDiscription(data.explanation);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <img src={url} />
      <p>{discription}</p>
    </>
  );
}

export default App;
