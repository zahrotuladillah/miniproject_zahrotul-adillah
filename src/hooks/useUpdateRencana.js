import { useMutation } from "@apollo/client"
import { UpdateDataRencana } from "../graphql/mutation"
import { GetDataRencana } from "../graphql/query"

export default function useUpdateRencana(){
    const [updateRecana, {loading: loadingUpdateRencana}] = useMutation(UpdateDataRencana, {refetchQueries: [GetDataRencana]})

    return{
        updateRecana,
        loadingUpdateRencana
    }
}