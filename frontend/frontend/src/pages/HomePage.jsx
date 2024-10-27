import { useEffect, useState } from "react";

//                         BASE +endpt   
//  http://localhost:4000/base/ get
function HomePage()
{

    const [data,setdata]=useState([]);
    let url=`${process.env.base_url}/get`;
    const getalldata=async()=>
    {
        // fetch->.json->set
        console.log("ENTERED");
        try
        {
            const getdata=await fetch(url,
            {
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            console.log(getdata);
            const resp=await getdata.json();
            setdata(resp);  //async
        }
        catch(error)
        {
            console.log(error);
        }
    }
    console.log(data);
    useEffect(()=>{getalldata()},[]);
    return(
        <>
            <h1>HOME PAGE</h1>
        </>
    )
}

export default HomePage;