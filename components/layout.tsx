import Head from 'next/head';

import Nav from './header';
import Footer from './footer';

const Layout = props => (
    <div className="wrapper fluid">
        <Head>
            <title>Haven Tools</title>
        </Head>
        
        <Header />
        
        <div className="content" style={contentStyle}>
        {props.children}
        </div>
        
        <Footer />
    </div>
);
