import { useMutation } from "@apollo/client"
import { AddDataPengeluaran } from "../graphql/mutation"
import { GetDataPengeluaran } from "../graphql/query"

export default function useAddPengeluaran(){
    const [addPengeluaran, {loading: loadingAddPengeluaran}] = useMutation(AddDataPengeluaran, {refetchQueries: [GetDataPengeluaran]})

    return{
        addPengeluaran,
        loadingAddPengeluaran
    }
}
