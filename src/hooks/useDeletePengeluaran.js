import { useMutation } from "@apollo/client"
import { DeleteDataPengeluaran } from "../graphql/mutation"
import { GetDataPengeluaran } from "../graphql/query"

export default function useDeletePengeluaran(){
    const [deletePengeluaran, {loading: loadingDeletePengeluaran}] = useMutation(DeleteDataPengeluaran, {refetchQueries: [GetDataPengeluaran]})

    return{
        deletePengeluaran,
        loadingDeletePengeluaran
    }
}