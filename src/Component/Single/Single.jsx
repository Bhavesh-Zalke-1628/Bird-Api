// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"

// function Single() {
//     const [bird, setBird] = useState([])
//     const { id } = useParams()
//     // console.log(name)
//     async function DownLoad() {

//         const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos")
//         const data = response.data.photos;
//         const res = data.map((b) => {
//             return {
//                 id: b.id,
//                 name: b.title,
//                 dec: b.description,
//                 img: b.url
//             }
//         })
//         setBird(res)
//         // console.log(res)-
//     }
//     useEffect(() => {
//         DownLoad()
//     }, []);
//     return (
//         <div>
//             {
//                 <div>
//                     <img src={bird?.img} alt="" />
//                 </div>
//             }
//         </div>
//     )
// }
// export default Single

import React, { useEffect, useState } from "react";
import './Single.css'
import { useParams } from "react-router-dom";

export const Single = () => {
    const [data, setData] = useState();
    const { id } = useParams()
    const getData = async () => {
        const resp = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        const { photo } = await resp.json();
        setData(photo)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div id="photo">
            <img id="Img" src={data?.url} alt="" />
            <div>
                <h1 id="title">{data?.title}</h1>
                <p style={{fontSize:20, fontWeight:600, fontFamily:"sans-serif"}}>
                    {data?.description}
                </p>
            </div>
        </div>
    )
}