import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
// import { WebSocketLink } from 'apollo-link-ws';

const httpLink = new HttpLink({
    uri: 'https://mini-project-za.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'SYzy2CBGgE2sOS4u0E5YxTf3XykeM5bzAyOsEUkFLS341TuzjlJYDDJmDdFmWdcr'
    }
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://mini-project-za.hasura.app/v1/graphql',
    connectionParams: {
        headers: {
            'x-hasura-admin-secret': 'SYzy2CBGgE2sOS4u0E5YxTf3XykeM5bzAyOsEUkFLS341TuzjlJYDDJmDdFmWdcr'
        }
    },
}));

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});

export default client