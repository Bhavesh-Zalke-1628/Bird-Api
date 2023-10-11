// import { useEffect, useState } from "react";
// import axios from "axios";
// import Layout from "./Layout";
// import './Home.css'
// function Home() {
//     const [photos, setPhotos] = useState([])
//     const [isLoadding, setIsLoadding] = useState(true)
//     const BIRD_URL = "https://api.slingacademy.com/v1/sample-data/photos"
//     async function downloadData() {
//         const response = await axios.get(BIRD_URL)
//         const data = response.data.photos
//         const res = await data.map((bird) => {
//             return {
//                 id: bird.id,
//                 name: bird.title,
//                 description: bird.description,
//                 img: bird.url,
//             }
//         })
//         setIsLoadding(false)
//         setPhotos(res)
//         // console.log(res)
//     }
//     useEffect(() => {
//         downloadData()
//     }, [Layout]);
//     return (
//         <>
 
//             <div className="HomeWrapper">
//                 {(isLoadding) ? <h1>"Loadding..." </h1>:
//                     photos.map((p,i) =>  {
//                         return (
//                             <Layout
//                                 title={p.name}
//                                 url={p.img}
//                                 key={i}
//                                 id={p.id}
//                             />
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

// export default Home;

import { useEffect, useState } from "react";
import { ImageCard } from '../Home/Layout'
import './Home.css'

export const Home=()=>{
  const[data,setData]=useState([]);
  const getData=async()=>{
    const resp=await fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
    const {photos}=await resp.json();
    setData(photos)
    console.log(photos)
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div id="parent">
          {
            data?.map((e,i)=>{
              return <ImageCard id={e.id} imageUrl={e.url} key={i}/>
            })
          }
    </div>
  );
}
