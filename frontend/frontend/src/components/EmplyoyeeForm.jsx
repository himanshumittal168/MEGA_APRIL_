import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function EmplyoyeeForm()
{
    const [formdata,setformdata]=useState({
        name:"",
        email:"",
        role:"",
        dept:"",
        title:""
    })
    const navigate=useNavigate();
    const handleChange = (e) =>
    {
        const {name,value}=e.target;
        setformdata((ps)=>({
            ...ps,
            [name]:value
        }))
    }
    // createUser->end_point

    
    const handlesubmit=async(e)=>
    {
        e.preventDefault();
        try
        {
            const response=await fetch("http://localhost:4000/base/create",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(formdata),    
            })
            navigate("/");
        }
        catch(error)
        {

        }
    }
    return(
        <>
            <div>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="name">
                    Employee Name
                    </label>
                    <input 
                        type="text" 
                        value={formdata.name} 
                        placeholder="Enter Your Name" 
                        required
                        name="name"
                        onChange={handleChange}
                    ></input>


                    <label htmlFor="email">
                    Employee Email Id

                    </label>
                    <input 
                        type="email" 
                        value={formdata.email} 
                        placeholder="Enter Your Email" 
                        required
                        name="email"
                        onChange={handleChange}
                    ></input>

                   
                    <label htmlFor="title">
                    Employee Title
                    </label>
                    <input 
                        type="text" 
                        value={formdata.title} 
                        placeholder="Enter Your Title" 
                        required
                        name="title"
                        onChange={handleChange}
                    ></input>


                     <label htmlFor="dept">
                     Employee Department
                    </label>
                    <input 
                        type="text" 
                        value={formdata.dept} 
                        placeholder="Enter Your Department" 
                        required
                        name="dept"
                        onChange={handleChange}
                    ></input>


                    <label htmlFor="role">
                     Employee Role
                    </label>
                    <input 
                        type="text" 
                        value={formdata.role} 
                        placeholder="Enter Your Role" 
                        required
                        name="role"
                        onChange={handleChange}
                    ></input>
                    
                    <button type="submit"> Create Employee</button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="ml-2 h-4 w-4"
                    >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                    </svg>
                </form>
            </div>
        </>
    )
}
// name email role title department
export default EmplyoyeeForm;