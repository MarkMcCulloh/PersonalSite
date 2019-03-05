import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

class TestPage extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (

            <Layout>
                <Helmet>
                <title>Test</title>
                <meta name="description" content="Test" />
                </Helmet>
                <div id="main">
                    Test
                </div>
            </Layout>
        )
    }
}

export default TestPage