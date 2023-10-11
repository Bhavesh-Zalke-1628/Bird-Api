// import { Link } from 'react-router-dom';
// import './Layout.css'
// function Layout({ title, url, id }) {
//     return (
//         <div className="LayoutWrapper">
//             <Link to={`/Single/:${id}`}>
//                 <img src={url} alt="" className='BirdImg' />
//             </Link>
//         </div>
//     )
// }
// export default Layout;


import React from "react"
import { useNavigate } from "react-router-dom"

export const ImageCard=({imageUrl,id})=>{
    const navigate=useNavigate()
    
    const redirectToPage = () => {
        navigate(`/${id}`)
    }

    return(
    <div>
            <img src={imageUrl} onClick={redirectToPage} alt="" />
    </div>
    )
}