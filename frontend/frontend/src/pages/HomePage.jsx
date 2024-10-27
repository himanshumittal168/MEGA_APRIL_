import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// dotenv.config();
//                         BASE +endpt   
//  http://localhost:4000/base/ get
function HomePage()
{


    const [empdata,setdata]=useState([]);
    let url="http://localhost:4000/base/get";
    // let url=`${import.meta.env.BASE}/get`;
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
    // console.log(data);
    // console.log(empdata);
    // console.log(empdata.users);
    useEffect(()=>{getalldata()},[]);
    return(
        <>
            <h3>Employees</h3>
            <p>This is a list of all employees. You can add new employees, edit or delete existing ones.</p>
            <Link to={'/addemployee'}>
                <button>Add Employee</button>
            </Link>
            <table>
                <tr>
                    <th>
                        <span>Employee</span>
                    </th>
                    <th>Title</th>
                    <th>Role</th>
                </tr>
                <tbody>
                    {empdata.users?.map((person)=>(
                        <tr>
                            <td>
                                <img src={person.img}></img>
                                <p>{person.name}</p>
                                <p>{person.email}</p>
                            </td>
                            <td>{person.title}</td>
                            <td>{person.dept}</td>
                            <td>{person.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default HomePage;