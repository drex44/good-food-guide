import { withRouter } from 'next/router';
import Layout from "../components/Layout";

const Page = withRouter((props) => (
    <Layout>
        <h1>{props.router.query.title}</h1>
        <p>Coriander Tea, Bland Diet, Gargle With Salt Water, Eat Raw Garlic &
            Onion, "Honey, Lemon and Ginger Juice", Tulsi ( Basil) Leaves.
            Take lot of rest and drink more water.</p>
    </Layout>
))

export default Page