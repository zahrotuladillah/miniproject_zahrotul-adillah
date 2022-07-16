import { useMutation } from "@apollo/client"
import { DeleteDataPemasukan } from "../graphql/mutation"
import { GetDataPemasukan } from "../graphql/query"

export default function useDeletePemasukan(){
    const [deletePemasukan, {loading: loadingDeletePemasukan}] = useMutation(DeleteDataPemasukan, {refetchQueries: [GetDataPemasukan]})

    return{
        deletePemasukan,
        loadingDeletePemasukan
    }
}