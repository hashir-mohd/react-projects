import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data= useLoaderData();
    // const [data,setData] = useState("");
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    return (
        <>
            <center><h1>Github Followers :{data.followers}</h1></center>
            <center><img src={data.avatar_url} alt="user image" width={300} /></center>
        </>
    )
}

export const githubInfoLoader =async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}