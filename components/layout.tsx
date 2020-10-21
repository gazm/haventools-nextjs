import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = props => (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Head>
            <title>Haven Tools</title>
        </Head>
        
        <Header />
        
        <div className="content">
        {props.children}
        </div>
        
        <Footer />
    </div>
);

export default Layout;