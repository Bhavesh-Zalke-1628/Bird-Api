


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