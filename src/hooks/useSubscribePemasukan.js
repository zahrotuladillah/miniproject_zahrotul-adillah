import { useSubscription } from "@apollo/client"
import { SubscribeDataPemasukan } from "../graphql/subscribe"

export default function useSubscribePemasukan(){
    const {data: dataPemasukan, loading: loadingPemasukan, error: errorPemasukan} = useSubscription(SubscribeDataPemasukan)

    return{
        dataPemasukan,
        loadingPemasukan,
        errorPemasukan
    }
}