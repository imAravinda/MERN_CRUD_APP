import useFetch from "../../Hooks/useFetch";
import Spinner from "../../components/Spinner/Spinner";
import ViewUser from "../../components/ViewUser/viewUser";

const AdminViewUser = ({BackRoutes}) => {
    const{data,isPending} = useFetch('api/v1/user')
    return ( 
        <>
            {isPending && <Spinner/>}
            {data && <ViewUser data={data?.data?.findUsers} BackRoutes={BackRoutes}/>}
        </>
     );
}
 
export default AdminViewUser;