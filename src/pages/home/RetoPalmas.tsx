import Layout from '../../layouts/Layout';
import Clothes from './components/Clothes';
import Main from './components/Main';
import Products from './components/Products';
import Services from './components/Services';
import Videos from './components/Videos';

const RetoPalmas = () => {
    return (
        <Layout>
            <Main />
            <Clothes />
            <Products />
            <Services />
            <Videos />
        </Layout>
    )
}

export default RetoPalmas; 