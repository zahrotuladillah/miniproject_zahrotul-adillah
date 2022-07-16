import { useSubscription } from "@apollo/client"
import { SubscribeDataPengeluaran } from "../graphql/subscribe"

export default function useSubscribePengeluaran(){
    const {data: dataPengeluaran, loading: loadingPengeluaran, error: errorPengeluaran} = useSubscription(SubscribeDataPengeluaran)

    return{
        dataPengeluaran,
        loadingPengeluaran,
        errorPengeluaran
    }
}