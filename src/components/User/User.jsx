
import { useParams } from "react-router-dom"

 function User(){

const {userid} = useParams()

    return(
        <div className="bg-gray-500 text-white font-bold py-2 text-3xl ">User: {userid}</div>
    )
}

export default User

