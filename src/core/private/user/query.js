import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useGetAll = ()=>{
    return useQuery(
        {
            queryKey: "GET_ALL_DATA",
            queryFn: ()=>axios.get('http://localhost:5000/api/users1')
        }
    );
}

//usequery done on page open
//useMutuation on event trigger