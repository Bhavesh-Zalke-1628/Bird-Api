import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import './Home.css'
function Home() {
    const [photos, setPhotos] = useState([])
    const [isLoadding, setIsLoadding] = useState(true)
    const BIRD_URL = "https://api.slingacademy.com/v1/sample-data/photos"
    async function downloadData() {
        const response = await axios.get(BIRD_URL)
        const data = response.data.photos
        const res = await data.map((bird) => {
            return {
                id: bird.id,
                name: bird.title,
                description: bird.description,
                img: bird.url,
            }
        })
        setIsLoadding(false)
        setPhotos(res)
        // console.log(res)
    }
    useEffect(() => {
        downloadData()
    }, [Layout]);
    return (
        <>
 
            <div className="HomeWrapper">
                {(isLoadding) ? <h1>"Loadding..." </h1>:
                    photos.map((p) =>  {
                        return (
                            <Layout
                                title={p.name}
                                url={p.img}
                                key={p.id}
                                id={p.id}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;