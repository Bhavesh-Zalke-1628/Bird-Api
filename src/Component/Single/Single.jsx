import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Single() {
    const [bird, setBird] = useState([])
    const { name} = useParams()
    console.log(name)
    async function DownLoad() {

        const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos")
        const data = response.data.photos;
        const res = data.map((b) => {
            return {
                id: b.id,
                name: b.title,
                dec: b.description,
            }
        })
        setBird(res)
        // console.log(res)-
    }
    useEffect(() => {
        DownLoad()
    }, []);
    return (
        <div>
            {
                // bird.map((b) => {
                //     // console.log(b.dec)
                //     <div className="name">{b.name}</div>
                // })
            }
        </div>
    )
}
export default Single