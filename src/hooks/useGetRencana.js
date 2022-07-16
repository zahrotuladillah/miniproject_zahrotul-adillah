import { useQuery } from "@apollo/client"
import { GetDataRencana } from "../graphql/query"
import { SubscribeDataRencana } from "../graphql/subscribe"

export default function useGetRencana(){
    const {data, loading: getload, error, subscribeToMore} = useQuery(GetDataRencana)

    const subsRencana = () => {
        subscribeToMore({
            document: SubscribeDataRencana,
            updateQuery: (prev, {subscriptionData: {data}}) => {
                return data
            }
        })
    }
    // console.log("hh", data)
    return{
        data : data ? data.rencana : [],
        getload,
        error,
        subsRencana
    }
}
