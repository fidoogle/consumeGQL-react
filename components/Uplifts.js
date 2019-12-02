import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
{
    uplifts{
        Id
    }
}
`

const Uplift = ({ record }) => (
    <li>
        <Link href="/p/[Id]" as={`/p/${record.Id}`}>
            <a>{record.Id}</a>
        </Link>
        <style jsx>{`
        li {
            list-style: none;
            margin: 5px 0;
        }

        a {
            text-decoration: none;
            color: blue;
            font-family: 'Arial';
        }

        a:hover {
            opacity: 0.6;
        }
        `}</style>
    </li>
)

const Uplifts = () => (
    <Query
        query={FEED_QUERY}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Good things take time....</p>
            if (error) return <p>Something went wrong...</p>

            return <div className="row">{data.uplifts.map(uplift => <Uplift record={uplift} />)}</div>
        }}
    </Query>
)

export default Uplifts;