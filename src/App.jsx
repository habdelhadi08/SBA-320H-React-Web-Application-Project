import { useState, useEffect } from "react";
import Form from "./components/Form/index.jsx"
import DataDisplay from "./components/dataDisplay/index.jsx";
import{data} from "./data/data.js"
import "./App.css";

function App() {
//  const apiKey = "98e3fb1f";
  const [data, setData] = useState(null);

  // getCat
  const getData = async (searchTerm) => {
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=naruto=${searchTerm}`,
      );

      const data = await res.json();

      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect
  useEffect(() => {
    console.log("running useEffect.....");
    getData("anime");
  }, []);

  return (
    <>
      <h1 style={{color:"blue"}}>Anime Diplay</h1>
      <Form datasearch={getData} />
      
      {data ? <DataDisplay data={data} /> : <h1>No anime to display</h1>}
    </>
  );
}
export default App;
