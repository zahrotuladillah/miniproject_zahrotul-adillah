import { useQuery } from "@apollo/client"
import { GetDataPengeluaran } from "../graphql/query"
import { SubscribeDataPengeluaran } from "../graphql/subscribe"

export default function useGetPengeluaran(){
    const {data, loading: getload, error, subscribeToMore} = useQuery(GetDataPengeluaran)

    const subsPengeluaran = () => {
        subscribeToMore({
            document: SubscribeDataPengeluaran,
            updateQuery: (prev, {subscriptionData: {data}}) => {
                return data
            }
        })
    }
    // console.log("hh", data)
    return{
        data : data ? data.pengeluaran : [],
        getload,
        error,
        subsPengeluaran
    }
}
