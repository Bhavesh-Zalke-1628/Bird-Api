
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
