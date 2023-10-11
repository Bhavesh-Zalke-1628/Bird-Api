
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