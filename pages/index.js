import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Uplifts from '../components/Uplifts.js'
import fetch from 'node-fetch';

const client = new ApolloClient({
    uri: 'https://mynewfidelfuncapp.azurewebsites.net/testGQLSalesforce?code=mJ5JJRpp1kNqXH1oH7LuN8cx6wKCP9TUCpL8LGX0Zj7bRAAvaJ9dnA==',
    fetch: fetch,
    fetchOptions: {
        mode: 'no-cors',
    }
});

export default function Salesforce() {
    return (
        <ApolloProvider client={client}>
        <Layout>
            <h1>Salesforce Uplift Records</h1>
            <Uplifts></Uplifts>
            <style jsx global>{`
            h1,
            a {
            font-family: 'Arial';
            }

            ul {
            padding: 0;
            }

            li {
            list-style: none;
            margin: 5px 0;
            }

            a {
            text-decoration: none;
            color: blue;
            }

            a:hover {
            opacity: 0.6;
            }
            `}</style>
        </Layout>
        </ApolloProvider>
    )
}
