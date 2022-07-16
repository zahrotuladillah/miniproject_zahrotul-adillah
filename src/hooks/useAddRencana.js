import { useMutation } from "@apollo/client"
import { AddDataRencana } from "../graphql/mutation"
import { GetDataRencana } from "../graphql/query"

export default function useAddRencana(){
    const [addRencana, {loading: loadingAddRencana}] = useMutation(AddDataRencana, {refetchQueries: [GetDataRencana]})

    return{
        addRencana,
        loadingAddRencana
    }
}
