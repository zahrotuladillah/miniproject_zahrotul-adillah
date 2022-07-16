import { useMutation } from "@apollo/client"
import { AddDataPemasukan } from "../graphql/mutation"
import { GetDataPemasukan } from "../graphql/query"

export default function useAddPemasukan(){
    const [addPemasukan, {loading: loadingAddPemasukan}] = useMutation(AddDataPemasukan, {refetchQueries: [GetDataPemasukan]})

    return{
        addPemasukan,
        loadingAddPemasukan
    }
}
