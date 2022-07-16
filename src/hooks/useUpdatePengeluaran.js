import { useMutation } from "@apollo/client"
import { UpdateDataPengeluaran } from "../graphql/mutation"
import { GetDataPengeluaran } from "../graphql/query"

export default function useUpdatePengeluaran(){
    const [updatePengeluaran, {loading: loadingUpdatePengeluaran}] = useMutation(UpdateDataPengeluaran, {refetchQueries: [GetDataPengeluaran]})

    return{
        updatePengeluaran,
        loadingUpdatePengeluaran
    }
}