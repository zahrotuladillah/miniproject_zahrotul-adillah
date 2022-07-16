import { useSubscription } from "@apollo/client"
import { SubscribeDataRencana } from "../graphql/subscribe"

export default function useSubscribeRencana(){
    const {data: dataRencana, loading: loadingRencana, error: errorRencana} = useSubscription(SubscribeDataRencana)

    return{
        dataRencana,
        loadingRencana,
        errorRencana
    }
}