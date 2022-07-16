import { useMutation } from "@apollo/client"
import { UpdateDataPemasukan } from "../graphql/mutation"
import { GetDataPemasukan } from "../graphql/query"

export default function useUpdatePemasukan(){
    const [updatePemasukan, {loading: loadingAddPemasukan}] = useMutation(UpdateDataPemasukan, {refetchQueries: [GetDataPemasukan]})

    return{
        updatePemasukan,
        loadingAddPemasukan
    }
}