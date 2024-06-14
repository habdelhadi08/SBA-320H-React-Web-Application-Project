/* eslint-disable react/prop-types */
// import{data} from "../../data/data.js"
function DataDisplay({ data }) {
  const anime = data.data[0];
//   const imageUrl = data.data[0].images;

  console.log(anime.images.jpg.image_url);
  return (
    <div>
      <h1 style={{color:"red"}} >Welcome to our anime data search  </h1>
      <div className="container">
        {/* {data.data.map((anime=>{ */}
        <div>
          <p>Title: {anime.title}</p>
          <p>Source:{anime.source} </p>
          <p>Status:{anime.status} </p>
          <p>LocalName: {anime.title_japanese} </p>
          <p>Website:{anime.url} </p>
    
        
        </div>
      </div>
    </div>
  );
}

export default DataDisplay;
