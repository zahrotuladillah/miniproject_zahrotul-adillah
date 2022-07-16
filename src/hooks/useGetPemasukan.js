import { useQuery } from "@apollo/client"
import { GetDataPemasukan } from "../graphql/query"
import { SubscribeDataPemasukan } from "../graphql/subscribe"

export default function useGetPemasukan(){
    const {data, loading: getload, error, subscribeToMore} = useQuery(GetDataPemasukan)

    const subsPemasukan = () => {
        subscribeToMore({
            document: SubscribeDataPemasukan,
            updateQuery: (prev, {subscriptionData: {data}}) => {
                return data
            }
        })
    }
    // console.log("hh", data)
    return{
        data : data ? data.pemasukan : [],
        getload,
        error,
        subsPemasukan
    }
}
