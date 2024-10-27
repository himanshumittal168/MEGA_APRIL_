import EmplyoyeeForm from "../components/EmplyoyeeForm";
import { Link } from "react-router-dom";
function FormPage()
{
    return(
        <>
        <h1>Create Employee</h1>
        <Link to={"/"}>
            <p> Back to Employe List</p>
        </Link>
            <EmplyoyeeForm></EmplyoyeeForm>
        </>
    )
}

export default FormPage;