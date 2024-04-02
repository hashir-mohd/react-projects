import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid}= useParams()
    return(
        <>
            <center><h1>User:{userid}</h1></center>
        </>
    )
}