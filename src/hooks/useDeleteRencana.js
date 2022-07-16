import { useMutation } from "@apollo/client"
import { DeleteDataRencana } from "../graphql/mutation"
import { GetDataRencana } from "../graphql/query"

export default function useDeleteRencana(){
    const [deleteRencana, {loading: loadingDeleteRencana}] = useMutation(DeleteDataRencana, {refetchQueries: [GetDataRencana]})

    return{
        deleteRencana,
        loadingDeleteRencana
    }
}